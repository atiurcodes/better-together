
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    ArrowRight,
    CalendarX,
    Home,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
} from "@/components/ui/card";

export default function NotFound() {
    return (
        <main className="flex min-h-[80vh] items-center justify-center bg-white px-6 py-16">
            <Card className="w-full max-w-xl border-emerald-100 shadow-sm">
                <CardContent className="flex flex-col items-center px-6 py-12 text-center sm:px-10">

                    {/* Illustration */}
                    <div className="relative mb-6 flex size-24 items-center justify-center rounded-full bg-emerald-50">
                        <CalendarX className="size-12 text-emerald-600" />

                        <span className="absolute -right-1 -top-1 flex size-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                            !
                        </span>
                    </div>

                    {/* Error Code */}
                    <p className="text-7xl font-extrabold tracking-tight text-emerald-600 sm:text-8xl">
                        404
                    </p>

                    {/* Heading */}
                    <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        Oops! Page Not Found
                    </h1>

                    {/* Description */}
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-500 sm:text-base">
                        Looks like this event has gone missing!
                        The page you&apos;re looking for doesn&apos;t exist
                        or may have been moved.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">

                        <Link
                            href="/"
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-emerald-700"
                        >
                            <Home className="size-4" />
                            Back to Home
                        </Link>

                        <Link
                            href="/upcoming-event"
                            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-emerald-200 bg-white px-4 text-sm font-medium text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
                        >
                            Explore Events
                            <ArrowRight className="size-4" />
                        </Link>

                    </div>

                    {/* Back Link */}
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-emerald-600"
                    >
                        <ArrowLeft className="size-4" />
                        Return to homepage
                    </Link>

                </CardContent>
            </Card>
        </main>
    );
}
