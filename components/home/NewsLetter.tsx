
import { Mail, ArrowRight } from "lucide-react";

export default function Newsletter() {
    return (
        <section className="bg-[#F3F7EF] px-4 py-14 transition-colors duration-300 sm:px-6 sm:py-16 lg:py-24 dark:bg-[#0B0F0D]">

            <div className="mx-auto max-w-7xl">

                <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-[#183D2A] via-[#244B35] to-[#183D2A] px-5 py-12 text-center shadow-xl shadow-[#183D2A]/10 sm:px-10 sm:py-16 lg:rounded-[2rem] lg:px-20 lg:py-20">

                    {/* Decorative Circles */}
                    <div className="pointer-events-none absolute -right-20 -top-24 -z-10 size-72 rounded-full border-[35px] border-white/[0.04]" />

                    <div className="pointer-events-none absolute -bottom-28 -left-20 -z-10 size-80 rounded-full border-[35px] border-white/[0.04]" />

                    <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-[#397D48]/20 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-2xl">

                        {/* Icon */}
                        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#A5D8AC] shadow-lg backdrop-blur-md sm:size-16">
                            <Mail size={27} strokeWidth={1.8} />
                        </div>

                        {/* Heading */}
                        <h2 className="mt-6 font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:mt-7 sm:text-4xl lg:text-5xl">
                            Stay Connected.
                            <span className="mt-2 block text-[#A5D8AC]">
                                Stay Inspired.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#D5E7D7]/80 sm:text-base sm:leading-8 lg:text-lg">
                            Discover upcoming community events, inspiring
                            stories, and meaningful opportunities to make
                            a difference. Let&apos;s grow together!
                        </p>

                        {/* Newsletter Form - UI Only */}
                        <form
                            className="mx-auto mt-8 flex max-w-xl flex-col gap-2 rounded-2xl border border-white/20 bg-white p-2 shadow-2xl shadow-black/10 sm:mt-9 sm:flex-row"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                aria-label="Email address"
                                className="h-12 min-w-0 flex-1 rounded-xl bg-transparent px-4 text-sm text-gray-800 outline-none placeholder:text-gray-400 sm:h-12"
                            />

                            <button
                                type="button"
                                className="group cursor-pointer flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#397D48] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#286438] sm:px-7"
                            >
                                Subscribe Now
                                <ArrowRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </button>
                        </form>

                        {/* Bottom Text */}
                        <p className="mt-5 text-xs leading-6 text-[#D5E7D7]/65 sm:text-sm">
                            No spam, ever. Just positivity and community updates. ❤️
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}
