'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, Mail, Check, ExternalLink, ArrowDown, ChevronRight, FileCheck2, GraduationCap } from 'lucide-react';
import { ArcheryBowIcon, ArcheryTargetIcon } from './Icons';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('johanirfan123@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-mesh-subtle overflow-hidden transition-colors duration-300"
    >
      {/* Decorative subtle ambient glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-purple-400/10 dark:bg-purple-300/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] h-[250px] bg-violet-400/10 dark:bg-violet-300/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Subtle Archery Concentric Watermark (Ultra-fine geometric motif) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none opacity-[var(--watermark-opacity)] -z-10 select-none transition-opacity duration-300"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full text-purple-600 dark:text-purple-300 stroke-current fill-none">
          <circle cx="200" cy="200" r="190" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="140" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="90" strokeWidth="0.75" strokeDasharray="3 3" />
          <circle cx="200" cy="200" r="40" strokeWidth="0.75" />
          <circle cx="200" cy="200" r="8" strokeWidth="0.75" />
          {/* Subtle crosshair guide axes */}
          <line x1="200" y1="5" x2="200" y2="395" strokeWidth="0.5" strokeDasharray="2 4" />
          <line x1="5" y1="200" x2="395" y2="200" strokeWidth="0.5" strokeDasharray="2 4" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Verification Status Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span
            id="hero-badge-govtech"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border border-purple-300/40 dark:border-purple-300/30 shadow-sm shadow-purple-950/5 dark:shadow-purple-950/40"
          >
            <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-300 animate-pulse" />
            {t.hero.badgeGovTech}
          </span>
          <span
            id="hero-badge-iium"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 border border-purple-200 dark:border-slate-700/80 shadow-sm"
          >
            <GraduationCap className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
            {t.hero.badgeEducation}
          </span>
          <span
            id="hero-badge-cgpa"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-950/60 text-violet-800 dark:text-violet-200 border border-violet-300/40 dark:border-violet-300/30 shadow-sm shadow-purple-950/5 dark:shadow-purple-950/40"
          >
            <Award className="w-3.5 h-3.5 text-violet-600 dark:text-violet-300" />
            {t.hero.badgeCgpa}
          </span>
          {/* Subtle Archery Leadership Badge */}
          <span
            id="hero-badge-archery"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 dark:bg-slate-900/80 text-amber-800 dark:text-amber-200 border border-amber-300/50 dark:border-amber-500/30 shadow-sm"
          >
            <ArcheryBowIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-300" />
            <span>Archery Captain</span>
          </span>
        </div>

        {/* Greeting and Full Name */}
        <p className="text-xs uppercase tracking-widest text-purple-700 dark:text-purple-300 font-mono mb-2 font-semibold flex items-center justify-center gap-1.5">
          <ArcheryTargetIcon className="w-3 h-3 text-purple-600 dark:text-purple-300/70 inline" />
          <span>{t.hero.greeting}</span>
        </p>
        <h1
          id="hero-candidate-name"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-heading)] mb-4 leading-tight"
        >
          {t.hero.name}
        </h1>

        {/* Role & Specialization Headline */}
        <p
          id="hero-candidate-headline"
          className="text-base sm:text-xl font-semibold text-[var(--text-secondary)] max-w-2xl mx-auto mb-5 leading-snug"
        >
          {t.hero.headline}
        </p>

        {/* One-line Hook */}
        <p
          id="hero-candidate-hook"
          className="text-sm sm:text-base text-[var(--text-muted)] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.hero.hook}
        </p>

        {/* Primary Call-to-Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#experience"
            id="hero-cta-experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-300 dark:hover:bg-purple-200 dark:text-purple-950 shadow-lg shadow-purple-950/20 dark:shadow-purple-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>{t.hero.ctaExperience}</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            id="hero-cta-projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white hover:bg-purple-50/80 text-slate-800 border border-purple-200 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-300/40 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.hero.ctaProjects}</span>
          </a>

          {/* Direct Email Copy / Compose CTA */}
          <button
            type="button"
            id="hero-cta-copy-email"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-purple-50/80 text-slate-700 border border-purple-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-700/80 hover:border-purple-400 dark:hover:border-purple-300/40 shadow-sm transition-all cursor-pointer"
            title="Copy email: johanirfan123@gmail.com"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                <span className="text-purple-700 dark:text-purple-200 font-semibold">{t.hero.copiedEmail}</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-purple-600 dark:text-purple-300" />
                <span>johanirfan123@gmail.com</span>
              </>
            )}
          </button>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-linkedin"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-white hover:bg-purple-50/80 text-slate-700 border border-purple-200 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-700/80 hover:border-purple-400 dark:hover:border-purple-300/40 shadow-sm transition-all"
            aria-label="Visit Muhammad Johan Irfan LinkedIn profile"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-300" />
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full text-left">
          <div className="card-govtech p-3.5 rounded-xl">
            <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider">Internship</div>
            <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">GovTech Malaysia</div>
            <div className="text-xs text-purple-700 dark:text-purple-300 font-medium">Kementerian Digital</div>
          </div>
          <div className="card-govtech p-3.5 rounded-xl">
            <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider">Academic</div>
            <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">CGPA 3.54</div>
            <div className="text-xs text-violet-700 dark:text-violet-300 font-medium">5x Dean&apos;s List</div>
          </div>
          <div className="card-govtech p-3.5 rounded-xl">
            <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider">Focus</div>
            <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">Info Security</div>
            <div className="text-xs text-purple-700 dark:text-purple-200 font-medium">Requirements & Dev</div>
          </div>
          <div className="card-govtech p-3.5 rounded-xl">
            <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider flex items-center justify-between">
              <span>Leadership</span>
              <ArcheryBowIcon className="w-3 h-3 text-amber-600 dark:text-amber-300/80" />
            </div>
            <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">Archery Captain</div>
            <div className="text-xs text-amber-700 dark:text-amber-300 font-medium">IIUM Mustang</div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          className="mt-12 text-[var(--text-muted)] hover:text-purple-600 dark:hover:text-purple-300 transition-colors flex flex-col items-center gap-1 focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="text-[11px] font-mono tracking-wider uppercase">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-purple-600 dark:text-purple-300" />
        </a>
      </div>
    </section>
  );
};
