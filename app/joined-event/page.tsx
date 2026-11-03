
import { auth } from "@/lib/auth";
import { JoinedEventType } from "@/lib/type";
import { headers } from "next/headers";
import Link from "next/link";
import { CalendarDays, Compass, Sparkles } from "lucide-react";
import JoinedEvent from "@/components/events/JoinedEvent";
import { getTokenFromServer } from "@/lib/getTokenFromServer";

const JoinedEventsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;
    // jwt token function call
    const token = await getTokenFromServer();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/joined-events/${user?.email}`,
        {
            headers: {
                authorization: `Bearer ${token}`
            },
            cache: "no-store",
        }
    );

    const joinedEvents: JoinedEventType[] = await res.json();

    return (
        <main className="min-h-screen bg-[#F3F8F3] px-5 py-12 transition-colors duration-300 dark:bg-[#101C16]">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="mb-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
                        <Sparkles className="size-4" />
                        Your Community Participation
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-[#244B35] sm:text-4xl dark:text-[#DCEBDD]">
                                Joined Events
                            </h1>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                                Every small contribution creates a big
                                difference. Explore the events you have
                                joined and continue making a positive
                                impact in your community.
                            </p>
                        </div>

                        <Link
                            href="/upcoming-event"
                            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#244B35] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#4C8A59]"
                        >
                            <Compass className="size-4" />
                            Explore Events
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
                                Your Joined Events
                            </h2>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Events you have registered for
                            </p>
                        </div>
                    </div>

                    <span className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                        {joinedEvents.length} Events
                    </span>
                </div>

                {/* Joined Events Grid */}
                {joinedEvents.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {joinedEvents.map((event) => (
                            <JoinedEvent
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
                            No Joined Events Yet!
                        </h2>

                        <p className="mt-3 max-w-md text-sm leading-7 text-gray-500 dark:text-gray-400">
                            You haven&apos;t joined any community events yet.
                            Discover exciting opportunities, connect with
                            people, and become a part of something meaningful.
                        </p>

                        <Link
                            href="/upcoming-event"
                            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#244B35] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#4C8A59]"
                        >
                            <Compass className="size-4" />
                            Explore Events
                        </Link>
                    </div>
                )}
            </div>
        </main>
    );
};

export default JoinedEventsPage;