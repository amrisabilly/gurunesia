import { NextResponse } from "next/server";
import { getAuthUser } from "@/middlewares/auth.middleware";
import { GuruService } from "@/services/guru.service";
import { AvailabilityType } from "@/generated/prisma/enums";

export async function PATCH(req: Request) {
  try {
    const user = getAuthUser(req);

    if (user.role !== "GURU") {
      throw new Error("Forbidden");
    }

    const body: { type: AvailabilityType } = await req.json();

    const updated = await GuruService.setAvailabilityType(
      user.id,
      body.type
    );

    return NextResponse.json({ success: true, data: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}