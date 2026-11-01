import SignIn from "@/components/auth/SignIn";
import { Leaf } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F0F9F4] px-4 py-12 transition-colors duration-300 dark:bg-slate-950">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-32 -top-32 size-80 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/20" />
            <div className="pointer-events-none absolute -bottom-32 -right-32 size-96 rounded-full bg-green-200/40 blur-3xl dark:bg-green-900/20" />

            <div className="relative z-10 w-full max-w-lg">

                {/* Brand */}
                <div className="mb-8 text-center">
                    <Link
                        href="/"
                        className="mb-6 inline-flex items-center gap-2.5"
                    >
                        <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                            <Leaf size={25} />
                        </div>

                        <span className="text-2xl font-bold tracking-tight text-slate-800 dark:text-white">
                            GoodTo<span className="text-emerald-600">Gather</span>
                        </span>
                    </Link>
                </div>

                {/* Sign In Card */}
                <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-xl shadow-emerald-900/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900">

                    <SignIn />

                </div>

                {/* Footer */}
                <p className="mt-7 text-center text-sm text-slate-500 dark:text-slate-400">
                    Together, we can make a positive difference in our community.
                </p>

                {/* Copyright */}
                <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
                    © {new Date().getFullYear()} GoodGather. Making a difference together.
                </p>

            </div>
        </main>
    );
}