"use client";

import { useRouter } from "next/navigation";
import { apps } from "@/data/apps";

export default function Home() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <div className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Subtle top gradient accent */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 h-64 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,102,241,0.12), transparent)",
        }}
      />

      {/* Header */}
      <header className="relative flex items-center justify-between pb-10 pt-14 sm:pt-20">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
            The Pro Hero
          </h1>
          <p className="mt-1.5 text-base text-zinc-500 sm:text-lg">
            By: <span className="text-indigo-400">Mau Bautista</span>
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-lg border border-zinc-800 bg-zinc-900/80 px-4 py-2
                     text-xs font-medium text-zinc-400
                     transition-all duration-200
                     hover:border-zinc-700 hover:bg-zinc-800 hover:text-zinc-200"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Divider */}
      <div className="mb-8 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* App count */}
      <div className="mb-6 flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
          {apps.length} {apps.length === 1 ? "aplicación" : "aplicaciones"} activas
        </span>
      </div>

      {/* App grid */}
      <section className="grid grid-cols-1 gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apps.map((app) => (
          <a
            key={app.nombre}
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-4 rounded-2xl border border-zinc-800/60
                       bg-zinc-900/50 p-6 backdrop-blur-sm
                       transition-all duration-300 ease-out
                       hover:-translate-y-1 hover:border-zinc-700/80 hover:bg-zinc-800/40 hover:shadow-lg hover:shadow-black/20
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50"
          >
            {/* Emoji icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/80
                            text-2xl transition-transform duration-300 group-hover:scale-110">
              {app.icon}
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-1.5">
              <h2 className="text-base font-semibold tracking-tight text-zinc-100">
                {app.nombre}
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400">
                {app.descripcion}
              </p>
            </div>

            {/* Port badge + arrow */}
            <div className="mt-auto flex items-center justify-between">
              <span className="rounded-md bg-zinc-800/80 px-2 py-0.5 text-[11px] font-medium text-zinc-500">
                :{app.port}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500
                              transition-colors duration-300 group-hover:text-indigo-400">
                <span>Abrir</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 py-8 text-center">
        <p className="text-xs text-zinc-600">
          HeroHUB — Built with Next.js &amp; Tailwind CSS
        </p>
      </footer>
    </div>
  );
}
