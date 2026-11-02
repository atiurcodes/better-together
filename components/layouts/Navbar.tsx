
"use client";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import {
    CalendarPlus,
    LayoutDashboard,
    LogOut,
    Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

const navLinks = [
    { name: "Upcoming event", href: "/upcoming-event" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleLogOut = async () => {
        await authClient.signOut();
        toast.success("Logged out successfully!");
        router.push("/");
    };

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
                <div>
                    {user ? (
                        <div className="flex items-center gap-2">
                            <ThemeToggle />

                            <DropdownMenu>
                                <DropdownMenuTrigger
                                    className="group relative mt-1 cursor-pointer rounded-full outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-[#628B65] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#14251B]"
                                >
                                    <Avatar className="size-10 border-2 border-[#A8C4A5] bg-[#E2EDE0] shadow-sm transition-all duration-200 group-hover:border-[#397D48] group-hover:shadow-md dark:border-[#3D5944] dark:bg-[#263C2D] dark:group-hover:border-[#91B88F]">
                                        <AvatarImage
                                            src={user.image!}
                                            alt={user.name}
                                            className="object-cover"
                                        />

                                        <AvatarFallback className="bg-[#E2EDE0] text-sm font-bold text-[#244B35] dark:bg-[#263C2D] dark:text-[#E2EDE0]">
                                            {user.name.split(" ")[0].charAt(0).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>

                                    {/* Custom Tooltip */}
                                    <span className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-lg border border-[#DCE6D8] bg-white px-3 py-1.5 text-xs font-semibold text-[#244B35] opacity-0 shadow-lg transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 dark:border-[#3D5944] dark:bg-[#263C2D] dark:text-[#E2EDE0]">
                                        {user.name}
                                    </span>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    sideOffset={12}
                                    className="w-64 overflow-hidden rounded-2xl border border-emerald-100 bg-white p-2 shadow-xl"
                                >
                                    {/* User Information */}
                                    <DropdownMenuGroup>
                                        <DropdownMenuLabel className="px-3 py-3 font-normal">
                                            <div>
                                                <p className="text-sm font-bold text-[#244B35]">
                                                    {user.name}
                                                </p>

                                                <p className="text-xs text-gray-500">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </DropdownMenuLabel>
                                    </DropdownMenuGroup>

                                    <DropdownMenuSeparator className="bg-emerald-100" />

                                    {/* Create Event */}
                                    <DropdownMenuItem className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors focus:bg-emerald-50 focus:text-[#244B35]">
                                        <CalendarPlus className="size-4 text-emerald-700" />
                                        <Link href='/event/add-event'>Create Event</Link>
                                    </DropdownMenuItem>

                                    {/* Manage Events */}
                                    <Link href={`/manage-events`}>
                                        <DropdownMenuItem className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors focus:bg-emerald-50 focus:text-[#244B35]">
                                            <LayoutDashboard className="size-4 text-emerald-700" />
                                            Manage Events
                                        </DropdownMenuItem>
                                    </Link>

                                    {/* Joined Events */}
                                    <Link href='/joined-event'>
                                        <DropdownMenuItem className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors focus:bg-emerald-50 focus:text-[#244B35]">
                                            <Users className="size-4 text-emerald-700" />
                                            Joined Events
                                        </DropdownMenuItem>
                                    </Link>

                                    <DropdownMenuSeparator className="bg-emerald-100" />

                                    {/* Logout */}
                                    <DropdownMenuItem
                                        onClick={handleLogOut}
                                        className="cursor-pointer gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-red-600 transition-colors focus:bg-red-50 focus:text-red-600"
                                    >
                                        <LogOut className="size-4" />
                                        Logout
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {/* Logout */}
                            <Button
                                onClick={handleLogOut}
                                variant="outline"
                                className="gap-2 border-red-200 cursor-pointer text-red-600 transition-colors hover:bg-red-50 hover:text-red-700 dark:border-[#3D5944] dark:text-[#E2EDE0] dark:hover:border-[#628B65] dark:hover:bg-[#263C2D] dark:hover:text-[#A8C4A5]"
                            >
                                <LogOut className="size-4" />
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="hidden items-center gap-3 md:flex">
                            <ThemeToggle />

                            <Link
                                href="/sign-in"
                                className="text-sm font-semibold text-[#244B35] transition-colors hover:text-[#628B65] dark:text-[#E2EDE0] dark:hover:text-[#91B88F]"
                            >
                                Login
                            </Link>
                        </div>
                    )}
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
                                href="/sign-in"
                                onClick={() => setIsOpen(false)}
                                className="flex-1 rounded-full border border-[#244B35] py-2.5 text-center text-sm font-semibold text-[#244B35] transition-colors hover:bg-[#E2EDE0] dark:border-[#628B65] dark:text-[#E2EDE0] dark:hover:bg-[#263C2D]"
                            >
                                Login
                            </Link>

                            <Link
                                href="/sign-up"
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
