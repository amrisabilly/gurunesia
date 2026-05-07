// src/repositories/chat.repo.ts

import { ChatCreateInput } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";

export const ChatRepository = {
  create: (data: ChatCreateInput) => {
    return prisma.chat.create({ data });
  },

  findByBooking: (bookingId: string) => {
    return prisma.chat.findMany({
      where: { bookingId },
      orderBy: { createdAt: "asc" },
    });
  },
};