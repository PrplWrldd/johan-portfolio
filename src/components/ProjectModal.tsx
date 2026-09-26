'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  ArrowSquareOut, 
  CheckCircle, 
  Code, 
  Stack, 
  Question,
  GithubLogo
} from '@phosphor-icons/react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[var(--bg-card)] border border-[var(--border-card)] rounded-lg overflow-hidden my-8 max-h-[90vh] flex flex-col text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[var(--border-subtle)] flex items-start justify-between gap-4 bg-[var(--bg-surface)] sticky top-0 z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-lg text-xs font-mono text-[var(--accent)] bg-[var(--accent-subtle)] border border-[var(--accent-border)] font-semibold">
                {project.category}
              </span>
              <span className="text-xs text-[var(--text-muted)] font-mono">
                Role: {project.role}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-display font-bold text-[var(--text-heading)]">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            id="btn-close-project-modal"
            className="p-2 rounded-lg bg-[var(--bg-subtle)] hover:bg-neutral-200 dark:hover:bg-neutral-800 text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] focus:outline-none transition-colors cursor-pointer"
            aria-label={t.projects.modalClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Real High-Resolution UI Screenshot Display (Requirement 8) */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-subtle)]">
            <Image
              src={project.screenshotUrl || `/images/projects/${project.id}.jpg`}
              alt={`${project.title} detailed application view`}
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 768px"
              className="object-cover object-top"
            />
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5">
              <Stack className="w-4 h-4" />
              {t.projects.modalOverview}
            </h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
              {project.detailedOverview}
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)]">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2 flex items-center gap-1.5">
                <Question className="w-4 h-4" />
                {t.projects.modalProblem}
              </h5>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-[55ch]">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)]">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--accent)] mb-2 flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                {t.projects.modalSolution}
              </h5>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-[55ch]">
                {project.solutionAndArchitecture}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3">
              {t.projects.modalFeatures}
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                  <span className="max-w-[60ch]">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
              {t.projects.modalTech}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          {project.deliverables && (
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2.5">
                {t.projects.modalDeliverables}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] flex items-center gap-2"
                  >
                    <Code className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                    <span className="max-w-[50ch]">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-wrap items-center justify-between gap-3 sticky bottom-0">
          <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
            <span>Project Artifacts</span>
          </div>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-[var(--bg-subtle)] hover:bg-neutral-200 dark:hover:bg-neutral-800 text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors"
              >
                <GithubLogo className="w-4 h-4" />
                <span>{t.projects.githubButton}</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
              >
                <span>{t.projects.prototypeButton}</span>
                <ArrowSquareOut className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
