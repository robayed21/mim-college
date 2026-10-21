import Link from "next/link";
import site from "../../data/site.json";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function AboutPreview() {
  return (
    <section className="border-y border-navy/10 bg-navy-dark/5 py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.aboutImage}
          alt="আমাদের কলেজ"
          className="card max-h-72 w-full object-cover"
        />
        <div>
          <h2 className="section-title">আমাদের সম্পর্কে</h2>
          <p className="mb-6 text-gray-700 leading-relaxed">
            {site.about}
          </p>
          <Link href="/about" className="btn-primary">
            বিস্তারিত <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
