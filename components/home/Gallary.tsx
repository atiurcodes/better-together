import { galleryImages } from "@/data/galaryImage";
import Image from "next/image";

export default function Gallery() {
    return (
        <section
            id="gallery"
            className="py-20 transition-colors duration-300 dark:bg-[#14251B] lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">

                    <span className="inline-flex rounded-full bg-[#E6F2E5] px-4 py-2 text-sm font-semibold text-[#397D48] dark:bg-[#294331] dark:text-[#BBD3B5]">
                        OUR MEMORIES
                    </span>

                    <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[#183D2A] dark:text-[#E2EDE0] sm:text-4xl lg:text-5xl">
                        Moments That
                        <span className="text-[#5B9B65] dark:text-[#91B88F]">
                            {" "}Matter.
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-600 dark:text-[#A8BDA9] sm:text-lg">
                        Every picture tells a story of kindness,
                        teamwork, and positive change.
                        Explore the beautiful moments we&apos;ve created together.
                    </p>

                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {galleryImages.map((item) => (
                        <div
                            key={item.id}
                            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#344B39] dark:bg-[#1A2A20] dark:shadow-black/20 dark:hover:shadow-black/30"
                        >

                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70" />

                                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#285D35] backdrop-blur-sm">
                                    {item.category}
                                </span>

                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-heading text-xl font-bold text-[#183D2A] dark:text-[#E2EDE0]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-500 dark:text-[#A8BDA9]">
                                    Together, we make a difference.
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}