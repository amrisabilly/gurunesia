// src/services/chat.service.ts

import { ChatCreateInput } from "@/generated/prisma/models";
import { ChatRepository } from "@/repositories/chat.repository";

export const ChatService = {
  async sendMessage(data: ChatCreateInput) {
    if (!data.message) throw new Error("Message empty");

    return ChatRepository.create(data);
  },

  async getMessages(bookingId: string) {
    return ChatRepository.findByBooking(bookingId);
  },
};