
"use client";

import { useState } from "react";
import { Event } from "@/lib/type";
import EventCategoryNav from "./EventCategoryNav";
import UpcomingCard from "./UpcomingCard";

interface EventFilterProps {
    events: Event[];
}

export default function EventFilter({ events }: EventFilterProps) {
    const [selectedCategory, setSelectedCategory] = useState("All Events");

    // Filter events by selected category
    const filteredEvents =
        selectedCategory === "All Events"
            ? events
            : events.filter(
                (event) => event.eventCategory === selectedCategory
            );

    return (
        <section>
            {/* Category Navigation */}
            <EventCategoryNav
                activeCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
            />

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
                        No events available in this category right now.
                    </p>
                </div>
            )}
        </section>
    );
}
