import bcrypt from "bcrypt";
import { AuthRepository } from "@/repositories/auth.repository";
import { signToken } from "@/lib/jwt";

type Role = "ADMIN" | "GURU" | "SISWA";

type RegisterPayload = {
  email: string;
  password: string;
  role: Role;
};

type LoginPayload = {
  email: string;
  password: string;
};

type AuthResponse = {
  user: {
    id: string;
    email: string;
    role: Role;
  };
  token: string;
};

export const AuthService = {
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const { email, password, role } = payload;

    if (!email || !password) {
      throw new Error("Email & password required");
    }

    const existing = await AuthRepository.findByEmail(email);
    if (existing) throw new Error("Email already used");

    const hashed = await bcrypt.hash(password, 10);

    const user = await AuthRepository.createUser({
      email,
      password: hashed,
      role,
    });

    const token = signToken({
      id: user.id,
      role: user.role,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      token,
    };
  },

  async login(payload: LoginPayload): Promise<AuthResponse> {
    const { email, password } = payload;

    if (!email || !password) {
      throw new Error("Email & password required");
    }

    const user = await AuthRepository.findByEmail(email);
    if (!user) throw new Error("User not found");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid credentials");

    const token = signToken({
      id: user.id,
      role: user.role,
    });

    return {
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      token,
    };
  },
};