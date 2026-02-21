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
import type { DailySummary } from "@/types/api";

const activityConfig = {
    hours: {
        label: "Horas",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

function formatDate(dateStr: string): string {
    const [, month, day] = dateStr.split("-");
    return `${day}/${month}`;
}

interface DailyActivityChartProps {
    summaries: DailySummary[];
}

export function DailyActivityChart({ summaries }: DailyActivityChartProps) {
    const dailyActivityData = useMemo(() => {
        return [...summaries]
            .sort((a, b) => a.date.localeCompare(b.date))
            .map((s) => ({
                date: formatDate(s.date),
                hours: parseFloat((s.total_seconds / 3600).toFixed(1)),
            }));
    }, [summaries]);

    if (dailyActivityData.length === 0) return null;

    return (
        <Card className="border-border bg-card md:col-span-2">
            <CardHeader>
                <CardTitle>Atividade Diária</CardTitle>
                <CardDescription>
                    Horas de código nos últimos 30 dias
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer
                    config={activityConfig}
                    className="h-[200px] w-full"
                >
                    <BarChart accessibilityLayer data={dailyActivityData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tick={{ fontSize: 11 }}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickFormatter={(v) => `${v}h`}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar
                            dataKey="hours"
                            fill="var(--color-hours)"
                            radius={[6, 6, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
