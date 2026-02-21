
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function GitHubContributions() {
    return (
        <Card className="border-border bg-card md:col-span-2">
            <CardHeader>
                <CardTitle>Contribuições no GitHub</CardTitle>
                <CardDescription>
                    Contribuições no GitHub nos últimos 365 dias
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-center p-6">
                    <img
                        src="https://ghchart.rshah.org/rickluizms"
                        alt="GitHub Contributions"
                        className="w-full m-6"
                    />
                </div>
            </CardContent>
        </Card>
    )
}