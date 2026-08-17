'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { GraduationCap, Briefcase, ShieldCheck, Languages, CheckCircle2, BookOpen, Layers } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      aria-label="About and Academic Background"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-950/40 bg-black/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-purple-950/70 text-purple-200 border border-purple-300/30 mb-3 shadow-sm shadow-purple-950/40">
            <GraduationCap className="w-3.5 h-3.5 text-purple-300" />
            {t.about.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.about.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Education & Internship + Academic Interests */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Column: Education & GovTech Experience Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Education Card */}
            <div className="card-govtech p-6 sm:p-7 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-purple-300/15 text-purple-200 border border-purple-300/30 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {t.about.educationTitle}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-purple-950/60 text-purple-200 border border-purple-300/30">
                      {t.about.expectedGrad}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-200 mb-1">
                    {t.about.degree}
                  </p>
                  <p className="text-xs text-slate-400 mb-3">
                    {t.about.institution}
                  </p>

                  <div className="p-3 rounded-lg bg-purple-950/40 border border-purple-300/20 flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-purple-300 shrink-0" />
                    <span className="text-xs font-medium text-purple-200">
                      {t.about.cgpaLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* GovTech Internship Card */}
            <div className="card-govtech p-6 sm:p-7 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-violet-300/15 text-violet-200 border border-violet-300/30 shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">
                      {t.about.currentInternshipTitle}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-violet-950/60 text-violet-200 border border-violet-300/30">
                      March – Sept 2026
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">
                    Requirements Engineer & BA Intern
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {t.about.currentInternshipText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Focus Areas & Languages (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Core Focus & Research Interests */}
            <div className="card-govtech p-6 sm:p-7 rounded-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <ShieldCheck className="w-5 h-5 text-purple-300" />
                <h3 className="text-base font-bold text-white">
                  {t.about.interestsTitle}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {t.about.interests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Proficiency */}
            <div className="card-govtech p-6 sm:p-7 rounded-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <Languages className="w-5 h-5 text-violet-300" />
                <h3 className="text-base font-bold text-white">
                  {t.about.languagesTitle}
                </h3>
              </div>
              <div className="space-y-3">
                {t.about.languageItems.map((lang, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/60 border border-purple-950/60">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-white">{lang.name}</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-200 border border-purple-300/30">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {lang.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Professional Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {t.about.coreValues.map((val, idx) => {
            const icons = [
              <BookOpen key="1" className="w-5 h-5 text-purple-300" />,
              <ShieldCheck key="2" className="w-5 h-5 text-violet-300" />,
              <Layers key="3" className="w-5 h-5 text-purple-200" />
            ];
            return (
              <div key={idx} className="p-5 rounded-xl bg-slate-900/40 border border-purple-950/70 hover:border-purple-300/40 transition-colors">
                <div className="p-2.5 w-fit rounded-lg bg-purple-950/40 mb-3 border border-purple-300/20">
                  {icons[idx]}
                </div>
                <h4 className="text-sm font-bold text-white mb-1.5">{val.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
