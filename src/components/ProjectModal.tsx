'use client';

import React, { useEffect } from 'react';
import { ProjectItem } from '../types/portfolio';
import { useLanguage } from '../context/LanguageContext';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Layers, 
  AlertCircle,
  HelpCircle,
  Cpu
} from 'lucide-react';
import { GithubIcon } from './Icons';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-slate-950 border border-purple-300/25 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-purple-950/60 flex items-start justify-between gap-4 bg-slate-950/80 sticky top-0 z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-950/70 text-purple-200 border border-purple-300/30">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Role: {project.role}
              </span>
            </div>
            <h3 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-purple-300 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            id="btn-close-project-modal"
            className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-purple-950/50 border border-purple-950/60 hover:border-purple-300/30 focus:outline-none transition-colors cursor-pointer"
            aria-label={t.projects.modalClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-6 sm:p-7 space-y-6 overflow-y-auto">
          {/* Visual Placeholder Banner / Diagram */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-purple-950/50 flex flex-col items-center justify-center text-center">
            <div className="p-3 rounded-xl bg-purple-950/40 text-purple-300 mb-2 border border-purple-300/20">
              <Cpu className="w-8 h-8" />
            </div>
            <div className="text-sm font-semibold text-slate-200">
              {project.imagePlaceholderText}
            </div>
            <div className="text-[11px] text-slate-400 font-mono mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
              {t.projects.placeholderNotice}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-300" />
              {t.projects.modalOverview}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-purple-950/50">
              {project.detailedOverview}
            </p>
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
              <h5 className="text-xs font-bold uppercase tracking-wider text-red-400 font-mono mb-2 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4" />
                {t.projects.modalProblem}
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-300/30">
              <h5 className="text-xs font-bold uppercase tracking-wider text-purple-300 font-mono mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-300" />
                {t.projects.modalSolution}
              </h5>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solutionAndArchitecture}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-3">
              {t.projects.modalFeatures}
            </h4>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-purple-300 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
              {t.projects.modalTech}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-purple-950/60 text-purple-200 border border-purple-300/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          {project.deliverables && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono mb-2.5">
                {t.projects.modalDeliverables}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((deliv, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-purple-950/60 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <Code2 className="w-3.5 h-3.5 text-purple-300 shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-5 sm:p-6 border-t border-purple-950/60 bg-slate-950/90 flex flex-wrap items-center justify-between gap-3 sticky bottom-0">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span>Demo Links & Architecture</span>
          </div>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white border border-purple-950/80 hover:border-purple-300/30 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>{t.projects.githubButton}</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-purple-300 hover:bg-purple-200 text-purple-950 shadow-md shadow-purple-950/40 transition-colors"
              >
                <span>{t.projects.prototypeButton}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
