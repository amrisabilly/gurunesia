// src/repositories/booking.repository.ts

import { BookingStatus } from "@/generated/prisma/enums";
import { BookingCreateInput } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";

export const BookingRepository = {
  findById: (id: string) => {
    return prisma.booking.findUnique({
      where: { id },
      include: { guru: true, siswa: true },
    });
  },

  create: (data: BookingCreateInput) => {
    return prisma.booking.create({
      data,
    });
  },

  updateStatus: (id: string, status: BookingStatus) => {
    return prisma.booking.update({
      where: { id },
      data: { status },
    });
  },
};