import Link from "next/link";
import { getTeachers } from "@/lib/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default async function TeachersSection() {
  const teachers = (await getTeachers()).slice(0, 5);

  return (
    <section className="bg-navy-dark/5 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="section-title mb-0">শিক্ষক মণ্ডলী</h2>
          <Link
            href="/teachers"
            className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
          >
            সকল শিক্ষক <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {teachers.map((t) => (
            <Link key={t.id} href={`/teachers/${t.id}`} className="card group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt={t.name}
                className="h-44 w-full rounded-t-xl object-cover object-top"
              />
              <div className="p-4 text-center">
                <div className="truncate text-sm font-bold text-navy group-hover:text-gold">
                  {t.name}
                </div>
                <div className="mt-1 text-xs text-gray-500">
                  {t.designation}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
