"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function GoogleAuthToast() {
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        if (searchParams.get("googleSuccess") === "true") {
            toast.success("Google sign up successful!");
            router.replace("/");
        }

        if (searchParams.get("loginSuccess") === "true") {
            toast.success("Login successful!");
            router.replace("/");
        }
    }, [searchParams, router]);

    return null;
}