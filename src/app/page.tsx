'use client';

import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Achievements } from '../components/Achievements';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#0b1329] text-slate-100 selection:bg-sky-600/30 selection:text-sky-200">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
