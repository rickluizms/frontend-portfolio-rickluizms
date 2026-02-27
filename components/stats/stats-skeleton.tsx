import { Skeleton } from "@/components/ui/skeleton";

export function StatsSkeleton() {
    return (
        <section className="mx-auto max-w-7xl px-6 mb-24">
            <Skeleton className="h-9 w-48 mb-10" />

            {/* Highlights */}
            <div className="mb-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                        <Skeleton className="h-3 w-20" />
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-3 w-28" />
                    </div>
                ))}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {Array.from({ length: 2 }).map((_, i) => (
                    <div key={i} className="space-y-3">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-3 w-48" />
                        <Skeleton className="h-[250px] w-full rounded-md" />
                    </div>
                ))}
                <div className="space-y-3 md:col-span-2">
                    <Skeleton className="h-5 w-36" />
                    <Skeleton className="h-3 w-48" />
                    <Skeleton className="h-[200px] w-full rounded-md" />
                </div>
            </div>
        </section>
    );
}
