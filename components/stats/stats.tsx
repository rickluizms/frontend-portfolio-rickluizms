"use client";

import { useEffect, useMemo, useRef } from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Pie,
    PieChart,
    Label,
} from "recharts";

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

import {
    codingActivity,
    languageDistribution,
    dailyCoding,
    statsHighlights,
} from "@/lib/mock-data";

// ── Chart Configs ──────────────────────────────────────

const activityConfig = {
    hours: {
        label: "Horas",
        color: "var(--chart-1)",
    },
} satisfies ChartConfig;

const languageConfig = {
    hours: {
        label: "Horas",
    },
    python: {
        label: "Python",
        color: "var(--chart-1)",
    },
    typescript: {
        label: "TypeScript",
        color: "var(--chart-2)",
    },
    java: {
        label: "Java",
        color: "var(--chart-3)",
    },
    sql: {
        label: "SQL",
        color: "var(--chart-4)",
    },
    other: {
        label: "Outros",
        color: "var(--chart-5)",
    },
} satisfies ChartConfig;

const dailyConfig = {
    hours: {
        label: "Horas",
        color: "var(--chart-2)",
    },
} satisfies ChartConfig;

// ── Component ──────────────────────────────────────────

export function Stats() {
    const sectionRef = useRef<HTMLElement>(null);

    const totalHours = useMemo(() => {
        return languageDistribution.reduce((acc, curr) => acc + curr.hours, 0);
    }, []);

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
            id="estatisticas"
        >
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Estatísticas
            </h2>

            {/* Highlight cards */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {statsHighlights.map((stat) => (
                    <Card
                        key={stat.label}
                        className="border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                    >
                        <CardHeader className="pb-2">
                            <CardDescription>{stat.label}</CardDescription>
                            <CardTitle className="text-3xl font-bold text-primary">
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

            {/* Charts grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Coding Activity - Bar Chart */}
                <Card className="border-border bg-card">
                    <CardHeader>
                        <CardTitle>Atividade Semanal</CardTitle>
                        <CardDescription>
                            Horas de código por semana
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={activityConfig}
                            className="h-[250px] w-full"
                        >
                            <BarChart
                                accessibilityLayer
                                data={codingActivity}
                            >
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="week"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(v) => `${v}h`}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                />
                                <Bar
                                    dataKey="hours"
                                    fill="var(--color-hours)"
                                    radius={[6, 6, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>

                {/* Language Distribution - Donut Chart */}
                <Card className="border-border bg-card">
                    <CardHeader>
                        <CardTitle>Linguagens</CardTitle>
                        <CardDescription>
                            Distribuição por horas de uso
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={languageConfig}
                            className="mx-auto aspect-square h-[250px]"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={languageDistribution}
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
                                                            {totalHours}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={
                                                                (viewBox.cy ||
                                                                    0) + 24
                                                            }
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

                {/* Daily Coding - Bar Chart */}
                <Card className="border-border bg-card md:col-span-2">
                    <CardHeader>
                        <CardTitle>Média Diária</CardTitle>
                        <CardDescription>
                            Horas de código por dia da semana
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer
                            config={dailyConfig}
                            className="h-[200px] w-full"
                        >
                            <BarChart accessibilityLayer data={dailyCoding}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="day"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <YAxis
                                    tickLine={false}
                                    axisLine={false}
                                    tickFormatter={(v) => `${v}h`}
                                />
                                <ChartTooltip
                                    content={<ChartTooltipContent />}
                                />
                                <Bar
                                    dataKey="hours"
                                    fill="var(--color-hours)"
                                    radius={[6, 6, 0, 0]}
                                />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
