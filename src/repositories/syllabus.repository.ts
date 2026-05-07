import { prisma } from "@/lib/prisma";

export const SyllabusRepository = {
  findByGuruId: (guruId: string) => {
    return prisma.syllabus.findMany({
      where: { guruId },
      orderBy: { order: "asc" },
    });
  },

  create: (data: {
    guruId: string;
    title: string;
    description?: string;
    order: number;
  }) => {
    return prisma.syllabus.create({ data });
  },

  update: (id: string, data: {
    title?: string;
    description?: string;
    order?: number;
  }) => {
    return prisma.syllabus.update({
      where: { id },
      data,
    });
  },

  delete: (id: string) => {
    return prisma.syllabus.delete({
      where: { id },
    });
  },
};