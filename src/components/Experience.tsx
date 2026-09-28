'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Building2, 
  CheckCircle, 
  FolderKanban, 
  Landmark, 
  Sparkles
} from 'lucide-react';

export interface ProjectDeliverable {
  name: string;
  tag?: string;
  description?: string;
  deliverables?: string[];
}

export interface NormalizedExperienceItem {
  id: string | number;
  organization: string;
  ministry?: string;
  role: string;
  period: string;
  location?: string;
  type?: string;
  summary: string;
  projects?: ProjectDeliverable[];
  skillsAcquired?: string[];
}

function normalizeExperience(item: any): NormalizedExperienceItem {
  const skills: string[] = (item.skillsAcquired || [])
    .map((s: any) => (typeof s === 'string' ? s : s?.skill || ''))
    .filter(Boolean);

  const projects: ProjectDeliverable[] = (item.projects || []).map((p: any) => {
    const deliverables: string[] = (p.deliverables || [])
      .map((d: any) => (typeof d === 'string' ? d : d?.item || ''))
      .filter(Boolean);

    return {
      name: p.name || '',
      tag: p.tag || '',
      description: p.description || '',
      deliverables,
    };
  });

  return {
    id: item.id || item.organization,
    organization: item.organization || '',
    ministry: item.ministry || '',
    role: item.role || '',
    period: item.period || '',
    location: item.location || '',
    type: item.type || 'Internship',
    summary: item.summary || '',
    projects,
    skillsAcquired: skills,
  };
}

const ExperienceCard: React.FC<{
  exp: NormalizedExperienceItem;
  deliverablesTitle: string;
  methodologiesTitle: string;
}> = ({ exp, deliverablesTitle, methodologiesTitle }) => {
  const [activeProjectIdx, setActiveProjectIdx] = useState<number>(0);
  const hasProjects = Array.isArray(exp.projects) && exp.projects.length > 0;
  const currentProject = hasProjects ? exp.projects![activeProjectIdx] || exp.projects![0] : null;

  return (
    <div className="card-govtech rounded-2xl p-6 sm:p-8 lg:p-10 mb-10 shadow-2xl">
      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[var(--border-subtle)]">
        <div className="flex items-start gap-4">
          <div className="p-3.5 rounded-xl bg-purple-500/10 dark:bg-purple-300/15 text-purple-700 dark:text-purple-200 border border-purple-500/20 dark:border-purple-300/30 shrink-0">
            <Landmark className="w-8 h-8" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)]">
                {exp.organization}
              </h3>
              {exp.ministry && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-950/70 text-violet-800 dark:text-violet-200 border border-violet-300/40 dark:border-violet-300/30">
                  {exp.ministry}
                </span>
              )}
              {exp.type && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border border-purple-300/40 dark:border-purple-300/30">
                  {exp.type}
                </span>
              )}
            </div>
            <p className="text-sm sm:text-base font-semibold text-purple-700 dark:text-purple-300">
              {exp.role}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:items-end gap-1">
          {exp.period && (
            <span className="text-xs font-mono text-[var(--text-secondary)] px-3 py-1 rounded bg-[var(--bg-subtle-alpha)] border border-[var(--border-subtle)]">
              {exp.period}
            </span>
          )}
          {exp.location && (
            <span className="text-xs text-[var(--text-muted)] font-mono">
              {exp.location}
            </span>
          )}
        </div>
      </div>

      {/* Executive Overview Summary */}
      {exp.summary && (
        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed my-6 bg-purple-50/50 dark:bg-slate-900/40 p-4 rounded-xl border border-purple-200/80 dark:border-purple-950/50">
          {exp.summary}
        </p>
      )}

      {/* Projects Documented Grid (if experience has associated projects/deliverables) */}
      {hasProjects && currentProject && (
        <div className="mt-8">
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 font-mono mb-4 flex items-center gap-2">
            <FolderKanban className="w-4 h-4" />
            {deliverablesTitle}
          </h4>

          {/* Interactive Project Switcher */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* List of Government Systems / Projects (5 cols) */}
            <div className="lg:col-span-5 space-y-2">
              {exp.projects!.map((proj, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveProjectIdx(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                    activeProjectIdx === idx
                      ? 'bg-purple-100 dark:bg-purple-950/80 border-purple-400 dark:border-purple-300/60 text-purple-950 dark:text-white shadow-md shadow-purple-950/5 dark:shadow-purple-950/40 font-bold'
                      : 'bg-white/80 dark:bg-slate-900/50 border-[var(--border-subtle)] text-[var(--text-secondary)] hover:bg-purple-50/60 dark:hover:bg-purple-950/30 hover:border-purple-300/40'
                  }`}
                >
                  <div>
                    {proj.tag && (
                      <div className="text-xs font-semibold text-purple-700 dark:text-purple-300 font-mono">
                        {proj.tag}
                      </div>
                    )}
                    <div className="text-sm font-bold mt-0.5">
                      {proj.name}
                    </div>
                  </div>
                  {activeProjectIdx === idx && (
                    <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-300 shrink-0" />
                  )}
                </button>
              ))}
            </div>

            {/* Selected System Technical Details (7 cols) */}
            <div className="lg:col-span-7 bg-white/80 dark:bg-slate-900/80 border border-[var(--border-subtle)] rounded-xl p-6 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  {currentProject.tag && (
                    <span className="text-xs font-mono text-purple-800 dark:text-purple-200 px-2.5 py-1 rounded bg-purple-100 dark:bg-purple-950/70 border border-purple-300/40 dark:border-purple-300/30">
                      {currentProject.tag}
                    </span>
                  )}
                  <span className="text-xs text-[var(--text-muted)] font-mono">
                    Deliverables
                  </span>
                </div>

                <h5 className="text-lg font-bold text-[var(--text-heading)] mb-2">
                  {currentProject.name}
                </h5>

                {currentProject.description && (
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {currentProject.description}
                  </p>
                )}

                {currentProject.deliverables && currentProject.deliverables.length > 0 && (
                  <div className="space-y-2 mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-mono">
                      Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {currentProject.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-4 h-4 text-purple-600 dark:text-purple-300 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-muted)] font-mono">
                <span>Standardized Verification</span>
                <span className="text-purple-700 dark:text-purple-300 font-medium">{exp.organization}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Key Competencies Acquired Strip */}
      {exp.skillsAcquired && exp.skillsAcquired.length > 0 && (
        <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-mono mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-300" />
            {methodologiesTitle}
          </h4>
          <div className="flex flex-wrap gap-2">
            {exp.skillsAcquired.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-purple-200 dark:border-purple-950/80 flex items-center gap-1.5 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-300" />
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const Experience: React.FC<{ initialExperiences?: any[] }> = ({ initialExperiences }) => {
  const { t } = useLanguage();

  // If initialExperiences provided and non-empty, use them; otherwise fallback to locale
  const listToRender: NormalizedExperienceItem[] = (initialExperiences && initialExperiences.length > 0)
    ? initialExperiences.map(normalizeExperience)
    : (t.experience.items || []).map(normalizeExperience);

  return (
    <section
      id="experience"
      aria-label="Professional Work Experience"
      className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)] bg-[var(--bg-main)] relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border border-purple-300/40 dark:border-purple-300/30 mb-3 shadow-sm">
            <Building2 className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
            {t.experience.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] mb-4">
            {t.experience.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Dynamic Experience Showcase Cards */}
        {listToRender.map((exp, idx) => (
          <ExperienceCard
            key={exp.id || idx}
            exp={exp}
            deliverablesTitle={t.experience.deliverablesTitle}
            methodologiesTitle={t.experience.methodologiesTitle}
          />
        ))}
      </div>
    </section>
  );
};
