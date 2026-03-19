// ============================
// Mock de Dados do Portfólio
// ============================

import {
    Database,
    Brain,
    Code2,
    Cloud,
} from "lucide-react";

export const HERO_SUFFIXES = [
    "o Luiz!",
    "engenheiro de dados.",
    "analista de dados e BI.",
    "desenvolvedor Python.",
]

// ── About ──────────────────────────────────────────────

export const aboutSections = [
    {
        title: "Engenharia de Dados",
        overview:
            "Atuo na construção de pipelines ETL/ELT, orquestração com Apache Airflow e processamento de dados com Python e SQL. Estruturo fluxos de ingestão, transformação e carga para ambientes analíticos, integrando sistemas legados como Firebird a bancos relacionais como PostgreSQL.",
        activities: [
            "Pipelines ETL/ELT com Python e SQL",
            "Orquestração de workflows com Apache Airflow",
            "Integração de sistemas legados (Firebird → PostgreSQL)",
            "Atualizações incrementais e ingestão em alta frequência",
        ],
        result:
            "Ambientes de dados estruturados, confiáveis e preparados para analytics e automação.",
    },
    {
        title: "Modelagem & Data Warehouse",
        overview:
            "Trabalho com modelagem relacional e dimensional (Star Schema) para Data Warehouse e BI, estruturando bases analíticas voltadas para relatórios estratégicos e tomada de decisão.",
        activities: [
            "Modelagem relacional em PostgreSQL",
            "Modelagem dimensional (Star Schema)",
            "Estruturação de Data Warehouse",
            "Criação de relatórios e KPIs no Power BI",
        ],
        result:
            "Dados organizados para análises estratégicas, relatórios gerenciais e suporte à decisão.",
    },
    {
        title: "Automação & Integração de Sistemas",
        overview:
            "Desenvolvo soluções backend e integrações via APIs REST, conectando sistemas internos, CRM e WhatsApp. Automatizo processos financeiros e operacionais, reduzindo esforço manual e aumentando eficiência.",
        activities: [
            "Desenvolvimento backend com Python",
            "Integração com APIs REST e CRM",
            "Automações financeiras e régua de cobrança",
            "Web scraping para integração de catálogos",
        ],
        result:
            "Processos automatizados, redução de retrabalho e maior eficiência operacional.",
    },
    {
        title: "IA Aplicada a Dados",
        overview:
            "Desenvolvo arquiteturas com LLMs e sistemas multiagente com RAG para recuperação de informações internas e execução de ações automatizadas, integrando dados estruturados a fluxos inteligentes.",
        activities: [
            "Arquiteturas multiagente com RAG",
            "Integração com WhatsApp via N8N",
            "Automação de emissão de boletos e certificados",
            "Uso de MCP Tools em sistemas orientados a agentes",
        ],
        result:
            "Soluções inteligentes que combinam dados estruturados com automação baseada em IA.",
    },
];

// ── Resumo / Skills ────────────────────────────────────

export const skills = [
    {
        category: "Linguagens & Big Data",
        icon: Database,
        items: [
            "Python",
            "Java",
            "SQL",
            "PySpark",
            "Apache Spark",
            "Databricks",
            "Delta Lake",
            "Hadoop",
        ],
    },
    {
        category: "Engenharia de Dados",
        icon: Cloud,
        items: [
            "ETL/ELT",
            "Apache Airflow",
            "Data Warehouse",
            "Data Lake",
            "Lakehouse",
            "Arquitetura Medallion",
            "Mensageria (Kafka/RabbitMQ)",
            "Celery",
        ],
    },
    {
        category: "IA & Integração",
        icon: Brain,
        items: [
            "LLMs",
            "RAG",
            "Embeddings",
            "Vector DB (pgvector)",
            "Agents",
            "LangChain",
            "APIs REST",
            "Web Scraping",
        ],
    },
    {
        category: "Bancos, Cloud & Analytics",
        icon: Code2,
        items: [
            "PostgreSQL",
            "MongoDB",
            "Microsoft Azure",
            "AWS",
            "Docker",
            "CI/CD",
            "Power BI",
            "Dashboards & KPIs",
        ],
    },
];

// ── Experiências ───────────────────────────────────────

export const experiences = [
    {
        role: "Engenheiro de Dados e Desenvolvedor",
        company: "Nova Didata",
        period: "Nov 2025 — Presente",
        description:
            "Refatoração de pipeline ETL (legado -> resiliência), desenvolvimento de régua de cobranças automatizada (Java + React), criação de agentes de IA para atendimento e inscrições (LLMs), implementação de pipeline RAG (pgvector) e plataforma de BI financeira/pedagógica (Java + React).",
        techs: ["Python", "Java", "SQL", "React", "LLMs", "RAG", "pgvector", "PostgreSQL"],
    },
    {
        role: "Analista de Dados",
        company: "Moreira Car",
        period: "Jan 2024 — Nov 2025",
        description:
            "Desenvolvimento de sistema web integrado ao WhatsApp e ERP Sige (API) para orçamentação, busca de veículos por placa via web scraping (<3s) e coleta automática de dados de +10 catálogos de fornecedores.",
        techs: ["React", "Python", "Web Scraping", "API REST", "WhatsApp"],
    },
    {
        role: "Analista de Dados Jr",
        company: "Nova Didata",
        period: "Dez 2022 — Dez 2023",
        description:
            "Implementação de pipeline ETL para dados não estruturados (PDFs/Planilhas), modelagem de banco relacional, dashboards Power BI com modelagem dimensional e automação para emissão de certificados.",
        techs: ["Python", "SQL", "Power BI", "ETL", "Modelagem Dimensional"],
    },
];

// ── Projetos ───────────────────────────────────────────

export const projects = [
    {
        title: "Data Lake CNPJ",
        description:
            "Pipeline completo de ingestão e transformação de dados públicos de CNPJs. Armazenamento em HDFS com processamento distribuído via Apache Spark, orquestrado por Airflow dentro de containers Docker.",
        techs: ["Python", "Spark", "HDFS", "Airflow", "Docker"],
        github: "https://github.com/rickluizms/cnpj-datalake",
        live: "/cnpj-datalake",
    },
    {
        title: "Real-Time Crypto Market Data Pipeline",
        description:
            "Infraestrutura robusta de streaming de dados construída em Python e Kafka para monitoramento do mercado de criptomoedas. Ingestão via WebSocket, agregação em janelas OHLCV e cálculo de indicadores técnicos em tempo real com TA-Lib. Observabilidade completa com Prometheus e Grafana.",
        techs: [
            "Python",
            "Kafka",
            "PostgreSQL",
            "Redis",
            "FastAPI",
            "Prometheus",
            "Grafana",
            "Docker"
        ],
        github: "https://github.com/rickluizms/event-driven-crypto-pipeline",
    },
    {
        title: "WakaTime Dev Insights",
        description:
            "Dev Insights é um pipeline de ingestão de dados responsável por integrar com a API do WakaTime, extrair métricas de produtividade e persistir dados em PostgreSQL. Arquitetura baseada em dois serviços independentes (Orchestrator + API REST com FastAPI), containerizados com Docker Compose.",
        techs: [
            "Python",
            "FastAPI",
            "PostgreSQL",
            "Docker",
            "Docker Compose",
            "WakaTime API",
            "Pydantic",
            "psycopg2"
        ],
        github: "https://github.com/rickluizms/wakatime-dev-insights",
    },
    {
        title: "Agente de IA com Guardrails e Evaluations (N8N)",
        description:
            "Fluxo de agente de IA com validações estruturadas (guardrails), análise de risco de resposta, controle de alucinação e sistema de evaluations automatizadas. Implementa checagens pré e pós-resposta, classificação de intenção, validação semântica e fallback para operador humano quando necessário.",
        techs: [
            "n8n",
            "Python",
            "LLMs",
            "Prompt Engineering",
            "Evaluations",
            "Guardrails",
            "OpenAI API"
        ],
        github: "https://github.com/rickluizms/open-n8n/tree/main/fluxo-n8n-ia-avancado",
        n8n_preview: true,
        n8n_preview_path: "/workflows/fluxo-n8n-ia-avancado.json"
    },
    {
        title: "Portfólio Pessoal",
        description:
            "Este site! Construído com Next.js e Tailwind CSS, com animações de digitação, scroll reveal e tema dark/light. Design minimalista e responsivo.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        github: "https://github.com/rickluizms/frontend-portfolio-rickluizms",
        live: "#",
    },
];

// ── Estatísticas (Mock) ────────────────────────────────

export const codingActivity = [
    { week: "Sem 1", hours: 32 },
    { week: "Sem 2", hours: 28 },
    { week: "Sem 3", hours: 41 },
    { week: "Sem 4", hours: 36 },
    { week: "Sem 5", hours: 45 },
    { week: "Sem 6", hours: 38 },
    { week: "Sem 7", hours: 42 },
    { week: "Sem 8", hours: 50 },
];

export const languageDistribution = [
    { language: "python", hours: 120, fill: "var(--color-python)" },
    { language: "typescript", hours: 95, fill: "var(--color-typescript)" },
    { language: "java", hours: 60, fill: "var(--color-java)" },
    { language: "sql", hours: 45, fill: "var(--color-sql)" },
    { language: "other", hours: 30, fill: "var(--color-other)" },
];

export const dailyCoding = [
    { day: "Seg", hours: 6.5 },
    { day: "Ter", hours: 7.2 },
    { day: "Qua", hours: 5.8 },
    { day: "Qui", hours: 8.1 },
    { day: "Sex", hours: 6.9 },
    { day: "Sáb", hours: 3.2 },
    { day: "Dom", hours: 2.5 },
];

export const statsHighlights = [
    { label: "Horas de Código", value: "1.240+", description: "nos últimos 12 meses" },
    { label: "Commits", value: "2.300+", description: "em repositórios pessoais" },
    { label: "Projetos", value: "15+", description: "entregues em produção" },
    { label: "Linguagens", value: "7", description: "utilizadas ativamente" },
];

// ── Contato ────────────────────────────────────────────

export const contactLinks = [
    {
        label: "GitHub",
        href: "https://github.com/rickluizms",
    },
    {
        label: "LinkedIn",
        href: "https://linkedin.com/in/rickluizms",
    },
    {
        label: "E-mail",
        href: "mailto:contato@rickluizms.dev",
    },
];
