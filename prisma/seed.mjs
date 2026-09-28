// Seed script to populate Supabase PostgreSQL with initial portfolio projects
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const initialProjects = [
  {
    slug: 'govtech-brs-engine',
    title: 'GovTech Digital Specification Engine',
    subtitle: 'High-assurance Requirements & Specifications Portal',
    category: 'GovTech',
    summary: 'Standardized digital portal streamlining BRS, SRS, and SDS documentation for Malaysian public sector digital systems.',
    detailedOverview: 'Built to align multi-agency stakeholders, automate traceability matrices, and audit system specifications before implementation.',
    problemStatement: 'Siloed requirement tracking and non-standardized documentation across public sector agencies caused project delays and scope drift.',
    solutionAndArchitecture: 'Centralized schema-based specification pipeline with automated traceability validation, role-based workflows, and PDF export.',
    keyFeatures: ['Automated Traceability Matrix', 'Role-based Review & Approval', 'GovTech Security Compliance Checklist'],
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'TypeScript'],
    deliverables: ['BRS Document Template', 'SRS Architecture Spec', 'UAT Test Plan'],
    role: 'Requirements Engineer & Full-Stack Developer',
    githubUrl: 'https://github.com/PrplWrldd',
    liveDemoUrl: '',
    imagePlaceholderText: 'GovTech Specification Platform',
    accentColor: 'emerald',
    featured: true,
    displayOrder: 1,
  },
  {
    slug: 'iium-security-audit',
    title: 'Campus Vulnerability Assessment System',
    subtitle: 'Information Assurance & Threat Analysis System',
    category: 'Cybersecurity',
    summary: 'Automated vulnerability scanner and privacy impact analysis toolkit developed for academic computing infrastructure.',
    detailedOverview: 'Integrated automated port auditing, policy compliance validation, and OWASP Top 10 vulnerability checks.',
    problemStatement: 'Manual auditing of internal services was time-intensive and prone to missing outdated dependencies.',
    solutionAndArchitecture: 'Scheduled scanning agents reporting to a secured centralized dashboard with remediation guidance.',
    keyFeatures: ['OWASP Top 10 Scans', 'Privacy Impact Analysis (PIA) Reports', 'Executive Risk Dashboards'],
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Docker'],
    deliverables: ['Security Audit Report', 'Mitigation Architecture'],
    role: 'Lead Security Analyst',
    githubUrl: 'https://github.com/PrplWrldd',
    liveDemoUrl: '',
    imagePlaceholderText: 'Security Audit Dashboard',
    accentColor: 'purple',
    featured: true,
    displayOrder: 2,
  },
];

async function main() {
  console.log('🌱 Seeding initial projects into Supabase...');

  for (const project of initialProjects) {
    const upserted = await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: {
        ...project,
        stats: {
          create: {
            views: 0,
            likes: 0,
          },
        },
      },
    });
    console.log(`✓ Seeded project: ${upserted.title} (${upserted.slug})`);
  }

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
