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

export const aboutParagraphs = [
    "Minha trajetória na tecnologia sempre foi guiada por inquietação. Eu nunca me contentei em apenas executar tarefas; eu queria entender como elas funcionavam, por que eram feitas daquela forma e, principalmente, como poderiam ser feitas melhor. Foi assim que comecei a transformar processos manuais em automações, dados brutos em estruturas organizadas e sistemas isolados em ecossistemas integrados.",
    "Ao longo do tempo, fui me aproximando naturalmente da engenharia de dados e da inteligência artificial. Não por tendência, mas por necessidade real. Em projetos práticos, percebi que dados mal estruturados atrasam decisões, que tarefas repetitivas drenam energia e que empresas crescem quando seus fluxos se tornam inteligentes. Construir pipelines, integrar APIs, automatizar operações e criar agentes de IA deixaram de ser apenas habilidades técnicas e passaram a ser ferramentas estratégicas para gerar eficiência e escala.",
    "Tenho um perfil analítico, mas também construtivo. Gosto de pensar arquitetura, mas gosto ainda mais de ver a solução funcionando em produção. Busco sempre o equilíbrio entre visão estratégica e execução sólida, entre planejamento e entrega. Para mim, tecnologia precisa sair do conceito e chegar ao impacto.",
    "Hoje, meu foco está em transformar complexidade em clareza. Criar sistemas que trabalham em segundo plano, mas que sustentam decisões melhores, processos mais rápidos e negócios mais preparados para crescer.",
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
        github: "https://github.com/rickluizms/portfolio-rickluizms",
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
