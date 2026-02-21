import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function StatsSkeleton() {
    return (
        <section className="mx-auto max-w-6xl px-6 mb-24">
            <Skeleton className="h-10 w-48 mb-12" />
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Card key={i} className="border-border bg-card">
                        <CardHeader className="pb-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-8 w-16 mt-1" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-3 w-32" />
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="border-border bg-card">
                        <CardHeader>
                            <Skeleton className="h-5 w-36" />
                            <Skeleton className="h-4 w-48 mt-1" />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-[250px] w-full rounded-md" />
                        </CardContent>
                    </Card>
                ))}
                <Card className="border-border bg-card md:col-span-2">
                    <CardHeader>
                        <Skeleton className="h-5 w-36" />
                        <Skeleton className="h-4 w-48 mt-1" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-[200px] w-full rounded-md" />
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
