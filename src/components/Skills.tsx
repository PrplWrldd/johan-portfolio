'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Code2, 
  Layers, 
  Database, 
  FileText, 
  Palette, 
  Wrench, 
  Check, 
  Star 
} from 'lucide-react';

export const Skills: React.FC = () => {
  const { t } = useLanguage();

  const categoryIcons = {
    languages: <Code2 className="w-5 h-5 text-sky-400" />,
    frameworks: <Layers className="w-5 h-5 text-emerald-400" />,
    dataTools: <Database className="w-5 h-5 text-amber-400" />,
    documentation: <FileText className="w-5 h-5 text-indigo-400" />,
    multimedia: <Palette className="w-5 h-5 text-pink-400" />,
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-sky-950/80 text-sky-400 border border-sky-800/60 mb-3">
            <Wrench className="w-3.5 h-3.5" />
            {t.skills.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.skills.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.skills.subtitle}
          </p>
        </div>

        {/* 5-Card Grid for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={cat.key}
              id={`skill-card-${cat.key}`}
              className={`card-govtech p-6 rounded-xl flex flex-col justify-between ${
                idx === 3 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {cat.data.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.data.description}
                    </p>
                  </div>
                </div>

                {/* Skill Pills Matrix */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.data.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        skill.highlight
                          ? 'bg-sky-950/60 text-sky-200 border border-sky-700/50 shadow-sm'
                          : 'bg-slate-800/70 text-slate-300 border border-slate-700/60 hover:border-slate-600'
                      }`}
                    >
                      {skill.highlight && <Star className="w-3 h-3 text-sky-400 fill-sky-400/20" />}
                      <span className="font-semibold text-white">{skill.name}</span>
                      {skill.level && (
                        <span className="text-[10px] text-slate-400 font-mono pl-1 border-l border-slate-700">
                          {skill.level}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag indicating relevance */}
              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{cat.data.skills.length} competencies</span>
                <span className="text-sky-400 flex items-center gap-1">
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
