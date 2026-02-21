"use client";

import { useEffect, useRef } from "react";
import { aboutParagraphs } from "@/lib/mock-data";

export function About() {
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
            id="about"
        >
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sobre mim
            </h2>

            <div className="space-y-6">
                {aboutParagraphs.map((text, i) => (
                    <p
                        key={i}
                        className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                    >
                        {text}
                    </p>
                ))}
            </div>
        </section>
    );
}
