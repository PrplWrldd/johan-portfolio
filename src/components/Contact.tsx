'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare, 
  ShieldCheck
} from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('johanirfan123@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:johanirfan123@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      aria-label="Contact and Communication"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-tag bg-sky-950/80 text-sky-400 border border-sky-800/60 mb-3">
            <Mail className="w-3.5 h-3.5" />
            {t.contact.sectionTag}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Grid: Direct Channels + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="card-govtech p-6 rounded-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sky-400 font-mono mb-4">
                {t.contact.directReachout}
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">{t.contact.emailLabel}</span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    id="btn-copy-contact-email"
                    className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:johanirfan123@gmail.com"
                  id="link-direct-email"
                  className="text-sm font-bold text-white hover:text-sky-400 transition-colors break-all"
                >
                  johanirfan123@gmail.com
                </a>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">{t.contact.linkedinLabel}</span>
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                </div>
                <a
                  href="https://www.linkedin.com/in/muhammad-johan-irfankhairudin-a234a6200"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="link-direct-linkedin"
                  className="text-xs sm:text-sm font-bold text-white hover:text-sky-400 transition-colors flex items-center gap-1.5"
                >
                  <span>in/muhammad-johan-irfankhairudin</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                </a>
              </div>
            </div>

            {/* Quick Note Card */}
            <div className="p-5 rounded-xl bg-sky-950/20 border border-sky-900/40 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-1.5 text-sky-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Open for Technical Roles</span>
              </div>
              <p className="leading-relaxed">
                Available for full-time graduate opportunities and technical consulting starting late 2026.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              id="portfolio-contact-form"
              className="card-govtech p-6 sm:p-8 rounded-xl space-y-4"
            >
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-sky-400" />
                {t.contact.formTitle}
              </h3>

              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-slate-300 mb-1">
                  Name / Organization <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  required
                  placeholder={t.contact.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address <span className="text-sky-400">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  required
                  placeholder={t.contact.emailPlaceholder}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-medium text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  placeholder={t.contact.subjectPlaceholder}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-slate-300 mb-1">
                  Message <span className="text-sky-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder={t.contact.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-sm text-white placeholder-slate-500 focus:border-sky-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                id="btn-submit-contact"
                className="w-full py-3 px-4 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-900/30 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendButton}</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 text-center animate-fade-in">
                  {t.contact.successMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
