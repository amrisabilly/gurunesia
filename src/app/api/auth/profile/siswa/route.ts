import { NextResponse } from "next/server";
import { ProfileService } from "@/services/profile.service";
import { getAuthUser } from "@/middlewares/auth.middleware";

export async function POST(req: Request) {
  try {
    const user = getAuthUser(req);

    if (user.role !== "SISWA") {
      throw new Error("Forbidden");
    }

    const body: {
      name: string;
      location: string;
      lat: number;
      lng: number;
    } = await req.json();

    const siswa = await ProfileService.createSiswa({ userId: user.id, ...body});

    return NextResponse.json({ success: true, data: siswa });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}