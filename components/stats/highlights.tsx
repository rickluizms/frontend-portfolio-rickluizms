import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
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
        <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {highlights.map((stat) => (
                <Card
                    key={stat.label}
                    className="border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                    <CardHeader className="pb-2">
                        <CardDescription>{stat.label}</CardDescription>
                        <CardTitle className="text-3xl font-bold text-primary truncate">
                            {stat.value}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-xs text-muted-foreground">
                            {stat.description}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
