"use client";

import React, { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "n8n-demo": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { workflow?: string, frame?: string }, HTMLElement>;
        }
    }
}

export interface N8nWorkflowViewerProps {
    workflowObject?: Record<string, any>;
    workflowUrl?: string;
    className?: string;
    height?: string | number;
}

export function N8nWorkflowViewer({
    workflowObject,
    workflowUrl,
    className = "",
    height = 500
}: N8nWorkflowViewerProps) {
    const [isMounted, setIsMounted] = useState(false);
    const [jsonWorkflow, setJsonWorkflow] = useState<string | null>(
        workflowObject ? JSON.stringify(workflowObject) : null
    );

    useEffect(() => {
        // @ts-ignore
        import("@n8n_io/n8n-demo-component").then(() => {
            setIsMounted(true);
        }).catch(console.error);
    }, []);

    useEffect(() => {
        if (workflowUrl && !workflowObject) {
            fetch(workflowUrl)
                .then(res => res.text())
                .then(text => setJsonWorkflow(text))
                .catch(err => console.error("Failed to fetch workflow:", err));
        }
    }, [workflowUrl, workflowObject]);

    if (!isMounted) {
        return (
            <div
                className={`w-full flex items-center justify-center bg-muted/20 border rounded-lg ${className}`}
                style={{ height }}
            >
                <Skeleton className="w-full h-full rounded-lg" />
            </div>
        );
    }

    // The n8n-demo element expects a string attribute "workflow".
    return (
        <div className={`w-full border rounded-lg bg-card shadow-sm ${className}`}>
            {jsonWorkflow && (
                <n8n-demo
                    workflow={jsonWorkflow}
                    frame="true"
                ></n8n-demo>
            )}
        </div>
    );
}
