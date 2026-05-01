import { prisma } from "@/lib/prisma";

type CreateGuruPayload = {
  userId: string;
  name: string;
  price: number;
  bio?: string;
};

type CreateSiswaPayload = {
  userId: string;
  name: string;
  location: string;
  lat: number;
  lng: number;
};

export const ProfileService = {
  async createGuru(payload: CreateGuruPayload) {
    return prisma.guru.create({
      data: {
        userId: payload.userId,
        name: payload.name,
        price: payload.price,
        bio: payload.bio,
      },
    });
  },

  async createSiswa(payload: CreateSiswaPayload) {
    return prisma.siswa.create({
      data: {
        userId: payload.userId,
        name: payload.name,
        location: payload.location,
        lat: payload.lat,
        lng: payload.lng,
      },
    });
  },
};