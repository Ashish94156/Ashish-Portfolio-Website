"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Database,
  BarChart3,
  Search,
  Sparkles,
  Zap,
  Check,
  Copy,
  TableProperties,
  Brain,
  Sliders,
} from "lucide-react";

export default function Capabilities() {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const snippetCode = `# Python EDA & Data Cleaning Pipeline
import pandas as pd
import numpy as np

def clean_and_profile_evaluations(df: pd.DataFrame) -> pd.DataFrame:
    # Handle missing values & normalize user query intent
    df['query_intent'] = df['query_intent'].str.strip().str.lower()
    df['relevance_score'] = df['relevance_score'].fillna(df['relevance_score'].median())
    
    # Filter high-confidence AI training evaluations
    clean_df = df[df['quality_flag'] == True].copy()
    
    # Compute descriptive statistics & distribution percentiles
    summary = clean_df.groupby('query_intent')['relevance_score'].agg(['mean', 'std', 'count'])
    return clean_df, summary`;

  const copyCode = () => {
    navigator.clipboard.writeText(snippetCode);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const capabilities = [
    {
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      title: "Programming & Querying",
      category: "Core Technical",
      description:
        "Writing robust SQL queries with complex joins, window functions, and subqueries alongside Python for data manipulation.",
      skills: ["SQL", "Python", "Complex Queries", "Window Functions", "Data Modeling", "ETL"],
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-amber-400" />,
      title: "Data Visualization & BI",
      category: "Visual Storytelling",
      description:
        "Transforming raw tabular datasets into dynamic, executive-ready interactive dashboards and business intelligence reports.",
      skills: ["Power BI", "Tableau", "MS Excel", "DAX Formulas", "Pivot Tables", "VLOOKUP/XLOOKUP"],
    },
    {
      icon: <TableProperties className="w-5 h-5 text-violet-400" />,
      title: "Analytical Abilities",
      category: "Statistical Foundation",
      description:
        "Rigorous exploratory data analysis (EDA), anomaly and null cleaning, descriptive statistics, and generating actionable business insights.",
      skills: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Insight Generation", "Descriptive Statistics", "Data Sanitization"],
    },
    {
      icon: <Search className="w-5 h-5 text-emerald-400" />,
      title: "Search Quality & AI Evaluation",
      category: "AI & Relevance",
      description:
        "Evaluating content personalization, user intent nuances, and ranking signals to optimize AI-driven recommendation and retrieval systems.",
      skills: ["Search Quality Evaluation", "Rating Methodologies", "ML Training Datasets", "Content Personalization", "Quality Assurance"],
    },
  ];

  return (
    <section id="capabilities" className="relative w-full py-32 px-6 sm:px-12 md:px-20 lg:px-28 z-20 bg-[#070a12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Skill Matrix &amp; Tooling</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Analytical <span className="text-gradient">Capabilities.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Proficiencies across query languages, business intelligence platforms, statistical exploration, and search quality evaluation frameworks.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl glass-card flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.08] transition-all duration-300">
                    {cap.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {cap.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                  {cap.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {cap.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code & Logic Architecture Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-8 rounded-3xl glass-card flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/60 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/60 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/60 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-400 ml-2">
                  data_cleaning_pipeline.py — Python EDA &amp; Evaluation Sanitization
                </span>
              </div>

              <button
                onClick={copyCode}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-cyan-400 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/10 transition-colors"
              >
                {copiedSnippet ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Snippet</span>
                  </>
                )}
              </button>
            </div>

            <pre className="font-mono text-xs sm:text-[13px] text-cyan-200/90 bg-black/40 p-4 sm:p-5 rounded-2xl border border-white/[0.06] overflow-x-auto leading-relaxed">
              <code>{snippetCode}</code>
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-400">
                SQL &bull; Python &bull; Power BI &bull; MS Excel &bull; Tableau
              </span>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Clean Data In &rarr; Actionable Decision Support Out
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
