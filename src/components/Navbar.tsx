"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X, Linkedin } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Story", href: "#top" },
    { label: "Case Studies", href: "#work" },
    { label: "Skills", href: "#capabilities" },
    { label: "Experience", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-5 transition-all duration-300 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Monogram / Brand Logo */}
        <a
          href="#top"
          className="pointer-events-auto group flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 shadow-lg shadow-black/40"
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-slate-950 font-black text-xs">
            AS
          </div>
          <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            Ashish Singh
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-cyan-400 border-l border-white/10 pl-2">
            Data Analyst
          </span>
        </a>

        {/* Desktop Nav Links Pill */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full glass-panel shadow-lg shadow-black/40">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action: LinkedIn + Get in Touch CTA */}
        <div className="pointer-events-auto flex items-center gap-3">
          {/* LinkedIn Icon Link */}
          <a
            href="https://www.linkedin.com/in/9415-ashish-singh-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 hover:text-cyan-300 hover:border-cyan-400/30 text-xs font-mono transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
            <span>LinkedIn</span>
          </a>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-semibold tracking-wide shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-slate-300"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto md:hidden mt-3 mx-auto max-w-sm rounded-2xl glass-card p-4 border border-white/10 shadow-2xl"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-mono text-slate-300 hover:text-cyan-300 px-3 py-2 rounded-xl hover:bg-white/[0.05] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/9415-ashish-singh-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono text-cyan-400 px-3 py-2 rounded-xl hover:bg-white/[0.05] transition-colors flex items-center gap-2"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
