'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Trophy, 
  Award, 
  Medal, 
  CheckCircle, 
  Calendar 
} from 'lucide-react';
import { ArcheryBowIcon, ArcheryTargetIcon } from './Icons';

export const Achievements: React.FC = () => {
  const { t } = useLanguage();

  const achievementIcons: Record<string, React.ReactNode> = {
    'deans-list': <Award className="w-7 h-7 text-purple-300" />,
    'uia-symposium': <Trophy className="w-7 h-7 text-violet-300" />,
    'archery-captain': <ArcheryBowIcon className="w-7 h-7 text-amber-300" />,
  };

  const badgeColors: Record<string, string> = {
    'deans-list': 'bg-purple-950/70 text-purple-200 border border-purple-300/30',
    'uia-symposium': 'bg-violet-950/70 text-violet-200 border border-violet-300/30',
    'archery-captain': 'bg-amber-950/60 text-amber-200 border border-amber-400/30',
  };

  return (
    <section
      id="achievements"
      aria-label="Honors, Awards and Sports Leadership"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-purple-950/40 bg-black/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-purple-950/70 text-purple-200 border border-purple-300/30 mb-3 shadow-sm shadow-purple-950/40">
            <Trophy className="w-3.5 h-3.5 text-purple-300" />
            {t.achievements.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.achievements.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.achievements.subtitle}
          </p>
        </div>

        {/* 3 Prominent Achievement Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {t.achievements.items.map((item) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="card-govtech rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className={`p-3.5 rounded-xl ${
                    item.id === 'archery-captain' 
                      ? 'bg-amber-400/10 border border-amber-400/20' 
                      : 'bg-purple-300/10 border border-purple-300/20'
                  }`}>
                    {achievementIcons[item.id] || <Medal className="w-7 h-7 text-purple-300" />}
                  </div>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                      badgeColors[item.id] || 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    {item.highlightBadge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 flex items-center gap-2">
                  <span>{item.title}</span>
                  {item.id === 'archery-captain' && (
                    <ArcheryTargetIcon className="w-4 h-4 text-amber-300/70 inline shrink-0" />
                  )}
                </h3>

                {/* Organization & Period */}
                <div className="flex flex-col gap-0.5 text-xs text-slate-400 font-mono mb-4">
                  <span className="text-slate-300 font-medium">{item.organization}</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-purple-300/80" />
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Bullets */}
                {item.bullets && (
                  <ul className="space-y-2.5 pt-4 border-t border-purple-950/60">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-purple-300 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Bottom Footer */}
              <div className="mt-6 pt-3 border-t border-purple-950/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="capitalize">{item.category}</span>
                <span className="text-purple-300 font-semibold">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
