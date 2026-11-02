import CardSkeleton from "@/components/layouts/CardSkeleton";

export default function Loading() {
    return (
        <main>
            {/* Hero Skeleton */}
            <div className="h-[500px] animate-pulse bg-emerald-50 dark:bg-slate-900" />

            {/* Features Skeleton */}
            <div className="h-72 animate-pulse bg-white dark:bg-slate-950" />

            {/* Recent Upcoming Events Skeleton */}
            <section className="bg-[#F0F9F4] py-20 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* Heading */}
                    <div className="mb-12 flex flex-col items-center">
                        <div className="h-8 w-36 animate-pulse rounded-full bg-emerald-100 dark:bg-slate-800" />

                        <div className="mt-5 h-10 w-72 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />

                        <div className="mt-5 h-4 w-full max-w-2xl animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                        <div className="mt-2 h-4 w-3/4 max-w-xl animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                    </div>

                    {/* Exactly 6 Skeleton Cards */}
                    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <CardSkeleton key={index} />
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}
