'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-main)] text-[var(--text-muted)] py-12 px-4 sm:px-6 lg:px-8 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-[var(--text-heading)] tracking-tight">
                Muhammad Johan Irfan
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border border-purple-300/40 dark:border-purple-300/30 shadow-sm">
                GovTech & IIUM
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] max-w-md">
              Requirements Engineer & IT Student (Information Security).
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:johanirfan123@gmail.com"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-200 border border-purple-200 dark:border-purple-950/60 hover:border-purple-300/40 transition-colors shadow-xs"
              title="Email: johanirfan123@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-200 border border-purple-200 dark:border-purple-950/60 hover:border-purple-300/40 transition-colors shadow-xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="btn-back-to-top"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-200 border border-purple-200 dark:border-purple-950/60 hover:border-purple-300/40 cursor-pointer transition-colors shadow-xs"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
            </button>
          </div>
        </div>

        {/* Bottom Notes & Placeholder Disclosure */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Johan Irfan. {t.footer.rights}
          </div>
          <div className="text-center md:text-right text-[11px] font-mono text-[var(--text-muted)]">
            {t.footer.designedWith}
          </div>
        </div>

        {/* Notice for Johan regarding placeholders */}
        <div className="mt-4 p-3 rounded-lg bg-purple-50/70 dark:bg-slate-900/60 border border-purple-200/80 dark:border-purple-950/40 text-[11px] text-[var(--text-muted)] text-center font-mono">
          {t.footer.placeholdersNote}
        </div>
      </div>
    </footer>
  );
};
