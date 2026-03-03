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
    "especialista em pipelines ETL/ELT.",
    "arquiteto de dados em Azure & Databricks.",
    "desenvolvedor de soluções com LLMs.",
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
        category: "Engenharia de Dados",
        icon: Database,
        items: [
            "Python",
            "SQL",
            "Apache Airflow",
            "Apache Spark",
            "Databricks",
            "PostgreSQL",
        ],
    },
    {
        category: "Cloud & Data Platform",
        icon: Cloud,
        items: [
            "Microsoft Azure",
            "Azure App Services",
            "Azure SQL Database",
            "Amazon S3",
            "Data Warehouse",
            "Modelagem Dimensional",
        ],
    },
    {
        category: "Inteligência Artificial",
        icon: Brain,
        items: [
            "LLMs",
            "RAG",
            "Arquitetura Multiagente",
            "MCP Tools",
            "N8N",
            "Integração via WhatsApp",
        ],
    },
    {
        category: "Desenvolvimento & Integração",
        icon: Code2,
        items: [
            "Python (Backend)",
            "React",
            "APIs REST",
            "Web Scraping",
            "Firebird",
            "Power BI",
        ],
    },
];

// ── Experiências ───────────────────────────────────────

export const experiences = [
    {
        role: "Engenheiro de Dados",
        company: "Nova Didata",
        period: "Nov 2025 — Presente",
        description:
            "Desenvolvimento de pipeline de ingestão integrado ao Firebird com Python e Airflow, implementando atualizações incrementais a cada 15 minutos. Reestruturação de modelagem relacional em PostgreSQL, desenvolvimento de régua de cobrança automatizada (Python + React) e construção de sistema multiagente com LLMs e RAG integrado ao CRM via WhatsApp.",
        techs: ["Python", "SQL", "Apache Airflow", "PostgreSQL", "React", "LLMs"],
    },
    {
        role: "Analista de Dados Jr",
        company: "Moreira Car",
        period: "Jan 2024 — Nov 2025",
        description:
            "Desenvolvimento de sistema web integrado ao WhatsApp e SIGE, criação de agente de IA para registro automático de receitas e despesas utilizando N8N e MCP Tools, além de automação de integração de catálogos de fornecedores via web scraping em Python.",
        techs: ["Python", "N8N", "MCP Tools", "Web Scraping", "WhatsApp API"],
    },
    {
        role: "Analista de Dados Jr",
        company: "Nova Didata",
        period: "Dez 2022 — Dez 2023",
        description:
            "Desenvolvimento de automações em Python para geração de certificados e documentos, criação de pipeline de ingestão de dados, modelagem dimensional para BI, construção de relatórios no Power BI e deploy de aplicações na Microsoft Azure.",
        techs: ["Python", "SQL", "Power BI", "Azure App Services", "Azure SQL Database"],
    },
    {
        role: "Estagiário",
        company: "Caixa Econômica Federal",
        period: "Mai 2017 — Dez 2018",
        description:
            "Atuação em atendimento ao cliente, organização de documentos, digitalização de contratos e suporte às rotinas administrativas da agência.",
        techs: ["Atendimento", "Rotinas Administrativas"],
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
        title: "Fluxo WhatsApp — Transcrição e Buffer Inteligente",
        description:
            "Fluxo de integração com WhatsApp via Evolution API construído no n8n, com transcrição automática de áudios (speech-to-text), buffer inteligente de mensagens para consolidação de contexto e envio estruturado ao backend. Inclui controle de sessão, debounce de mensagens e registro persistente das interações.",
        techs: [
            "n8n",
            "WhatsApp",
            "Evolution API",
            "Speech-to-Text",
            "Webhooks",
            "PostgreSQL",
            "Docker"
        ],
        github: "https://github.com/rickluizms/open-n8n/tree/main/fluxo-n8n-whatsapp",
    },
    {
        title: "Agente de IA com Guardrails e Evaluations",
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
        title: "Arquitetura Multiagente para Atendimento Inteligente",
        description:
            "Implementação de arquitetura multiagente com separação de responsabilidades (Agente Classificador, Agente Executor, Agente Validador e Agente Supervisor). Orquestração via n8n com memória compartilhada e controle de estado, permitindo decisões dinâmicas e fluxos complexos de atendimento.",
        techs: [
            "n8n",
            "Python",
            "LLMs",
            "LangChain",
            "State Management",
            "PostgreSQL",
            "Docker"
        ],
        github: "https://github.com/rickluizms/open-n8n/tree/main/fluxo-n8n-ia-multiagente",
    },
    {
        title: "UserNine Nexus CRM",
        description:
            "Plataforma orientada a domínio e orquestração de pipelines de engajamento automatizado. Destaque para a integração profunda com n8n, permitindo a construção de agentes estruturados e prompts modulares, além da implementação de output parsers para extração de entidades via LLMs. Arquitetura escalável suportada por filas RabbitMQ e Redis, sincronizando fluxos de IA com extrações de dados via web scraping em Python.",
        techs: [
            "Java",
            "Spring Boot",
            "React",
            "Shadcn/UI",
            "Python",
            "PostgreSQL",
            "Redis",
            "RabbitMQ",
            "n8n",
            "Docker"
        ],
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
