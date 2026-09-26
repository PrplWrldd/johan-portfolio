'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { 
  EnvelopeSimple, 
  Check, 
  ArrowSquareOut, 
  FileText, 
  ArrowDown,
  GraduationCap,
  CaretRight
} from '@phosphor-icons/react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('johanirfan123@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[var(--bg-main)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Left-Aligned Editorial Hierarchy (7 cols) */}
          <div className="lg:col-span-8 text-left space-y-6">
            
            {/* Status & Availability Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Available Immediately</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                <GraduationCap className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>IIUM · Info Security (CGPA 3.57)</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                <span>Ex-GovTech Malaysia</span>
              </span>
            </div>

            {/* Main Name & Title */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[var(--accent)] font-mono font-semibold mb-2">
                {t.hero.greeting}
              </p>
              <h1
                id="hero-candidate-name"
                className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[var(--text-heading)] leading-[1.08]"
              >
                {t.hero.name}
              </h1>
              <h2
                id="hero-candidate-headline"
                className="text-xl sm:text-2xl font-display font-medium text-[var(--text-secondary)] mt-3"
              >
                {t.hero.headline}
              </h2>
            </div>

            {/* Hook / Intro description - Strictly under 70 characters per line */}
            <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed max-w-[62ch]">
              Bachelor of Information Technology graduate from IIUM specialising in Information Assurance & Security. Former Requirements Engineer / BA Intern at GovTech Malaysia (Kementerian Digital), engineering BRS, SRS, SDS specifications, and modern full-stack systems.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                id="hero-cta-experience"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>{t.hero.ctaExperience}</span>
                <CaretRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#projects"
                id="hero-cta-projects"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--border-hover)] transition-colors"
              >
                <span>{t.hero.ctaProjects}</span>
              </a>

              <button
                type="button"
                id="hero-cta-copy-email"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)] text-[var(--text-primary)] border border-[var(--border-card)] hover:border-[var(--border-hover)] transition-colors cursor-pointer"
                title="Copy email: johanirfan123@gmail.com"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">{t.hero.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <EnvelopeSimple className="w-4 h-4 text-[var(--accent)]" />
                    <span className="font-mono text-xs">johanirfan123@gmail.com</span>
                  </>
                )}
              </button>

              <a
                href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
                target="_blank"
                rel="noopener noreferrer"
                id="hero-cta-linkedin"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors"
                aria-label="LinkedIn profile"
              >
                <span>LinkedIn</span>
                <ArrowSquareOut className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Metrics Matrix - Left-aligned cards with single radius and no shadows */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              <div className="card-clean p-3.5">
                <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider">Experience</div>
                <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">GovTech Malaysia</div>
                <div className="text-xs text-[var(--text-secondary)]">Kem. Digital</div>
              </div>

              <div className="card-clean p-3.5">
                <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider">Academic</div>
                <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">CGPA 3.57</div>
                <div className="text-xs text-[var(--text-secondary)]">5x Dean&apos;s List</div>
              </div>

              <div className="card-clean p-3.5">
                <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider">Discipline</div>
                <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">Info Assurance</div>
                <div className="text-xs text-[var(--text-secondary)]">Specs & Systems</div>
              </div>

              <div className="card-clean p-3.5">
                <div className="text-[11px] text-[var(--text-muted)] uppercase font-mono tracking-wider">Leadership</div>
                <div className="text-sm font-bold text-[var(--text-heading)] mt-0.5">Archery Captain</div>
                <div className="text-xs text-[var(--text-secondary)]">IIUM Mustang</div>
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Professional Portrait (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end">
            <div className="relative w-full max-w-sm rounded-lg overflow-hidden border border-[var(--border-card)] bg-[var(--bg-surface)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/johan-hero.jpg"
                  alt="Muhammad Johan Irfan - Professional Portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover object-[center_35%]"
                />
              </div>
              <div className="p-3 bg-[var(--bg-card)] border-t border-[var(--border-subtle)] text-left">
                <div className="text-xs font-semibold text-[var(--text-heading)]">
                  Muhammad Johan Irfan
                </div>
                <div className="text-[11px] text-[var(--text-muted)] font-mono">
                  Requirements Engineer · Full-Stack Dev
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Explore link */}
        <div className="mt-16 text-left">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span>// SCROLL TO EXPLORE PROFILE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[var(--accent)]" />
          </a>
        </div>
      </div>
    </section>
  );
};
