'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Trophy, 
  Medal, 
  CheckCircle, 
  CalendarBlank,
  Target
} from '@phosphor-icons/react';

export const Achievements: React.FC = () => {
  const { t } = useLanguage();

  const achievementIcons: Record<string, React.ReactNode> = {
    'deans-list': <Medal className="w-6 h-6 text-[var(--accent)]" />,
    'uia-symposium': <Trophy className="w-6 h-6 text-[var(--accent)]" />,
    'archery-captain': <Target className="w-6 h-6 text-[var(--accent)]" />,
  };

  return (
    <section
      id="achievements"
      aria-label="Honors, Awards and Sports Leadership"
      className="scroll-mt-20 py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-main)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left-Aligned */}
        <div className="text-left max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
            // 05. HONORS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text-heading)]">
            {t.achievements.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-muted)] max-w-[65ch]">
            {t.achievements.subtitle}
          </p>
        </div>

        {/* 3 Prominent Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          {t.achievements.items.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="card-clean p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
                    {achievementIcons[item.id] || <Medal className="w-6 h-6 text-[var(--accent)]" />}
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-0.5 rounded-lg bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                    {item.highlightBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-[var(--text-heading)] mb-1.5">
                  {item.title}
                </h3>

                {/* Organization & Period */}
                <div className="flex flex-col gap-0.5 text-xs text-[var(--text-muted)] font-mono mb-4">
                  <span className="text-[var(--text-secondary)] font-medium">{item.organization}</span>
                  <span className="flex items-center gap-1">
                    <CalendarBlank className="w-3.5 h-3.5 text-[var(--accent)]" />
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 max-w-[55ch]">
                  {item.description}
                </p>

                {/* Bullets */}
                {item.bullets && (
                  <ul className="space-y-2 pt-2">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                        <span className="max-w-[50ch]">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Footer */}
              <div className="mt-6 pt-4 flex items-center justify-between text-[11px] text-[var(--text-muted)] font-mono">
                <span className="capitalize">{item.category}</span>
                <span className="text-[var(--accent)] font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
