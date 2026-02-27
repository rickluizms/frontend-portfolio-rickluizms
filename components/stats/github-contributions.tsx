import { Card, CardContent } from "@/components/ui/card";

export default function GitHubContributions() {
    return (
        <Card className="border-0 p-5 bg-transparent shadow-none md:col-span-2 mb-10">
            <CardContent className="px-0 pt-2">
                <h3 className="text-base font-semibold tracking-tight text-foreground">
                    Contribuições no GitHub
                </h3>
                <p className="mt-1 text-xs text-muted-foreground/60">
                    Últimos 365 dias
                </p>
                <div className="mt-4">
                    <img
                        src="https://ghchart.rshah.org/rickluizms"
                        alt="GitHub Contributions"
                        className="w-full opacity-80"
                    />
                </div>
            </CardContent>
        </Card>
    );
}