
import { Event } from "@/lib/type";
import {
    MapPin,
    CalendarDays,
    ArrowUpRight,
    Leaf,
    CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import EditEventDialog from "./EditEventDialog";
import DeleteEventDialog from "./DeleteEventDialog";

export default function ManageEvent({ event }: { event: Event }) {
    return (
        <article className="group w-full overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-900/10 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-emerald-700">

            {/* Image Section */}
            <div className="relative h-56 w-full overflow-hidden bg-emerald-50 dark:bg-slate-800">

                <Image
                    src={event.imageUrl}
                    alt={event.eventTitle}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                {/* Category Badge */}
                <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/95 px-3 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-md dark:border-slate-600 dark:bg-slate-900/90 dark:text-emerald-300">
                    <Leaf size={13} />
                    {event.eventCategory}
                </div>

                {/* Joined Badge */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm backdrop-blur-md">
                    <CheckCircle2 size={13} />
                    Joined
                </div>

                {/* Event Date Badge */}
                <div className="absolute bottom-4 right-4 rounded-xl border border-white/40 bg-white/95 px-4 py-2 text-center shadow-lg backdrop-blur-md dark:border-slate-600 dark:bg-slate-900/90">
                    <p className="text-xl font-bold text-emerald-700 dark:text-emerald-400">
                        {new Date(`${event.eventDate}T00:00:00`).getDate()}
                    </p>
                    <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                        {new Date(`${event.eventDate}T00:00:00`).toLocaleString("en-US", {
                            month: "short",
                        })}
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-4 p-5">

                {/* Event Title */}
                <div>
                    <h2 className="line-clamp-1 text-xl font-bold text-slate-800 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                        {event.eventTitle}
                    </h2>

                    <p className="mt-2 line-clamp-2 min-h-12 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {event.description}
                    </p>
                </div>

                {/* Event Information */}
                <div className="space-y-3 border-t border-dashed border-emerald-100 pt-4 dark:border-slate-700">

                    {/* Location */}
                    <div className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <MapPin
                            size={17}
                            className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                        />
                        <span className="line-clamp-1">
                            {event.eventLocation}
                        </span>
                    </div>

                    {/* Event Date */}
                    <div className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                        <CalendarDays
                            size={17}
                            className="shrink-0 text-emerald-600 dark:text-emerald-400"
                        />
                        <span>
                            {new Date(`${event.eventDate}T00:00:00`).toLocaleDateString("en-US", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 border-t border-emerald-50 pt-4 dark:border-slate-700">

                    {/* Left Side - View Details */}
                    <Link
                        href={`/upcoming-event/${event._id}`}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 transition-all duration-300 hover:bg-emerald-700 hover:text-white dark:bg-emerald-950/60 dark:text-emerald-300 dark:hover:bg-emerald-700 dark:hover:text-white"
                    >
                        <span>View Details</span>
                        <ArrowUpRight size={18} />
                    </Link>

                    {/* Right Side - Edit & Delete */}
                    <div className="flex items-center gap-2">
                        <EditEventDialog event={event} />

                        <DeleteEventDialog event={event} />
                    </div>

                </div>
            </div>
        </article>
    );
}