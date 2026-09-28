'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ArrowUp, 
  EnvelopeSimple, 
  LinkedinLogo, 
  GithubLogo 
} from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] text-[var(--text-muted)] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-display font-bold text-[var(--text-heading)] tracking-tight">
                Muhammad Johan Irfan
              </span>
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] border border-[var(--border-subtle)]">
                Ex-GovTech & IIUM
              </span>
            </div>
            <p className="text-xs text-[var(--text-muted)] max-w-[65ch]">
              Requirements Engineer & IT Graduate (Information Assurance & Security). Available immediately.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:johanirfan123@gmail.com"
              className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] transition-colors"
              title="Email: johanirfan123@gmail.com"
              aria-label="Email"
            >
              <EnvelopeSimple className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/lynx4444"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] transition-colors"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubLogo className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <LinkedinLogo className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="btn-back-to-top"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[var(--bg-card)] hover:bg-[var(--bg-subtle)] text-xs font-mono font-medium text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] cursor-pointer transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-[var(--accent)]" />
            </button>
          </div>
        </div>

        {/* Bottom Notes & Copyright */}
        <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--text-muted)] text-left">
          <div>
            © {new Date().getFullYear()} Muhammad Johan Irfan. {t.footer.rights}
          </div>
          <div className="text-[11px] font-mono text-[var(--text-muted)]">
            Built with Next.js, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};
