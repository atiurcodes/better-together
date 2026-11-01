"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ImagePlus, LockKeyhole, Mail, UserRound } from "lucide-react";
import React from "react";
import { signIn, signUp } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignUp() {
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userInfo = Object.fromEntries(formData.entries()) as Record<string, string>;
        const { data, error } = await signUp.email({
            name: userInfo.name,
            email: userInfo.email,
            password: userInfo.password,
            // image: userInfo.ImageUrl
        })
        console.log(data, error);
        if (data) {
            redirect('/')
        }
    }

    const handleGoogleSignUp = async () => {
        const resData = await signIn.social({
            provider: 'google'
        })
        console.log(resData);
    }

    return (
        <Card className="border-0 bg-transparent shadow-none">

            <CardHeader className="pb-6 text-left">
                <CardTitle className="text-2xl text-center font-bold tracking-tight text-slate-800 dark:text-white">
                    Create your account
                </CardTitle>

                <CardDescription className="text-sm text-center leading-6 text-slate-500 dark:text-slate-400">
                    Become part of BetterToGather and help make a positive difference in your community.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <form onSubmit={handleOnSubmit}>
                    <FieldGroup className="gap-5">

                        {/* Social Signup */}
                        <Field>
                            <Button
                                onClick={handleGoogleSignUp}
                                variant="outline"
                                type="button"
                                className="h-11 rounded-xl border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-4"
                                >
                                    <path
                                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                        fill="currentColor"
                                    />
                                </svg>
                                Google
                            </Button>
                        </Field>

                        <FieldSeparator className="text-xs text-slate-400 [&>span]:bg-white dark:[&>span]:bg-slate-900">
                            OR CONTINUE WITH EMAIL
                        </FieldSeparator>

                        {/* Name */}
                        <Field>
                            <FieldLabel htmlFor="name" className="font-semibold text-slate-700 dark:text-slate-200">
                                Full Name
                            </FieldLabel>

                            <div className="relative">
                                <UserRound className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    required
                                    className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-10 text-sm focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950"
                                />
                            </div>
                        </Field>

                        {/* Email */}
                        <Field>
                            <FieldLabel htmlFor="email" className="font-semibold text-slate-700 dark:text-slate-200">
                                Email Address
                            </FieldLabel>

                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-10 text-sm focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950"
                                />
                            </div>
                        </Field>

                        {/* Password */}
                        <Field>
                            <FieldLabel htmlFor="password" className="font-semibold text-slate-700 dark:text-slate-200">
                                Password
                            </FieldLabel>

                            <div className="relative">
                                <LockKeyhole className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="Create a strong password"
                                    required
                                    className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-10 text-sm focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950"
                                />
                            </div>
                        </Field>

                        {/* Image URL */}
                        {/* <Field>
                            <FieldLabel htmlFor="ImageUrl" className="font-semibold text-slate-700 dark:text-slate-200">
                                Profile Image URL
                            </FieldLabel>

                            <div className="relative">
                                <ImagePlus className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" />

                                <Input
                                    id="ImageUrl"
                                    name="ImageUrl"
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    required
                                    className="h-12 rounded-xl border-slate-200 bg-slate-50 pl-10 text-sm focus-visible:border-emerald-500 focus-visible:ring-emerald-500/20 dark:border-slate-700 dark:bg-slate-950"
                                />
                            </div>
                        </Field> */}

                        {/* Submit */}
                        <Field className="gap-4 pt-2">
                            <Button
                                type="submit"
                                className="h-12 w-full rounded-xl bg-emerald-600 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-emerald-600/30"
                            >
                                Create Account
                            </Button>

                            <FieldDescription className="text-center text-sm text-slate-500 dark:text-slate-400">
                                Already a member?{" "}
                                <Link
                                    href="/sign-in"
                                    className="font-semibold text-emerald-700 hover:text-emerald-800 hover:underline dark:text-emerald-400"
                                >
                                    Log in
                                </Link>
                            </FieldDescription>
                        </Field>

                    </FieldGroup>
                </form>
            </CardContent>
        </Card>
    );
}
