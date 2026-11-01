
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    CalendarDays,
    MapPin,
    HeartHandshake,
    Leaf,
    Clock,
    Users,
    Sparkles,
} from "lucide-react";

import { Event } from "@/lib/type";
import JoinedEvents from "@/components/events/JoinedEventButton";

interface EventDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const EventDetailsPage = async ({ params }: EventDetailsPageProps) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/upcoming-event/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch event details");
    }

    const event: Event = await res.json();

    const formattedDate = new Date(
        `${event.eventDate}T00:00:00`
    ).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <main className="min-h-screen bg-[#F4FAF6] py-8 transition-colors duration-300 dark:bg-slate-950 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Back Navigation */}
                <Link
                    href="/upcoming-event"
                    className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-900 dark:text-emerald-400 dark:hover:bg-slate-800"
                >
                    <ArrowLeft size={17} />
                    Back to Events
                </Link>

                {/* Event Cover */}
                <div className="relative h-[260px] overflow-hidden rounded-3xl sm:h-[380px] lg:h-[450px]">
                    <Image
                        src={event.imageUrl}
                        alt={event.eventTitle}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 1152px"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                            <Leaf size={16} />
                            {event.eventCategory}
                        </span>

                        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                            {event.eventTitle}
                        </h1>

                        <p className="mt-3 flex items-center gap-2 text-sm text-white/85 sm:text-base">
                            <MapPin size={18} />
                            {event.eventLocation}
                        </p>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Event Description */}
                    <div className="space-y-7 lg:col-span-2">

                        {/* Event Information */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                            <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                                    <CalendarDays size={23} />
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Event Date
                                    </p>
                                    <p className="mt-1 font-semibold text-slate-800 dark:text-white">
                                        {formattedDate}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                                    <MapPin size={23} />
                                </div>

                                <div>
                                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                        Event Location
                                    </p>
                                    <p className="mt-1 font-semibold text-slate-800 dark:text-white">
                                        {event.eventLocation}
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* About Event */}
                        <section className="rounded-3xl border border-emerald-100 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-900">
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                                    <Sparkles size={21} />
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                                        About This Event
                                    </h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Learn more about this initiative
                                    </p>
                                </div>
                            </div>

                            <p className="whitespace-pre-line text-[15px] leading-8 text-slate-600 dark:text-slate-300">
                                {event.description}
                            </p>
                        </section>

                    </div>

                    {/* Join Event Sidebar */}
                    <aside>
                        <div className="sticky top-24 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

                            <div className="bg-gradient-to-br from-emerald-600 to-green-700 p-6 text-white">
                                <div className="mb-4 flex size-12 items-center justify-center rounded-2xl bg-white/20">
                                    <HeartHandshake size={27} />
                                </div>

                                <h2 className="text-2xl font-bold">
                                    Be Part of the Change!
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-emerald-50">
                                    Your small contribution can make a big difference in our community.
                                </p>
                            </div>

                            <div className="space-y-5 p-6">

                                <div className="flex items-start gap-3">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                                        <Users size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 dark:text-white">
                                            Community Driven
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                            Connect with people who care about making a difference.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                                        <Clock size={20} />
                                    </div>

                                    <div>
                                        <p className="font-semibold text-slate-800 dark:text-white">
                                            Make Your Time Count
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                                            Spend your time on something meaningful.
                                        </p>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-5 dark:border-slate-800">
                                    {/* join event button functionality */}
                                    <JoinedEvents event={event} />
                                    <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
                                        Together, we can make a difference.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </main>
    );
};

export default EventDetailsPage;
