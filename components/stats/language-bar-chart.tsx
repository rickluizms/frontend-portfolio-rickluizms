import { useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
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

const languageConfig = {
    hours: {
        label: "Horas",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig;

interface LanguageBarChartProps {
    languages: LanguageStats[];
}

export function LanguageBarChart({ languages }: LanguageBarChartProps) {
    const languageBarData = useMemo(() => {
        return [...languages]
            .sort((a, b) => (b.total_hours ?? 0) - (a.total_hours ?? 0))
            .slice(0, 6)
            .map((lang) => ({
                name: lang.name && lang.name.length > 18 ? lang.name.slice(0, 18) + "…" : lang.name ?? "Unknown",
                hours: parseFloat((lang.total_hours ?? 0).toFixed(1)),
            }));
    }, [languages]);

    if (languageBarData.length === 0) return null;

    return (
        <Card className="border-border bg-card">
            <CardHeader>
                <CardTitle>Top Linguagens (Horas)</CardTitle>
                <CardDescription>
                    Linguagens com mais horas de código
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={languageConfig}
                    className="h-[250px] w-full"
                >
                    <BarChart
                        accessibilityLayer
                        data={languageBarData}
                        layout="vertical"
                        margin={{ left: 10, right: 10 }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="name"
                            type="category"
                            tickLine={false}
                            axisLine={false}
                            width={120}
                            tick={{ fontSize: 12 }}
                        />
                        <XAxis
                            type="number"
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(v) => `${v}h`}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar
                            dataKey="hours"
                            fill="var(--color-hours)"
                            radius={[0, 6, 6, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
