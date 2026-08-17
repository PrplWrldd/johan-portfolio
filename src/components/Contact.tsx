'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldCheck,
  Send
} from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('johanirfan123@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Communication"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)] bg-[var(--bg-main)] relative transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-tag bg-purple-100 dark:bg-purple-950/70 text-purple-800 dark:text-purple-200 border border-purple-300/40 dark:border-purple-300/30 mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
            {t.contact.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-heading)] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Direct Communication Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email Channel Card */}
          <div className="card-govtech p-6 rounded-xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950/70 border border-purple-300/40 dark:border-purple-300/30 flex items-center justify-center text-purple-700 dark:text-purple-200">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Direct Inbox</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-secondary)] mb-1">
                {t.contact.emailLabel}
              </h3>
              <p className="text-base sm:text-lg font-bold text-[var(--text-heading)] break-all">
                johanirfan123@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={handleCopy}
                id="btn-copy-contact-email"
                className="flex-1 py-2 px-3 rounded-lg bg-white dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-xs font-medium text-slate-700 dark:text-slate-300 border border-purple-200 dark:border-purple-950/60 hover:border-purple-400 dark:hover:border-purple-300/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-purple-600 dark:text-purple-300" />
                    <span className="text-purple-700 dark:text-purple-200 font-semibold">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
              <a
                href="mailto:johanirfan123@gmail.com"
                id="btn-mailto-direct"
                className="py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-300 dark:hover:bg-purple-200 dark:text-purple-950 text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm shadow-purple-950/20"
              >
                <Send className="w-3 h-3" />
                <span>Compose</span>
              </a>
            </div>
          </div>

          {/* LinkedIn Channel Card */}
          <div className="card-govtech p-6 rounded-xl flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-950/70 border border-purple-300/40 dark:border-purple-300/30 flex items-center justify-center text-purple-700 dark:text-purple-200">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">Professional Network</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--text-secondary)] mb-1">
                {t.contact.linkedinLabel}
              </h3>
              <p className="text-base sm:text-lg font-bold text-[var(--text-heading)]">
                Muhammad Johan Irfan
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <a
                href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
                target="_blank"
                rel="noopener noreferrer"
                id="link-direct-linkedin"
                className="w-full py-2 px-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-300 dark:hover:bg-purple-200 dark:text-purple-950 text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm shadow-purple-950/20"
              >
                <span>View LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Technical Availability Status Banner */}
        <div className="p-5 rounded-xl bg-purple-50/80 dark:bg-purple-950/25 border border-purple-200/90 dark:border-purple-300/25 text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-200/60 dark:bg-purple-900/60 flex items-center justify-center text-purple-700 dark:text-purple-200 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm text-[var(--text-heading)]">Open for Technical & Consulting Roles</p>
              <p className="text-[var(--text-muted)]">Available for full-time graduate opportunities starting late 2026.</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800 shadow-2xs shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available Q4 2026
          </span>
        </div>
      </div>
    </section>
  );
};
