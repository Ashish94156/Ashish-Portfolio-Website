"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Sparkles, ArrowDown, Database, BarChart3, LineChart, BrainCircuit } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
  name?: string;
  role?: string;
}

export default function Overlay({
  scrollYProgress,
  name = "Ashish Singh",
  role = "Data Analyst",
}: OverlayProps) {
  // ---------------- Section 1 (0% scroll - Center) ----------------
  const s1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.18], [1, 1, 0]);
  const s1Y = useTransform(scrollYProgress, [0, 0.18], [0, -70]);
  const s1Scale = useTransform(scrollYProgress, [0, 0.18], [1, 0.92]);

  // ---------------- Section 2 (30% scroll - Left aligned) ----------------
  const s2Opacity = useTransform(scrollYProgress, [0.18, 0.26, 0.38, 0.46], [0, 1, 1, 0]);
  const s2Y = useTransform(scrollYProgress, [0.18, 0.26, 0.38, 0.46], [80, 0, 0, -70]);
  const s2Scale = useTransform(scrollYProgress, [0.18, 0.26, 0.46], [0.95, 1, 0.95]);

  // ---------------- Section 3 (60% scroll - Right aligned) ----------------
  const s3Opacity = useTransform(scrollYProgress, [0.48, 0.56, 0.68, 0.76], [0, 1, 1, 0]);
  const s3Y = useTransform(scrollYProgress, [0.48, 0.56, 0.68, 0.76], [80, 0, 0, -70]);
  const s3Scale = useTransform(scrollYProgress, [0.48, 0.56, 0.76], [0.95, 1, 0.95]);

  // ---------------- Section 4 (85% scroll - Center Transition) ----------------
  const s4Opacity = useTransform(scrollYProgress, [0.77, 0.85, 0.93, 0.99], [0, 1, 1, 0]);
  const s4Y = useTransform(scrollYProgress, [0.77, 0.85, 0.93, 0.99], [70, 0, 0, -50]);
  const s4Scale = useTransform(scrollYProgress, [0.77, 0.85, 0.99], [0.95, 1, 0.95]);

  return (
    <div className="relative w-full h-full pointer-events-none select-none">
      {/* ---------------- Section 1 (0%): Center ---------------- */}
      <motion.div
        style={{ opacity: s1Opacity, y: s1Y, scale: s1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-xl mb-6 shadow-lg shadow-black/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono tracking-wider uppercase text-slate-300">
              Data Analyst &bull; Search Quality &bull; AI Evaluation
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-4">
            <span className="block text-gradient drop-shadow-2xl">{name}.</span>
            <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-slate-400 tracking-normal mt-1">
              {role}.
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
            Specializing in SQL, Python, Excel, and Power BI. Decoding user intent, optimizing search relevance, and delivering high-accuracy data foundations for AI.
          </p>

          {/* Scroll cue prompt */}
          <div className="mt-12 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-slate-400">
              Scroll To Explore Analysis
            </span>
            <ArrowDown className="w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </motion.div>

      {/* ---------------- Section 2 (30%): Left Aligned ---------------- */}
      <motion.div
        style={{ opacity: s2Opacity, y: s2Y, scale: s2Scale }}
        className="absolute inset-0 flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32"
      >
        <div className="max-w-xl text-left pointer-events-auto">
          {/* Index pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs mb-4">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>01 // SEARCH QUALITY & AI EVALUATION</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Decoding user intent & <br />
            <span className="text-gradient-accent">search intelligence.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8">
            Executing in-depth content and query evaluations with structured rating methodologies. Producing high-accuracy labeled datasets to optimize AI-driven ranking and recommendation systems.
          </p>

          {/* Feature highlights */}
          <div className="grid grid-cols-2 gap-3">
            <div className="glass-panel p-3.5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Database className="w-4 h-4" />
                <span className="text-xs font-mono font-medium">SQL & Python</span>
              </div>
              <p className="text-xs text-slate-400">Querying, cleaning & Exploratory Data Analysis</p>
            </div>

            <div className="glass-panel p-3.5 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-colors">
              <div className="flex items-center gap-2 text-cyan-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono font-medium">AI Ranking Signals</span>
              </div>
              <p className="text-xs text-slate-400">Personalization rubrics & quality benchmarks</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------------- Section 3 (60%): Right Aligned ---------------- */}
      <motion.div
        style={{ opacity: s3Opacity, y: s3Y, scale: s3Scale }}
        className="absolute inset-0 flex items-center justify-end px-8 sm:px-16 md:px-24 lg:px-32 text-right"
      >
        <div className="max-w-xl text-right flex flex-col items-end pointer-events-auto">
          {/* Index pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>02 // VISUALIZATION & INSIGHTS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            Translating metrics into <br />
            <span className="text-gradient-warm">actionable strategy.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
            Bridging raw numerical complexity with crystal-clear visual storytelling in Power BI, Tableau, and Excel. Empowering strategic decision-makers with decisive insights.
          </p>

          {/* Duality metrics */}
          <div className="flex flex-wrap justify-end gap-3 max-w-md">
            <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-3">
              <span className="text-lg font-bold font-mono text-amber-400">99.8%</span>
              <span className="text-xs text-slate-400 text-left">Quality QA Benchmark</span>
            </div>
            <div className="glass-panel px-4 py-2.5 rounded-xl border border-white/10 flex items-center gap-3">
              <span className="text-lg font-bold font-mono text-cyan-400">100k+</span>
              <span className="text-xs text-slate-400 text-left">Evaluated Data Signals</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ---------------- Section 4 (85%): Center Climax ---------------- */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y, scale: s4Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 font-mono text-xs mb-4">
            <LineChart className="w-3.5 h-3.5" />
            <span>03 // ANALYTICS SHOWCASE</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
            Proven Impact <span className="text-gradient-accent">In Action.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 max-w-lg font-light mb-8">
            Scroll down to review structured case studies in search quality evaluation, statistical EDA, and Power BI dashboards.
          </p>

          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest animate-pulse">
            <span>Scroll Into Case Studies</span>
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
