'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className="border-t border-purple-950/60 bg-black text-slate-400 py-12 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-950/60">
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base font-bold text-white tracking-tight">
                Muhammad Johan Irfan
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-950/70 text-purple-200 border border-purple-300/30 shadow-sm shadow-purple-950/40">
                GovTech & IIUM
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Requirements Engineer & IT Student (Information Security).
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:johanirfan123@gmail.com"
              className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-purple-950/40 text-slate-300 hover:text-purple-200 border border-purple-950/60 hover:border-purple-300/30 transition-colors"
              title="Email: johanirfan123@gmail.com"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-johan-irfankhairudin-a234a6200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-purple-950/40 text-slate-300 hover:text-purple-200 border border-purple-950/60 hover:border-purple-300/30 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <button
              type="button"
              id="btn-back-to-top"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/80 hover:bg-purple-950/40 text-xs font-medium text-slate-300 hover:text-purple-200 border border-purple-950/60 hover:border-purple-300/30 cursor-pointer transition-colors"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-purple-300" />
            </button>
          </div>
        </div>

        {/* Bottom Notes & Placeholder Disclosure */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} Muhammad Johan Irfan. {t.footer.rights}
          </div>
          <div className="text-center md:text-right text-[11px] font-mono text-slate-400">
            {t.footer.designedWith}
          </div>
        </div>

        {/* Notice for Johan regarding placeholders */}
        <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-purple-950/40 text-[11px] text-slate-400 text-center font-mono">
          {t.footer.placeholdersNote}
        </div>
      </div>
    </footer>
  );
};
