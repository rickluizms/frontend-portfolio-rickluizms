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

// Map language names (lowercase) to SVG paths
const LANG_ICONS: Record<string, string> = {
    python: "/python.svg",
    typescript: "/typescript.svg",
    java: "/java.svg",
    docker: "/docker.svg",
    postgresql: "/postgresql.svg",
    kafka: "/kafka.svg",
    nextjs: "/nextjs.svg",
    "next.js": "/nextjs.svg",
    tailwind: "/tailwind.svg",
    n8n: "/n8n.svg",
    openai: "/openai.svg",
    javascript: "/javascript.svg",
    html: "/html.svg",
    yaml: "/yaml.svg",
};

interface LanguageBarChartProps {
    languages: LanguageStats[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomYTick({ x, y, payload }: any) {
    const name: string = payload?.value ?? "";
    const iconPath = LANG_ICONS[name.toLowerCase()];

    return (
        <g transform={`translate(${x},${y})`}>
            {iconPath ? (
                <image
                    href={iconPath}
                    x={-120}
                    y={-8}
                    width={16}
                    height={16}
                />
            ) : (
                /* Fallback: code brackets icon </>  */
                <g transform="translate(-120,-8)" opacity={0.4}>
                    <rect width={16} height={16} rx={3} fill="currentColor" fillOpacity={0.08} />
                    <text x={8} y={12} textAnchor="middle" fontSize={9} fill="currentColor" fontFamily="monospace">{"</>"}</text>
                </g>
            )}
            <text
                x={-98}
                y={0}
                dy={4}
                textAnchor="start"
                fontSize={12}
                fill="currentColor"
                className="fill-foreground"
            >
                {name}
            </text>
        </g>
    );
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
        <Card className="border-0 bg-transparent shadow-none">
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
                            width={130}
                            tick={<CustomYTick />}
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

