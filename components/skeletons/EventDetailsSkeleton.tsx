
export default function EventDetailsSkeleton() {
    return (
        <main className="min-h-screen bg-[#F4FAF6] py-8 dark:bg-slate-950 sm:py-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                {/* Back Button */}
                <div className="mb-7 h-10 w-36 animate-pulse rounded-full bg-emerald-100 dark:bg-slate-800" />

                {/* Event Cover */}
                <div className="relative h-[260px] animate-pulse overflow-hidden rounded-3xl bg-emerald-100 dark:bg-slate-800 sm:h-[380px] lg:h-[450px]">
                    <div className="absolute bottom-0 left-0 w-full space-y-4 p-6 sm:p-10">
                        <div className="h-9 w-32 animate-pulse rounded-full bg-white/70 dark:bg-slate-700" />
                        <div className="h-9 w-3/4 max-w-xl animate-pulse rounded-lg bg-white/70 dark:bg-slate-700 sm:h-12" />
                        <div className="h-5 w-48 animate-pulse rounded bg-white/70 dark:bg-slate-700" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Left Content */}
                    <div className="space-y-7 lg:col-span-2">

                        {/* Event Information */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {[1, 2].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <div className="size-12 shrink-0 animate-pulse rounded-xl bg-emerald-100 dark:bg-slate-800" />
                                    <div className="flex-1 space-y-2">
                                        <div className="h-3 w-20 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                        <div className="h-4 w-3/4 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* About Event */}
                        <section className="rounded-3xl border border-emerald-100 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
                            <div className="mb-7 flex items-center gap-3">
                                <div className="size-11 animate-pulse rounded-xl bg-emerald-100 dark:bg-slate-800" />
                                <div className="flex-1 space-y-2">
                                    <div className="h-5 w-44 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                                    <div className="h-3 w-52 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                <div className="h-3 w-5/6 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                <div className="h-3 w-2/3 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                            </div>
                        </section>
                    </div>

                    {/* Join Event Sidebar */}
                    <aside>
                        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white dark:border-slate-800 dark:bg-slate-900">

                            {/* Sidebar Header */}
                            <div className="space-y-4 bg-emerald-100 p-6 dark:bg-emerald-950/50">
                                <div className="size-12 animate-pulse rounded-2xl bg-emerald-200 dark:bg-emerald-900" />
                                <div className="h-7 w-4/5 animate-pulse rounded bg-emerald-200 dark:bg-emerald-900" />
                                <div className="h-3 w-full animate-pulse rounded bg-emerald-200 dark:bg-emerald-900" />
                                <div className="h-3 w-3/4 animate-pulse rounded bg-emerald-200 dark:bg-emerald-900" />
                            </div>

                            {/* Sidebar Content */}
                            <div className="space-y-5 p-6">
                                {[1, 2].map((item) => (
                                    <div key={item} className="flex items-start gap-3">
                                        <div className="size-10 shrink-0 animate-pulse rounded-xl bg-emerald-100 dark:bg-slate-800" />
                                        <div className="flex-1 space-y-2">
                                            <div className="h-4 w-36 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                                            <div className="h-3 w-full animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                            <div className="h-3 w-4/5 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                        </div>
                                    </div>
                                ))}

                                <div className="border-t border-slate-100 pt-5 dark:border-slate-800">
                                    <div className="h-12 w-full animate-pulse rounded-xl bg-emerald-100 dark:bg-emerald-900/50" />
                                    <div className="mx-auto mt-3 h-3 w-4/5 animate-pulse rounded bg-slate-100 dark:bg-slate-800" />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
