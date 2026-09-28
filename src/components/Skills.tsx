'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code, 
  Stack, 
  Database, 
  FileText, 
  PaintBrush, 
  Check, 
  Star 
} from '@phosphor-icons/react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const categoryIcons = {
    languages: <Code className="w-5 h-5 text-[var(--accent)]" />,
    frameworks: <Stack className="w-5 h-5 text-[var(--accent)]" />,
    dataTools: <Database className="w-5 h-5 text-[var(--accent)]" />,
    documentation: <FileText className="w-5 h-5 text-[var(--accent)]" />,
    multimedia: <PaintBrush className="w-5 h-5 text-[var(--accent)]" />,
  };

  const categories = [
    { key: 'languages', data: t.skills.categories.languages, icon: categoryIcons.languages },
    { key: 'frameworks', data: t.skills.categories.frameworks, icon: categoryIcons.frameworks },
    { key: 'dataTools', data: t.skills.categories.dataTools, icon: categoryIcons.dataTools },
    { key: 'documentation', data: t.skills.categories.documentation, icon: categoryIcons.documentation },
    { key: 'multimedia', data: t.skills.categories.multimedia, icon: categoryIcons.multimedia },
  ];

  return (
    <section
      id="skills"
      aria-label="Technical Skills and Capabilities"
      className="scroll-mt-20 py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-main)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left-Aligned */}
        <div className="text-left max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
            {'// 02. CAPABILITIES'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text-heading)]">
            {t.skills.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-muted)] max-w-[65ch]">
            {t.skills.subtitle}
          </p>
        </div>

        {/* 5-Card Grid for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {categories.map((cat, idx) => (
            <div
              key={cat.key}
              id={`skill-card-${cat.key}`}
              className={`card-clean p-6 flex flex-col justify-between ${
                idx === 3 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-[var(--text-heading)]">
                      {cat.data.title}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      {cat.data.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills Matrix - Flat, single radius, no shadows */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.data.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border ${
                        skill.highlight
                          ? 'bg-[var(--accent-subtle)] text-[var(--text-primary)] border-[var(--accent-border)]'
                          : 'bg-[var(--bg-subtle)] text-[var(--text-secondary)] border-[var(--border-subtle)]'
                      }`}
                    >
                      {skill.highlight && <Star className="w-3 h-3 text-[var(--accent)]" weight="fill" />}
                      <span className="font-semibold text-[var(--text-heading)]">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-[var(--text-muted)] font-mono pl-1 border-l border-neutral-300 dark:border-neutral-700">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom footer text */}
              <div className="mt-6 pt-4 flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                <span>{cat.data.skills.length} competencies</span>
                <span className="text-[var(--accent)] flex items-center gap-1 font-medium">
                  <Check className="w-3 h-3" /> Industry standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
