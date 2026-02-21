"use client";

import { useEffect, useState } from "react";
import { Github, Moon, Sun } from "lucide-react";

export function Header() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = localStorage.getItem("theme");
        if (
            stored === "dark" ||
            (!stored &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const next = theme === "light" ? "dark" : "light";
        setTheme(next);
        document.documentElement.classList.toggle("dark", next === "dark");
        localStorage.setItem("theme", next);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-end gap-3 px-6 py-4">
            <a
                href="https://github.com/rickluizms"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
            >
                <Github className="h-5 w-5" />
            </a>

            <button
                onClick={toggleTheme}
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Alternar tema"
            >
                {mounted ? (
                    theme === "dark" ? (
                        <Sun className="h-5 w-5" />
                    ) : (
                        <Moon className="h-5 w-5" />
                    )
                ) : (
                    <Moon className="h-5 w-5" />
                )}
            </button>
        </header>
    );
}
