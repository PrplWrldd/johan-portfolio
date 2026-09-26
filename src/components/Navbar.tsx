'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  List, 
  X, 
  Globe, 
  ShieldCheck, 
  ArrowSquareOut, 
  Sun, 
  Moon, 
  Desktop,
  LinkedinLogo,
  GithubLogo
} from '@phosphor-icons/react';

export const Navbar: React.FC = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { mode, theme, toggleTheme, mounted } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 15);

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection('contact');
        return;
      }

      if (scrollY < 100) {
        setActiveSection('hero');
        return;
      }

      const sections = ['about', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollY;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    handleScroll();
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

  const getThemeIcon = () => {
    if (!mounted || mode === 'system') return <Desktop className="w-4 h-4 text-[var(--accent)]" />;
    if (mode === 'light') return <Sun className="w-4 h-4 text-amber-500" />;
    return <Moon className="w-4 h-4 text-blue-400" />;
  };

  const getThemeTitle = () => {
    if (mode === 'system') return `${t.nav.themeToggleSystem} (${theme.toUpperCase()})`;
    if (mode === 'light') return t.nav.themeToggleLight;
    return t.nav.themeToggleDark;
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 py-3 backdrop-blur-md border-b transition-colors duration-200 ${
        isScrolled
          ? 'bg-[var(--nav-bg)] border-[var(--nav-border)]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Identity */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 shrink-0">
              <Image
                src="/images/johan-profile.jpg"
                alt="Muhammad Johan Irfan"
                fill
                priority
                sizes="32px"
                className="object-cover object-[center_20%]"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-display font-bold tracking-tight text-[var(--text-heading)]">
                Johan Irfan
              </span>
              <span className="text-[11px] text-[var(--text-muted)] font-mono flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[var(--accent)] inline" />
                GovTech · IIUM
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-150 ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent-subtle)] border-[var(--accent-border)] font-semibold'
                      : 'text-[var(--text-secondary)] border-transparent hover:text-[var(--text-heading)] hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Controls */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              type="button"
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-subtle)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
              title={getThemeTitle()}
              aria-label={getThemeTitle()}
            >
              {getThemeIcon()}
              <span className="font-mono text-[11px] uppercase font-semibold text-[var(--accent)]">
                {mode === 'system' ? 'Auto' : mode}
              </span>
            </button>

            {/* Language Switcher */}
            <button
              type="button"
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-subtle)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors cursor-pointer"
              title={language === 'en' ? 'Tukar ke Bahasa Melayu' : 'Switch to English'}
              aria-label="Toggle language between English and Bahasa Melayu"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span className={language === 'en' ? 'font-bold text-[var(--accent)]' : 'text-[var(--text-muted)]'}>EN</span>
              <span className="text-[var(--text-muted)]">/</span>
              <span className={language === 'ms' ? 'font-bold text-[var(--accent)]' : 'text-[var(--text-muted)]'}>BM</span>
            </button>

            {/* GitHub Quick Link */}
            <a
              href="https://github.com/lynx4444"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-github-link"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-[var(--bg-subtle)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] transition-colors"
            >
              <GithubLogo className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn Quick Link */}
            <a
              href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
              target="_blank"
              rel="noopener noreferrer"
              id="nav-linkedin-link"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              <LinkedinLogo className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              type="button"
              id="mobile-theme-toggle-btn"
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] cursor-pointer"
              aria-label={getThemeTitle()}
            >
              {getThemeIcon()}
            </button>

            <button
              type="button"
              id="mobile-lang-toggle-btn"
              onClick={toggleLanguage}
              className="px-2 py-1 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-xs font-mono font-bold text-[var(--accent)] cursor-pointer"
              aria-label="Toggle language"
            >
              {language.toUpperCase()}
            </button>

            <button
              type="button"
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] cursor-pointer"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <List className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[var(--border-subtle)] bg-[var(--bg-card)] px-4 py-4 space-y-2"
        >
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[var(--accent)] bg-[var(--accent-subtle)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-heading)] hover:bg-neutral-100 dark:hover:bg-neutral-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center gap-2">
            <a
              href="https://github.com/lynx4444"
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-nav-github"
              className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold bg-[var(--bg-subtle)] border border-[var(--border-subtle)] text-[var(--text-secondary)] flex items-center justify-center gap-1.5"
            >
              <GithubLogo className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-johan-irfan-khairudin-a234a6200"
              target="_blank"
              rel="noopener noreferrer"
              id="mobile-nav-linkedin"
              className="flex-1 text-center py-2 px-3 rounded-lg text-xs font-semibold bg-blue-600 text-white flex items-center justify-center gap-1.5"
            >
              <LinkedinLogo className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
