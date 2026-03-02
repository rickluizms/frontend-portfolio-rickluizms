"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { projects } from "@/lib/mock-data";
import { FlagshipProject } from "./flagship-project";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { N8nWorkflowViewer } from "@/components/ui/n8n-viewer";

const FLAGSHIP_TITLE = "Data Lake CNPJ";
const otherProjects = projects.filter((p) => p.title !== FLAGSHIP_TITLE);

const ITEMS_PER_PAGE = 6;

// Map tech names to SVG filenames in /public
const TECH_ICONS: Record<string, string> = {
    Python: "/python.svg",
    Docker: "/docker.svg",
    Airflow: "/airflow.svg",
    PostgreSQL: "/postgresql.svg",
    Java: "/java.svg",
    TypeScript: "/typescript.svg",
    "Next.js": "/nextjs.svg",
    "Tailwind CSS": "/tailwind.svg",
    Kafka: "/kafka.svg",
    N8N: "/n8n.svg",
    n8n: "/n8n.svg",
    OpenAI: "/openai.svg",
    Vercel: "/vercel.svg",
    "Spring Boot": "/java.svg",
    "Shadcn/UI": "/nextjs.svg",
};

export function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const [page, setPage] = useState(0);
    const [selectedN8nProject, setSelectedN8nProject] = useState<{ title: string, path: string } | null>(null);

    const totalPages = Math.ceil(otherProjects.length / ITEMS_PER_PAGE);
    const paginatedProjects = otherProjects.slice(
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
            className="scroll-reveal mx-auto max-w-7xl px-6 mb-24 min-h-screen flex flex-col justify-center"
            id="projetos"
        >
            <div className="mt-10">
                <FlagshipProject />
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl mb-10">
                Outros Projetos
            </h2>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                {paginatedProjects.map((project) => {
                    const techsWithIcons = project.techs.filter(
                        (t) => TECH_ICONS[t]
                    );

                    return (
                        <div
                            key={project.title}
                            className="group relative flex flex-col space-y-4 rounded-xl border border-border/10 bg-card/40 p-5 transition-all duration-300 hover:scale-[1.03] hover:border-primary/50 hover:arch-node-glow hover:bg-card/80"
                        >
                            {/* Title + links */}
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                                    {project.title}
                                </h3>
                                <div className="flex shrink-0 gap-1">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 text-muted-foreground/50 transition-colors hover:text-foreground"
                                            aria-label={`GitHub - ${project.title}`}
                                        >
                                            <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 text-muted-foreground/50 transition-colors hover:text-foreground"
                                            aria-label={`Demo - ${project.title}`}
                                        >
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:scale-110" />
                                        </a>
                                    )}
                                    {project.n8n_preview && project.n8n_preview_path && (
                                        <button
                                            onClick={() => setSelectedN8nProject({ title: project.title, path: project.n8n_preview_path as string })}
                                            className="p-1.5 text-muted-foreground/50 transition-colors hover:text-foreground cursor-pointer"
                                            aria-label={`Visualizar Workflow - ${project.title}`}
                                        >
                                            <Eye className="h-4 w-4 transition-transform group-hover:scale-110" />
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                                {project.description}
                            </p>

                            {/* Tech logos with gradient fade */}
                            {techsWithIcons.length > 0 && (
                                <div className="relative flex items-center gap-3 py-1">
                                    {techsWithIcons.map((tech) => (
                                        <div
                                            key={tech}
                                            className="relative h-5 w-5 shrink-0"
                                            title={tech}
                                        >
                                            <Image
                                                src={TECH_ICONS[tech]}
                                                alt={tech}
                                                width={20}
                                                height={20}
                                                className="h-5 w-5 object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                {project.techs.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs text-muted-foreground/50 group-hover:text-muted-foreground/80 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-4">
                    <button
                        onClick={() => setPage((p) => Math.max(0, p - 1))}
                        disabled={page === 0}
                        className="p-2 text-muted-foreground/50 transition-colors hover:text-foreground disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
                        aria-label="Página anterior"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setPage(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${i === page
                                    ? "w-6 bg-primary/60"
                                    : "w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
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
                        className="p-2 text-muted-foreground/50 transition-colors hover:text-foreground disabled:opacity-20 disabled:cursor-not-allowed cursor-pointer"
                        aria-label="Próxima página"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            )}

            <Dialog open={!!selectedN8nProject} onOpenChange={(open) => !open && setSelectedN8nProject(null)}>
                <DialogContent className="sm:max-w-[95vw] max-w-[90vw] h-[95vh] p-0 flex flex-col overflow-hidden bg-[#fafafa] dark:bg-black">
                    <DialogHeader className="p-4 border-b pb-4 shrink-0 px-6">
                        <DialogTitle className="text-xl">Workflow: {selectedN8nProject?.title}</DialogTitle>
                        <DialogDescription>
                            Visualização interativa (read-only) do pipeline executado no n8n.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-[#fafafa] dark:bg-black p-5">
                        {selectedN8nProject && (
                            <N8nWorkflowViewer workflowUrl={selectedN8nProject.path} className="rounded-none border-0" />
                        )}
                    </div>
                </DialogContent>
            </Dialog>

        </section>
    );
}
