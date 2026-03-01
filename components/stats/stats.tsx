"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { devInsightsService } from "@/services/dev.service";
import type {
    DailySummary,
    LanguageStats,
    OverallStats,
} from "@/types/api";

import { StatsSkeleton } from "./stats-skeleton";
import { Highlights } from "./highlights";
import { LanguageChart } from "./language-chart";
import { DailyActivityChart } from "./daily-activity-chart";
import { LanguageBarChart } from "./language-bar-chart";
import GitHubContributions from "./github-contributions";

export function Stats() {
    const sectionRef = useRef<HTMLElement>(null);

    const [summaries, setSummaries] = useState<DailySummary[]>([]);
    const [languages, setLanguages] = useState<LanguageStats[]>([]);
    const [overall, setOverall] = useState<OverallStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const results = await Promise.allSettled([
                devInsightsService.getOverallStats(),
                devInsightsService.getLanguagesStats(),
                devInsightsService.getSummaries({ limit: 30 }),
            ]);

            if (results[0].status === "fulfilled") setOverall(results[0].value);
            else console.error("Failed /stats:", results[0].reason);

            if (results[1].status === "fulfilled") setLanguages(results[1].value);
            else console.error("Failed /languages/stats:", results[1].reason);

            if (results[2].status === "fulfilled") setSummaries(results[2].value);
            else console.error("Failed /summaries:", results[2].reason);

            const allFailed = results.every((r) => r.status === "rejected");
            if (allFailed) setError("Não foi possível carregar as estatísticas.");
        } catch (err) {
            console.error("Failed to fetch dev insights:", err);
            setError("Não foi possível carregar as estatísticas.");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    // ── Scroll reveal ─────────────────────────────────────
    useEffect(() => {
        const section = sectionRef.current;
        if (!section || loading) return;

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
    }, [loading]);

    if (loading) return <StatsSkeleton />;

    if (error) {
        return (
            <section className="mx-auto max-w-7xl px-6 mb-24 min-h-screen flex flex-col justify-center" id="estatisticas">
                <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                    Estatísticas
                </h2>
                <div className="mt-10 flex flex-col items-center justify-center py-16 gap-4">
                    <p className="text-muted-foreground">{error}</p>
                    <button
                        onClick={fetchData}
                        className="text-sm font-medium text-primary transition-colors hover:text-primary/80 cursor-pointer"
                    >
                        Tentar novamente
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section
            ref={sectionRef}
            className="mx-auto max-w-7xl px-6 mb-16 pt-16 opacity-0 transition-all duration-700 ease-out translate-y-8 [&.scroll-revealed]:opacity-100 [&.scroll-revealed]:translate-y-0"
            id="estatisticas"
        >
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Estatísticas
            </h2>

            <Highlights overall={overall} />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <LanguageChart languages={languages} totalHours={overall?.total_hours ?? 0} />
                <LanguageBarChart languages={languages} />
                <DailyActivityChart summaries={summaries} />
                <GitHubContributions />
            </div>
        </section>
    );
}
