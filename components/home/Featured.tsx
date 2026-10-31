const features = [
    {
        id: 1,
        icon: "📅",
        title: "Create Events",
        description:
            "Bring your ideas to life by creating events that inspire and unite your community.",
        color: "bg-[#E5F2E5] dark:bg-[#263D2D]",
    },
    {
        id: 2,
        icon: "🤝",
        title: "Join Community",
        description:
            "Connect with passionate people and become part of something bigger than yourself.",
        color: "bg-[#E8EDF9] dark:bg-[#273449]",
    },
    {
        id: 3,
        icon: "💚",
        title: "Make an Impact",
        description:
            "Take action, support meaningful causes, and create positive changes around you.",
        color: "bg-[#FCEDE5] dark:bg-[#423027]",
    },
    {
        id: 4,
        icon: "📸",
        title: "Share Memories",
        description:
            "Capture beautiful moments and celebrate the difference we make together.",
        color: "bg-[#F2EAF9] dark:bg-[#382C45]",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="bg-white py-20 transition-colors duration-300 dark:bg-[#0B0F0D] lg:py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">

                    <span className="inline-flex items-center rounded-full bg-[#E6F2E5] px-4 py-2 text-sm font-semibold text-[#397D48] dark:bg-[#1D3525] dark:text-[#86C995]">
                        WHAT WE DO
                    </span>

                    <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-[#183D2A] dark:text-[#E5F2E7] sm:text-4xl lg:text-5xl">
                        Making a Difference,
                        <span className="text-[#5B9B65] dark:text-[#86C995]">
                            {" "}Together.
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-gray-600 dark:text-gray-400 sm:text-lg">
                        Discover how BetterTogether helps people connect,
                        collaborate, and create meaningful changes in
                        their communities.
                    </p>

                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group rounded-2xl border border-gray-100 bg-[#FAFCF9] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#B8D8BA] hover:shadow-xl hover:shadow-green-900/5 dark:border-[#26352B] dark:bg-[#151D18] dark:hover:border-[#477C50] dark:hover:shadow-black/20"
                        >

                            {/* Icon */}
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${feature.color}`}
                            >
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="mt-7 font-heading text-xl font-bold text-[#183D2A] dark:text-[#E5F2E7]">
                                {feature.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                                {feature.description}
                            </p>

                            {/* Bottom Decoration */}
                            <div className="mt-7 h-1 w-10 rounded-full bg-[#6BA875] transition-all duration-300 group-hover:w-16 dark:bg-[#86C995]" />

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}