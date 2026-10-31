import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#DCEBDD] via-[#EDF4E9] to-[#F8FAF5] transition-colors duration-300 dark:from-[#1D3827] dark:via-[#172B20] dark:to-[#101B14]">

            <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

                    {/* Left Content */}
                    <div>
                        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#BBD3B5]/70 bg-[#E8F1E5] px-4 py-2 text-sm font-medium text-[#397D48] dark:border-[#628B65]/30 dark:bg-[#294331] dark:text-[#BBD3B5]">
                            <span className="text-lg">🌱</span>
                            Together for a better world
                        </div>

                        <h1 className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-[#183D2A] dark:text-[#E5F2E7] sm:text-6xl lg:text-7xl">
                            Small Acts,
                            <br />
                            <span className="text-[#397D48] dark:text-[#91B88F]">
                                Big Changes.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-lg font-sans text-base leading-8 text-[#526B55] dark:text-[#BBD3B5] sm:text-lg">
                            Great things happen when people come together.
                            Join our community, support meaningful causes,
                            and make a positive impact on the world.
                        </p>

                        {/* Buttons */}
                        <div className="mt-9 flex flex-wrap items-center gap-4">
                            <Link
                                href="#campaigns"
                                className="inline-flex items-center gap-2 rounded-xl bg-[#244B35] px-7 py-4 font-semibold text-white shadow-md shadow-[#244B35]/15 transition-all hover:-translate-y-0.5 hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#628B65]"
                            >
                                Explore Campaigns
                                <span>→</span>
                            </Link>

                            <Link
                                href="/signup"
                                className="rounded-xl border border-[#628B65]/50 bg-white/50 px-7 py-4 font-semibold text-[#244B35] transition-colors hover:bg-[#E2EDE0] dark:border-[#628B65]/50 dark:bg-white/5 dark:text-[#BBD3B5] dark:hover:bg-[#294331]"
                            >
                                Join Community
                            </Link>
                        </div>

                        {/* Small Stats */}
                        <div className="mt-14 flex flex-wrap gap-10">
                            <div>
                                <h3 className="font-heading text-3xl font-bold text-[#183D2A] dark:text-[#E5F2E7]">
                                    1.2K+
                                </h3>
                                <p className="mt-1 font-sans text-sm text-[#718473] dark:text-[#A8BDA9]">
                                    Active Members
                                </p>
                            </div>

                            <div>
                                <h3 className="font-heading text-3xl font-bold text-[#183D2A] dark:text-[#E5F2E7]">
                                    50+
                                </h3>
                                <p className="mt-1 font-sans text-sm text-[#718473] dark:text-[#A8BDA9]">
                                    Campaigns
                                </p>
                            </div>

                            <div>
                                <h3 className="font-heading text-3xl font-bold text-[#183D2A] dark:text-[#E5F2E7]">
                                    20+
                                </h3>
                                <p className="mt-1 font-sans text-sm text-[#718473] dark:text-[#A8BDA9]">
                                    Communities
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Illustration */}
                    <div className="relative">
                        {/* Background Shape */}
                        <div className="absolute inset-5 rotate-6 rounded-[3rem] bg-[#BBD3B5] dark:bg-[#294331]"></div>

                        {/* Main Card */}
                        <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-[#244B35]/10 transition-colors duration-300 dark:border-[#344B39] dark:bg-[#1A2A20] dark:shadow-black/30 sm:p-9">

                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-[#718473] dark:text-[#A8BDA9]">
                                        Community Impact
                                    </p>
                                    <h3 className="mt-1 font-heading text-2xl font-bold text-[#183D2A] dark:text-[#E5F2E7]">
                                        Growing Together
                                    </h3>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E2EDE0] text-2xl dark:bg-[#294331]">
                                    🌿
                                </div>
                            </div>

                            {/* Illustration Area */}
                            <div className="rounded-2xl bg-gradient-to-br from-[#E2EDE0] to-[#F3F7EF] p-8 text-center transition-colors dark:from-[#294331] dark:to-[#1D3024] sm:p-10">
                                <div className="mb-5 text-7xl sm:text-8xl">
                                    🌳
                                </div>

                                <h3 className="font-heading text-2xl font-bold text-[#244B35] dark:text-[#BBD3B5]">
                                    One Community.
                                    <br />
                                    Endless Possibilities.
                                </h3>

                                <p className="mt-3 text-sm text-[#718473] dark:text-[#A8BDA9]">
                                    Every small contribution matters.
                                </p>
                            </div>

                            {/* Members */}
                            <div className="mt-7 flex items-center justify-between">
                                <div className="flex -space-x-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#E9BFA7] dark:border-[#1A2A20]">
                                        👨
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#E5D2A9] dark:border-[#1A2A20]">
                                        👩
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#BBD3B5] dark:border-[#1A2A20]">
                                        🧑
                                    </div>

                                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#397D48] text-xs font-bold text-white dark:border-[#1A2A20] dark:bg-[#628B65]">
                                        +99
                                    </div>
                                </div>

                                <p className="text-sm font-medium text-[#397D48] dark:text-[#91B88F]">
                                    Making a difference ❤️
                                </p>
                            </div>
                        </div>

                        {/* Floating Decoration */}
                        <div className="absolute -right-3 -top-7 rotate-6 rounded-2xl border border-[#DCE6D8] bg-white p-4 shadow-lg dark:border-[#344B39] dark:bg-[#29402F] sm:-right-7">
                            <span className="text-3xl">🌱</span>
                        </div>

                        <div className="absolute -bottom-6 -left-4 rounded-2xl border border-[#DCE6D8] bg-white px-5 py-3 shadow-lg dark:border-[#344B39] dark:bg-[#29402F]">
                            <p className="text-sm font-semibold text-[#397D48] dark:text-[#BBD3B5]">
                                ✨ Be the change!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}