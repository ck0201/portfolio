"use client";

import React, { useState } from "react";
import { EXPERIENCES, EDUCATION } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap } from "lucide-react";

export default function Experience() {
  const [selectedExpId, setSelectedExpId] = useState(EXPERIENCES[0].id);
  const selectedExp = EXPERIENCES.find((e) => e.id === selectedExpId) || EXPERIENCES[0];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300 mb-2.5">
            <Briefcase className="w-3.5 h-3.5 text-indigo-400" />
            <span>Career History</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-xl">
            3.5+ years of software engineering at Onflo, progressing from Trainee to Software
            Engineer III across backend microservices, full-stack modules, and third-party integrations.
          </p>
        </div>

        {/* Master / Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Role Selector */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedExpId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExpId(exp.id)}
                  className={`text-left p-4 rounded-xl transition-all border ${
                    isSelected
                      ? "bg-white/[0.08] border-cyan-400/50 shadow-md shadow-cyan-950/30"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono text-cyan-300 font-medium">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] border border-white/10 text-zinc-300">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-sm font-semibold text-white mb-0.5">{exp.role}</div>
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{exp.location}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Role Details */}
          <div className="lg:col-span-7 glass-panel rounded-xl p-5 sm:p-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-medium">
                  {selectedExp.company} • {selectedExp.location}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">{selectedExp.role}</h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{selectedExp.period}</span>
              </div>
            </div>

            {/* Bullet Highlights */}
            <div className="py-5 space-y-3.5">
              {selectedExp.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-white/[0.08]">
              <div className="text-[11px] font-mono text-zinc-400 mb-2">Technologies Used:</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Bar */}
        <div className="mt-8 p-4 rounded-xl glass-panel flex flex-col sm:flex-row sm:items-center justify-between gap-3 border border-white/[0.08]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{EDUCATION.degree}</div>
              <div className="text-xs text-zinc-400">
                {EDUCATION.institution} • {EDUCATION.location}
              </div>
            </div>
          </div>
          <div className="text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/10 px-2.5 py-1 rounded-lg self-start sm:self-auto">
            {EDUCATION.period}
          </div>
        </div>
      </div>
    </section>
  );
}
