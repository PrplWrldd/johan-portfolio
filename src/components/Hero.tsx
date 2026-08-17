'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Award, Mail, Check, ExternalLink, ArrowDown, ChevronRight, FileCheck2, GraduationCap } from 'lucide-react';

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
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-mesh-subtle overflow-hidden"
    >
      {/* Decorative ambient subtle background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[300px] h-[250px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full text-center flex flex-col items-center">
        {/* Verification Status Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span
            id="hero-badge-govtech"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-950/70 text-sky-300 border border-sky-800/60 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            {t.hero.badgeGovTech}
          </span>
          <span
            id="hero-badge-iium"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700 shadow-sm"
          >
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            {t.hero.badgeEducation}
          </span>
          <span
            id="hero-badge-cgpa"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 shadow-sm"
          >
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            {t.hero.badgeCgpa}
          </span>
        </div>

        {/* Greeting and Full Name */}
        <p className="text-xs uppercase tracking-widest text-sky-400 font-mono mb-2 font-medium">
          {t.hero.greeting}
        </p>
        <h1
          id="hero-candidate-name"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight"
        >
          {t.hero.name}
        </h1>

        {/* Role & Specialization Headline */}
        <p
          id="hero-candidate-headline"
          className="text-base sm:text-xl font-medium text-slate-200 max-w-2xl mx-auto mb-5 leading-snug"
        >
          {t.hero.headline}
        </p>

        {/* One-line Hook */}
        <p
          id="hero-candidate-hook"
          className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.hero.hook}
        </p>

        {/* Primary Call-to-Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#experience"
            id="hero-cta-experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>{t.hero.ctaExperience}</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <a
            href="#projects"
            id="hero-cta-projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{t.hero.ctaProjects}</span>
          </a>

          {/* Direct Email Copy / Compose CTA */}
          <button
            type="button"
            id="hero-cta-copy-email"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/80 hover:border-sky-500/50 transition-all cursor-pointer"
            title="Copy email: johanirfan123@gmail.com"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300 font-semibold">{t.hero.copiedEmail}</span>
              </>
            ) : (
              <>
                <Mail className="w-4 h-4 text-sky-400" />
                <span>johanirfan123@gmail.com</span>
              </>
            )}
          </button>

          {/* LinkedIn Profile */}
          <a
            href="https://www.linkedin.com/in/muhammad-johan-irfankhairudin-a234a6200"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-cta-linkedin"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-slate-800/80 hover:bg-slate-700 text-slate-300 border border-slate-700/80 hover:border-sky-500/50 transition-all"
            aria-label="Visit Muhammad Johan Irfan LinkedIn profile"
          >
            <span>LinkedIn</span>
            <ExternalLink className="w-4 h-4 text-sky-400" />
          </a>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl w-full text-left">
          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Internship</div>
            <div className="text-sm font-bold text-white mt-0.5">GovTech Malaysia</div>
            <div className="text-xs text-sky-400">Kementerian Digital</div>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Academic</div>
            <div className="text-sm font-bold text-white mt-0.5">CGPA 3.54</div>
            <div className="text-xs text-emerald-400">5x Dean&apos;s List</div>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Focus</div>
            <div className="text-sm font-bold text-white mt-0.5">Info Security</div>
            <div className="text-xs text-slate-300">Requirements & Dev</div>
          </div>
          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-slate-800">
            <div className="text-[11px] text-slate-400 uppercase font-mono tracking-wider">Leadership</div>
            <div className="text-sm font-bold text-white mt-0.5">Archery Captain</div>
            <div className="text-xs text-amber-400">IIUM Mustang</div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          className="mt-12 text-slate-500 hover:text-slate-300 transition-colors flex flex-col items-center gap-1 focus:outline-none"
          aria-label="Scroll down to About section"
        >
          <span className="text-[11px] font-mono tracking-wider uppercase">Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
        </a>
      </div>
    </section>
  );
};
