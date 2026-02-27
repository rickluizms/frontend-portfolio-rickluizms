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
    "especialista em IA.",
    "desenvolvedor full stack.",
    "criador de agentes inteligentes.",
]

// ── About ──────────────────────────────────────────────

export const aboutSections = [
    {
        title: "Engenharia de Dados",
        overview:
            "Construo pipelines robustos e escaláveis que transformam dados brutos em estruturas organizadas, prontas para gerar valor. Do Data Lake à camada analítica, cada etapa é pensada para performance e confiabilidade.",
        activities: [
            "Pipelines ETL/ELT com Python e Apache Spark",
            "Orquestração de workflows com Airflow",
            "Modelagem e armazenamento em Data Lakes (HDFS)",
            "Ingestão de dados em larga escala com qualidade",
        ],
        result:
            "Dados estruturados que aceleram decisões e eliminam gargalos operacionais.",
    },
    {
        title: "Automação Inteligente",
        overview:
            "Automatizo processos repetitivos e dreno de energia com soluções inteligentes. Agentes de IA, integrações com LLMs e fluxos autônomos que liberam tempo para o que realmente importa.",
        activities: [
            "Agentes de IA com LangChain e LLMs",
            "Automação de processos com RAG e Prompt Engineering",
            "Sistemas de cobrança automatizados via WhatsApp",
            "Fluxos autônomos que aprendem e se adaptam",
        ],
        result:
            "Operações que rodam sozinhas, com inteligência e escala.",
    },
    {
        title: "Integração de Sistemas",
        overview:
            "Conecto sistemas isolados em ecossistemas coesos. APIs, microsserviços e integrações que fazem diferentes tecnologias conversarem de forma fluida e confiável.",
        activities: [
            "Desenvolvimento de REST APIs com Node.js e Spring Boot",
            "Integração com APIs externas e webhooks",
            "Aplicações full stack com React, Next.js e TypeScript",
            "Bancos de dados relacionais com PostgreSQL",
        ],
        result:
            "Ecossistemas integrados que eliminam retrabalho e centralizam informações.",
    },
    {
        title: "Arquitetura Orientada a Resultados",
        overview:
            "Penso arquitetura, mas gosto ainda mais de ver a solução funcionando em produção. Busco o equilíbrio entre visão estratégica e execução sólida, entre planejamento e entrega.",
        activities: [
            "Containerização com Docker e CI/CD",
            "Monitoramento e observabilidade de sistemas",
            "Arquiteturas escaláveis e resilientes",
            "Foco em entrega contínua e impacto real",
        ],
        result:
            "Sistemas que sustentam decisões melhores, processos mais rápidos e negócios preparados para crescer.",
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
            "Apache Spark",
            "Airflow",
            "ETL/ELT Pipelines",
            "Data Lakes",
        ],
    },
    {
        category: "Inteligência Artificial",
        icon: Brain,
        items: [
            "LLMs",
            "Agentes de IA",
            "RAG",
            "LangChain",
            "Prompt Engineering",
            "Automações Inteligentes",
        ],
    },
    {
        category: "Desenvolvimento",
        icon: Code2,
        items: [
            "TypeScript",
            "React / Next.js",
            "Node.js",
            "Java / Spring Boot",
            "REST APIs",
            "PostgreSQL",
        ],
    },
    {
        category: "DevOps & Cloud",
        icon: Cloud,
        items: [
            "Docker",
            "CI/CD",
            "Linux",
            "Git",
            "HDFS",
            "Monitoramento",
        ],
    },
];

// ── Experiências ───────────────────────────────────────

export const experiences = [
    {
        role: "Engenheiro de Dados & IA",
        company: "Projetos Independentes",
        period: "2024 — Presente",
        description:
            "Desenvolvimento de pipelines de dados, automações inteligentes com agentes de IA, integrações com APIs externas e criação de sistemas de cobrança automatizados com WhatsApp.",
        techs: ["Python", "Spark", "Airflow", "LangChain", "Docker"],
    },
    {
        role: "Desenvolvedor Full Stack",
        company: "Projetos Diversos",
        period: "2023 — 2024",
        description:
            "Construção de aplicações web completas com React, Next.js e Spring Boot. Criação de dashboards, sistemas de gestão e plataformas com autenticação e integração de dados.",
        techs: ["TypeScript", "React", "Next.js", "Java", "Spring Boot", "PostgreSQL"],
    },
    {
        role: "Automação & Dados",
        company: "Início da Carreira",
        period: "2022 — 2023",
        description:
            "Transformação de processos manuais em automações. Estruturação de dados brutos, criação de relatórios automatizados e início na construção de Data Lakes.",
        techs: ["Python", "SQL", "Excel", "Power BI", "Web Scraping"],
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
        title: "Motor de Cobrança Automatizado",
        description:
            "Sistema de cobrança inteligente com régua configurável por faixas de atraso. Integração com WhatsApp via Evolution API para envio automático de mensagens, com templates personalizáveis e agendamento.",
        techs: ["Java", "Spring Boot", "PostgreSQL", "Evolution API", "Docker"],
        github: "https://github.com/rickluizms",
    },
    {
        title: "Dashboard de Gestão Acadêmica",
        description:
            "Plataforma web para visualização de dados acadêmicos com dashboards interativos. Frequência por turma, matrículas, e métricas de desempenho com gráficos dinâmicos.",
        techs: ["Next.js", "TypeScript", "Shadcn/UI", "Spring Boot", "PostgreSQL"],
        github: "https://github.com/rickluizms",
    },
    {
        title: "Agente de IA para Candidaturas",
        description:
            "Agente inteligente que analisa vagas de emprego, avalia compatibilidade com o perfil do candidato e gerencia o pipeline de candidaturas automaticamente.",
        techs: ["Python", "LangChain", "LLMs", "Web Scraping", "PostgreSQL"],
        github: "https://github.com/rickluizms",
    },
    {
        title: "Portfólio Pessoal",
        description:
            "Este site! Construído com Next.js e Tailwind CSS, com animações de digitação, scroll reveal e tema dark/light. Design minimalista e responsivo.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        github: "https://github.com/rickluizms/frontend-portfolio-rickluizms",
        live: "#",
    },
    {
        title: "Portfólio Pessoal 2",
        description:
            "Este site! Construído com Next.js e Tailwind CSS, com animações de digitação, scroll reveal e tema dark/light. Design minimalista e responsivo.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        github: "https://github.com/rickluizms/portfolio-rickluizms",
        live: "#",
    },
    {
        title: "Portfólio Pessoal 3",
        description:
            "Este site! Construído com Next.js e Tailwind CSS, com animações de digitação, scroll reveal e tema dark/light. Design minimalista e responsivo.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        github: "https://github.com/rickluizms/portfolio-rickluizms",
        live: "#",
    },
    {
        title: "Portfólio Pessoal 4",
        description:
            "Este site! Construído com Next.js e Tailwind CSS, com animações de digitação, scroll reveal e tema dark/light. Design minimalista e responsivo.",
        techs: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide Icons"],
        github: "https://github.com/rickluizms/portfolio-rickluizms",
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
