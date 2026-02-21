"use client";

import { useEffect, useRef } from "react";
import { skills } from "@/lib/mock-data";

export function Resume() {
    const sectionRef = useRef<HTMLElement>(null);

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

    return (
        <section
            ref={sectionRef}
            className="scroll-reveal mx-auto max-w-6xl px-6 mb-24"
            id="resumo"
        >
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Resumo
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {skills.map((group) => (
                    <div
                        key={group.category}
                        className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                <group.icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-semibold text-foreground">
                                {group.category}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-border bg-muted/50 px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
