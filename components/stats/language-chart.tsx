import { useMemo } from "react";
import { Pie, PieChart, Label } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart";
import type { LanguageStats } from "@/types/api";

const CHART_COLORS = [
    "var(--chart-1)",
    "var(--chart-2)",
    "var(--chart-3)",
    "var(--chart-4)",
    "var(--chart-5)",
];

interface LanguageChartProps {
    languages: LanguageStats[];
    totalHours: number;
}

export function LanguageChart({ languages, totalHours }: LanguageChartProps) {
    const languagePieData = useMemo(() => {
        return languages.slice(0, 5).map((lang, i) => ({
            language: lang.name?.toLowerCase() ?? "unknown",
            hours: parseFloat((lang.total_hours ?? 0).toFixed(1)),
            fill: CHART_COLORS[i % CHART_COLORS.length],
        }));
    }, [languages]);

    const languageChartConfig = useMemo(() => {
        const config: ChartConfig = { hours: { label: "Horas" } };
        languages.slice(0, 5).forEach((lang, i) => {
            config[(lang.name ?? "unknown").toLowerCase()] = {
                label: lang.name ?? "Unknown",
                color: CHART_COLORS[i % CHART_COLORS.length],
            };
        });
        return config;
    }, [languages]);

    if (languagePieData.length === 0) return null;

    return (
        <Card className="border-0 bg-transparent shadow-none">
            <CardHeader>
                <CardTitle>Linguagens</CardTitle>
                <CardDescription>Distribuição por horas de uso</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={languageChartConfig}
                    className="mx-auto aspect-square h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={languagePieData}
                            dataKey="hours"
                            nameKey="language"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {Math.round(totalHours)}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    horas
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
