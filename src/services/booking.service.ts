// src/services/booking.service.ts

import { User } from "@/generated/prisma/client";
import { BookingUncheckedCreateInput } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";
import { BookingRepository } from "@/repositories/booking.repository";

export const BookingService = {
  async create(data: BookingUncheckedCreateInput) {
    return prisma.$transaction(async (tx) => {
      const { guruId, siswaId, date, duration } = data;

      const bookingDate = new Date(date);

      if (bookingDate < new Date()) {
        throw new Error("Cannot book past time");
      }

      const guru = await tx.guru.findUnique({
        where: { id: guruId },
        include: { schedules: true, user: true },
      });

      if (!guru) throw new Error("Guru not found");

      if (!guru.user.verifiedAt) {
        throw new Error("Guru not verified");
      }

      // availability check
      if (guru.availabilityType === "SCHEDULED") {
        const day = bookingDate.getDay();
        const minutes =
          bookingDate.getHours() * 60 + bookingDate.getMinutes();

        const valid = guru.schedules.some((s) => {
          const [sh, sm] = s.startTime.split(":").map(Number);
          const [eh, em] = s.endTime.split(":").map(Number);

          const start = sh * 60 + sm;
          const end = eh * 60 + em;

          return (
            s.day === day &&
            minutes >= start &&
            minutes + duration <= end
          );
        });

        if (!valid) throw new Error("Not available");
      }

      // conflict check
      const end = new Date(
        bookingDate.getTime() + duration * 60000
      );

      const conflict = await tx.booking.findFirst({
        where: {
          guruId,
          status: { in: ["PENDING", "APPROVED"] },
          AND: [
            { date: { lt: end } },
            { date: { gte: bookingDate } },
          ],
        },
      });

      if (conflict) throw new Error("Time already booked");

      return tx.booking.create({
        data: {
          guru: { connect: { id: guruId } },
          siswa: { connect: { id: siswaId } },
          date: bookingDate,
          duration,
          price: guru.price,
          status: "PENDING",
        },
      });
    });
  },

  async approve(bookingId: string, user: User) {
    const booking = await BookingRepository.findById(bookingId);

    if (!booking) throw new Error("Booking not found");

    if (booking.guru.userId !== user.id) {
      throw new Error("Forbidden");
    }

    if (booking.status !== "PENDING") {
      throw new Error("Invalid state");
    }

    return BookingRepository.updateStatus(bookingId, "APPROVED");
  },

  async reject(bookingId: string, user: User) {
    const booking = await BookingRepository.findById(bookingId);

    if (!booking) throw new Error("Booking not found");

    if (booking.guru.userId !== user.id) {
      throw new Error("Forbidden");
    }

    if (booking.status !== "PENDING") {
      throw new Error("Invalid state");
    }

    return BookingRepository.updateStatus(bookingId, "REJECTED");
  },

  async cancel(bookingId: string, user: User) {
    const booking = await BookingRepository.findById(bookingId);

    if (!booking) throw new Error("Booking not found");

    const isGuru = booking.guru.userId === user.id;
    const isSiswa = booking.siswa.userId === user.id;

    if (!isGuru && !isSiswa) {
      throw new Error("Forbidden");
    }

    if (!["PENDING", "APPROVED"].includes(booking.status)) {
      throw new Error("Cannot cancel");
    }

    return BookingRepository.updateStatus(bookingId, "CANCELLED");
  },

  async complete(bookingId: string, user: User) {
    const booking = await BookingRepository.findById(bookingId);

    if (!booking) throw new Error("Booking not found");

    if (booking.guru.userId !== user.id) {
      throw new Error("Forbidden");
    }

    if (booking.status !== "APPROVED") {
      throw new Error("Invalid state");
    }

    return BookingRepository.updateStatus(bookingId, "COMPLETED");
  },
};