import Link from "next/link";
import { getGallery } from "@/lib/data";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default async function GalleryPreview() {
  const images = (await getGallery()).slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="section-title mb-0">ছবিঘর</h2>
        <Link
          href="/gallery"
          className="flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold"
        >
          সব ছবি <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((src) => (
          <Link key={src} href="/gallery" className="card overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt="গ্যালারির ছবি"
              className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
