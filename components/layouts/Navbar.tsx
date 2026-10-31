"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Upcoming event", href: "/upcoming-event" },
    { name: "Add event", href: "/event/add-event" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-[#DCE6D8] bg-[#F3F7EF]/95 backdrop-blur-md dark:border-[#2D4434] dark:bg-[#14251B]/95">

            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#244B35] text-white transition-colors dark:bg-[#628B65]">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            className="h-7 w-7"
                        >
                            <path d="M12 21V11" strokeLinecap="round" />
                            <path
                                d="M12 13C5 13 3 8 4 3c6 0 10 3 8 10Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M12 17c0-6 4-9 9-9 0 5-2 9-9 9Z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div>
                        <h1 className="font-heading text-xl font-bold tracking-tight text-[#244B35] dark:text-[#E2EDE0]">
                            BetterTogether
                        </h1>

                        <p className="font-heading text-[10px] font-medium tracking-[0.15em] text-[#628B65] dark:text-[#A8C4A5]">
                            TOGETHER FOR GOOD
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-[#526B55] transition-colors hover:text-[#397D48] dark:text-[#BBD3B5] dark:hover:text-[#91B88F]"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Actions */}
                <div className="hidden items-center gap-3 md:flex">

                    <ThemeToggle />

                    <Link
                        href="/login"
                        className="text-sm font-semibold text-[#244B35] transition-colors hover:text-[#628B65] dark:text-[#E2EDE0] dark:hover:text-[#91B88F]"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="rounded-full bg-[#244B35] px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#628B65]"
                    >
                        Join Us <span className="ml-1">↗</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                    className="rounded-lg p-2 text-[#244B35] transition-colors hover:bg-[#E2EDE0] dark:text-[#E2EDE0] dark:hover:bg-[#263C2D] md:hidden"
                >
                    {isOpen ? (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6"
                        >
                            <path d="m18 6-12 12M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-6 w-6"
                        >
                            <path d="M4 7h16M4 12h16M4 17h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t border-[#DCE6D8] bg-[#F3F7EF] px-5 py-5 dark:border-[#2D4434] dark:bg-[#14251B] md:hidden">

                    <div className="flex flex-col gap-4">

                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-sm font-medium text-[#526B55] transition-colors hover:text-[#397D48] dark:text-[#BBD3B5] dark:hover:text-[#91B88F]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Theme Toggle */}
                        <div className="flex items-center justify-between border-t border-[#DCE6D8] pt-4 dark:border-[#2D4434]">
                            <span className="text-sm font-medium text-[#526B55] dark:text-[#BBD3B5]">
                                Appearance
                            </span>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex gap-3 border-t border-[#DCE6D8] pt-4 dark:border-[#2D4434]">

                            <Link
                                href="/login"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 rounded-full border border-[#244B35] py-2.5 text-center text-sm font-semibold text-[#244B35] transition-colors hover:bg-[#E2EDE0] dark:border-[#628B65] dark:text-[#E2EDE0] dark:hover:bg-[#263C2D]"
                            >
                                Login
                            </Link>

                            <Link
                                href="/register"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 rounded-full bg-[#244B35] py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#397D48] dark:bg-[#397D48] dark:hover:bg-[#628B65]"
                            >
                                Join Us ↗
                            </Link>

                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}