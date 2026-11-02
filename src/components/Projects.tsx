"use client";

import React, { useState } from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI & Systems", "Full Stack (.NET + Angular)"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with filter tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-3">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Architectural Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems & Code
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Production systems, full-stack enterprise applications, and real-time AI architectures
              built for high reliability and low latency.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-white/[0.03] border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  filter === cat
                    ? "bg-white/[0.12] text-white shadow-sm border border-white/20"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project: Project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top ambient card glow */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                {/* Header: Category & Metrics */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.metrics[0] && (
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                        {project.metrics[0]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  {project.liveUrl && (
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  )}
                </h3>
                <p className="text-xs font-mono text-cyan-400/80 mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-6 p-3.5 rounded-xl bg-black/30 border border-white/[0.04]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-1">
                    System Design Highlights:
                  </div>
                  {project.architectureHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-cyan-400 shrink-0 font-bold">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Service</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

                <div className="text-[11px] font-mono text-zinc-400">
                  {project.metrics[1] || "Production Grade"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
