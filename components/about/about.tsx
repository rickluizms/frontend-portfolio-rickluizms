"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { aboutSections } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

const CAROUSEL_INTERVAL = 15000;

export function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // ── Scroll-reveal ────────────────────────────────────
    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add("scroll-revealed");
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    // ── Transition helper ────────────────────────────────
    const switchTo = useCallback(
        (index: number) => {
            if (index === activeIndex) return;
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex(index);
                setIsTransitioning(false);
            }, 200);
        },
        [activeIndex]
    );

    // ── Auto-carousel ────────────────────────────────────
    const startInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % aboutSections.length);
                setIsTransitioning(false);
            }, 200);
        }, CAROUSEL_INTERVAL);
    }, []);

    useEffect(() => {
        startInterval();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [startInterval]);

    // ── Manual click ─────────────────────────────────────
    const handleNavClick = (index: number) => {
        switchTo(index);
        startInterval(); // reset timer on manual click
    };

    const activeSection = aboutSections[activeIndex];

    return (
        <section
            ref={sectionRef}
            className="scroll-reveal mx-auto max-w-7xl px-6 mb-24 min-h-screen flex flex-col justify-center"
            id="about"
        >
            <div className="flex flex-col items-start justify-start">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">

                </h2>
            </div>

            {/* ── Two-column layout ─────────────────────── */}
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.8fr] mt-10">
                {/* ── Left: Headline + Vertical navigation ── */}
                <div className="flex flex-col">
                    {/* ── Headline ────────────────────────── */}
                    <p className="text-3xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-3xl">
                        Sobre mim:
                    </p>

                    {/* ── Navigation ──────────────────────── */}
                    <nav className="mt-8 flex flex-row gap-1 overflow-x-auto md:flex-col md:gap-2 md:overflow-x-visible">
                        {aboutSections.map((section, index) => (
                            <button
                                key={section.title}
                                onClick={() => handleNavClick(index)}
                                className={cn(
                                    "whitespace-nowrap rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 cursor-pointer",
                                    "md:whitespace-normal md:border-l-2 md:rounded-none md:rounded-r-lg",
                                    index === activeIndex
                                        ? "border-primary bg-muted text-foreground md:border-l-primary"
                                        : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground md:border-l-transparent"
                                )}
                            >
                                {section.title}
                            </button>
                        ))}
                    </nav>
                </div>

                {/* ── Right: Content panel ───────────────── */}
                <div className="relative">
                    <Card className="rounded-2xl border-0 bg-background/3 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out dark:bg-card/5">
                        <CardContent className="p-8 sm:p-10 lg:p-12">
                            <div
                                className={cn(
                                    "transition-all duration-300 ease-in-out",
                                    isTransitioning
                                        ? "translate-y-2 opacity-0"
                                        : "translate-y-0 opacity-100"
                                )}
                            >
                                {/* Title */}
                                <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                                    {activeSection.title}
                                </h3>

                                {/* Overview */}
                                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                                    {activeSection.overview}
                                </p>

                                {/* Activities */}
                                <ul className="mt-8 space-y-4">
                                    {activeSection.activities.map((activity) => (
                                        <li
                                            key={activity}
                                            className="border-l-2 border-primary/30 pl-4 text-sm text-foreground/80 sm:text-base"
                                        >
                                            {activity}
                                        </li>
                                    ))}
                                </ul>

                                {/* Result */}
                                <p className="mt-8 text-sm font-medium tracking-wide text-muted-foreground uppercase">
                                    <span className="text-primary">↳</span>{" "}
                                    {activeSection.result}
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
