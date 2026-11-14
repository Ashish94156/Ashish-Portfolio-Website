"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  X,
  Code2,
  CheckCircle2,
  Terminal,
  Database,
  BarChart2,
  Search,
  Brain,
} from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  description: string;
  challenge: string;
  solution: string;
  tags: string[];
  gradient: string;
  icon: React.ReactNode;
  metrics: { label: string; value: string }[];
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "search-evaluation",
    title: "AI Search Quality & Relevance Evaluation",
    subtitle: "Ground-Truth Datasets for ML & AI Ranking Systems",
    category: "AI Evaluation / Search Quality",
    year: "2025 – Present",
    client: "RWS Group (Remote)",
    role: "Data & Search Quality Analyst",
    description:
      "Executed in-depth content and data evaluations across diverse query types and user scenarios using structured rating methodologies, delivering reliable, high-quality labeled datasets for machine learning and AI training workflows.",
    challenge:
      "High query ambiguity, subtle intent nuances, and strict scoring rubrics requiring consistent rating accuracy under high-volume daily deadline pressure.",
    solution:
      "Applied structured rating guidelines and calibrated intent classification rubrics. Provided actionable feedback on content personalization and relevance signals to optimize AI ranking algorithms.",
    tags: ["Search Quality Evaluation", "AI Ranking Rubrics", "User Intent Analysis", "Content Personalization", "Quality Assurance"],
    gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    icon: <Search className="w-5 h-5 text-cyan-400" />,
    metrics: [
      { label: "Quality Benchmark", value: "99.8%" },
      { label: "Daily Throughput", value: "High-Volume" },
      { label: "SLA Adherence", value: "100%" },
    ],
  },
  {
    id: "power-bi-dashboard",
    title: "Executive KPI & Evaluation Intelligence",
    subtitle: "Interactive Power BI & MS Excel Analytics Suite",
    category: "Data Visualization / BI",
    year: "2025",
    client: "Performance Intelligence",
    role: "Data Analyst",
    description:
      "Comprehensive business intelligence dashboard translating complex evaluation metrics and operational data into clear, interactive visual storytelling.",
    challenge:
      "Raw evaluation logs and multi-tab Excel workbooks lacked unified visualization, creating friction in strategic decision-making and performance tracking.",
    solution:
      "Engineered star-schema data models in Power BI, writing advanced DAX measures, dynamic drill-down hierarchies, and automated reporting views.",
    tags: ["Power BI", "MS Excel", "DAX", "Tableau", "Data Visualization", "KPI Dashboards"],
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    icon: <BarChart2 className="w-5 h-5 text-amber-400" />,
    metrics: [
      { label: "Reporting Velocity", value: "+300%" },
      { label: "Custom DAX Measures", value: "40+" },
      { label: "Decision Support", value: "Instant" },
    ],
  },
  {
    id: "eda-cleaning-pipeline",
    title: "Exploratory Data Analysis & Cleaning Engine",
    subtitle: "Python (Pandas & NumPy) Automated Data Quality",
    category: "Exploratory Analysis / Python",
    year: "2024",
    client: "Data Science & Quality",
    role: "Python Data Analyst",
    description:
      "End-to-end data preparation workflow specializing in rigorous data cleaning, handling missing value anomalies, and statistical distribution modeling.",
    challenge:
      "Dirty and unstructured real-world datasets with inconsistent formatting, categorical skew, and null values distorting analytical models.",
    solution:
      "Developed reusable Python scripts leveraging Pandas and NumPy for automated data sanitization, IQR outlier detection, and descriptive statistical profiling.",
    tags: ["Python", "Pandas", "NumPy", "Data Cleaning", "Descriptive Statistics", "EDA"],
    gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    icon: <Brain className="w-5 h-5 text-emerald-400" />,
    metrics: [
      { label: "Data Integrity", value: "99.9%" },
      { label: "Cleaning Time", value: "-60%" },
      { label: "Outliers Handled", value: "15k+" },
    ],
  },
  {
    id: "sql-analytics-engine",
    title: "Advanced SQL Query & Aggregation System",
    subtitle: "Relational Data Modeling & Complex Query Optimization",
    category: "Database Querying / SQL",
    year: "2024",
    client: "Enterprise Analytics",
    role: "SQL Developer & Analyst",
    description:
      "High-efficiency SQL querying pipeline utilizing multi-table joins, subqueries, and window partition functions for high-volume analytics.",
    challenge:
      "Unoptimized queries on large tables leading to slow turnaround times for recurring business reports and evaluation metric rollups.",
    solution:
      "Constructed normalized relational schemas and optimized Common Table Expressions (CTEs), window functions (ROW_NUMBER, RANK, LAG/LEAD), and indexing.",
    tags: ["SQL", "Relational Databases", "Window Functions", "CTEs", "Data Modeling", "Aggregation"],
    gradient: "from-violet-500/20 via-purple-600/10 to-transparent",
    icon: <Database className="w-5 h-5 text-violet-400" />,
    metrics: [
      { label: "Query Latency", value: "-70%" },
      { label: "Records Handled", value: "1M+" },
      { label: "Relational Accuracy", value: "100%" },
    ],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="work" className="relative w-full py-32 px-6 sm:px-12 md:px-20 lg:px-28 z-20 bg-[#070a12]">
      {/* Decorative ambient background accents */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Selected Case Studies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Data &amp; Quality <span className="text-gradient">Case Studies.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Real-world analytics workflows: from structured AI search evaluation to automated Python cleaning and executive Power BI dashboards.
          </p>
        </div>

        {/* 2x2 Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer rounded-3xl p-8 sm:p-10 glass-card overflow-hidden flex flex-col justify-between"
            >
              {/* Card Dynamic Gradient Backdrop */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-700`}
              />

              {/* Top metadata row */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400">
                      {project.client}
                    </span>
                    <span className="text-[11px] font-mono text-cyan-400">
                      {project.year}
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Title and description */}
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm font-light text-slate-400 mb-4">
                  {project.subtitle}
                </p>
                <p className="text-sm text-slate-300/90 leading-relaxed font-light line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Metrics preview row */}
              <div className="relative z-10 grid grid-cols-3 gap-2 py-3 px-4 rounded-2xl bg-black/40 border border-white/[0.05] mb-6">
                {project.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <span className="block text-[10px] uppercase font-mono text-slate-400">
                      {m.label}
                    </span>
                    <span className="block text-sm font-semibold font-mono text-cyan-300 mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags row */}
              <div className="relative z-10 flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                {project.tags.slice(0, 4).map((tag, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.02] text-slate-500">
                    +{project.tags.length - 4} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl glass-card p-8 sm:p-10 border border-white/20 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/[0.12] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header meta */}
              <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-3">
                <span>{selectedProject.client}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
                <span>•</span>
                <span className="text-slate-400">{selectedProject.role}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-base text-slate-300 font-light mb-6">
                {selectedProject.subtitle}
              </p>

              {/* Metrics strip */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-8">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      {m.label}
                    </span>
                    <span className="block text-lg font-bold text-cyan-300 font-mono mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="space-y-6 mb-8 text-sm sm:text-base leading-relaxed text-slate-300 font-light">
                <div className="p-5 rounded-2xl bg-red-500/5 border border-red-500/10">
                  <h4 className="text-xs uppercase font-mono font-semibold text-red-400 tracking-wider mb-2 flex items-center gap-2">
                    <Terminal className="w-4 h-4" />
                    The Analytical &amp; Quality Challenge
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-cyan-500/5 border border-cyan-500/10">
                  <h4 className="text-xs uppercase font-mono font-semibold text-cyan-400 tracking-wider mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    The Solution &amp; Impact
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="mb-8">
                <h4 className="text-xs uppercase font-mono text-slate-400 tracking-wider mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  Skills &amp; Technologies Applied
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1.5 rounded-xl bg-white/[0.04] text-slate-200 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <ExternalLink className="w-4 h-4" />
                  Inquire About This Methodology
                </a>
                <span className="text-xs font-mono text-slate-500">
                  RWS Group Quality Framework Aligned
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
