"use client";

import { useEffect, useRef } from "react";
import { experiences } from "@/lib/mock-data";

export function Experience() {
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
            className="scroll-reveal mx-auto max-w-7xl px-6 mb-24 min-h-screen flex flex-col justify-center"
            id="experiencias"
        >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Experiências
            </h2>

            <div className="mt-10 relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border/60 hidden md:block" />

                <div className="space-y-12 md:pl-10">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative group">
                            {/* Timeline dot */}
                            <div className="absolute -left-10 top-1.5 hidden md:flex h-3 w-3 items-center justify-center">
                                <div className="h-2 w-2 rounded-full bg-primary/40 transition-colors duration-300 group-hover:bg-primary" />
                            </div>

                            <div className="space-y-3">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                    <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-muted-foreground/60">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-sm font-medium text-primary/70">
                                    {exp.company}
                                </p>

                                <p className="text-sm leading-relaxed text-muted-foreground max-w-2xl">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1">
                                    {exp.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs text-muted-foreground/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
