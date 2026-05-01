// src/repositories/schedule.repo.ts

import { ScheduleCreateManyInput } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";

export const ScheduleRepository = {
  deleteByGuru: (guruId: string) => {
    return prisma.schedule.deleteMany({
      where: { guruId },
    });
  },

  createMany: (data: ScheduleCreateManyInput[]) => {
    return prisma.schedule.createMany({ data });
  },

  findByGuru: (guruId: string) => {
    return prisma.schedule.findMany({
      where: { guruId },
    });
  },
};