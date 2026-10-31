"use client";

import { useMemo, useState } from "react";
import { Event } from "@/lib/type";
import { Search, SlidersHorizontal } from "lucide-react";
import { eventCategories } from "@/data/allCategory";

export default function EventFilter({
    events,
}: {
    events: Event[];
}) {
    const [activeCategory, setActiveCategory] = useState("All Events");
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            const matchesCategory =
                activeCategory === "All Events" ||
                event.eventCategory === activeCategory;

            const search = searchTerm.toLowerCase();

            const matchesSearch =
                event.eventTitle.toLowerCase().includes(search) ||
                event.eventLocation.toLowerCase().includes(search) ||
                event.description.toLowerCase().includes(search);

            return matchesCategory && matchesSearch;
        });
    }, [events, activeCategory, searchTerm]);

    return (
        <div className="mb-10 space-y-6">

            {/* Category Navigation */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-hide">

                <SlidersHorizontal
                    size={19}
                    className="mr-2 shrink-0 text-emerald-700 dark:text-emerald-400"
                />

                {eventCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${activeCategory === category
                            ? "border-emerald-700 bg-emerald-700 text-white shadow-md shadow-emerald-700/20 dark:border-emerald-500 dark:bg-emerald-600"
                            : "border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-700 dark:hover:bg-emerald-950"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Search & Result Count */}
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <div className="relative w-full sm:max-w-md">
                    <Search
                        size={19}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search events, location..."
                        className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-slate-700 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                    />
                </div>

                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    Showing{" "}
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">
                        {filteredEvents.length}
                    </span>{" "}
                    of {events.length} events
                </p>
            </div>

            {/* Filtered Events */}
            {filteredEvents.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((event) => (
                        <div key={event._id}>
                            {/* Use your UpcomingCard here */}
                        </div>
                    ))}
                </div>
            ) : (
                <div className="rounded-2xl border border-dashed border-emerald-200 bg-white px-5 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
                    <Search
                        size={35}
                        className="mx-auto mb-4 text-emerald-600 dark:text-emerald-400"
                    />

                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        No Events Found
                    </h3>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Try another keyword or select a different category.
                    </p>

                    <button
                        onClick={() => {
                            setActiveCategory("All Events");
                            setSearchTerm("");
                        }}
                        className="mt-5 rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
                    >
                        Clear Filters
                    </button>
                </div>
            )}
        </div>
    );
}