// src/services/availability.service.ts

import { ScheduleRepository } from "@/repositories/schedule.repository";
import { GuruRepository } from "@/repositories/guru.repository";
import { ScheduleCreateManyInput } from "@/generated/prisma/models";

export const AvailabilityService = {
  async setAlways(userId: string, guruId: string) {
    await ScheduleRepository.deleteByGuru(guruId);

    return GuruRepository.setAvailabilityType(userId, "ALWAYS_AVAILABLE");
  },

  async setSchedule(userId: string, guruId: string, schedules: ScheduleCreateManyInput[]) {
    schedules.forEach((s, i) => {
      schedules.forEach((t, j) => {
        if (i !== j && s.day === t.day) {
          if (
            s.startTime < t.endTime &&
            s.endTime > t.startTime
          ) {
            throw new Error("Schedule overlap");
          }
        }
      });
    });

    await ScheduleRepository.deleteByGuru(guruId);

    await ScheduleRepository.createMany(
      schedules.map((s) => ({
        ...s,
      }))
    );

    return GuruRepository.setAvailabilityType(userId, "SCHEDULED");
  },
};