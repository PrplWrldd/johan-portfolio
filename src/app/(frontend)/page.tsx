import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

import type { Experience as PayloadExperience, Project as PayloadProject } from '@/types/payload-types';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  let experiences: PayloadExperience[] = [];
  let projects: PayloadProject[] = [];

  try {
    const payload = await getPayload({ config: configPromise });
    const [expRes, projRes] = await Promise.all([
      payload.find({
        collection: 'experiences',
        sort: 'displayOrder',
        limit: 100,
      }),
      payload.find({
        collection: 'projects',
        sort: 'displayOrder',
        limit: 100,
      }),
    ]);
    experiences = expRes.docs || [];
    projects = projRes.docs || [];
  } catch (error) {
    console.warn('Could not fetch dynamic CMS data from Payload:', error);
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience initialExperiences={experiences} />
        <Projects initialProjects={projects} />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
