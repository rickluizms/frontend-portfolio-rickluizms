import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";

export const metadata: Metadata = {
    title: "CNPJ DataLake — Arquitetura",
    description:
        "Diagrama arquitetural interativo do pipeline de dados CNPJ DataLake: da Receita Federal até API, BI e AI/ML.",
};

export default function CnpjDataLakePage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4 backdrop-blur-sm bg-background/80 border-b border-border/50">
                <Link
                    href="/#projetos"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Voltar ao Portfólio
                </Link>
            </nav>

            {/* Diagram section */}
            <section className="pt-24 pb-20 px-6">
                <ArchitectureDiagram />
            </section>
        </main>
    );
}
