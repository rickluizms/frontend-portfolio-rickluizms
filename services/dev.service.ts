import { api } from '../lib/api';
import type {
    DailySummary,
    LanguageStats,
    ProjectStats,
    OverallStats,
    DateRangeParams,
    HealthStatus,
    Editor,
} from '@/types/api';

export const devInsightsService = {
    async getHealth(): Promise<HealthStatus> {
        const { data } = await api.get('/health');
        return data;
    },

    async getSummaries(params?: DateRangeParams): Promise<DailySummary[]> {
        const { data } = await api.get('/summaries', { params });
        return data;
    },

    async getSummaryByDate(date: string): Promise<DailySummary> {
        const { data } = await api.get(`/summaries/${date}`);
        return data;
    },

    async getLanguagesStats(params?: DateRangeParams): Promise<LanguageStats[]> {
        const { data } = await api.get('/languages/stats', { params });
        return data;
    },

    async getEditors(params?: DateRangeParams): Promise<Editor[]> {
        const { data } = await api.get('/editors', { params });
        return data;
    },

    async getOverallStats(params?: DateRangeParams): Promise<OverallStats> {
        const { data } = await api.get('/stats', { params });
        return data;
    },
};
