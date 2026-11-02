"use client";

import React, { useState } from "react";
import { Activity, ShieldCheck, Cpu, Database, Network, Clock, Sparkles } from "lucide-react";

interface PipelineScenario {
  id: string;
  name: string;
  category: string;
  latencyBadge: string;
  uptimeBadge: string;
  summary: string;
  nodes: {
    title: string;
    tech: string;
    metric: string;
    status: "healthy" | "active" | "optimized";
    desc: string;
  }[];
  keyInsights: string[];
}

export default function LiveTelemetry() {
  const scenarios: PipelineScenario[] = [
    {
      id: "voice-ai",
      name: "AI Voice Telephony & Live Routing",
      category: "Real-Time Streaming",
      latencyBadge: "148 ms e2e",
      uptimeBadge: "99.98% SLA",
      summary:
        "Sub-200ms end-to-end voice loop orchestrating LiveKit WebRTC SFU, streaming transcripts, and LLM intent recognition for 30K+ daily inbound calls.",
      nodes: [
        {
          title: "Inbound Call / WebRTC SFU",
          tech: "LiveKit SFU + SIP Trunk",
          metric: "sub-30ms audio frame",
          status: "active",
          desc: "Bi-directional audio streaming ingested via WebRTC data channels.",
        },
        {
          title: "Transcript Streamer",
          tech: "WebSockets + C# Worker",
          metric: "42ms chunk latency",
          status: "healthy",
          desc: "Token-by-token live transcription forwarded to intent analyzer.",
        },
        {
          title: "LLM Intent Classifier",
          tech: "OpenAI / Gemini Micro-Prompt",
          metric: "76ms inference window",
          status: "optimized",
          desc: "Real-time parsing extracting caller category and routing constraints.",
        },
        {
          title: "Deterministic Dispatch",
          tech: ".NET Core + Redis Routing",
          metric: "sub-10ms route exec",
          status: "healthy",
          desc: "Directs call to specialized agent or automated workflow instantly.",
        },
      ],
      keyInsights: [
        "Reduced misrouted customer inquiries by 35%.",
        "Decreased average caller hold time by 30%.",
        "Maintained sub-50ms latency across 50+ concurrent live audio streams.",
      ],
    },
    {
      id: "reconciliation",
      name: "Automated Transaction Reconciliation",
      category: "Enterprise Financial Ledger",
      latencyBadge: "< 50 ms query exec",
      uptimeBadge: "99.9% batch uptime",
      summary:
        "High-throughput transactional ingestion pairing 10,000+ daily financial events across ERP ledgers and payment gateways with zero manual spreadsheets.",
      nodes: [
        {
          title: "Webhook Ingestion Gate",
          tech: "ASP.NET Core Web API",
          metric: "20K+ events / day",
          status: "healthy",
          desc: "High-concurrency webhook receiver validating HMAC and signatures.",
        },
        {
          title: "Message Queue & DLQ",
          tech: "RabbitMQ + Dead Lettering",
          metric: "0 dropped packets",
          status: "active",
          desc: "Guarantees fault-tolerant buffering and retry policies.",
        },
        {
          title: "Centralized State Machine",
          tech: "Redis Distributed Locks",
          metric: "100% race-condition free",
          status: "optimized",
          desc: "Ensures idempotent operations on concurrent transactions.",
        },
        {
          title: "Batch Matching Engine",
          tech: "SQL Server (T-SQL Stored Procs)",
          metric: "40% faster query plan",
          status: "healthy",
          desc: "Executes indexed high-speed reconciliation against general ledger.",
        },
      ],
      keyInsights: [
        "Eliminated manual reconciliation spreadsheets entirely.",
        "Guaranteed 100% idempotent transaction matching without duplicate charges.",
        "Sustained 99.9% batch availability during peak fiscal reporting periods.",
      ],
    },
    {
      id: "rag-ai",
      name: "Enterprise RAG & Guardrail Pipeline",
      category: "Document Intelligence",
      latencyBadge: "780 ms full RAG",
      uptimeBadge: "98.2% factual score",
      summary:
        "Context-grounded compliance search engine indexing 150+ pages of institutional regulations with vector embeddings and strict hallucination guardrails.",
      nodes: [
        {
          title: "PDF Ingestion & Chunker",
          tech: "Python + Recursive Splitter",
          metric: "500-token passages",
          status: "healthy",
          desc: "Cleans, tokenizes, and segments regulatory manuals into embeddings.",
        },
        {
          title: "Vector Similarity Search",
          tech: "pgvector + HNSW Indexing",
          metric: "sub-15ms vector match",
          status: "active",
          desc: "Top-k cosine similarity retrieval over thousands of passage vectors.",
        },
        {
          title: "Negative Guardrail Filter",
          tech: "Constraint Verifier",
          metric: "0% uncited outputs",
          status: "optimized",
          desc: "Enforces strict bounds: answer only using verified cited context.",
        },
        {
          title: "Grounded Synthesis",
          tech: "Google Gemini 1.5 API",
          metric: "98%+ factual accuracy",
          status: "healthy",
          desc: "Generates natural language answer with precise page and section citations.",
        },
      ],
      keyInsights: [
        "Tested against 100+ edge-case queries with zero hallucinations.",
        "Delivers verifiable page citations for compliance auditing.",
        "Lightweight containerized deployment on Render with automated health telemetry.",
      ],
    },
  ];

  const [activeScenarioId, setActiveScenarioId] = useState(scenarios[0].id);
  const currentScenario = scenarios.find((s) => s.id === activeScenarioId) || scenarios[0];

  return (
    <section id="telemetry" className="py-20 relative bg-black/40 border-y border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Interactive Architecture Telemetry</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production System Flows
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Inspect how I design, optimize, and scale low-latency distributed workflows and
              production AI pipelines.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
            {scenarios.map((sc) => (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  activeScenarioId === sc.id
                    ? "bg-white/[0.12] text-white shadow-sm border border-white/20"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {sc.name.split(" ")[0]} {sc.name.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Telemetry Card */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{currentScenario.name}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                  {currentScenario.category}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl">{currentScenario.summary}</p>
            </div>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 font-mono text-xs text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentScenario.latencyBadge}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 font-mono text-xs text-cyan-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentScenario.uptimeBadge}</span>
              </div>
            </div>
          </div>

          {/* Interactive Pipeline Nodes (Visual Flow) */}
          <div className="py-8">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <Network className="w-3.5 h-3.5 text-cyan-400" />
              <span>Data & Execution Flow (Left to Right)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
              {currentScenario.nodes.map((node, i) => (
                <div
                  key={i}
                  className="bg-black/40 border border-white/[0.08] rounded-xl p-4 flex flex-col justify-between hover:border-cyan-400/40 transition-colors group relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-300">
                        {i + 1}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        {node.metric}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-1">
                      {node.title}
                    </h4>
                    <p className="text-[11px] font-mono text-indigo-300 mb-2">{node.tech}</p>
                    <p className="text-xs text-zinc-400 leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Architectural Outcomes */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="font-semibold text-zinc-200">Measurable Impact:</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {currentScenario.keyInsights.map((insight, idx) => (
                <div
                  key={idx}
                  className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-zinc-300"
                >
                  ✓ {insight}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
