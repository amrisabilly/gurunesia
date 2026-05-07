// src/middlewares/role.middleware.ts
import { User } from "@/generated/prisma/client";

export function roleMiddleware(user: User, roles: string[]) {
  if (!roles.includes(user.role)) {
    throw new Error("Forbidden");
  }
}