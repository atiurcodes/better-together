import Link from "next/link";
import {
    HeartHandshake,
    MapPin,
    Heart,
} from "lucide-react";

const footerSections = [
    {
        title: "Explore",
        links: [
            { name: "Upcoming Events", href: "/upcoming-event" },
            { name: "Create an Event", href: "/create-event" },
            { name: "Manage My Events", href: "/manage-events" },
            { name: "My Joined Events", href: "/joined-events" },
        ],
    },
    {
        title: "Our Causes",
        links: [
            { name: "Environmental Care", href: "/upcoming-event" },
            { name: "Education Support", href: "/upcoming-event" },
            { name: "Community Care", href: "/upcoming-event" },
            { name: "Health & Wellness", href: "/upcoming-event" },
        ],
    },
    {
        title: "Connect",
        links: [
            { name: "About Us", href: "/about" },
            { name: "Contact Us", href: "/contact" },
            { name: "Join Community", href: "/upcoming-event" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-[#DCE6D8] bg-[#F3F7EF] text-[#183D2A] dark:border-[#2D4434] dark:bg-[#14251B] dark:text-[#E2EDE0]">

            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2.5"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#244B35] text-white dark:bg-[#628B65]">
                                <HeartHandshake size={22} />
                            </span>

                            <span className="text-xl font-bold tracking-tight text-[#244B35] dark:text-[#E2EDE0]">
                                Better
                                <span className="text-[#628B65] dark:text-[#91B88F]">
                                    Together
                                </span>
                            </span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-7 text-[#647866] dark:text-[#A8BDA9]">
                            A community-driven platform empowering people
                            to come together, support meaningful causes,
                            and create positive social change.
                        </p>

                        <div className="mt-4 flex items-center gap-2 text-xs text-[#758B76] dark:text-[#91A993]">
                            <MapPin
                                size={15}
                                className="text-[#397D48] dark:text-[#91B88F]"
                            />
                            Bangladesh · Community Impact
                        </div>
                    </div>

                    {/* Footer Navigation */}
                    {footerSections.map((section) => (
                        <div key={section.title}>
                            <h3 className="mb-5 text-sm font-bold uppercase tracking-wide text-[#244B35] dark:text-[#D5E7D7]">
                                {section.title}
                            </h3>

                            <ul className="space-y-3.5">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="w-fit text-sm text-[#647866] transition-colors duration-200 hover:text-[#397D48] dark:text-[#A8BDA9] dark:hover:text-[#91B88F]"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#DCE6D8] pt-6 dark:border-[#2D4434] sm:flex-row">

                    <p className="text-center text-xs text-[#758B76] dark:text-[#91A993] sm:text-left">
                        © 2026 BetterTogether.
                        All rights reserved.
                    </p>

                    <p className="flex items-center gap-1.5 text-xs text-[#758B76] dark:text-[#91A993]">
                        Made with
                        <Heart
                            size={13}
                            className="fill-rose-500 text-rose-500"
                        />
                        for a better tomorrow.
                    </p>

                </div>

            </div>
        </footer>
    );
}