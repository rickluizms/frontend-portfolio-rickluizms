"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
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
            className="scroll-reveal mx-auto max-w-6xl px-6 mb-24"
            id="contato"
        >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Contato
            </h2>
            <p className="mb-10 max-w-2xl text-base text-muted-foreground sm:text-lg">
                Quer conversar sobre um projeto, uma oportunidade ou trocar uma
                ideia sobre tecnologia? Me chama.
            </p>

            <div className="flex flex-wrap gap-4">
                {contactLinks.map((link) => {
                    const Icon = iconMap[link.label] || Mail;
                    return (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                        >
                            <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                            <span className="text-sm font-medium text-foreground">
                                {link.label}
                            </span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
