"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Building2,
    Workflow,
    Database,
    Layers,
    Gem,
    Server,
    BarChart3,
    BrainCircuit,
    Download,
} from "lucide-react";

// ── Types ──────────────────────────────────────────────

interface NodeDef {
    id: string;
    label: string;
    desc: string;
    icon: React.ElementType;
    svgIcon?: string;
    color: string;
}

interface EdgeDef {
    id: string;
    from: string;
    to: string;
    type?: "orchestration";
}

// ── Data ───────────────────────────────────────────────

const SOURCE: NodeDef = {
    id: "rf",
    label: "Receita Federal",
    desc: "Fonte de dados",
    icon: Building2,
    color: "var(--chart-1)",
};

const AIRFLOW: NodeDef = {
    id: "airflow",
    label: "Apache Airflow",
    desc: "Orquestração",
    icon: Workflow,
    svgIcon: "/airflow.svg",
    color: "var(--chart-2)",
};

const ETL_STAGES: NodeDef[] = [
    { id: "ingestao", label: "Ingestão", desc: "Download", icon: Download, svgIcon: "/python.svg", color: "var(--chart-5)" },
    { id: "bronze", label: "Bronze", desc: "Dados brutos", icon: Database, svgIcon: "/python.svg", color: "var(--chart-5)" },
    { id: "silver", label: "Silver", desc: "Limpos", icon: Layers, svgIcon: "/python.svg", color: "var(--chart-3)" },
    { id: "gold", label: "Gold", desc: "Prontos", icon: Gem, svgIcon: "/python.svg", color: "var(--chart-4)" },
];

const OUTPUTS: NodeDef[] = [
    { id: "relacional", label: "API", desc: "REST consulta", icon: Server, color: "var(--chart-1)" },
    { id: "dimensional", label: "BI", desc: "Dashboards", icon: BarChart3, color: "var(--chart-2)" },
    { id: "analytics", label: "AI/ML", desc: "Predições", icon: BrainCircuit, color: "var(--chart-3)" },
];

const ALL_NODES = [SOURCE, AIRFLOW, ...ETL_STAGES, ...OUTPUTS];

const EDGES: EdgeDef[] = [
    // Source → ETL
    { id: "e1", from: "rf", to: "ingestao" },
    // ETL chain
    { id: "e2", from: "ingestao", to: "bronze" },
    { id: "e3", from: "bronze", to: "silver" },
    { id: "e4", from: "silver", to: "gold" },
    // Gold → outputs
    { id: "e5", from: "gold", to: "relacional" },
    { id: "e6", from: "gold", to: "dimensional" },
    { id: "e7", from: "gold", to: "analytics" },
    // Airflow orchestrates
    { id: "e8", from: "airflow", to: "ingestao", type: "orchestration" },
    { id: "e9", from: "airflow", to: "bronze", type: "orchestration" },
    { id: "e10", from: "airflow", to: "silver", type: "orchestration" },
    { id: "e11", from: "airflow", to: "gold", type: "orchestration" },
];

// ── Helpers ────────────────────────────────────────────

function getConnectedEdges(nodeId: string | null) {
    if (!nodeId) return new Set<string>();
    return new Set(
        EDGES.filter((e) => e.from === nodeId || e.to === nodeId).map((e) => e.id)
    );
}

function getConnectedNodes(nodeId: string | null) {
    if (!nodeId) return new Set<string>();
    const s = new Set<string>([nodeId]);
    EDGES.forEach((e) => {
        if (e.from === nodeId) s.add(e.to);
        if (e.to === nodeId) s.add(e.from);
    });
    return s;
}

// ── Compact node card ──────────────────────────────────

function NodeCard({
    node,
    isHovered,
    isConnected,
    isDimmed,
    compact,
    onEnter,
    onLeave,
    nodeRef,
}: {
    node: NodeDef;
    isHovered: boolean;
    isConnected: boolean;
    isDimmed: boolean;
    compact?: boolean;
    onEnter: () => void;
    onLeave: () => void;
    nodeRef: (el: HTMLDivElement | null) => void;
}) {
    const Icon = node.icon;
    return (
        <div
            ref={nodeRef}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            className={`
                flex flex-col items-center justify-center rounded-xl border
                bg-card/80 backdrop-blur-sm cursor-pointer
                transition-all duration-300 relative z-10
                ${compact ? "px-3 py-3 gap-1" : "px-5 py-4 gap-1.5"}
                ${isHovered ? "border-primary/50 scale-[1.05] arch-node-glow" : ""}
                ${!isHovered && isConnected ? "border-primary/30" : ""}
                ${!isHovered && !isConnected ? "border-border/50" : ""}
                ${isDimmed ? "opacity-30" : "opacity-100"}
            `}
        >
            <div
                className={`flex items-center justify-center rounded-lg transition-colors duration-300
                    ${compact ? "h-8 w-8" : "h-10 w-10"}
                    ${isHovered || isConnected ? "bg-primary/10" : "bg-muted/50"}
                `}
            >
                {node.svgIcon ? (
                    <Image
                        src={node.svgIcon}
                        alt={node.label}
                        width={compact ? 16 : 20}
                        height={compact ? 16 : 20}
                        className={`${compact ? "h-4 w-4" : "h-5 w-5"} object-contain`}
                    />
                ) : (
                    <Icon
                        className={`${compact ? "h-4 w-4" : "h-5 w-5"} transition-colors duration-300`}
                        style={{ color: isHovered || isConnected ? node.color : undefined }}
                    />
                )}
            </div>
            <span className={`font-semibold text-foreground ${compact ? "text-xs" : "text-sm"}`}>
                {node.label}
            </span>
            <span className={`text-muted-foreground leading-tight ${compact ? "text-[10px]" : "text-[11px]"}`}>
                {node.desc}
            </span>
        </div>
    );
}

// ── Main component ─────────────────────────────────────

export function ArchitectureDiagram() {
    const containerRef = useRef<HTMLDivElement>(null);
    const nodeRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);
    const [edgePaths, setEdgePaths] = useState<
        { id: string; d: string; type?: string }[]
    >([]);

    const connectedEdges = getConnectedEdges(hoveredNode);
    const connectedNodes = getConnectedNodes(hoveredNode);

    const setRef = useCallback(
        (id: string) => (el: HTMLDivElement | null) => {
            nodeRefs.current[id] = el;
        },
        []
    );

    const calculatePaths = useCallback(() => {
        const container = containerRef.current;
        if (!container) return;
        const cr = container.getBoundingClientRect();

        const paths: { id: string; d: string; type?: string }[] = [];

        EDGES.forEach((edge) => {
            const fromEl = nodeRefs.current[edge.from];
            const toEl = nodeRefs.current[edge.to];
            if (!fromEl || !toEl) return;

            const fr = fromEl.getBoundingClientRect();
            const tr = toEl.getBoundingClientRect();

            if (edge.type === "orchestration") {
                // vertical: bottom-center → top-center
                const x1 = fr.left + fr.width / 2 - cr.left;
                const y1 = fr.bottom - cr.top;
                const x2 = tr.left + tr.width / 2 - cr.left;
                const y2 = tr.top - cr.top;
                const midY = (y1 + y2) / 2;
                paths.push({
                    id: edge.id,
                    type: edge.type,
                    d: `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`,
                });
            } else {
                // horizontal: right-center → left-center
                const x1 = fr.right - cr.left;
                const y1 = fr.top + fr.height / 2 - cr.top;
                const x2 = tr.left - cr.left;
                const y2 = tr.top + tr.height / 2 - cr.top;
                const midX = (x1 + x2) / 2;
                paths.push({
                    id: edge.id,
                    type: edge.type,
                    d: `M ${x1} ${y1} C ${midX} ${y1}, ${midX} ${y2}, ${x2} ${y2}`,
                });
            }
        });

        setEdgePaths(paths);
    }, []);

    useEffect(() => {
        const t = setTimeout(calculatePaths, 200);
        window.addEventListener("resize", calculatePaths);
        return () => {
            clearTimeout(t);
            window.removeEventListener("resize", calculatePaths);
        };
    }, [calculatePaths]);

    // helpers for card props
    const isHov = (id: string) => hoveredNode === id;
    const isCon = (id: string) => connectedNodes.has(id);
    const isDim = (id: string) => hoveredNode !== null && !connectedNodes.has(id);

    return (
        <div className="w-full">
            {/* Title */}
            <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Arquitetura do Pipeline
                </h2>
                <p className="mt-3 text-muted-foreground">
                    Fluxo completo de dados: da fonte até a aplicação de uso
                </p>
            </div>

            {/* Diagram container — full width */}
            <div ref={containerRef} className="relative max-w-[1600px] px-4 mx-auto">
                {/* SVG arrows layer */}
                <svg
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    style={{ zIndex: 1 }}
                >
                    <defs>
                        <marker id="arr" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                            <polygon points="0 0, 10 4, 0 8" className="fill-muted-foreground/40" />
                        </marker>
                        <marker id="arr-active" markerWidth="10" markerHeight="8" refX="9" refY="4" orient="auto">
                            <polygon points="0 0, 10 4, 0 8" className="fill-primary" />
                        </marker>
                    </defs>
                    {edgePaths.map((edge) => {
                        const active = connectedEdges.has(edge.id);
                        return (
                            <path
                                key={edge.id}
                                d={edge.d}
                                fill="none"
                                className={`transition-all duration-300 ${active ? "stroke-primary" : "stroke-muted-foreground/30"
                                    }`}
                                strokeWidth={active ? 2.5 : 1.5}
                                strokeDasharray={edge.type === "orchestration" ? "6 4" : undefined}
                                markerEnd={active ? "url(#arr-active)" : "url(#arr)"}
                                style={
                                    active
                                        ? { filter: "drop-shadow(0 0 6px oklch(0.546 0.245 262.881 / 0.5))" }
                                        : undefined
                                }
                            />
                        );
                    })}
                </svg>

                {/* Layout: flex row with generous spacing. mt-24 gives space for absolute Airflow */}
                <div className="relative flex items-center justify-between gap-6 mt-28" style={{ zIndex: 2 }}>

                    {/* ─── Source ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0, duration: 0.5 }}
                        className="shrink-0"
                    >
                        <NodeCard
                            node={SOURCE}
                            isHovered={isHov("rf")}
                            isConnected={isCon("rf")}
                            isDimmed={isDim("rf")}
                            onEnter={() => setHoveredNode("rf")}
                            onLeave={() => setHoveredNode(null)}
                            nodeRef={setRef("rf")}
                        />
                    </motion.div>

                    {/* ─── ETL Process group ─── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.5 }}
                        className="flex-1 max-w-[750px] relative"
                    >
                        {/* Airflow absolutely positioned above the dashed box */}
                        <div className="absolute -top-28 left-1/2 -translate-x-1/2 z-10 w-[200px] flex justify-center">
                            <NodeCard
                                node={AIRFLOW}
                                isHovered={isHov("airflow")}
                                isConnected={isCon("airflow")}
                                isDimmed={isDim("airflow")}
                                compact
                                onEnter={() => setHoveredNode("airflow")}
                                onLeave={() => setHoveredNode(null)}
                                nodeRef={setRef("airflow")}
                            />
                        </div>

                        {/* Dashed Box centers perfectly with Source & Outputs because it only wraps the row */}
                        <div className="relative rounded-2xl border border-dashed border-border/40 bg-muted/5 px-5 py-10 min-h-[160px] flex items-center mt-15">

                            {/* Label */}
                            <p className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-3 text-[10px] text-muted-foreground/50 uppercase tracking-widest text-center">
                                Pipeline ETL
                            </p>

                            {/* ETL stages row */}
                            <div className="flex items-center justify-between gap-4 w-full">
                                {ETL_STAGES.map((node, i) => (
                                    <motion.div
                                        key={node.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                                        className="flex-1 max-w-[100px]"
                                    >
                                        <NodeCard
                                            node={node}
                                            isHovered={isHov(node.id)}
                                            isConnected={isCon(node.id)}
                                            isDimmed={isDim(node.id)}
                                            compact
                                            onEnter={() => setHoveredNode(node.id)}
                                            onLeave={() => setHoveredNode(null)}
                                            nodeRef={setRef(node.id)}
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ─── Outputs column ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex shrink-0 flex-col gap-3"
                    >
                        {OUTPUTS.map((node, i) => (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.55 + i * 0.08, duration: 0.4 }}
                            >
                                <NodeCard
                                    node={node}
                                    isHovered={isHov(node.id)}
                                    isConnected={isCon(node.id)}
                                    isDimmed={isDim(node.id)}
                                    compact
                                    onEnter={() => setHoveredNode(node.id)}
                                    onLeave={() => setHoveredNode(null)}
                                    nodeRef={setRef(node.id)}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Legend */}
            <div className="mt-12 flex items-center justify-center gap-8 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                    <div className="h-[2px] w-8 bg-muted-foreground/40 rounded" />
                    <span>Fluxo de dados</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-[2px] w-8 border-t-2 border-dashed border-muted-foreground/40" />
                    <span>Orquestração</span>
                </div>
            </div>
        </div>
    );
}
