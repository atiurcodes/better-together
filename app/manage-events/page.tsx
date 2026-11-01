
import ManageEvent from "@/components/events/ManageEvent";
import { auth } from "@/lib/auth";
import { Event } from "@/lib/type";
import { headers } from "next/headers";
import Link from "next/link";
import { CalendarDays, Plus, Sparkles } from "lucide-react";

const ManageEventPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    const res = await fetch(
        `http://localhost:5000/my-event/${user?.email}`,
        {
            cache: "no-store",
        }
    );

    const myEvents: Event[] = await res.json();

    return (
        <main className="min-h-screen bg-[#F3F8F3] px-5 py-12 transition-colors duration-300 dark:bg-[#101C16]">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
                        <Sparkles className="size-4" />
                        Your Community Contributions
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-[#244B35] sm:text-4xl dark:text-[#DCEBDD]">
                                My Created Events
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                                Every meaningful change starts with an event.
                                Keep track of the positive impact you&apos;re
                                creating in your community.
                            </p>
                        </div>

                        <Link
                            href="/event/add-event"
                            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#244B35] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#4C8A59]"
                        >
                            <Plus className="size-4" />
                            Create New Event
                        </Link>
                    </div>
                </div>

                {/* Event Count */}
                <div className="mb-8 flex items-center justify-between rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm dark:border-[#294334] dark:bg-[#192B20]">
                    <div className="flex items-center gap-3">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                            <CalendarDays className="size-5" />
                        </div>

                        <div>
                            <h2 className="font-semibold text-[#244B35] dark:text-[#DCEBDD]">
                                Your Events
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Events created by you
                            </p>
                        </div>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {myEvents.length} Events
                    </span>
                </div>

                {/* Events Grid */}
                {myEvents.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {myEvents.map((event) => (
                            <ManageEvent
                                key={event._id}
                                event={event}
                            />
                        ))}
                    </div>
                ) : (
                    /* Empty State */
                    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-emerald-200 bg-white px-6 py-16 text-center shadow-sm dark:border-[#34523D] dark:bg-[#192B20]">
                        <div className="mb-5 flex size-20 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                            <CalendarDays className="size-9" />
                        </div>

                        <h2 className="text-xl font-bold text-[#244B35] dark:text-[#DCEBDD]">
                            No Events Created Yet!
                        </h2>

                        <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400">
                            You haven&apos;t created any community events yet.
                            Start something meaningful today and bring
                            people together for a positive change.
                        </p>

                        <Link
                            href="/event/add-event"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#244B35] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#4C8A59]"
                        >
                            <Plus className="size-4" />
                            Create Your First Event
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
};

export default ManageEventPage;
