'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Buildings, 
  CheckCircle, 
  FolderSimple, 
  Bank, 
  Sparkle 
} from '@phosphor-icons/react';

export const Experience: React.FC = () => {
  const { t } = useLanguage();
  const exp = t.experience.items[0]; // GovTech Malaysia
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);

  return (
    <section
      id="experience"
      aria-label="Professional Work Experience"
      className="scroll-mt-20 py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-main)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left-Aligned */}
        <div className="text-left max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
            // 03. EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text-heading)]">
            {t.experience.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-muted)] max-w-[65ch]">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Main Experience Showcase Card */}
        <div className="card-clean p-6 sm:p-8 mb-12 text-left">
          {/* Header Banner */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)] border border-[var(--accent-border)] shrink-0">
                <Bank className="w-7 h-7" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[var(--text-heading)]">
                    {exp.organization}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                    {exp.ministry}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono text-[var(--accent)] bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
                    {exp.type}
                  </span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-[var(--accent)]">
                  {exp.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:items-end gap-1">
              <span className="text-xs font-mono text-[var(--text-secondary)] px-2.5 py-1 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
                {exp.period}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                {exp.location}
              </span>
            </div>
          </div>

          {/* Executive Overview Summary - max 70 chars per line */}
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed my-6 max-w-[68ch]">
            {exp.summary}
          </p>

          {/* Projects Documented Grid */}
          <div className="mt-8">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-4 flex items-center gap-2">
              <FolderSimple className="w-4 h-4" />
              {t.experience.deliverablesTitle}
            </h4>

            {/* Interactive Project Switcher */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* List of Government Systems (5 cols) */}
              <div className="lg:col-span-5 space-y-2">
                {exp.projects.map((proj, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveProjectIdx(idx)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-colors cursor-pointer flex items-center justify-between ${
                      activeProjectIdx === idx
                        ? 'bg-[var(--accent-subtle)] border-[var(--accent-border)] text-[var(--text-heading)] font-semibold'
                        : 'bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-mono text-[var(--accent)]">
                        {proj.tag}
                      </div>
                      <div className="text-sm font-semibold mt-0.5">
                        {proj.name}
                      </div>
                    </div>
                    {activeProjectIdx === idx && (
                      <span className="w-2 h-2 rounded-full bg-[var(--accent)] shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Selected System Technical Details (7 cols) */}
              <div className="lg:col-span-7 bg-[var(--bg-subtle)] border border-[var(--border-subtle)] rounded-lg p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-[var(--accent)] px-2.5 py-0.5 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
                      {exp.projects[activeProjectIdx].tag}
                    </span>
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      Deliverables
                    </span>
                  </div>

                  <h5 className="text-lg font-display font-bold text-[var(--text-heading)] mb-2">
                    {exp.projects[activeProjectIdx].name}
                  </h5>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 max-w-[60ch]">
                    {exp.projects[activeProjectIdx].description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
                      Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {exp.projects[activeProjectIdx].deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                          <span className="max-w-[55ch]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                  <span>Public Sector Standard</span>
                  <span className="text-[var(--accent)] font-medium">GovTech Malaysia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Competencies Acquired Strip */}
          <div className="mt-8 pt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 flex items-center gap-2">
              <Sparkle className="w-4 h-4 text-[var(--accent)]" />
              {t.experience.methodologiesTitle}
            </h4>
            <div className="flex flex-wrap gap-2">
              {exp.skillsAcquired.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)] flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
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
