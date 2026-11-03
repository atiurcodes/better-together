
"use client";

import { eventCategories } from "@/data/allCategory";

interface EventCategoryNavProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export default function EventCategoryNav({
    activeCategory,
    onCategoryChange,
}: EventCategoryNavProps) {
    const categories = ["All Events", ...eventCategories];

    return (
        <nav className="w-full overflow-x-auto scrollbar-hide">
            <div className="flex w-max items-center gap-1.5">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => onCategoryChange(category)}
                        className={`shrink-0 rounded-full px-3 py-2 text-xs font-medium transition-all duration-200 ${activeCategory === category
                                ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/20 dark:bg-emerald-600"
                                : "border border-emerald-100 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </nav>
    );
}
