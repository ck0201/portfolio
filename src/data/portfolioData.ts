export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge?: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: "Chandan Gupta",
  role: "Full-Stack .NET Developer",
  subRole: "Software Engineer III • Onflo",
  headline: "Full-Stack .NET Developer & Backend Engineer",
  bio: "Software Engineer with 3.5+ years of experience building scalable backend microservices, REST APIs, and full-stack applications with .NET Core, C#, Angular, and relational databases. Deep hands-on experience in SQL Server (T-SQL, Stored Procedures, Index Tuning) and PostgreSQL, alongside practical integration of LLMs (OpenAI, Gemini) and Twilio programmable telephony.",
  location: "Mumbai, India",
  email: "chandan.cg799@gmail.com",
  phone: "+91-8080904958",
  github: "https://github.com/ck0201",
  linkedin: "https://linkedin.com/in/chandangupta8080",
  resumePath: "./Chandan_Gupta_Resume.pdf",
  stats: [
    { label: "Experience", value: "3.5+ Years", note: "Trainee → SE III at Onflo" },
    { label: "Backend Core", value: ".NET & C#", note: "ASP.NET Core, Web API, EF Core" },
    { label: "Databases & SQL", value: "SQL Server & Postgres", note: "T-SQL, Stored Procs, Index Tuning" },
    { label: "Frontend", value: "Angular", note: "TypeScript, SPAs, Components" },
    { label: "AI & Telephony", value: "LLMs + Twilio", note: "OpenAI, Gemini, Call Routing" },
  ],
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "se-3",
    role: "Software Engineer III",
    company: "Onflo",
    location: "Mumbai, India",
    period: "June 2026 – Present",
    badge: "Current Role",
    highlights: [
      "Work with Twilio programmable telephony APIs and WebSockets to route, monitor, and manage high-volume inbound calls.",
      "Integrate LLMs (OpenAI, Gemini) to parse live transcripts and extract caller intent, cutting misrouted calls by 35% and hold times by 30%.",
      "Collaborate with cross-functional teams to standardize backend API contracts and WebSocket event formats.",
      "Review technical designs, mentor junior developers on .NET Core best practices, and refactor legacy service endpoints.",
    ],
    technologies: ["C#", ".NET Core", "Twilio API", "LLMs (OpenAI/Gemini)", "WebSockets", "Redis", "Microservices"],
  },
  {
    id: "se-2",
    role: "Software Engineer II",
    company: "Onflo",
    location: "Mumbai, India",
    period: "June 2025 – June 2026",
    badge: "Promotion",
    highlights: [
      "Built an automated transaction reconciliation engine in .NET Core and SQL Server from scratch, replacing manual spreadsheets for 10K+ daily records.",
      "Designed and optimized complex T-SQL stored procedures, database indexes, and relational schemas, reducing batch query execution times by 40%.",
      "Created asynchronous processing workers with RabbitMQ and dead-letter queues to handle webhook ingestion spikes with 99.9% uptime.",
      "Implemented a centralized state machine with Redis distributed locks to eliminate concurrency race conditions.",
    ],
    technologies: [".NET Core", "SQL Server", "T-SQL", "Stored Procedures", "RabbitMQ", "Redis", "Idempotency"],
  },
  {
    id: "se-1",
    role: "Software Engineer I",
    company: "Onflo",
    location: "Mumbai, India",
    period: "August 2024 – June 2025",
    badge: "Promotion",
    highlights: [
      "Developed full-stack modules using Angular, TypeScript, and ASP.NET Core Web API, delivering responsive single-page applications.",
      "Authored shared internal NuGet packages for structured logging and standard API error handling adopted by 5+ backend teams.",
      "Built load-testing harnesses using k6 simulating 500+ concurrent calls to identify bottlenecks before production releases.",
      "Set up containerized local development environments using Docker Compose for microservices and databases.",
    ],
    technologies: ["Angular", "TypeScript", "ASP.NET Core Web API", "NuGet", "Docker", "k6 Load Testing", "Git"],
  },
  {
    id: "trainee",
    role: "Trainee Technical Analyst",
    company: "Onflo",
    location: "Mumbai, India",
    period: "June 2023 – August 2024",
    highlights: [
      "Helped migrate a legacy ASP.NET MVC monolith into modular ASP.NET Core RESTful APIs and Angular components, cutting page load latency by 40%.",
      "Maintained and enhanced high-volume IVR and call-distribution logic supporting 25K–30K daily inbound calls.",
      "Improved configuration retrieval speeds by moving frequently read settings to a multi-node Redis cache.",
    ],
    technologies: ["ASP.NET Core", "ASP.NET MVC", "Angular", "Redis", "C#", "SQL Server"],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "school-rulebook-rag",
    title: "School Rulebook AI Search",
    subtitle: "RAG Question-Answering Application",
    description:
      "A document question-answering tool that lets users search and query 150+ pages of institutional policies using natural language with verifiable citations.",
    tags: ["Python", "Google Gemini API", "RAG", "pgvector", "Render"],
    metrics: "150+ Pages Indexed • 98%+ Accuracy",
    liveUrl: "https://ai-document-rag-2a7t.onrender.com/",
    githubUrl: "https://github.com/ck0201/ai-document-rag",
    highlights: [
      "Chunked institutional PDFs into semantic passages and generated vector embeddings.",
      "Implemented strict prompt guardrails with negative constraints to minimize hallucinations.",
      "Deployed containerized service on Render with health checks and clean REST endpoints.",
    ],
  },
  {
    id: "last-time-tracker",
    title: "LastTime – Activity Tracker",
    subtitle: "Full-Stack .NET Core & Angular Application",
    description:
      "A production-ready productivity and habit tracker allowing users to track recurrent tasks, view timelines, and analyze activity history.",
    tags: [".NET Core 8", "Angular 17", "TypeScript", "PostgreSQL", "Vercel"],
    metrics: "40+ REST Endpoints • <50ms Query Times",
    liveUrl: "https://last-time-rose.vercel.app/login",
    githubUrl: "https://github.com/ck0201/LastTime",
    highlights: [
      "Engineered backend REST APIs with ASP.NET Core using repository pattern and JWT authentication.",
      "Designed normalized PostgreSQL schemas with optimized B-tree indexes.",
      "Built a responsive Angular SPA with route guards, reactive forms, and state management.",
    ],
  },
  {
    id: "transaction-reconciliation",
    title: "Automated Reconciliation Engine",
    subtitle: "High-Volume Transaction Matching System",
    description:
      "A robust financial reconciliation service built to match and validate 10,000+ daily financial records across payment gateways and ledger entries.",
    tags: [".NET Core", "SQL Server", "T-SQL Stored Procedures", "RabbitMQ", "Redis"],
    metrics: "10K+ Daily Transactions • 40% Faster Execution",
    highlights: [
      "Designed batch matching logic with configurable tolerance rules and exception auditing.",
      "Written and tuned complex T-SQL stored procedures and indexing strategies for high throughput.",
      "Utilized RabbitMQ queues and Redis locks to guarantee idempotent, duplicate-safe processing.",
    ],
  },
  {
    id: "twilio-call-router",
    title: "Twilio Telephony & Smart Call Router",
    subtitle: "Programmable Inbound Call Dispatch Service",
    description:
      "Backend telephony integration connecting Twilio voice webhooks with .NET microservices and LLM intent recognition to route incoming calls efficiently.",
    tags: ["C#", ".NET Core", "Twilio API", "WebSockets", "LLMs (OpenAI)", "Redis"],
    metrics: "35% Misroute Reduction • Real-Time WebSockets",
    highlights: [
      "Integrated Twilio voice webhooks and WebSocket audio streams for live call handling.",
      "Used LLMs to parse caller speech transcripts in real time to categorize intent.",
      "Automated fallback routing to human agents when sentiment or complexity exceeds threshold.",
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Databases & Performance Tuning",
    skills: [
      "SQL Server (T-SQL)",
      "Stored Procedures",
      "Query Optimization & Index Tuning",
      "PostgreSQL",
      "Entity Framework Core",
      "Redis (Caching & Locks)",
      "Database Schema Design",
    ],
  },
  {
    category: "Backend & Web APIs",
    skills: [
      ".NET Core 8/9",
      "C#",
      "ASP.NET Web API",
      "ASP.NET MVC",
      "Microservices",
      "RESTful API Design",
      "RabbitMQ (Queues)",
      "FastAPI / Python",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "Angular (14–17)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "RxJS",
      "Single Page Applications",
    ],
  },
  {
    category: "AI, APIs & Telephony",
    skills: [
      "LLM Integration (OpenAI, Gemini)",
      "RAG Pipelines",
      "Vector Search (pgvector)",
      "Twilio Voice API",
      "WebSockets",
      "Prompt Guardrails",
    ],
  },
  {
    category: "DevOps & Engineering Tools",
    skills: [
      "Docker & Docker Compose",
      "Azure (App Services, DBs)",
      "Git & GitHub Actions",
      "Linux / Bash",
      "k6 Load Testing",
      "Agile / Scrum",
    ],
  },
];
