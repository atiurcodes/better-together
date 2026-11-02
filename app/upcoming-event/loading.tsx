import UpcomingCardSkeleton from "@/components/layouts/CardSkeleton";

const Loading = () => {
    return (
        <main className="min-h-screen bg-[#F5FAF7] py-12 dark:bg-slate-950 sm:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header Skeleton */}
                <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

                    <div className="w-full">
                        {/* Badge */}
                        <div className="h-9 w-64 animate-pulse rounded-full bg-emerald-100 dark:bg-slate-800" />

                        {/* Heading */}
                        <div className="mt-5 h-10 w-72 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />

                        {/* Description */}
                        <div className="mt-4 space-y-2">
                            <div className="h-4 w-full max-w-xl animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                            <div className="h-4 w-4/5 max-w-md animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
                        </div>
                    </div>

                    {/* Create Event Button */}
                    <div className="h-12 w-44 animate-pulse rounded-xl bg-emerald-100 dark:bg-slate-800" />
                </div>

                {/* Events Grid Skeleton */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <UpcomingCardSkeleton key={index} />
                    ))}
                </div>

            </div>
        </main>
    );
};

export default Loading;
