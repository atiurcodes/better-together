
import { Event } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import {
    CalendarDays,
    MapPin,
    ArrowUpRight,
    CheckCircle2,
} from "lucide-react";

const JoinedEvent = ({ event }: { event: Event }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-[#294334] dark:bg-[#192B20]">

            {/* Event Image */}
            <div className="relative h-52 overflow-hidden bg-emerald-50 dark:bg-[#21382A]">
                <Image
                    src={event.imageUrl}
                    alt={event.eventTitle}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Category */}
                <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-md dark:border-emerald-800/50 dark:bg-[#192B20]/90 dark:text-emerald-300">
                        {event.eventCategory}
                    </span>
                </div>

                {/* Joined Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
                    <CheckCircle2 className="size-3.5" />
                    Joined
                </div>
            </div>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h2 className="line-clamp-1 text-xl font-bold text-[#244B35] transition-colors group-hover:text-emerald-700 dark:text-[#DCEBDD] dark:group-hover:text-emerald-400">
                    {event.eventTitle}
                </h2>

                {/* Description */}
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {event.description}
                </p>

                {/* Event Information */}
                <div className="mt-5 space-y-3">

                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                            <CalendarDays className="size-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                Event Date
                            </p>
                            <p className="font-medium">
                                {event.eventDate}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                            <MapPin className="size-4" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 dark:text-gray-500">
                                Location
                            </p>
                            <p className="font-medium">
                                {event.eventLocation}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between border-t border-emerald-100 pt-4 dark:border-[#34523D]">
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                        <CheckCircle2 className="size-4" />
                        Registration Confirmed
                    </div>

                    <Link
                        href={`/event/${event._id}`}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#244B35] px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#4C8A59]"
                    >
                        Details
                        <ArrowUpRight className="size-3.5" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JoinedEvent;