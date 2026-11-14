"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, CheckCircle2, Award, Sparkles, Building2, Calendar, MapPin } from "lucide-react";

export default function AboutSection() {
  const experiences = [
    {
      company: "RWS Group",
      location: "Remote",
      role: "Data & Search Quality Analyst",
      period: "February 2025 – Present",
      status: "Current Role",
      highlights: [
        "Executed in-depth content and data evaluations across diverse query types and user scenarios using structured rating methodologies, delivering reliable, high-quality labeled datasets for machine learning and AI training workflows.",
        "Evaluated content personalization and relevance signals against strict scoring rubrics and quality guidelines, providing actionable feedback to optimize AI-driven ranking and recommendation systems.",
        "Maintained exceptional quality assurance standards and high-accuracy benchmarks while managing high-volume data processing and daily evaluation workloads under strict deadlines.",
      ],
    },
  ];

  const education = {
    degree: "Bachelor of Technology (CSE)",
    institution: "Lovely Professional University",
    description:
      "Bachelor of Technology (CSE), Lovely Professional University. Core foundation in relational database management (RDBMS/SQL), Python data structures, algorithms, exploratory analysis, and statistics.",
  };

  const coreStrengths = [
    {
      title: "User Intent Translation",
      desc: "Deconstructing nuanced queries and ambiguous edge-cases into reliable ground-truth datasets for AI models.",
    },
    {
      title: "Data Cleaning & EDA",
      desc: "Identifying distribution anomalies, handling null values, and ensuring spotless data integrity via SQL and Python.",
    },
    {
      title: "Actionable Visual Storytelling",
      desc: "Creating interactive Power BI and Tableau dashboards that empower executive teams to act with confidence.",
    },
  ];

  return (
    <section id="about" className="relative w-full py-32 px-6 sm:px-12 md:px-20 lg:px-28 z-20 bg-[#070a12]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 font-mono text-xs uppercase tracking-widest mb-4">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Career &amp; Background</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Professional <span className="text-gradient">Experience.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-slate-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Proven track record in high-accuracy data analysis, search quality evaluation, and cross-functional decision support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Experience Card */}
          <div className="lg:col-span-7 space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 sm:p-10 rounded-3xl glass-card relative overflow-hidden"
              >
                {/* Glow accent */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl" />

                {/* Company & Role Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/[0.08]">
                  <div>
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs mb-1">
                      <Building2 className="w-3.5 h-3.5" />
                      <span className="font-semibold text-white text-base">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-medium">
                      {exp.status}
                    </span>
                    <span className="text-xs font-mono text-slate-400 mt-1 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <div className="space-y-4">
                  {exp.highlights.map((bullet, i) => (
                    <div key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/[0.06]">
                  {["AI Training Workflows", "Relevance Scoring Rubrics", "Content Personalization", "Quality Assurance Benchmarks"].map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono px-3 py-1 rounded-lg bg-white/[0.03] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Core Analytical Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {coreStrengths.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl glass-panel border border-white/[0.06]">
                  <h4 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Summary Statement */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-8 sm:p-10 rounded-3xl glass-card relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Academic Education
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Engineering Foundation</span>
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-xs font-mono text-amber-400 font-semibold uppercase tracking-wider block">
                  Education
                </span>
                <h4 className="text-xl font-bold text-white leading-snug">
                  Bachelor of Technology (CSE)
                </h4>
                <p className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  Lovely Professional University
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs my-2">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>Bachelor of Technology (CSE), Lovely Professional University</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed pt-1">
                  Core foundation in relational databases (SQL), Python programming, data structures, algorithms, and exploratory statistics.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Field: Computer Science &amp; Engineering</span>
                <span className="text-emerald-400 font-bold">Graduated</span>
              </div>
            </motion.div>

            {/* Professional Summary Highlights Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="p-8 sm:p-10 rounded-3xl glass-card relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.08]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    Analytical Value Proposition
                  </h3>
                  <span className="text-xs font-mono text-slate-400">Strategic Alignment</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300 font-light leading-relaxed">
                <p>
                  &bull; Data Analyst with deep expertise across <strong>SQL, Python, Excel, and Power BI</strong>, specializing in search quality evaluation, data cleaning, and actionable visualization.
                </p>
                <p>
                  &bull; Proven ability to translate complex user intent and evaluation metrics into data-driven insights. Adept at collaborating in fast-paced environments to optimize information relevance and support strategic decision-making.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Work Environment: Remote / Global</span>
                <span className="text-cyan-400">Open for Analytics Roles</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
