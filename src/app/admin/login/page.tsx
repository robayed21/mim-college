"use client";

import Link from "next/link";
import { useState } from "react";
import site from "../../../../data/site.json";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "admin@mimgov.edu.bd" && password === "admin123") {
      localStorage.setItem("mim_admin", "1");
      window.location.href = "/admin/dashboard";
    } else {
      setError("ইমেইল বা পাসওয়ার্ড সঠিক নয়");
    }
  };

  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <div className="card p-8">
        <div className="mb-6 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logo}
            alt="লোগো"
            className="mx-auto mb-3 h-16 w-16 rounded-full bg-white object-contain p-1 shadow"
          />
          <h1 className="text-xl font-bold text-navy">অ্যাডমিন লগ ইন</h1>
          <p className="text-sm text-gray-500">{site.name}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              ইমেইল
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-gold"
              placeholder="admin@mimgov.edu.bd"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-gold"
              placeholder="••••••••"
            />
          </div>
          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
              {error}
            </p>
          )}
          <button type="submit" className="btn-primary w-full justify-center">
            লগ ইন
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-gray-400">
          ডেমো: admin@mimgov.edu.bd / admin123 |{" "}
          <Link href="/" className="text-navy hover:text-gold">
            হোমে ফিরুন
          </Link>
        </p>
      </div>
    </div>
  );
}
