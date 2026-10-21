import {
  AcademicCapIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import site from "../../data/site.json";

export default function Stats() {
  const { stats } = site;
  const items = [
    { icon: AcademicCapIcon, label: "শিক্ষক", value: stats.teachers },
    { icon: UserGroupIcon, label: "স্টাফ", value: stats.staff },
    {
      icon: UserPlusIcon,
      label: "ছাত্র-ছাত্রী",
      value: stats.totalStudents,
    },
    {
      icon: ClipboardDocumentListIcon,
      label: "মোট শিক্ষার্থী (ছাত্র)",
      value: stats.maleStudents,
    },
    {
      icon: UserGroupIcon,
      label: "মোট শিক্ষার্থী (ছাত্রী)",
      value: stats.femaleStudents,
    },
  ];

  return (
    <section className="bg-navy py-10 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-3 lg:grid-cols-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="card flex flex-col items-center gap-2 border border-gold/40 bg-white/5 p-6 text-center text-white backdrop-blur-sm transition-none hover:shadow-sm"
          >
            <item.icon className="h-10 w-10 text-gold" />
            <div className="text-3xl font-bold text-gold">{item.value}</div>
            <div className="text-sm text-white/80">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
