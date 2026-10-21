import Link from "next/link";
import { getNotices } from "@/lib/data";
import { CalendarDaysIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const bnMonths = [
  "জানু",
  "ফেব",
  "মার",
  "এপ্রি",
  "মে",
  "জুন",
  "জুলা",
  "আগ",
  "সেপ",
  "অক্টো",
  "নভে",
  "ডিসে",
];

function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  return `${parseInt(d, 10)} ${bnMonths[parseInt(m, 10) - 1]} ${y}`;
}

export default async function NoticeBoard() {
  const notices = (await getNotices()).slice(0, 5);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title mb-0">নোটিশ বোর্ড</h2>
        <Link
          href="/notice"
          className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
        >
          সকল নোটিশ <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {notices.map((n) => (
          <Link
            key={n.id}
            href={`/notice/${n.id}`}
            className="card flex items-center gap-4 px-5 py-4"
          >
            <div className="flex h-12 w-12 flex-none flex-col items-center justify-center rounded-lg bg-navy text-white">
              <CalendarDaysIcon className="h-5 w-5 text-gold" />
            </div>
            <div className="min-w-0">
              <div className="truncate font-semibold text-navy">
                » {n.title}
              </div>
              <div className="text-xs text-gray-500">{formatDate(n.date)}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
