'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Check, 
  Copy, 
  ExternalLink, 
  ShieldCheck,
  Send,
  Phone,
  MapPin,
  UserCheck
} from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('johanirfan123@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+6013-2811976');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Communication"
      className="scroll-mt-20 py-20 px-4 sm:px-6 lg:px-8 border-t border-[var(--border-subtle)] bg-[var(--bg-main)] relative transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
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

        {/* Immediate Availability Status Banner */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-purple-500/10 to-emerald-500/10 dark:from-emerald-950/40 dark:via-purple-950/30 dark:to-emerald-950/40 border border-emerald-400/30 dark:border-emerald-500/30 text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-300/50 dark:border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-300 shrink-0 shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-[var(--text-heading)]">
                {t.contact.availabilityTitle || 'Employment Availability'}
              </p>
              <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300/90 font-medium">
                {t.contact.availabilityText || 'Available for full-time employment: Immediately'}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-600 text-white dark:bg-emerald-400 dark:text-emerald-950 shadow-sm shrink-0">
            <span className="w-2 h-2 rounded-full bg-white dark:bg-emerald-950 animate-pulse" />
            <span>{t.contact.availabilityBadge || 'Available Immediately'}</span>
          </span>
        </div>

        {/* 4-Card Communication Grid: Email, Phone, LinkedIn, Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Email Channel Card */}
          <div className="card-govtech p-5 rounded-xl flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/70 border border-purple-300/40 dark:border-purple-300/30 flex items-center justify-center text-purple-700 dark:text-purple-200">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Email</span>
              </div>
              <h3 className="text-xs font-semibold text-[var(--text-secondary)] mb-1">
                {t.contact.emailLabel}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[var(--text-heading)] break-all font-mono">
                johanirfan123@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={handleCopyEmail}
                id="btn-copy-contact-email"
                className="flex-1 py-1.5 px-2 rounded-md bg-white dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-purple-200 dark:border-purple-950/60 hover:border-purple-400 dark:hover:border-purple-300/40 transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                    <span className="text-purple-700 dark:text-purple-200 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href="mailto:johanirfan123@gmail.com"
                id="btn-mailto-direct"
                className="py-1.5 px-2.5 rounded-md bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-300 dark:hover:bg-purple-200 dark:text-purple-950 text-[11px] font-bold transition-all flex items-center gap-1 shadow-xs"
              >
                <Send className="w-3 h-3" />
                <span>Send</span>
              </a>
            </div>
          </div>

          {/* Phone Channel Card */}
          <div className="card-govtech p-5 rounded-xl flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/70 border border-purple-300/40 dark:border-purple-300/30 flex items-center justify-center text-purple-700 dark:text-purple-200">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Phone</span>
              </div>
              <h3 className="text-xs font-semibold text-[var(--text-secondary)] mb-1">
                {t.contact.phoneLabel || 'Phone Number'}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[var(--text-heading)] font-mono">
                {t.contact.phoneValue || '+6013-2811976'}
              </p>
            </div>

            <div className="flex items-center gap-1.5 pt-2 border-t border-[var(--border-subtle)]">
              <button
                type="button"
                onClick={handleCopyPhone}
                id="btn-copy-contact-phone"
                className="flex-1 py-1.5 px-2 rounded-md bg-white dark:bg-slate-900/80 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-[11px] font-medium text-slate-700 dark:text-slate-300 border border-purple-200 dark:border-purple-950/60 hover:border-purple-400 dark:hover:border-purple-300/40 transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-2xs"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3 h-3 text-purple-600 dark:text-purple-300" />
                    <span className="text-purple-700 dark:text-purple-200 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href="tel:+60132811976"
                id="btn-tel-direct"
                className="py-1.5 px-2.5 rounded-md bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-300 dark:hover:bg-purple-200 dark:text-purple-950 text-[11px] font-bold transition-all flex items-center gap-1 shadow-xs"
              >
                <Phone className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="card-govtech p-5 rounded-xl flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/70 border border-purple-300/40 dark:border-purple-300/30 flex items-center justify-center text-purple-700 dark:text-purple-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Base</span>
              </div>
              <h3 className="text-xs font-semibold text-[var(--text-secondary)] mb-1">
                {t.contact.locationLabel || 'Location'}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[var(--text-heading)] leading-snug">
                {t.contact.locationValue || 'Kuala Langat, Selangor, Malaysia'}
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] font-mono">
              <span>Selangor / Klang Valley / Hybrid</span>
            </div>
          </div>

          {/* LinkedIn Channel Card */}
          <div className="card-govtech p-5 rounded-xl flex flex-col justify-between space-y-3">
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-purple-100 dark:bg-purple-950/70 border border-purple-300/40 dark:border-purple-300/30 flex items-center justify-center text-purple-700 dark:text-purple-200">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Network</span>
              </div>
              <h3 className="text-xs font-semibold text-[var(--text-secondary)] mb-1">
                {t.contact.linkedinLabel}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[var(--text-heading)]">
                Muhammad Johan Irfan
              </p>
            </div>

            <div className="pt-2 border-t border-[var(--border-subtle)]">
              <a
                href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
                target="_blank"
                rel="noopener noreferrer"
                id="link-direct-linkedin"
                className="w-full py-1.5 px-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-300 dark:hover:bg-purple-200 dark:text-purple-950 text-[11px] font-bold transition-all flex items-center justify-center gap-1 shadow-xs"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Professional References Section */}
        {t.contact.references && t.contact.references.length > 0 && (
          <div className="card-govtech p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-lg bg-purple-500/10 dark:bg-purple-300/15 text-purple-700 dark:text-purple-200 border border-purple-500/20 dark:border-purple-300/30">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[var(--text-heading)]">
                  {t.contact.referencesTitle || 'Professional References'}
                </h3>
                <p className="text-xs text-[var(--text-muted)]">
                  {t.contact.referencesSubtitle || 'Academic and industry references from IIUM and GovTech ecosystem.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {t.contact.references.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-[var(--border-subtle)] hover:border-purple-400 dark:hover:border-purple-300/40 transition-colors shadow-xs"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="text-sm font-bold text-[var(--text-heading)]">
                      {ref.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-200 border border-purple-300/40 dark:border-purple-300/30">
                      Reference #{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-0.5">
                    {ref.title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mb-3">
                    {ref.organization}
                  </p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-purple-700 dark:text-purple-300 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{ref.email}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
