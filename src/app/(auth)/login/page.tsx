import Image from "next/image";
import Link from "next/link";

import heroImage from "@/app/public/auth/bg-login-register.webp";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="grid min-h-screen lg:grid-cols-3">
        <section className="relative min-h-[320px] overflow-hidden bg-[#0b4b8c] px-6 py-10 text-white lg:col-span-1 lg:min-h-screen lg:px-10">
          <Image
            src={heroImage}
            alt="Teacher mentoring students"
            fill
            priority
            className="object-cover object-center opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b4b8c]/15 via-[#0b4b8c]/45 to-[#072e4f]/80" />

          <div className="relative z-10 flex h-full flex-col">
            <div className="flex items-center gap-3 text-lg font-semibold">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                >
                  <path d="M4 6.5C4 5.12 5.12 4 6.5 4h10.02C18.99 4 20 5.01 20 6.48V18c0 .83-.67 1.5-1.5 1.5H6.5C5.12 19.5 4 18.38 4 17V6.5zm2.5-.5a.5.5 0 0 0-.5.5V17c0 .55.45 1 1 1h11V6.48a.5.5 0 0 0-.5-.48H6.5z" />
                  <path d="M8 8h8v1.5H8V8zm0 3.5h8V13H8v-1.5zm0 3.5h6V16H8v-1z" />
                </svg>
              </span>
              <span>Gurunesia</span>
            </div>

            <div className="mt-auto max-w-md animate-fade-up">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Empower the Next Generation.
              </h1>
              <p className="mt-4 text-sm text-white/80">
                Join our network of elite educators. Access professional resources,
                manage your schedule, and make a real impact across Indonesia.
              </p>

              <div className="mt-8 flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
                <div className="flex -space-x-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/80 text-xs font-semibold text-slate-800">
                    BT
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/70 text-xs font-semibold text-slate-800">
                    SA
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/60 text-xs font-semibold text-slate-800">
                    RN
                  </span>
                </div>
                <div className="text-xs">
                  <p className="font-semibold">Trusted by 10,000+ Teachers</p>
                  <p className="text-white/70">
                    Verified educators across Indonesia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col justify-center px-20 py-10 lg:col-span-2 lg:px-12 animate-fade-in">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
              <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-white">
                Teacher
              </span>
              Welcome back
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Login to your account
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Continue managing your classes, schedule, and student progress.
            </p>

            <div className="mt-6 grid grid-cols-2 rounded-xl border border-slate-200 bg-slate-100 p-1 text-sm font-semibold text-slate-500">
              <Link
                href="/register"
                className="rounded-lg px-4 py-2 text-center transition hover:text-slate-700"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="rounded-lg bg-white px-4 py-2 text-center text-slate-900 shadow-sm"
                aria-current="page"
              >
                Login
              </Link>
            </div>

            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 48 48"
                className="h-5 w-5"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.5 0 6.7 1.2 9.2 3.6l6.9-6.9C35.7 2.3 30.2 0 24 0 14.6 0 6.4 5.4 2.5 13.3l7.9 6.1C12.1 13.5 17.6 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.5 24.5c0-1.6-.2-2.9-.5-4.2H24v7.7h12.7c-.5 3-2.3 5.6-5 7.3l7.8 6.1c4.6-4.2 7-10.3 7-16.9z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.4 28.1c-.6-1.5-.9-3.1-.9-4.6 0-1.6.3-3.2.9-4.6l-7.9-6.2C.9 15.3 0 19.5 0 24s.9 8.7 2.5 12.3l7.9-6.2z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.2 0 11.4-2.1 15.2-5.7l-7.8-6.1c-2.2 1.5-4.9 2.3-7.4 2.3-6.4 0-11.8-4.1-13.7-9.7l-7.9 6.2C6.4 42.6 14.6 48 24 48z"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="my-6 flex items-center gap-4 text-[11px] font-semibold uppercase text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              Or continue with email
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <form className="space-y-6">
              <label className="space-y-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="budi.santoso@example.com"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
                />
              </label>

              <label className="space-y-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="remember"
                    className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-300"
                  />
                  Remember me
                </label>
                <Link href="#" className="font-semibold text-slate-700">
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Login
              </button>
            </form>

          <p className="mt-4 text-center text-xs text-slate-500">
            New to Gurunesia?{" "}
            <Link
              href="/register"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              Create an account
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
