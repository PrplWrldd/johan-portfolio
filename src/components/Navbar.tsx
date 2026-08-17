'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe, Shield, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.home, href: '#hero' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'skills', label: t.nav.skills, href: '#skills' },
    { id: 'experience', label: t.nav.experience, href: '#experience' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'achievements', label: t.nav.achievements, href: '#achievements' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3 shadow-lg shadow-black/40' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Pill */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-lg bg-purple-300/15 border border-purple-300/30 flex items-center justify-center text-purple-200 font-bold text-sm tracking-wider group-hover:bg-purple-300/25 transition-colors shadow-sm shadow-purple-950/40">
              JI
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-purple-300 transition-colors">
                Johan Irfan
              </span>
              <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <Shield className="w-3 h-3 text-purple-300 inline" />
                GovTech Intern · IIUM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-150 ${
                  activeSection === link.id
                    ? 'text-purple-100 bg-purple-950/60 border border-purple-300/30 shadow-sm shadow-purple-950/40'
                    : 'text-slate-300 hover:text-purple-200 hover:bg-purple-950/20'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language Switcher + LinkedIn (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              type="button"
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium bg-slate-900/80 border border-purple-950/70 hover:border-purple-300/40 text-slate-200 hover:text-white transition-all cursor-pointer"
              title={language === 'en' ? 'Tukar ke Bahasa Melayu' : 'Switch to English'}
              aria-label="Toggle language between English and Bahasa Melayu"
            >
              <Globe className="w-3.5 h-3.5 text-purple-300" />
              <span className={language === 'en' ? 'font-bold text-purple-300' : 'text-slate-400'}>EN</span>
              <span className="text-slate-600">/</span>
              <span className={language === 'ms' ? 'font-bold text-purple-300' : 'text-slate-400'}>BM</span>
            </button>

            {/* LinkedIn Quick Link */}
            <a
              href="https://www.linkedin.com/in/muhammad-johan-irfankhairudin-a234a6200"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin-link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-purple-300 hover:bg-purple-200 text-purple-950 shadow-md shadow-purple-950/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile / Tablet Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Lang Button */}
            <button
              type="button"
              id="mobile-lang-toggle-btn"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded bg-slate-900 border border-purple-950/70 text-xs font-medium text-slate-200 cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5 text-purple-300" />
              <span className="font-bold text-purple-300">{language.toUpperCase()}</span>
            </button>

            <button
              type="button"
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-300 hover:text-white hover:bg-purple-950/30 focus:outline-none cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden glass-nav border-t border-purple-950/60 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-2xl"
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`mobile-nav-${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-purple-100 bg-purple-950/60 font-semibold border-l-2 border-purple-300'
                    : 'text-slate-300 hover:text-white hover:bg-purple-950/30'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-purple-950/60 flex items-center justify-between">
            <a
              href="https://www.linkedin.com/in/muhammad-johan-irfankhairudin-a234a6200"
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-nav-linkedin"
              className="w-full text-center py-2 px-3 rounded-md text-xs font-semibold bg-purple-300 hover:bg-purple-200 text-purple-950 flex items-center justify-center gap-1.5 shadow-md shadow-purple-950/40"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
