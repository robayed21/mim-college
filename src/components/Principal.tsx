import site from "../../data/site.json";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Principal() {
  const { principal } = site;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <h2 className="section-title text-center">অধ্যক্ষের বাণী</h2>
      <div className="card mx-auto max-w-5xl p-6 md:p-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={principal.image}
            alt={principal.name}
            className="h-48 w-40 flex-none rounded-xl object-cover object-top shadow-md md:h-56 md:w-44"
          />
          <div>
            <h3 className="text-lg font-bold text-navy">{principal.name}</h3>
            <p className="mb-4 text-sm font-semibold text-gold">
              {principal.designation}
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              {principal.message}
            </p>
            <a
              href="https://mimgovcollege.edu.bd/article/details/aae39900-14fd-4430-b5bc-2962e2422e97"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 font-semibold text-navy hover:text-gold"
            >
              বিস্তারিত <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
