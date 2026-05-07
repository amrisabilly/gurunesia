import { NextResponse } from "next/server";
import { AuthService } from "@/services/auth.service";

export async function POST(req: Request) {
  try {
    const body: {
      email: string;
      password: string;
      role: "ADMIN" | "GURU" | "SISWA";
    } = await req.json();

    const result = await AuthService.register(body);

    return NextResponse.json({ success: true, data: result });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Error";
    return NextResponse.json({ success: false, message }, { status: 400 });
  }
}