export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "AI & Systems" | "Full Stack (.NET + Angular)";
  tags: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  architectureHighlights: string[];
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  promotionBadge?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; highlight?: boolean }[];
}

export const PERSONAL_INFO = {
  name: "Chandan Gupta",
  badge: "Software Engineer III • Onflo",
  headline: "Senior Full-Stack .NET & AI Systems Engineer",
  tagline:
    "Architecting high-throughput distributed microservices, real-time voice streaming platforms, and LLM-powered enterprise workflows.",
  location: "Mumbai, India (Open to Noida / Hybrid)",
  email: "chandan.cg799@gmail.com",
  phone: "+91-8080904958",
  github: "https://github.com/ck0201",
  linkedin: "https://linkedin.com/in/chandangupta8080",
  resumePath: "./Chandan_Gupta_Resume.pdf",
  status: "Available for Senior & High-Impact Engineering Roles",
  stats: [
    { label: "Career Progression", value: "Trainee → SE III", description: "3 promotions in 3.5 years" },
    { label: "Telephony Traffic", value: "30K+ Calls/Day", description: "Handled across distributed microservices" },
    { label: "Voice Streaming Latency", value: "< 200 ms", description: "WebRTC SFU + LLM voice agents" },
    { label: "Financial Transactions", value: "10K+ / Day", description: "Reconciled with zero spreadsheet errors" },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "se-3",
    role: "Software Engineer III (AI & Full Stack / Backend)",
    company: "Onflo",
    location: "Mumbai, India",
    period: "June 2026 – Present",
    isCurrent: true,
    promotionBadge: "Promotion to SE III",
    highlights: [
      "Lead technical architecture for real-time AI voice routing, orchestrating autonomous LLM agents via LiveKit WebRTC with sub-200ms end-to-end latency.",
      "Engineered intent-based dispatch workflows parsing live LLM transcripts, slashing misrouted calls by 35% and customer hold times by 30%.",
      "Partnered with cross-functional Data Science and UI teams to standardize WebSocket and REST contracts, ensuring <50ms latency for 50+ concurrent streams.",
      "Drive engineering standards across the org: conduct architectural design reviews, establish clean code guidelines, and mentor junior engineers on .NET Core microservices.",
    ],
    technologies: ["C#", ".NET Core 8/9", "LiveKit SFU", "WebRTC", "LLMs (OpenAI/Gemini)", "WebSockets", "Redis", "Microservices"],
  },
  {
    id: "se-2",
    role: "Software Engineer II",
    company: "Onflo",
    location: "Mumbai, India",
    period: "June 2025 – June 2026",
    promotionBadge: "Promotion to SE II",
    highlights: [
      "Architected and deployed an automated financial reconciliation engine from scratch in .NET Core and SQL Server, eliminating manual spreadsheets and processing 10K+ daily transactions.",
      "Optimized T-SQL stored procedures, database indexes, and relational schemas to accelerate batch reconciliation query execution by 40%.",
      "Built resilient asynchronous ingestion pipelines with dead-letter queueing, idempotent processing, and tenant isolation, maintaining 99.9% batch uptime.",
      "Eliminated race conditions across 20K+ daily webhook ingestion events by implementing a centralized state machine with Redis distributed locking.",
    ],
    technologies: [".NET Core", "SQL Server (T-SQL)", "Stored Procedures", "RabbitMQ", "Redis Distributed Locks", "Idempotency"],
  },
  {
    id: "se-1",
    role: "Software Engineer I",
    company: "Onflo",
    location: "Mumbai, India",
    period: "August 2024 – June 2025",
    promotionBadge: "Promotion to SE I",
    highlights: [
      "Delivered full-stack features using Angular, TypeScript, and ASP.NET Core Web API, building responsive SPAs with modular reusable component architecture.",
      "Authored shared internal NuGet packages adopted across 5+ backend teams, establishing organization-wide standards for structured logging and API error handling.",
      "Benchmarked system throughput under heavy load by building an automated k6 testing harness simulating 500+ concurrent calls prior to production rollouts.",
      "Automated local developer environments using Docker Compose for .NET microservices and databases, reducing developer onboarding time by 50%.",
    ],
    technologies: ["Angular", "TypeScript", "ASP.NET Core Web API", "NuGet Packages", "Docker", "k6 Load Testing", "CI/CD"],
  },
  {
    id: "trainee",
    role: "Trainee Technical Analyst",
    company: "Onflo",
    location: "Mumbai, India",
    period: "June 2023 – August 2024",
    highlights: [
      "Decomposed a legacy ASP.NET MVC monolith into modular ASP.NET Core RESTful APIs and Angular components, slashing page load latency by 40%.",
      "Scaled high-volume IVR and call-distribution routing algorithms to reliably support 25K–30K daily inbound calls.",
      "Accelerated routing configuration retrieval speeds by 10x by migrating in-memory caching to a distributed multi-node Redis cluster.",
    ],
    technologies: ["ASP.NET MVC", "ASP.NET Core", "Angular", "Redis Distributed Cache", "IVR Algorithms", "C#"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "ai-rulebook-rag",
    title: "School Rulebook AI Search",
    subtitle: "Enterprise RAG Question-Answering System",
    description:
      "A high-precision Retrieval-Augmented Generation (RAG) QA platform designed to index and query 150+ pages of institutional policies and guidelines with zero hallucinations.",
    category: "AI & Systems",
    tags: ["Python", "Google Gemini", "RAG Pipeline", "pgvector", "Render"],
    metrics: ["150+ Pages Indexed", "98%+ Factual Precision", "Sub-second Query Time"],
    liveUrl: "https://ai-document-rag-2a7t.onrender.com/",
    githubUrl: "https://github.com/ck0201/ai-document-rag",
    architectureHighlights: [
      "Chunked institutional PDFs into semantic passages stored with vector embeddings in pgvector.",
      "Engineered prompt guardrails with negative constraints to eliminate hallucinations and enforce strict cite-backed answers.",
      "Integrated health checks, latency logging, and Dockerized deployment on Render.",
    ],
    featured: true,
  },
  {
    id: "last-time-tracker",
    title: "LastTime – Activity Tracker",
    subtitle: "Full-Stack ASP.NET Core & Angular Platform",
    description:
      "Production-ready timeline tracking platform allowing users to monitor habits, recurring tasks, and life milestones with real-time updates and interactive analytics.",
    category: "Full Stack (.NET + Angular)",
    tags: [".NET Core 8", "Angular 17", "TypeScript", "PostgreSQL", "Vercel"],
    metrics: ["40+ REST Endpoints", "<50ms Database Queries", "JWT Auth & Refresh Flow"],
    liveUrl: "https://last-time-rose.vercel.app/login",
    githubUrl: "https://github.com/ck0201/LastTime",
    architectureHighlights: [
      "Architected clean layered architecture with repository pattern and CQRS-lite separation in ASP.NET Core.",
      "Structured normalized relational database schemas on Neon PostgreSQL with custom B-tree indices.",
      "Built a modern, responsive Angular SPA deployed on Vercel with reactive state management and route guards.",
    ],
    featured: true,
  },
  {
    id: "voice-routing-engine",
    title: "Real-Time AI Voice Dispatch Engine",
    subtitle: "Low-Latency Autonomous Telephony Gateway",
    description:
      "High-throughput telephony and voice intelligence pipeline connecting inbound callers to autonomous LLM voice agents over WebRTC with sub-second turnaround.",
    category: "AI & Systems",
    tags: ["C# / .NET Core", "LiveKit WebRTC SFU", "OpenAI / LLM", "WebSockets", "Redis Streams"],
    metrics: ["sub-200ms Voice Latency", "35% Misroute Reduction", "50+ Concurrent Streams"],
    architectureHighlights: [
      "Integrated LiveKit SFU for low-latency bi-directional audio packet transport over WebRTC.",
      "Real-time transcript analysis worker dynamically extracts caller intent to dispatch downstream actions.",
      "Resilient fallback mechanism instantly reroutes to human agents upon sentiment escalation.",
    ],
    featured: true,
  },
  {
    id: "financial-reconciliation-engine",
    title: "Automated Financial Reconciliation Engine",
    subtitle: "Idempotent High-Volume Transaction Matcher",
    description:
      "Core transaction processing platform built to ingest, validate, and match 10,000+ financial records daily across disparate payment gateways and ERP ledgers.",
    category: "Full Stack (.NET + Angular)",
    tags: [".NET Core", "SQL Server", "T-SQL Stored Procedures", "RabbitMQ", "Redis Locks"],
    metrics: ["10K+ Daily Transactions", "40% Faster Query Exec", "99.9% Batch Uptime"],
    architectureHighlights: [
      "Designed batch reconciliation algorithms executing high-speed record pairing with configurable tolerance rules.",
      "Optimized T-SQL stored procedures and index execution plans for high-throughput transactional queries.",
      "Utilized dead-letter queues and distributed Redis locks to ensure strict exactly-once processing guarantees.",
    ],
    featured: true,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Microservices",
    description: "Building high-performance, fault-tolerant enterprise APIs and services.",
    skills: [
      { name: "C#", highlight: true },
      { name: ".NET Core 8/9", highlight: true },
      { name: "ASP.NET Web API", highlight: true },
      { name: "Entity Framework Core", highlight: true },
      { name: "ASP.NET MVC" },
      { name: "FastAPI / Python" },
      { name: "Microservices Architecture", highlight: true },
      { name: "CQRS & Event-Driven" },
      { name: "RESTful API Design" },
      { name: "Idempotency & Resilience" },
    ],
  },
  {
    title: "AI & Real-Time Intelligence",
    description: "Integrating LLMs, vector search, and sub-second streaming into production systems.",
    skills: [
      { name: "LLM Integration (Gemini, OpenAI)", highlight: true },
      { name: "RAG Pipelines", highlight: true },
      { name: "Vector Embeddings & pgvector", highlight: true },
      { name: "Semantic Kernel / LangChain" },
      { name: "Prompt Guardrails & Tuning", highlight: true },
      { name: "WebRTC (LiveKit SFU)", highlight: true },
      { name: "WebSockets & SignalR" },
      { name: "Real-Time Audio Pipelines" },
    ],
  },
  {
    title: "Frontend & SPA Engineering",
    description: "Crafting modular, responsive, high-fidelity single-page web applications.",
    skills: [
      { name: "Angular (14-17+)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "React / Next.js", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "State Management (RxJS/Signals)" },
      { name: "Component Libraries & Design Systems" },
      { name: "Responsive UI & Performance" },
    ],
  },
  {
    title: "Databases & Performance Tuning",
    description: "Designing relational schemas, stored procedures, and low-latency caching layers.",
    skills: [
      { name: "SQL Server (T-SQL)", highlight: true },
      { name: "Stored Procedures & Index Tuning", highlight: true },
      { name: "PostgreSQL", highlight: true },
      { name: "Redis (Caching, Pub/Sub, Streams)", highlight: true },
      { name: "RabbitMQ (Queues & Dead-letter)", highlight: true },
      { name: "Neon DB / Cloud SQL" },
    ],
  },
  {
    title: "Cloud, DevOps & Tooling",
    description: "Containerization, automated deployments, and enterprise development tooling.",
    skills: [
      { name: "Azure (App Services, Azure OpenAI)", highlight: true },
      { name: "Docker & Docker Compose", highlight: true },
      { name: "CI/CD Pipelines (GitHub Actions)", highlight: true },
      { name: "Git & TFVC" },
      { name: "Linux / Bash" },
      { name: "k6 Load Testing" },
      { name: "Agile / Scrum Methodologies" },
    ],
  },
];
