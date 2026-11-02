"use client";

import React from "react";
import { PROJECTS, Project } from "@/data/portfolioData";
import { ExternalLink, Layers, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-black/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-2.5">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Projects & Systems
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Selected projects demonstrating backend architecture, full-stack development, and
            practical LLM & telephony integrations.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {PROJECTS.map((project: Project) => (
            <div
              key={project.id}
              className="glass-card rounded-xl p-5 sm:p-6 flex flex-col justify-between group relative"
            >
              <div>
                {/* Metric Badge */}
                {project.metrics && (
                  <div className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-md inline-block mb-3">
                    {project.metrics}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  {project.liveUrl && (
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                  )}
                </h3>
                <p className="text-xs font-mono text-zinc-400 mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5 p-3 rounded-lg bg-black/30 border border-white/[0.04]">
                  {project.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <span className="text-cyan-400 font-bold shrink-0">›</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-3.5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
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

                {!project.liveUrl && !project.githubUrl && (
                  <span className="text-[11px] font-mono text-zinc-500">Internal Enterprise Service</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
