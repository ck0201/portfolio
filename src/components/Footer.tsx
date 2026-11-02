"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-white/[0.06] bg-[#02040a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</div>
              <div className="text-xs text-zinc-400 font-mono">
                Senior Full-Stack .NET & AI Systems Engineer
              </div>
            </div>
          </div>

          <div className="text-xs text-zinc-400 font-mono text-center sm:text-right">
            Designed & Engineered with Next.js, TypeScript & Tailwind CSS.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-400 hover:text-white transition-all group"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
