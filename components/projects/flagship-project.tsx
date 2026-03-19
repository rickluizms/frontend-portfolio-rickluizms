"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

import { motion, useScroll, useTransform } from "framer-motion";

const TECH_STACK = [
    { name: "Python", icon: "/python.svg" },
    { name: "Kafka", icon: "/kafka.svg" },
    { name: "PostgreSQL", icon: "/postgresql.svg" },
    { name: "Docker", icon: "/docker.svg" },
];

export function FlagshipProject() {
    const sectionRef = useRef<HTMLElement>(null);

    // Track scroll progress of this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        // "start end" = top of element hits bottom of viewport
        // "center center" = center of element hits center of viewport
        offset: ["start end", "center center"],
    });

    // Map the scroll progress [0, 1] to a scale [0.85, 1] and opacity [0.4, 1]
    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.4, 1]);

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
        <motion.section
            ref={sectionRef}
            style={{ scale, opacity }}
            className="scroll-reveal relative mb-20 w-full overflow-hidden rounded-2xl"
        >
            {/* Background with gradient + grid pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-chart-3/5" />
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            {/* Floating glow orbs */}
            <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-chart-3/10 blur-[80px] animate-pulse [animation-delay:1s]" />

            {/* Content */}
            <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-8 py-20 text-center">
                {/* Badge */}
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-medium tracking-wider text-primary uppercase">
                        Projeto em Destaque
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Crypto Market Data Pipeline
                </h3>

                {/* Description */}
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Ecossistema completo de processamento de dados em tempo real.
                    Monitoramento do mercado de criptomoedas através de conexões
                    <span className="text-foreground font-medium"> WebSocket, Apache Kafka e TA-Lib</span>
                    , com foco em alta escalabilidade, baixa latência e observabilidade profunda via Prometheus e Grafana.
                </p>

                {/* Tech stack */}
                <div className="mt-10 flex items-center gap-6">
                    {TECH_STACK.map((tech) => (
                        <div
                            key={tech.name}
                            className="group/tech flex flex-col items-center gap-2"
                            title={tech.name}
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm transition-all duration-300 group-hover/tech:border-primary/30 group-hover/tech:shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 object-contain"
                                />
                            </div>
                            <span className="text-[10px] font-medium text-muted-foreground/60 tracking-wide">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="mt-12 flex items-center gap-4">
                    <a
                        href="https://github.com/rickluizms/event-driven-crypto-pipeline"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/cta inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] hover:scale-[1.02]"
                    >
                        Ver Repositório GitHub
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
                    </a>

                    <Link
                        href="#projetos"
                        className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-6 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-foreground/20 hover:text-foreground"
                    >
                        Outros Projetos
                    </Link>
                </div>
            </div>
        </motion.section>
    );
}
