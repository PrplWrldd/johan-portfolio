'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  MapPin, 
  Utensils, 
  Box, 
  Bus, 
  ChevronRight, 
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projectIcons: Record<string, React.ReactNode> = {
    maqam: <MapPin className="w-6 h-6 text-purple-300" />,
    'restaurant-pos': <Utensils className="w-6 h-6 text-violet-300" />,
    'networth-3d': <Box className="w-6 h-6 text-purple-200" />,
    'iium-bus-tracker': <Bus className="w-6 h-6 text-pink-300" />,
  };

  const filteredProjects = activeFilter === 'all'
    ? t.projects.items
    : t.projects.items.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section
      id="projects"
      aria-label="Featured Software and Design Projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-tag bg-purple-950/70 text-purple-200 border border-purple-300/30 mb-3 shadow-sm shadow-purple-950/40">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-300" />
            {t.projects.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-purple-300 text-purple-950 font-bold shadow-sm shadow-purple-950/40'
                : 'bg-slate-900 text-slate-300 border border-purple-950/70 hover:bg-purple-950/30 hover:border-purple-300/30'
            }`}
          >
            {t.projects.filterAll}
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('full-stack')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeFilter === 'full-stack'
                ? 'bg-purple-300 text-purple-950 font-bold shadow-sm shadow-purple-950/40'
                : 'bg-slate-900 text-slate-300 border border-purple-950/70 hover:bg-purple-950/30 hover:border-purple-300/30'
            }`}
          >
            Full-Stack Web (Laravel)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('3d')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeFilter === '3d'
                ? 'bg-purple-300 text-purple-950 font-bold shadow-sm shadow-purple-950/40'
                : 'bg-slate-900 text-slate-300 border border-purple-950/70 hover:bg-purple-950/30 hover:border-purple-300/30'
            }`}
          >
            3D Graphics (Three.js)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('ui/ux')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activeFilter === 'ui/ux'
                ? 'bg-purple-300 text-purple-950 font-bold shadow-sm shadow-purple-950/40'
                : 'bg-slate-900 text-slate-300 border border-purple-950/70 hover:bg-purple-950/30 hover:border-purple-300/30'
            }`}
          >
            UI/UX & Prototyping (Figma)
          </button>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              className="card-govtech rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-purple-300/40 transition-all"
            >
              <div>
                {/* Card Top: Category & Icon */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-purple-950/60 group-hover:border-purple-300/30 transition-colors">
                    {projectIcons[project.id] || <Layers className="w-6 h-6 text-purple-300" />}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-purple-950/60 text-purple-200 border border-purple-300/30">
                    {project.category}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900/80 text-purple-200/90 border border-purple-950/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-purple-950/60 flex items-center justify-between gap-3">
                <button
                  type="button"
                  id={`btn-details-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-purple-200 cursor-pointer focus:outline-none"
                  aria-label={`${t.projects.viewDetailsAria} ${project.title}`}
                >
                  <span>{t.projects.viewDetails}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-purple-950/80 hover:border-purple-300/30 transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-300/30 transition-colors"
                      title="Live Demo / Prototype"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Detail Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
