import type { Metadata } from "next";
import Link from "next/link";
import { getTeachers } from "@/lib/data";

export const metadata: Metadata = { title: "শিক্ষক মণ্ডলী" };

export default async function TeachersPage() {
  const teachers = await getTeachers();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="section-title text-center">শিক্ষক মণ্ডলী</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {teachers.map((t) => (
          <Link key={t.id} href={`/teachers/${t.id}`} className="card group overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.image}
              alt={t.name}
              className="h-56 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <div className="p-4 text-center">
              <div className="text-sm font-bold text-navy group-hover:text-gold">
                {t.name}
              </div>
              <div className="mt-1 text-xs text-gray-500">{t.designation}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
