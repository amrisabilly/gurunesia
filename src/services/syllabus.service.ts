import { GuruRepository } from "@/repositories/guru.repository";
import { SyllabusRepository } from "@/repositories/syllabus.repository";

export const SyllabusService = {
  async getAll(userId: string) {
    const guru = await GuruRepository.findByUserId(userId);
    if (!guru) throw new Error("Guru not found");

    return SyllabusRepository.findByGuruId(guru.id);
  },

  async create(userId: string, payload: {
    title: string;
    description?: string;
    order: number;
  }) {
    const guru = await GuruRepository.findByUserId(userId);
    if (!guru) throw new Error("Guru not found");

    return SyllabusRepository.create({
      guruId: guru.id,
      ...payload,
    });
  },

  async update(id: string, payload: {
    title?: string;
    description?: string;
    order?: number;
  }) {
    return SyllabusRepository.update(id, payload);
  },

  async delete(id: string) {
    return SyllabusRepository.delete(id);
  },
};