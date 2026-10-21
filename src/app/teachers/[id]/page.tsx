import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeacher, getTeachers } from "@/lib/data";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const teachers = await getTeachers();
  return teachers.map((t) => ({ id: t.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const teacher = await getTeacher(id);
  if (!teacher) return { title: "শিক্ষক পাওয়া যায়নি" };
  return { title: teacher.name };
}

export default async function TeacherProfile({ params }: Props) {
  const { id } = await params;
  const teacher = await getTeacher(id);
  if (!teacher) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/teachers"
        className="mb-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
      >
        <ArrowLeftIcon className="h-4 w-4" /> শিক্ষক মণ্ডলীতে ফিরে যান
      </Link>

      <div className="card overflow-hidden">
        <div className="h-24 bg-navy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={teacher.image}
          alt={teacher.name}
          className="-mt-16 mx-auto h-40 w-40 rounded-full border-4 border-gold object-cover object-top shadow-lg"
        />
        <div className="px-6 pb-8 pt-4 text-center">
          <h1 className="text-xl font-bold text-navy md:text-2xl">
            {teacher.name}
          </h1>
          <p className="mt-1 text-sm font-semibold text-gold">
            {teacher.designation}
          </p>
          <div className="mt-6 border-t border-gray-100 pt-6">
            <a
              href={`https://mimgovcollege.edu.bd/teacher/profile/${teacher.id}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              অফিসিয়াল প্রোফাইল দেখুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
