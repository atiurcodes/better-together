
export default function ManageEventSkeleton() {
    return (
        <article className="w-full overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

            {/* Image Section */}
            <div className="relative h-56 w-full animate-pulse bg-emerald-100 dark:bg-slate-800">

                {/* Category Badge */}
                <div className="absolute left-4 top-4 h-7 w-28 rounded-full bg-white/80 dark:bg-slate-700" />

                {/* Joined Badge */}
                <div className="absolute right-4 top-4 h-7 w-20 rounded-full bg-emerald-200 dark:bg-emerald-800" />

                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 flex h-[68px] w-[65px] flex-col items-center justify-center gap-2 rounded-xl bg-white/80 dark:bg-slate-700">
                    <div className="h-6 w-7 rounded bg-slate-200 dark:bg-slate-600" />
                    <div className="h-3 w-9 rounded bg-slate-200 dark:bg-slate-600" />
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-4 p-5">

                {/* Title & Description */}
                <div>
                    <div className="h-6 w-3/4 animate-pulse rounded-md bg-slate-200 dark:bg-slate-700" />

                    <div className="mt-4 space-y-2">
                        <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                        <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                    </div>
                </div>

                {/* Event Information */}
                <div className="space-y-3 border-t border-dashed border-emerald-100 pt-4 dark:border-slate-700">

                    {/* Location */}
                    <div className="flex items-center gap-2.5">
                        <div className="size-[17px] shrink-0 animate-pulse rounded-full bg-emerald-100 dark:bg-slate-700" />
                        <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2.5">
                        <div className="size-[17px] shrink-0 animate-pulse rounded-full bg-emerald-100 dark:bg-slate-700" />
                        <div className="h-3 w-3/4 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between gap-3 border-t border-emerald-50 pt-4 dark:border-slate-700">

                    {/* View Details */}
                    <div className="h-11 flex-1 animate-pulse rounded-xl bg-emerald-100 dark:bg-emerald-950/60" />

                    {/* Edit & Delete */}
                    <div className="flex items-center gap-2">
                        <div className="size-11 animate-pulse rounded-xl bg-slate-100 dark:bg-slate-800" />
                        <div className="size-11 animate-pulse rounded-xl bg-red-50 dark:bg-red-950/40" />
                    </div>
                </div>
            </div>
        </article>
    );
}
