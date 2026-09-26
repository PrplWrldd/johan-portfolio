'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { 
  FolderSimple, 
  ArrowSquareOut, 
  CaretRight, 
  MagnifyingGlass,
  ArrowCounterClockwise,
  GithubLogo
} from '@phosphor-icons/react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = activeFilter === 'all'
    ? t.projects.items
    : t.projects.items.filter(p => {
        const cat = p.category.toLowerCase();
        if (activeFilter === 'full-stack') return cat.includes('full-stack') || cat.includes('timbunan');
        if (activeFilter === '3d') return cat.includes('3d') || cat.includes('grafik');
        if (activeFilter === 'public') return cat.includes('public') || cat.includes('awam') || p.id.includes('hansard') || p.id.includes('sekolahku');
        if (activeFilter === 'design') return cat.includes('design') || cat.includes('reka bentuk') || p.id.includes('myds');
        return cat.includes(activeFilter.toLowerCase());
      });

  const filterButtons = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'full-stack', label: 'Full-Stack Web' },
    { id: '3d', label: '3D Graphics' },
    { id: 'public', label: 'Public Sector' },
    { id: 'design', label: 'Design Systems' },
  ];

  return (
    <section
      id="projects"
      aria-label="Featured Software and Design Projects"
      className="scroll-mt-20 py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-main)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left-Aligned */}
        <div className="text-left max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
            // 04. WORKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text-heading)]">
            {t.projects.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-muted)] max-w-[65ch]">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Bar - Left-Aligned, Single Radius (rounded-lg) */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {filterButtons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setActiveFilter(btn.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                activeFilter === btn.id
                  ? 'bg-blue-600 text-white border-blue-600 font-semibold'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:text-[var(--text-heading)]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Empty State Design (Requirement 15: Design the empty states) */}
        {filteredProjects.length === 0 ? (
          <div className="card-clean p-10 sm:p-12 text-left max-w-md">
            <div className="p-2.5 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] w-fit mb-4 text-[var(--accent)]">
              <MagnifyingGlass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-display font-bold text-[var(--text-heading)] mb-1">
              {t.projects.emptyStateTitle || 'No projects found'}
            </h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6 max-w-[60ch]">
              {t.projects.emptyStateSubtitle || 'No featured projects match the selected category filter at this time.'}
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors cursor-pointer"
            >
              <ArrowCounterClockwise className="w-3.5 h-3.5" />
              <span>{t.projects.emptyStateReset || 'Reset filter'}</span>
            </button>
          </div>
        ) : (
          /* Projects Grid - Showing Screenshots, not illustrations */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                className="card-clean p-6 flex flex-col justify-between"
              >
                <div>
                  {/* Real UI Screenshot Preview (Requirement 8) */}
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-subtle)] mb-5">
                    <Image
                      src={project.screenshotUrl || `/images/projects/${project.id}.jpg`}
                      alt={`${project.title} interface screenshot`}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-mono text-[var(--accent)] font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-[var(--text-muted)]">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-display font-bold text-[var(--text-heading)] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-[var(--text-muted)] mb-3">
                    {project.subtitle}
                  </p>

                  {/* Summary - Max 70 characters line length */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5 max-w-[65ch]">
                    {project.summary}
                  </p>

                  {/* Tech Stack Badges - Flat, single radius */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-lg text-[11px] font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Controls */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    id={`btn-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer focus:outline-none transition-colors"
                    aria-label={`${t.projects.viewDetailsAria} ${project.title}`}
                  >
                    <span>{t.projects.viewDetails}</span>
                    <CaretRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[var(--bg-subtle)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] transition-colors"
                        title="GitHub Repository"
                        aria-label="GitHub Repository"
                      >
                        <GithubLogo className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-[var(--accent-subtle)] hover:bg-[var(--accent-border)] text-[var(--accent)] border border-[var(--accent-border)] transition-colors"
                        title="Live Demo"
                        aria-label="Live Demo"
                      >
                        <ArrowSquareOut className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Detail Modal Dialog */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
