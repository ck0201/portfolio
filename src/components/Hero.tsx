"use client";

import React, { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import {
  ArrowDownRight,
  Download,
  Copy,
  Check,
  Code2,
  Terminal,
  Database,
  Radio,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="overview"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/10 to-transparent rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-medium">Software Engineer III</span>
            <span className="text-zinc-500">•</span>
            <span className="text-zinc-400">Onflo</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-300">
            <Code2 className="w-3.5 h-3.5 text-indigo-400" />
            <span>Full-Stack .NET + LLM Integration</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Building Robust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
              .NET Systems
            </span>{" "}
            & Production APIs
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Hi, I&apos;m <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. I&apos;m
            a full-stack developer with 3.5+ years of experience engineering backend microservices,
            relational databases, and Angular SPAs, with practical hands-on experience integrating
            LLMs and building Twilio calling workflows.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-sm shadow-md shadow-cyan-500/20 transition-all active:scale-95"
            >
              <span>View Projects</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumePath}
              download="Chandan_Gupta_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm transition-all"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-mono text-xs transition-colors"
              title="Click to copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </>
              )}
            </button>

            <div className="flex items-center gap-1.5 ml-1">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-cyan-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-4 rounded-xl flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                  {stat.label}
                </span>
                {idx === 0 && <Terminal className="w-3.5 h-3.5 text-cyan-400" />}
                {idx === 1 && <Code2 className="w-3.5 h-3.5 text-indigo-400" />}
                {idx === 2 && <Database className="w-3.5 h-3.5 text-emerald-400" />}
                {idx === 3 && <Radio className="w-3.5 h-3.5 text-amber-400" />}
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold tracking-tight text-white mb-0.5">
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-400">{stat.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
