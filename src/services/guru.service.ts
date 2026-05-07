import { GuruRepository } from "@/repositories/guru.repository";
import { AvailabilityType } from "@/generated/prisma/enums";
import { GuruUpdateInput } from "@/generated/prisma/models";

export const GuruService = {
  async getProfile(userId: string) {
    const guru = await GuruRepository.findByUserId(userId);

    if (!guru) {
      throw new Error("Guru profile not found");
    }

    return guru;
  },

  async updateProfile(userId: string, payload: GuruUpdateInput) {
    const guru = await GuruRepository.findByUserId(userId);

    if (!guru) {
      throw new Error("Guru profile not found");
    }

    return GuruRepository.updateProfile(userId, payload);
  },

  async setAvailabilityType(
    userId: string,
    type: AvailabilityType
  ) {
    const guru = await GuruRepository.findByUserId(userId);

    if (!guru) {
      throw new Error("Guru profile not found");
    }

    return GuruRepository.setAvailabilityType(userId, type);
  },
};