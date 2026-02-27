"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/lib/mock-data";

const iconMap: Record<string, typeof Github> = {
    GitHub: Github,
    LinkedIn: Linkedin,
    "E-mail": Mail,
};

export function Contact() {
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
            id="contato"
        >
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_1fr]">
                {/* Left: headline */}
                <div>
                    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                        Vamos conversar?
                    </h2>
                    <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                        Quer falar sobre um projeto, uma oportunidade ou trocar
                        uma ideia sobre tecnologia? Me chama.
                    </p>
                </div>

                {/* Right: contact links */}
                <div className="space-y-6">
                    {contactLinks.map((link) => {
                        const Icon = iconMap[link.label] || Mail;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between border-b border-border/40 pb-4 transition-colors hover:border-primary/30"
                            >
                                <div className="flex items-center gap-4">
                                    <Icon className="h-5 w-5 text-muted-foreground/50 transition-colors group-hover:text-primary" />
                                    <span className="text-base font-medium text-foreground">
                                        {link.label}
                                    </span>
                                </div>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
