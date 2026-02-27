import { useMemo } from "react";
import type { OverallStats } from "@/types/api";

interface HighlightsProps {
    overall: OverallStats | null;
}

export function Highlights({ overall }: HighlightsProps) {
    const highlights = useMemo(() => {
        if (!overall) return [];
        return [
            {
                label: "Horas de Código",
                value: `${Math.round(overall.total_hours ?? 0)}h`,
                description: `em ${overall.total_days ?? 0} dias rastreados`,
            },
            {
                label: "Dias Ativos",
                value: String(overall.total_days ?? 0),
                description: `média de ${(overall.average_hours_per_day ?? 0).toFixed(1)}h/dia`,
            },
            {
                label: "Top Linguagem",
                value: overall.top_language ?? "—",
                description: "linguagem mais utilizada",
            },
            {
                label: "Top Editor",
                value: overall.top_editor ?? "—",
                description: "editor mais utilizado",
            },
        ];
    }, [overall]);

    if (highlights.length === 0) return null;

    return (
        <div className="my-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {highlights.map((stat) => (
                <div key={stat.label} className="space-y-1">
                    <p className="text-xs font-medium tracking-wide text-muted-foreground/60 uppercase">
                        {stat.label}
                    </p>
                    <p className="text-3xl font-bold tracking-tight text-foreground">
                        {stat.value}
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {stat.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
