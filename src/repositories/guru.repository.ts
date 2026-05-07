// src/repositories/guru.repo.ts

import { AvailabilityType } from "@/generated/prisma/enums";
import { prisma } from "../lib/prisma";
import { GuruUpdateInput } from "@/generated/prisma/models";

export const GuruRepository = {
  findByUserId: (userId: string) => {
    return prisma.guru.findUnique({
      where: { userId },
      include: { schedules: true, syllabus: true },
    });
  },

  updateProfile: (userId: string, data: GuruUpdateInput) => {
    return prisma.guru.update({
      where: { userId },
      data,
    });
  },

  setAvailabilityType: (userId: string, type: AvailabilityType) => {
    return prisma.guru.update({
      where: { userId },
      data: { availabilityType: type },
    });
  },
};