'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  EnvelopeSimple, 
  Check, 
  Copy, 
  ArrowSquareOut, 
  ShieldCheck,
  PaperPlaneRight,
  PhoneCall,
  MapPin,
  UserCheck,
  LinkedinLogo
} from '@phosphor-icons/react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('johanirfan123@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+6013-2811976');
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Communication"
      className="scroll-mt-20 py-24 px-4 sm:px-6 lg:px-8 bg-[var(--bg-main)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Left-Aligned */}
        <div className="text-left max-w-2xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent)] font-semibold mb-2 block">
            {'// 06. CONTACT'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-[var(--text-heading)]">
            {t.contact.title}
          </h2>
          <p className="mt-2 text-base text-[var(--text-muted)] max-w-[65ch]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Immediate Availability Status Banner - Clean border & background */}
        <div className="mb-10 p-5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-card)] text-xs text-[var(--text-secondary)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-display font-bold text-sm sm:text-base text-[var(--text-heading)]">
                {t.contact.availabilityTitle || 'Employment Availability'}
              </p>
              <p className="text-xs sm:text-sm text-[var(--text-muted)] max-w-[60ch]">
                {t.contact.availabilityText || 'Available for full-time employment: Immediately'}
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>{t.contact.availabilityBadge || 'Available Immediately'}</span>
          </span>
        </div>

        {/* 4-Card Communication Grid: Email, Phone, Base, LinkedIn */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 text-left">
          {/* Email Channel Card */}
          <div className="card-clean p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)]">
                  <EnvelopeSimple className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Direct</span>
              </div>
              <h3 className="text-xs font-medium text-[var(--text-muted)] mb-1">
                {t.contact.emailLabel}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[var(--text-heading)] break-all font-mono">
                johanirfan123@gmail.com
              </p>
            </div>

            <div className="flex items-center gap-1.5 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                id="btn-copy-contact-email"
                className="flex-1 py-1.5 px-2 rounded-lg bg-[var(--bg-subtle)] hover:bg-neutral-200 dark:hover:bg-neutral-800 text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
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
                className="py-1.5 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium transition-colors flex items-center gap-1"
              >
                <PaperPlaneRight className="w-3 h-3" />
                <span>Send</span>
              </a>
            </div>
          </div>

          {/* Phone Channel Card */}
          <div className="card-clean p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)]">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Mobile</span>
              </div>
              <h3 className="text-xs font-medium text-[var(--text-muted)] mb-1">
                {t.contact.phoneLabel || 'Phone Number'}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[var(--text-heading)] font-mono">
                {t.contact.phoneValue || '+6013-2811976'}
              </p>
            </div>

            <div className="flex items-center gap-1.5 pt-2">
              <button
                type="button"
                onClick={handleCopyPhone}
                id="btn-copy-contact-phone"
                className="flex-1 py-1.5 px-2 rounded-lg bg-[var(--bg-subtle)] hover:bg-neutral-200 dark:hover:bg-neutral-800 text-[11px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-heading)] border border-[var(--border-subtle)] transition-colors flex items-center justify-center gap-1 cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Copied</span>
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
                className="py-1.5 px-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium transition-colors flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="card-clean p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)]">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Base</span>
              </div>
              <h3 className="text-xs font-medium text-[var(--text-muted)] mb-1">
                {t.contact.locationLabel || 'Location'}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[var(--text-heading)] leading-snug">
                {t.contact.locationValue || 'Kuala Langat, Selangor, Malaysia'}
              </p>
            </div>

            <div className="pt-2 text-[11px] text-[var(--text-muted)] font-mono">
              <span>Klang Valley / Selangor</span>
            </div>
          </div>

          {/* LinkedIn Channel Card */}
          <div className="card-clean p-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)]">
                  <LinkedinLogo className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider">Network</span>
              </div>
              <h3 className="text-xs font-medium text-[var(--text-muted)] mb-1">
                {t.contact.linkedinLabel}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[var(--text-heading)]">
                Muhammad Johan Irfan
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
                target="_blank"
                rel="noopener noreferrer"
                id="link-direct-linkedin"
                className="w-full py-1.5 px-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium transition-colors flex items-center justify-center gap-1"
              >
                <span>Connect on LinkedIn</span>
                <ArrowSquareOut className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Professional References Section */}
        {t.contact.references && t.contact.references.length > 0 && (
          <div className="card-clean p-6 sm:p-8 text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent-border)] text-[var(--accent)]">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-display font-bold text-[var(--text-heading)]">
                  {t.contact.referencesTitle || 'Professional References'}
                </h3>
                <p className="text-xs text-[var(--text-muted)] max-w-[65ch]">
                  {t.contact.referencesSubtitle || 'Academic and industry references from IIUM and GovTech ecosystem.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {t.contact.references.map((ref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)]"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-display font-bold text-[var(--text-heading)]">
                      {ref.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      Ref #{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[var(--accent)] mb-0.5">
                    {ref.title}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mb-3">
                    {ref.organization}
                  </p>
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[var(--accent)] hover:underline"
                  >
                    <EnvelopeSimple className="w-3.5 h-3.5" />
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
