import Image from "next/image";
import Link from "next/link";

import heroImage from "@/app/public/auth/bg-login-register.webp";

export default function RegisterPage() {
  return (
    <main className="h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="grid h-screen lg:grid-cols-3 overflow-hidden">
        <section className="relative overflow-hidden bg-[#0b4b8c] px-6 py-10 text-white lg:col-span-1 lg:h-full lg:px-10">
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

        <section className="relative flex flex-col justify-center px-20 py-10 lg:col-span-2 lg:px-44 animate-fade-in overflow-y-hidden h-full">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-500">
            <span className="rounded-full bg-slate-900 px-2 py-1 text-[10px] text-white">
              Teacher
            </span>
            Application Portal
          </div>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Become a Teacher
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Create your professional profile to start accepting students and
            managing your classes.
          </p>

            <div className="mt-6 grid grid-cols-2 rounded-xl border border-slate-200 bg-slate-100 p-1 text-sm font-semibold text-slate-500">
              <Link
                href="/register"
                className="rounded-lg bg-white px-4 py-2 text-center text-slate-900 shadow-sm"
                aria-current="page"
              >
                Register
              </Link>
              <Link
                href="/login"
                className="rounded-lg px-4 py-2 text-center transition hover:text-slate-700"
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
              Sign up with Google
            </button>

            <div className="my-6 flex items-center gap-4 text-[11px] font-semibold uppercase text-slate-400">
              <span className="h-px flex-1 bg-slate-200" />
              Or register with email
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Budi"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
                  />
                </label>
                <label className="space-y-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Last Name
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Santoso"
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
                  />
                </label>
              </div>

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
                  placeholder="Create a strong password"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-200"
                />
              </label>
              <div className="border-t border-slate-200 pt-6">
                <h3 className="text-base font-semibold text-slate-900">
                  Verification Documents
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Upload clear copies of your documents to verify your educator
                  status.
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-center text-xs text-slate-500 transition hover:border-slate-300 hover:bg-white">
                    <input type="file" name="idCard" className="hidden" />
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 text-white">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v12A2.5 2.5 0 0 1 18 20.5H6A2.5 2.5 0 0 1 3.5 18V6zm2.5-.5a.5.5 0 0 0-.5.5v12c0 .28.22.5.5.5h12a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5H6z" />
                        <path d="M8 9h3v3H8V9zm5 0h3v1.5h-3V9zm0 2.5h3V13h-3v-1.5zM8 14.5h8V16H8v-1.5z" />
                      </svg>
                    </span>
                    <span className="mt-3 text-sm font-semibold text-slate-700">
                      ID Card (KTP)
                    </span>
                    <span className="mt-1">
                      JPG, PNG or PDF (max 5MB)
                    </span>
                  </label>

                  <label className="group flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 py-5 text-center text-xs text-slate-500 transition hover:border-slate-300 hover:bg-white">
                    <input type="file" name="diploma" className="hidden" />
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/90 text-white">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M12 3 1.5 8.5 12 14l10.5-5.5L12 3zm0 2.2 6.9 3.6L12 12.4 5.1 8.8 12 5.2z" />
                        <path d="M4 12.5v4.7l8 4.3 8-4.3v-4.7l-8 4.3-8-4.3z" />
                      </svg>
                    </span>
                    <span className="mt-3 text-sm font-semibold text-slate-700">
                      Diploma (Ijazah)
                    </span>
                    <span className="mt-1">
                      JPG, PNG or PDF (max 5MB)
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-300/40 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Submit Application
              </button>
            </form>

          <p className="mt-4 text-center text-xs text-slate-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-slate-900 hover:text-slate-700"
            >
              Login
            </Link>
          </p>
        </section>
      </div>
    </main>
  );
}
