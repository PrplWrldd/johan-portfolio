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
    languages: <Code2 className="w-5 h-5 text-purple-300" />,
    frameworks: <Layers className="w-5 h-5 text-violet-300" />,
    dataTools: <Database className="w-5 h-5 text-purple-200" />,
    documentation: <FileText className="w-5 h-5 text-violet-200" />,
    multimedia: <Palette className="w-5 h-5 text-pink-300" />,
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-purple-950/70 text-purple-200 border border-purple-300/30 mb-3 shadow-sm shadow-purple-950/40">
            <Wrench className="w-3.5 h-3.5 text-purple-300" />
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
                  <div className="p-2.5 rounded-lg bg-purple-300/10 border border-purple-300/20">
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
                          ? 'bg-purple-950/60 text-purple-100 border border-purple-300/40 shadow-sm shadow-purple-950/40'
                          : 'bg-slate-900/70 text-slate-300 border border-purple-950/60 hover:border-purple-300/30'
                      }`}
                    >
                      {skill.highlight && <Star className="w-3 h-3 text-purple-300 fill-purple-300/20" />}
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
              <div className="mt-5 pt-3 border-t border-purple-950/60 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>{cat.data.skills.length} competencies</span>
                <span className="text-purple-300 flex items-center gap-1">
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
