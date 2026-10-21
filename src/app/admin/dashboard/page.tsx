"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getNotices } from "@/lib/data";

interface Notice {
  id: string;
  title: string;
  date: string;
  content: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (localStorage.getItem("mim_admin") !== "1") {
      router.replace("/admin/login");
      return;
    }
    setAuthed(true);
    setChecking(false);
    fetch("/api/notices")
      .then((r) => r.json())
      .then(setNotices)
      .catch(() => setNotices([]));
  }, [router]);

  const addNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    const res = await fetch("/api/notices", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, date, content }),
    });
    setSaving(false);
    if (res.ok) {
      const created = await res.json();
      setNotices((prev) => [created, ...prev]);
      setTitle("");
      setDate("");
      setContent("");
      setMsg("নোটিশ সফলভাবে যোগ হয়েছে ✓");
    } else {
      const err = await res.json().catch(() => ({}));
      setMsg(err.error || "সংরক্ষণ ব্যর্থ হয়েছে");
    }
  };

  const logout = () => {
    localStorage.removeItem("mim_admin");
    router.replace("/");
  };

  if (checking) return null;

  if (!authed) return null;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold text-navy">অ্যাডমিন ড্যাশবোর্ড</h1>
        <button onClick={logout} className="btn-primary">
          লগ আউট
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="mb-4 text-lg font-bold text-navy">নতুন নোটিশ যোগ</h2>
          <form onSubmit={addNotice} className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                শিরোনাম *
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                তারিখ
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-gray-700">
                বিস্তারিত
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={5}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-gold"
              />
            </div>
            {msg && (
              <p className="rounded-lg bg-gold/10 px-4 py-2 text-sm font-semibold text-navy">
                {msg}
              </p>
            )}
            <button type="submit" disabled={saving} className="btn-gold disabled:opacity-50">
              {saving ? "সংরক্ষণ হচ্ছে..." : "নোটিশ প্রকাশ করুন"}
            </button>
          </form>
        </div>

        <div className="card p-6">
          <h2 className="mb-4 text-lg font-bold text-navy">
            প্রকাশিত নোটিশ ({notices.length})
          </h2>
          <div className="max-h-[480px] space-y-3 overflow-y-auto pr-1">
            {notices.map((n) => (
              <div key={n.id} className="rounded-lg border border-gray-100 p-3">
                <div className="text-sm font-semibold text-navy">» {n.title}</div>
                <div className="text-xs text-gray-500">{n.date}</div>
              </div>
            ))}
            {notices.length === 0 && (
              <p className="text-sm text-gray-500">কোনো নোটিশ নেই।</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
