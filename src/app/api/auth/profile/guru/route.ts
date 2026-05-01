import { NextResponse } from "next/server";
import { getAuthUser } from "@/middlewares/auth.middleware";
import { GuruService } from "@/services/guru.service";
import { GuruUpdateInput } from "@/generated/prisma/models";

export async function GET(req: Request) {
  try {
    const user = getAuthUser(req);

    if (user.role !== "GURU") {
      throw new Error("Forbidden");
    }

    const data = await GuruService.getProfile(user.id);

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}

export async function PATCH(req: Request) {
  try {
    const user = getAuthUser(req);

    if (user.role !== "GURU") {
      throw new Error("Forbidden");
    }

    const body: GuruUpdateInput = await req.json();

    const updated = await GuruService.updateProfile(user.id, body);

    return NextResponse.json({ success: true, data: updated });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}