"use client";

import React from "react";
import { SKILL_GROUPS } from "@/data/portfolioData";
import { Code2, Server, Layout, Database, Wrench, Radio } from "lucide-react";

export default function SkillsRadar() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
      case 1:
        return <Server className="w-4 h-4 text-indigo-400" />;
      case 2:
        return <Layout className="w-4 h-4 text-emerald-400" />;
      case 3:
        return <Radio className="w-4 h-4 text-amber-400" />;
      case 4:
        return <Database className="w-4 h-4 text-purple-400" />;
      case 5:
        return <Wrench className="w-4 h-4 text-sky-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-2.5">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Tools & Technologies
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            Technologies I use day-to-day for designing, developing, and running backend services
            and full-stack applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={group.category}
              className="glass-panel rounded-xl p-5 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <h3 className="text-sm font-semibold text-white">{group.category}</h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.06] text-zinc-300 hover:border-cyan-400/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
