"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { Cpu, Server, Database, Code2, Cloud, Sparkles } from "lucide-react";

export default function SkillsRadar() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Server className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Sparkles className="w-4 h-4 text-purple-400" />;
      case 2:
        return <Code2 className="w-4 h-4 text-indigo-400" />;
      case 3:
        return <Database className="w-4 h-4 text-emerald-400" />;
      case 4:
        return <Cloud className="w-4 h-4 text-sky-400" />;
      default:
        return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-3">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Stack & Specializations
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            A comprehensive overview of the tools, frameworks, and architectures I leverage to
            build mission-critical systems.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className={`glass-panel rounded-2xl p-6 transition-all duration-300 hover:border-white/20 flex flex-col justify-between ${
                idx === 0 ? "lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 mb-5 leading-relaxed">{cat.description}</p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-xs font-mono px-3 py-1 rounded-lg transition-colors flex items-center gap-1.5 ${
                        skill.highlight
                          ? "bg-white/[0.08] text-white border border-white/15 hover:border-cyan-400/50"
                          : "bg-white/[0.02] text-zinc-400 border border-white/[0.05] hover:text-zinc-200"
                      }`}
                    >
                      {skill.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                      )}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Production Grade</span>
                <span>Tier 1 Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
