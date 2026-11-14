"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import {
  Mail,
  Copy,
  Check,
  ArrowUp,
  Linkedin,
  Phone,
  Sparkles,
  ExternalLink,
} from "lucide-react";

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [timeStr, setTimeStr] = useState<string>("");

  const emailAddress = "imashish338@gmail.com";
  const phoneNumber = "+91-9696653899";
  const linkedInUrl = "https://www.linkedin.com/in/9415-ashish-singh-/";

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const triggerConfetti = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ["#38bdf8", "#818cf8", "#f59e0b", "#ffffff"],
      ticks: 200,
      gravity: 1.2,
      decay: 0.94,
      startVelocity: 25,
    });
  };

  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    triggerConfetti(e);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    triggerConfetti(e);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full pt-28 pb-16 px-6 sm:px-12 md:px-20 lg:px-28 z-20 bg-[#070a12] border-t border-white/[0.08]">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-cyan-600/10 via-indigo-600/5 to-transparent blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Giant Call to Action */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-400 font-mono text-xs uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Initiate Contact</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
            Let&apos;s turn data into <br />
            <span className="text-gradient">strategic impact.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 font-light max-w-xl mb-10 leading-relaxed">
            Looking for a Data Analyst adept in SQL, Python, Power BI, Excel, and search quality evaluation? Reach out directly via email, phone, or LinkedIn.
          </p>

          {/* Interactive Contact Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Email link */}
            <a
              href={`mailto:${emailAddress}`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              <span>Send An Email</span>
            </a>

            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full glass-panel hover:bg-white/[0.08] text-slate-200 border border-white/10 text-sm font-mono transition-all duration-200 hover:border-cyan-400/30"
              title="Click to copy email address"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-sans">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>{emailAddress}</span>
                </>
              )}
            </button>

            {/* Copy Phone Button */}
            <button
              onClick={handleCopyPhone}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full glass-panel hover:bg-white/[0.08] text-slate-200 border border-white/10 text-sm font-mono transition-all duration-200 hover:border-cyan-400/30"
              title="Click to copy phone number"
            >
              {copiedPhone ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-sans">Phone Copied!</span>
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{phoneNumber}</span>
                </>
              )}
            </button>

            {/* LinkedIn Pill */}
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#0077b5]/20 hover:bg-[#0077b5]/30 text-white border border-[#0077b5]/40 text-sm font-mono transition-all duration-200"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Socials + Local Time + Back to Top */}
        <div className="pt-12 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          {/* Direct channels */}
          <div className="flex items-center gap-4">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${phoneNumber}`}
              className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-white/[0.08] transition-all"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          {/* Time & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center">
            <span>&copy; {new Date().getFullYear()} Ashish Singh</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Data Analyst &bull; RWS Group</span>
            {timeStr && (
              <>
                <span className="hidden sm:inline">&bull;</span>
                <span className="text-cyan-400">LOCAL {timeStr}</span>
              </>
            )}
          </div>

          {/* Back to Top Pill */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-slate-300 hover:text-white transition-all duration-200"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
