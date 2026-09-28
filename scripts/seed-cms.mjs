import { getPayload } from 'payload';
import configPromise from '../payload.config';
import dotenv from 'dotenv';
dotenv.config();

const govtechExperience = {
  organization: 'GovTech Malaysia',
  ministry: 'Kementerian Digital',
  role: 'Requirements Engineer / Business Analyst Intern',
  period: 'March 2026 – September 2026',
  location: 'Putrajaya / Kuala Lumpur',
  type: 'Public Sector Digital Systems',
  summary: 'Engaged with stakeholders across public sector projects to elicit, analyse, and document business and technical requirements for SRS, SDS, and BRS documentation, formulated UAT test strategies, facilitated end-to-end UAT sessions, and authored comprehensive System User Manuals.',
  displayOrder: 1,
  skillsAcquired: [
    { skill: 'BRS / SRS / SDS Authoring' },
    { skill: 'User Acceptance Testing (UAT)' },
    { skill: 'WCAG 2.1 AA Compliance' },
    { skill: 'Public Sector Design Systems' },
    { skill: 'Stakeholder Requirement Elicitation' },
    { skill: 'Technical Documentation' },
  ],
  projects: [
    {
      name: 'Hansard Parliament',
      tag: 'Parliament Malaysia',
      description: 'Web application developed to modernise the search and discovery of Malaysian parliamentary records (Hansards). Traditionally published only as static PDFs, the system transforms these documents into a searchable, machine-readable digital archive to enhance public transparency, accountability, and accessibility.',
      deliverables: [
        { item: 'Machine-readable digital archive architecture' },
        { item: 'Searchable Hansard document discovery workflow' },
        { item: 'SRS & SDS specifications' },
        { item: 'Operational guidelines & staff user manuals' },
      ],
    },
    {
      name: 'Portal Sekolahku',
      tag: 'Ministry of Education Malaysia',
      description: 'Initiative that replaces fragmented, third-party school sites with a unified, standardised web ecosystem for all public schools nationwide. Through a centralised CMS linked to national databases, school administrators can effortlessly manage, giving parents and the public reliable access to official school information and announcements.',
      deliverables: [
        { item: 'Unified public school web ecosystem architecture' },
        { item: 'Centralised CMS linked to national databases' },
        { item: 'SRS, SDS & bilingual onboarding manuals' },
        { item: 'Role permission & announcement approval matrices' },
      ],
    },
    {
      name: 'RDMKD',
      tag: 'Ministry of Digital Malaysia',
      description: 'Acts as a structured digital archive and knowledge base. It categorises Ministry documents, datasets, and internal collections in one place to ensure information is properly preserved, standardised, and easily searchable for internal stakeholders.',
      deliverables: [
        { item: 'Structured digital archive & knowledge repository' },
        { item: 'Ministry document & dataset categorisation schema' },
        { item: 'SRS & SDS technical documentation' },
        { item: 'Internal stakeholder user guides & troubleshooting SOPs' },
      ],
    },
    {
      name: 'GovSuiteDMS',
      tag: 'Cabinet Malaysia',
      description: 'Serves as a centralised platform designed to securely digitise, manage, route, and archive official government and cabinet records across ministries and agencies. The system aims to streamline inter-agency administration, improve document security and auditability, and support paperless public service workflows.',
      deliverables: [
        { item: 'Paperless routing & inter-agency approval workflows' },
        { item: 'Confidential document access SRS controls' },
        { item: 'High-security document management SDS' },
        { item: 'Audit trail & security verification protocols' },
      ],
    },
    {
      name: 'MYDS',
      tag: 'GovTech Design System',
      description: 'Provides designers and developers with a unified design guideline, Figma assets, and a reusable UI component library. Its goal is to speed up frontend development, ensure web accessibility (WCAG compliance), and deliver a consistent, modern, and trustworthy user experience across all government digital platforms.',
      deliverables: [
        { item: 'Unified government design guidelines & design tokens' },
        { item: 'Figma UI asset library & component specifications' },
        { item: 'WCAG compliance & accessibility audit criteria' },
        { item: 'Developer documentation & UI component guides' },
      ],
    },
    {
      name: 'GovSuiteCMS',
      tag: 'GovTech Malaysia',
      description: 'A modular, high-security Content Management System engineered exclusively for public sector agencies. Empowered non-technical content editors across ministries to author, schedule, and publish official announcements with full audit trails and granular approval workflows.',
      deliverables: [
        { item: 'Granular role-based publishing & approval workflows' },
        { item: 'Content versioning & compliance audit logging engine' },
        { item: 'SRS & SDS functional specifications' },
        { item: 'Interactive onboarding workshops & administrator SOPs' },
      ],
    },
  ],
};

async function main() {
  try {
    const payload = await getPayload({ config: configPromise });

    const existing = await payload.find({
      collection: 'experiences',
      where: {
        organization: {
          contains: 'GovTech',
        },
      },
    });

    if (existing.totalDocs > 0) {
      console.log('GovTech experience already exists in Payload CMS.');
    } else {
      console.log('Seeding GovTech Malaysia into Payload CMS...');
      const created = await payload.create({
        collection: 'experiences',
        data: govtechExperience,
      });
      console.log('Successfully created GovTech experience with ID:', created.id);
    }

    const all = await payload.find({
      collection: 'experiences',
      sort: 'displayOrder',
    });
    console.log(`Total experiences in Payload CMS now: ${all.totalDocs}`);
    all.docs.forEach((doc) => {
      console.log(`- [Order ${doc.displayOrder}] ${doc.organization} (${doc.role})`);
    });
  } catch (err) {
    console.error('Seed error:', err);
  }
  process.exit(0);
}

main();
