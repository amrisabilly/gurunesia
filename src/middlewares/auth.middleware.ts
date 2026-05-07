import { verifyToken } from "@/lib/jwt";

export type AuthUser = {
  id: string;
  role: "ADMIN" | "GURU" | "SISWA";
};

export function getAuthUser(req: Request): AuthUser {
  const authHeader = req.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized");
  }

  const token = authHeader.split(" ")[1];

  return verifyToken(token);
}