"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "@/data/portfolioData";
import { Briefcase, TrendingUp, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const [selectedExpId, setSelectedExpId] = useState(EXPERIENCES[0].id);
  const selectedExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
            <span>High-Velocity Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
            Promoted 3 consecutive times in 3.5 years at Onflo from Trainee to Software Engineer III,
            taking on expanding architectural ownership and cross-functional leadership.
          </p>
        </div>

        {/* Desktop / Tablet Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Timeline Navigation Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 relative overflow-hidden border ${
                    isSelected
                      ? "bg-white/[0.08] border-cyan-400/50 shadow-lg shadow-cyan-950/40"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10"
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500" />
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-cyan-300 font-medium">
                      {exp.period}
                    </span>
                    {exp.promotionBadge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
                        {exp.promotionBadge}
                      </span>
                    )}
                  </div>

                  <div className="text-base font-bold text-white mb-0.5">{exp.role}</div>
                  <div className="text-xs text-zinc-400 flex items-center gap-2">
                    <Briefcase className="w-3 h-3 text-zinc-500" />
                    <span>{exp.company}</span>
                    <span>•</span>
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Card for Selected Role */}
          <div className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {selectedExp.company} • {selectedExp.location}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedExp.role}</h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 bg-white/[0.05] border border-white/10 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{selectedExp.period}</span>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="py-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                Core Deliverables & Architectural Impact
              </div>
              {selectedExp.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Technologies used in this role */}
            <div className="pt-6 border-t border-white/[0.08]">
              <div className="text-xs font-mono text-zinc-400 mb-2.5">Technologies Used:</div>
              <div className="flex flex-wrap gap-2">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:border-cyan-400/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
