'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  GraduationCap, 
  Briefcase, 
  ShieldCheck, 
  Translate, 
  CheckCircle, 
  BookOpen, 
  Stack 
} from '@phosphor-icons/react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-label="About and Academic Background"
      className="scroll-mt-20 py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-main)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left-Aligned */}
        <div className="text-left max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
            {'// 01. PROFILE'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text-heading)]">
            {t.about.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-muted)] max-w-[65ch]">
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Education & Experience + Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Education & GovTech Experience Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Education Card */}
            <div className="card-clean p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-display font-bold text-[var(--text-heading)]">
                      {t.about.educationTitle}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      {t.about.expectedGrad}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-[var(--text-secondary)] mb-1">
                    {t.about.degree}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mb-3 font-mono">
                    {t.about.institution}
                  </p>

                  <div className="p-3 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] flex items-center gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                    <span className="text-xs font-mono font-medium text-[var(--text-primary)]">
                      {t.about.cgpaLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* GovTech Internship Card */}
            <div className="card-clean p-6 text-left">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)] shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-display font-bold text-[var(--text-heading)]">
                      {t.about.currentInternshipTitle}
                    </h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                      March – Sept 2026
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider mb-2 font-semibold">
                    {t.about.currentInternshipRole || 'Former Requirements Engineer & BA Intern'}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
                    {t.about.currentInternshipText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Focus & Research Interests */}
            <div className="card-clean p-6 text-left">
              <div className="flex items-center gap-2.5 mb-4">
                <ShieldCheck className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-base font-display font-bold text-[var(--text-heading)]">
                  {t.about.interestsTitle}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {t.about.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span className="max-w-[60ch]">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Proficiency */}
            <div className="card-clean p-6 text-left">
              <div className="flex items-center gap-2.5 mb-4">
                <Translate className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-base font-display font-bold text-[var(--text-heading)]">
                  {t.about.languagesTitle}
                </h3>
              </div>
              <div className="space-y-3">
                {t.about.languageItems.map((lang, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-[var(--text-heading)]">{lang.name}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-[60ch]">
                      {lang.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Professional Pillars - Space-based separation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {t.about.coreValues.map((val, idx) => {
            const icons = [
              <BookOpen key="1" className="w-5 h-5 text-[var(--accent)]" />,
              <ShieldCheck key="2" className="w-5 h-5 text-[var(--accent)]" />,
              <Stack key="3" className="w-5 h-5 text-[var(--accent)]" />
            ];
            return (
              <div key={idx} className="card-clean p-6">
                <div className="p-2 w-fit rounded-lg bg-[var(--accent-subtle)] mb-3 border border-[var(--accent-border)]">
                  {icons[idx]}
                </div>
                <h4 className="text-sm font-display font-bold text-[var(--text-heading)] mb-1.5">{val.title}</h4>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-[60ch]">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
