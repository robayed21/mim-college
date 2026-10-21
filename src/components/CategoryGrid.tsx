import Link from "next/link";
import {
  AcademicCapIcon,
  UsersIcon,
  DocumentTextIcon,
  PhotoIcon,
  ClipboardDocumentCheckIcon,
  BellAlertIcon,
  BuildingLibraryIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    href: "/about",
    label: "আমাদের সম্পর্কে",
    icon: BuildingLibraryIcon,
  },
  { href: "/teachers", label: "শিক্ষক মণ্ডলী", icon: AcademicCapIcon },
  { href: "/staff", label: "স্টাফ", icon: UsersIcon },
  { href: "/notice", label: "নোটিশ", icon: BellAlertIcon },
  { href: "/gallery", label: "ছবিঘর", icon: PhotoIcon },
  { href: "/results", label: "ফলাফল", icon: ClipboardDocumentCheckIcon },
  { href: "/admission", label: "ভর্তি", icon: EnvelopeOpenIcon },
  { href: "/contact", label: "যোগাযোগ", icon: DocumentTextIcon },
];

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="section-title text-center">প্রয়োজনীয় লিঙ্ক</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="card group flex flex-col items-center gap-3 p-6 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 transition-colors group-hover:bg-gold/20">
              <c.icon className="h-7 w-7 text-navy transition-colors group-hover:text-gold" />
            </div>
            <span className="font-semibold text-navy">{c.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
