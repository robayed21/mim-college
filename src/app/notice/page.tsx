import type { Metadata } from "next";
import Link from "next/link";
import { getNotices } from "@/lib/data";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const bnMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

export const metadata: Metadata = { title: "নোটিশ" };

export default async function NoticePage() {
  const notices = await getNotices();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="section-title text-center">নোটিশ বোর্ড</h1>
      <div className="space-y-4">
        {notices.map((n) => {
          const [y, m, d] = n.date.split("-");
          return (
            <Link key={n.id} href={`/notice/${n.id}`} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
              <div className="flex flex-none items-center gap-2 text-sm font-semibold text-gold">
                <CalendarDaysIcon className="h-5 w-5" />
                {parseInt(d, 10)} {bnMonths[parseInt(m, 10) - 1]} {y}
              </div>
              <div className="font-semibold text-navy">» {n.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
