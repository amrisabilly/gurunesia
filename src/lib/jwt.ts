import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

type TokenPayload = {
  id: string;
  role: "ADMIN" | "GURU" | "SISWA";
};

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d",
  });
}

export function verifyToken(token: string): TokenPayload {
  return jwt.verify(token, JWT_SECRET) as TokenPayload;
}