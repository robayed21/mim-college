import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNotice, getNotices } from "@/lib/data";
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

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

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const notices = await getNotices();
  return notices.map((n) => ({ id: n.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const notice = await getNotice(id);
  if (!notice) return { title: "নোটিশ পাওয়া যায়নি" };
  return { title: notice.title };
}

export default async function NoticeDetail({ params }: Props) {
  const { id } = await params;
  const notice = await getNotice(id);
  if (!notice) notFound();

  const [y, m, d] = notice.date.split("-");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/notice"
        className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
      >
        <ArrowLeftIcon className="h-4 w-4" /> নোটিশ বোর্ডে ফিরে যান
      </Link>

      <article className="card p-6 md:p-10">
        <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-gold">
          <CalendarDaysIcon className="h-5 w-5" />
          {parseInt(d, 10)} {bnMonths[parseInt(m, 10) - 1]} {y}
        </div>
        <h1 className="mb-6 text-2xl font-bold text-navy md:text-3xl">
          {notice.title}
        </h1>
        <p className="text-gray-700 leading-relaxed">{notice.content}</p>
      </article>
    </div>
  );
}
