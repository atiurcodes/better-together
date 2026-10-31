
export default function Newsletter() {
    return (
        <section className="bg-white px-6 py-20 transition-colors duration-300 dark:bg-[#0B0F0D] lg:py-28">
            <div className="mx-auto max-w-7xl">

                <div className="relative overflow-hidden rounded-[2rem] bg-[#183D2A] px-6 py-16 text-center sm:px-12 lg:px-20 lg:py-20">

                    {/* Decorative Circles */}
                    <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[30px] border-white/5" />

                    <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[30px] border-white/5" />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-2xl">

                        {/* Icon */}
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                            ✉️
                        </div>

                        {/* Heading */}
                        <h2 className="mt-7 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Stay Connected.
                            <span className="block text-[#A5D8AC]">
                                Stay Inspired.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-green-100/80 sm:text-lg">
                            Get the latest community events, inspiring
                            stories, and opportunities to make a
                            difference. Let&apos;s grow together!
                        </p>

                        {/* Newsletter Form - UI Only */}
                        <form className="mx-auto mt-9 flex max-w-xl flex-col gap-3 rounded-2xl bg-white p-2 sm:flex-row"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                aria-label="Email address"
                                className="min-w-0 flex-1 rounded-xl px-4 py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                            />

                            <button className="rounded-xl bg-[#397D48] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#286438]"
                            >
                                Subscribe Now →
                            </button>
                        </form>

                        {/* Bottom Text */}
                        <p className="mt-5 text-sm text-green-100/70">
                            No spam, ever. Just positivity and community updates. ❤️
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
}