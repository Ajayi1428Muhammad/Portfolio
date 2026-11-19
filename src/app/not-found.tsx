"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoArrowBack, IoHomeOutline } from "react-icons/io5";

 const NotFound = () => {
  const router = useRouter();

  return (
    <main className="relative flex min-h-[calc(100vh-84px)] items-center justify-center overflow-hidden px-4 py-12 sm:px-6">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-[12%] top-[20%] size-1.5 rounded-full bg-cyan-300/70 shadow-[0_0_18px_rgba(103,232,249,0.8)]" />
        <div className="absolute right-[16%] top-[28%] size-1 rounded-full bg-violet-300/70 shadow-[0_0_18px_rgba(196,181,253,0.7)]" />
        <div className="absolute bottom-[18%] left-[22%] size-1 rounded-full bg-white/60" />
      </div>

      <section
        className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 border-t-white/25 bg-linear-to-b from-white/6 via-white/2 to-transparent p-5 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8"
        aria-labelledby="not-found-title"
      >
        <div className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-cyan-300/50 to-transparent" />

        <div className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-neutral-400 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-amber-400" />
            </span>
            Route not found
          </div>
          <span className="font-mono text-xs tracking-[0.24em] text-white/25">
            ERR_404
          </span>
        </div>

        <div className="grid items-center gap-8 py-10 sm:grid-cols-[minmax(0,1fr)_180px] sm:py-12">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.28em] text-cyan-300/70">
              Lost in orbit
            </p>
            <h1
              id="not-found-title"
              className="font-playfair text-5xl font-bold leading-none text-white sm:text-7xl"
            >
              404
            </h1>
            <h2 className="mt-4 text-xl font-semibold text-neutral-100 sm:text-2xl">
              This destination drifted outside the system.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-400 sm:text-base">
              The page you requested does not exist, or it may have moved
              somewhere else.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 border-t-white/35 bg-linear-to-b from-white/15 via-white/6 to-transparent px-4 py-3 text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:from-white/20 active:scale-95"
              >
                <IoHomeOutline className="size-4" aria-hidden="true" />
                Back to portfolio
              </Link>
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/4 px-4 py-3 text-sm font-medium text-neutral-300 backdrop-blur-md transition-all duration-200 hover:border-white/20 hover:text-white active:scale-95"
              >
                <IoArrowBack className="size-4" aria-hidden="true" />
                Go back
              </button>
            </div>
          </div>

          <div
            className="relative mx-auto flex size-40 items-center justify-center sm:flex"
            aria-hidden="true"
          >
            <div className="absolute inset-3 rounded-full border border-dashed border-cyan-300/20" />
            <div className="absolute inset-0 animate-[spin_5s_linear_infinite] rounded-full border border-white/8">
              <span className="absolute left-1/2 -top-1 size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
            </div>
            <div className="relative flex size-24 items-center justify-center rounded-full border border-white/15 bg-linear-to-b from-white/15 via-white/6 to-transparent shadow-[inset_0_1px_1px_rgba(255,255,255,0.18),0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <span className="font-mono text-2xl font-semibold text-white/90">
                404
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 border-t border-white/8 pt-4 text-xs text-neutral-500">
          <span className="size-1.5 shrink-0 rounded-full bg-emerald-400" />
          Portfolio systems nominal
        </div>
      </section>
    </main>
  );
}

export default NotFound