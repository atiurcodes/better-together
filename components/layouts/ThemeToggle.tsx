"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "../ui/button";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    const mounted = useSyncExternalStore(
        () => () => { },
        () => true,
        () => false
    );

    if (!mounted) return null;

    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="outline"
            size="icon"
            className="size-10 cursor-pointer rounded-full border-[#DCE6D8] bg-white text-lg hover:bg-[#E2EDE0] dark:border-[#2D4434] dark:bg-[#1C3023] dark:hover:bg-[#263C2D]"
            aria-label="Toggle theme"
        >
            {theme === "light" ? "🌙" : "☀️"}
        </Button>
    );
}
