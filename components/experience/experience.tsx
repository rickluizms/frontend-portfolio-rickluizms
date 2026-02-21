"use client";

import { useEffect, useRef } from "react";
import { Briefcase } from "lucide-react";
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
            className="scroll-reveal mx-auto max-w-6xl px-6 mb-24"
            id="experiencias"
        >
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Experiências
            </h2>

            <div className="relative">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[19px]" />

                <div className="space-y-10">
                    {experiences.map((exp, i) => (
                        <div key={i} className="relative pl-12">
                            <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                                <Briefcase className="h-4 w-4 text-primary" />
                            </div>

                            <div className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                                <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        {exp.role}
                                    </h3>
                                    <span className="text-sm text-muted-foreground">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="mb-3 text-sm font-medium text-primary/80">
                                    {exp.company}
                                </p>
                                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
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
