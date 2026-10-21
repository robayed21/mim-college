import type { Metadata } from "next";
import { getStaff } from "@/lib/data";

export const metadata: Metadata = { title: "স্টাফ" };

export default async function StaffPage() {
  const staff = await getStaff();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="section-title text-center">স্টাফ</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {staff.map((s) => (
          <div key={s.id} className="card overflow-hidden text-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.name}
              className="h-56 w-full object-cover object-top"
            />
            <div className="p-4">
              <div className="font-bold text-navy">{s.name}</div>
              <div className="mt-1 text-xs text-gray-500">{s.designation}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
