'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  FileCheck2, 
  ShieldAlert, 
  CheckCircle, 
  FolderKanban, 
  FileSpreadsheet, 
  Users, 
  Landmark, 
  BookOpenCheck,
  Sparkles
} from 'lucide-react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const exp = t.experience.items[0]; // GovTech Malaysia
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);

  return (
    <section
      id="experience"
      aria-label="Professional Work Experience"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/60 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-sky-950/80 text-sky-400 border border-sky-800/60 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            {t.experience.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Main Experience Showcase Card */}
        <div className="card-govtech rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 shadow-2xl border-slate-700/80">
          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-slate-800">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-sky-600/20 text-sky-400 border border-sky-500/30 shrink-0">
                <Landmark className="w-8 h-8" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {exp.organization}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                    {exp.ministry}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-sky-950 text-sky-300 border border-sky-800/60">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-sky-400">
                  {exp.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1">
              <span className="text-xs font-mono text-slate-300 px-3 py-1 rounded bg-slate-900 border border-slate-700">
                {exp.period}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {exp.location}
              </span>
            </div>
          </div>

          {/* Executive Overview Summary */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed my-6 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
            {exp.summary}
          </p>

          {/* Projects Documented Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono mb-4 flex items-center gap-2">
              <FolderKanban className="w-4 h-4" />
              {t.experience.deliverablesTitle}
            </h4>

            {/* Interactive Project Switcher for Gov Systems */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* List of Government Systems (5 cols) */}
              <div className="lg:col-span-5 space-y-2">
                {exp.projects.map((proj, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      activeProjectIdx === idx
                        ? 'bg-sky-950/70 border-sky-600 text-white shadow-md'
                        : 'bg-slate-900/50 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold text-sky-400 font-mono">
                        {proj.tag}
                      </div>
                      <div className="text-sm font-bold mt-0.5">
                        {proj.name}
                      </div>
                    </div>
                    {activeProjectIdx === idx && (
                      <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Selected System Technical Details (7 cols) */}
              <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-sky-400 px-2.5 py-1 rounded bg-sky-950/60 border border-sky-800">
                      {exp.projects[activeProjectIdx].tag}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Deliverables Verified
                    </span>
                  </div>

                  <h5 className="text-lg font-bold text-white mb-2">
                    {exp.projects[activeProjectIdx].name}
                  </h5>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {exp.projects[activeProjectIdx].description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                      Authored Deliverables & Artifacts:
                    </div>
                    <ul className="space-y-2">
                      {exp.projects[activeProjectIdx].deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Standard: Public Sector SRS/SDS</span>
                  <span className="text-sky-400">GovTech Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Competencies Acquired Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              {t.experience.methodologiesTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.skillsAcquired.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800 flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
