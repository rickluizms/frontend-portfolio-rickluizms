"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github, Folder, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/lib/mock-data";

const ITEMS_PER_PAGE = 6; // 2 rows × 3 columns

export function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
    const paginatedProjects = projects.slice(
        page * ITEMS_PER_PAGE,
        (page + 1) * ITEMS_PER_PAGE
    );

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
            id="projetos"
        >
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Projetos
            </h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProjects.map((project) => (
                    <div
                        key={project.title}
                        className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <Folder className="h-8 w-8 text-primary/60 transition-colors group-hover:text-primary" />
                            <div className="flex gap-2">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
                                        aria-label={`GitHub - ${project.title}`}
                                    >
                                        <Github className="h-4 w-4" />
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
                                        aria-label={`Demo - ${project.title}`}
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                    </a>
                                )}
                            </div>
                        </div>

                        <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                            {project.title}
                        </h3>

                        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs text-muted-foreground/70"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-8 flex items-center justify-center gap-4">
                    <button
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Página anterior"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${i === page
                                        ? "bg-primary w-6"
                                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                                aria-label={`Página ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() =>
                            setPage((p) => Math.min(totalPages - 1, p + 1))
                        }
                        disabled={page === totalPages - 1}
                        className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                        aria-label="Próxima página"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            )}
        </section>
    );
}
