
"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

export default function GoogleAuthToast() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const hasShownToast = useRef(false);

    useEffect(() => {
        if (hasShownToast.current) return;

        const googleSuccess = searchParams.get("googleSuccess");
        const loginSuccess = searchParams.get("loginSuccess");

        if (googleSuccess === "true") {
            hasShownToast.current = true;
            toast.success("Google sign up successful!");
            router.replace("/");
        } else if (loginSuccess === "true") {
            hasShownToast.current = true;
            toast.success("Login successful!");
            router.replace("/");
        }
    }, [searchParams, router]);

    return null;
}
