"use client";

import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

interface EventSearchProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
}

export default function EventSearch({
    searchTerm,
    onSearchChange,
}: EventSearchProps) {
    return (
        <div className="relative w-full">
            <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
                type="text"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by event name or location..."
                className="h-11 rounded-xl border-emerald-100 bg-white pl-10 pr-10 shadow-none focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-900"
            />

            {searchTerm && (
                <button
                    type="button"
                    onClick={() => onSearchChange("")}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 dark:hover:text-white"
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
}
