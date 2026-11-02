
export default function UpcomingCardSkeleton() {
    return (
        <article className="w-full overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

            {/* Image Section */}
            <div className="relative h-56 w-full animate-pulse bg-emerald-100 dark:bg-slate-800">

                {/* Category Badge Skeleton */}
                <div className="absolute left-4 top-4 h-7 w-28 rounded-full bg-white/70 dark:bg-slate-700" />

                {/* Date Badge Skeleton */}
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
                        <div className="h-[17px] w-[17px] shrink-0 animate-pulse rounded-full bg-emerald-100 dark:bg-slate-700" />
                        <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2.5">
                        <div className="h-[17px] w-[17px] shrink-0 animate-pulse rounded-full bg-emerald-100 dark:bg-slate-700" />
                        <div className="h-3 w-3/4 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                    </div>
                </div>

                {/* Action Button */}
                <div className="border-t border-emerald-50 pt-4 dark:border-slate-700">
                    <div className="flex h-11 w-full animate-pulse items-center justify-between rounded-xl bg-emerald-50 px-4 dark:bg-emerald-950/60">
                        <div className="h-3 w-24 rounded bg-emerald-200 dark:bg-emerald-800" />
                        <div className="h-5 w-5 rounded bg-emerald-200 dark:bg-emerald-800" />
                    </div>
                </div>
            </div>
        </article>
    );
}
