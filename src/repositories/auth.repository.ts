// src/repositories/auth.repository.ts

import { UserCreateInput } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";

export const AuthRepository = {
  findByEmail: (email: string) => {
    return prisma.user.findUnique({
      where: { email },
      include: {
        guru: true,
        siswa: true,
      },
    });
  },

  createUser: (data: UserCreateInput) => {
    return prisma.user.create({
      data,
    });
  },
};