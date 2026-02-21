// =============================
// RESUMO DIÁRIO
// =============================
export interface DailySummary {
    id: number;
    date: string;
    total_seconds: number;
    digital: string | null;
    hours: number | null;
    minutes: number | null;
    text: string | null;
    ai_additions: number | null;
    ai_deletions: number | null;
    human_additions: number | null;
    human_deletions: number | null;
    created_at: string | null;
}

// =============================
// LINGUAGENS
// =============================
export interface Language {
    id: number;
    summary_date: string;
    name: string;
    total_seconds: number;
    percent: number | null;
    digital: string | null;
    hours: number | null;
    minutes: number | null;
}

export interface LanguageStats {
    name: string;
    total_seconds: number;
    total_hours: number;
    percentage: number;
}

// =============================
// PROJETOS
// =============================
export interface Project {
    id: number;
    summary_date: string;
    name: string;
    total_seconds: number;
    percent: number | null;
    digital: string | null;
    hours: number | null;
    minutes: number | null;
    ai_additions: number | null;
    ai_deletions: number | null;
    human_additions: number | null;
    human_deletions: number | null;
}

export interface ProjectStats {
    name: string;
    total_seconds: number;
    total_hours: number;
    percentage: number;
    ai_additions: number;
    ai_deletions: number;
    human_additions: number;
    human_deletions: number;
}

// =============================
// EDITORES
// =============================
export interface Editor {
    id: number;
    summary_date: string;
    name: string;
    total_seconds: number;
    percent: number | null;
    digital: string | null;
    hours: number | null;
    minutes: number | null;
}

// =============================
// ESTATÍSTICAS GERAIS
// =============================
export interface OverallStats {
    total_days: number;
    total_seconds: number;
    total_hours: number;
    average_seconds_per_day: number;
    average_hours_per_day: number;
    top_language: string | null;
    top_project: string | null;
    top_editor: string | null;
}

// =============================
// HEALTH CHECK
// =============================
export interface HealthStatus {
    status: string;
    database: string;
    tables_count: number;
}

// =============================
// PARÂMETROS DE QUERY
// =============================
export interface DateRangeParams {
    start_date?: string;
    end_date?: string;
    limit?: number;
}

// =============================
// RESPOSTA DE ERRO
// =============================
export interface ApiError {
    detail: string;
}