"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        window.location.href = "/";
      } else {
        const data = await res.json();
        setError(data.error || "Error al iniciar sesión");
      }
    } catch {
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      {/* Subtle background accent */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(99,102,241,0.08), transparent)",
        }}
      />

      <div className="relative w-full max-w-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-50">
            HeroHUB
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            Inicia sesión para continuar
          </p>
        </div>

        {/* Login form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-zinc-800/60 bg-zinc-900/50 p-6 backdrop-blur-sm"
        >
          {/* Username */}
          <div className="space-y-1.5">
            <label
              htmlFor="login-username"
              className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
            >
              Usuario
            </label>
            <input
              id="login-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete="username"
              placeholder="Ingresa tu usuario"
              className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-3.5 py-2.5
                         text-sm text-zinc-100 placeholder-zinc-600
                         outline-none transition-colors duration-200
                         focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label
              htmlFor="login-password"
              className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
            >
              Contraseña
            </label>
            <input
              id="login-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              placeholder="••••••••••"
              className="w-full rounded-lg border border-zinc-700/50 bg-zinc-800/50 px-3.5 py-2.5
                         text-sm text-zinc-100 placeholder-zinc-600
                         outline-none transition-colors duration-200
                         focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20"
            />
          </div>

          {/* Error message */}
          {error && (
            <div className="rounded-lg bg-red-500/10 px-3.5 py-2.5 text-sm text-red-400">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-indigo-600 px-4 py-2.5
                       text-sm font-medium text-white
                       transition-all duration-200
                       hover:bg-indigo-500
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/50
                       disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          The Pro Hero — By: Mau Bautista
        </p>
      </div>
    </div>
  );
}
