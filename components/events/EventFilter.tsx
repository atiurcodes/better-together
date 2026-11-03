
"use client";

import { useState } from "react";
import { Event } from "@/lib/type";
import EventCategoryNav from "./EventCategoryNav";
import EventSearch from "./EventSearch";
import UpcomingCard from "./UpcomingCard";

interface EventFilterProps {
    events: Event[];
}

export default function EventFilter({ events }: EventFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState("All Events");
    const [searchTerm, setSearchTerm] = useState("");

    // Filter events by category and search
    const filteredEvents = events.filter((event) => {
        const matchCategory =
            selectedCategory === "All Events" ||
            event.eventCategory === selectedCategory;

        const searchValue = searchTerm.toLowerCase().trim();

        const matchSearch =
            event.eventTitle.toLowerCase().includes(searchValue) ||
            event.eventLocation.toLowerCase().includes(searchValue);

        return matchCategory && matchSearch;
    });

    return (
        <section>
            {/* Category Navigation and Search */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0 flex-1">
                    <EventCategoryNav
                        activeCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>

                <div className="w-full sm:w-64 sm:shrink-0">
                    <EventSearch
                        searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                    />
                </div>
            </div>

            {/* Filtered Events */}
            {filteredEvents.length > 0 ? (
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((event) => (
                        <UpcomingCard key={event._id} event={event} />
                    ))}
                </div>
            ) : (
                <div className="mt-8 rounded-2xl border border-dashed border-emerald-200 bg-white px-5 py-16 text-center dark:border-slate-700 dark:bg-slate-900">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        No Events Found
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                        Try another search term or select a different category.
                    </p>
                </div>
            )}
        </section>
    );
}
