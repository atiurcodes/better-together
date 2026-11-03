
import Link from "next/link";
import { Event } from "@/lib/type";
import UpcomingCard from "@/components/events/UpcomingCard";
import { Plus, CalendarDays, Sparkles } from "lucide-react";

const page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upcoming-event`, {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch upcoming events");
    }

    const allEvents: Event[] = await res.json();

    return (
        <main className="min-h-screen bg-[#F5FAF7] py-12 transition-colors duration-300 dark:bg-slate-950 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                    <div>
                        {/* Badge */}
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                            <Sparkles size={16} />
                            Make a Difference Together
                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-white sm:text-4xl">
                            Upcoming Events
                        </h1>

                        {/* Description */}
                        <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
                            Discover meaningful community events and join hands
                            to create a positive impact in society.
                        </p>
                    </div>

                    {/* Create Event Button */}
                    <Link
                        href="/event/add-event"
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-emerald-700/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 dark:bg-emerald-600 dark:shadow-emerald-950/30 dark:hover:bg-emerald-500"
                    >
                        <Plus size={20} />
                        Create Event
                    </Link>
                </div>

                {/* Filtered event */}
                {/* <EventFilter events={allEvents} /> */}

                {/* Events Grid */}
                {allEvents.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {allEvents.map((event) => (
                            <UpcomingCard
                                key={event._id}
                                event={event}
                            />
                        ))}
                    </div>
                ) : (

                    /* Empty State */
                    <div className="rounded-2xl border border-dashed border-emerald-200 bg-white px-5 py-20 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

                        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                            <CalendarDays size={32} />
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                            No Upcoming Events
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                            Be the first to organize an event in your community.
                            Start making a difference today!
                        </p>

                        <Link
                            href="/events/create"
                            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white transition-all hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-500"
                        >
                            <Plus size={18} />
                            Create Your First Event
                        </Link>
                    </div>
                )}

            </div>
        </main>
    );
};

export default page;