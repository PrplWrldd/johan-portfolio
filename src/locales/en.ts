import { TranslationDictionary } from '../types/portfolio';

export const en: TranslationDictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    achievements: 'Honors',
    contact: 'Contact',
    resumeButton: 'Resume',
    themeToggleDark: 'Switch to Dark Mode',
    themeToggleLight: 'Switch to Light Mode',
    themeToggleSystem: 'Sync with System Theme',
  },
  hero: {
    greeting: 'Hi, I am',
    name: 'Muhammad Johan Irfan',
    headline: 'Requirements Engineer & Full-Stack Developer',
    hook: 'Building secure public sector systems, system architecture, and modern web apps.',
    badgeGovTech: 'GovTech Malaysia Intern',
    badgeEducation: 'Final-Year IT @ IIUM',
    badgeCgpa: 'CGPA 3.57 · 5x Dean\'s List',
    ctaExperience: 'Experience',
    ctaProjects: 'Projects',
    ctaContact: 'Contact',
    copiedEmail: 'Email copied!',
    copyEmail: 'Copy Email',
    downloadResume: 'Resume (PDF)',
  },
  about: {
    sectionTag: 'Profile',
    title: 'About Me',
    subtitle: 'Bridging system requirements, cyber assurance, and modern software engineering.',
    educationTitle: 'Education',
    degree: 'Bachelor of Information Technology (Hons.) · Specialisation: Information Assurance and Security',
    institution: 'International Islamic University Malaysia (IIUM), Gombak',
    expectedGrad: 'Oct 2022 – Dec 2026',
    cgpaLabel: 'CGPA: 3.57 / 4.00 · 5x Dean\'s List',
    currentInternshipTitle: 'GovTech Malaysia (Kementerian Digital)',
    currentInternshipRole: 'Requirements Engineer / Business Analyst Intern',
    currentInternshipText: 'Bachelor’s Degree in Information Technology graduate at IIUM specialising in Information Assurance and Security, currently serving a 6-month internship (March 2026 – September 2026) as a Requirements Engineer / Business Analyst Intern at GovTech Malaysia under Kementerian Digital, where I gather requirements and prepare BRS, SRS, SDS, and user manual documentation for public sector digital systems. Strong skills in Web Development. Experienced in academic projects involving system security, privacy impact analysis, and ethical issues in computing and motivated to continuously learn emerging security threats and contribute to building secure, trustworthy technologies.',
    interestsTitle: 'Core Focus',
    interests: [
      'Requirements Engineering (BRS / SRS / SDS & User Manuals)',
      'System Security & Vulnerability Auditing',
      'Privacy Impact Analysis (PIA) & Ethical Computing',
      'Full-Stack Web Development (Laravel, Next.js, Node.js & React)',
      'UAT Test Planning, Defect Resolution & ToT Workshops'
    ],
    languagesTitle: 'Languages',
    languageItems: [
      { name: 'Bahasa Melayu', level: 'Native', note: 'Native proficiency in official government documentation & stakeholder engagement.' },
      { name: 'English', level: 'Conversational', note: 'Conversational proficiency in technical documentation, presentations & alignment.' }
    ],
    coreValues: [
      { title: 'Rigorous Specs', desc: 'Translating complex policies into verifiable, high-precision technical specifications (BRS, SRS, SDS).' },
      { title: 'Security by Design', desc: 'Embedding access controls, data integrity, and privacy safeguards from day one.' },
      { title: 'Stakeholder Alignment', desc: 'Bridging communication between civil service teams, agency leads, and software engineers.' }
    ]
  },
  skills: {
    sectionTag: 'Skills',
    title: 'Technical Skills',
    subtitle: 'Technical toolkit across programming, frameworks, data tools, and requirements engineering.',
    categories: {
      languages: {
        title: 'Languages',
        description: 'Core languages for backends, web applications, and database queries.',
        iconName: 'Code',
        skills: [
          { name: 'PHP', level: 'Proficient', highlight: true },
          { name: 'TypeScript', level: 'Intermediate', highlight: true },
          { name: 'JavaScript', level: 'Proficient', highlight: true },
          { name: 'HTML', level: 'Proficient' },
          { name: 'SQL', level: 'Proficient', highlight: true }
        ]
      },
      frameworks: {
        title: 'Frameworks & Libraries',
        description: 'Modern frameworks for fast, scalable web apps and interfaces.',
        iconName: 'Layers',
        skills: [
          { name: 'Laravel', level: 'Proficient', highlight: true },
          { name: 'Tailwind CSS', level: 'Proficient', highlight: true },
          { name: 'Node.js', level: 'Proficient', highlight: true },
          { name: 'Next.js', level: 'Intermediate', highlight: true },
          { name: 'React', level: 'Intermediate', highlight: true }
        ]
      },
      dataTools: {
        title: 'Data & Tools',
        description: 'Relational databases, NoSQL, business intelligence, and productivity tools.',
        iconName: 'Database',
        skills: [
          { name: 'MongoDB', level: 'Proficient', highlight: true },
          { name: 'MySQL', level: 'Proficient', highlight: true },
          { name: 'Google Antigravity', level: 'Advanced', highlight: true },
          { name: 'Power BI', level: 'Dashboards' },
          { name: 'Tableau', level: 'Analytics' },
          { name: 'Azure Data Studio', level: 'Queries' },
          { name: 'Microsoft Excel', level: 'Advanced' }
        ]
      },
      documentation: {
        title: 'Requirements & Management',
        description: 'Requirements elicitation, UAT planning, and agile public sector artifacts.',
        iconName: 'FileText',
        skills: [
          { name: 'Requirement Gathering', level: 'Core', highlight: true },
          { name: 'BRS, SRS & SDS Documentation', level: 'GovTech Standard', highlight: true },
          { name: 'UAT & UAT Planning', level: 'End-to-End', highlight: true },
          { name: 'TOT Workshops', level: 'Hands-on', highlight: true },
          { name: 'Project Planning & Management', level: 'Execution', highlight: true },
          { name: 'System User Manuals', level: 'Published' }
        ]
      },
      multimedia: {
        title: 'Design & Design Systems',
        description: 'UI/UX prototyping, design systems (MYDS), and creative tools.',
        iconName: 'Palette',
        skills: [
          { name: 'Figma', level: 'MYDS & UI Assets', highlight: true },
          { name: 'WCAG Accessibility', level: 'Compliance', highlight: true },
          { name: 'Canva', level: 'Visual Assets' },
          { name: 'Premiere Pro', level: 'Video Production' },
          { name: 'Lightroom', level: 'Photo Processing' },
          { name: 'After Effects', level: 'Motion Graphics' }
        ]
      }
    }
  },
  experience: {
    sectionTag: 'Experience',
    title: 'Professional Experience',
    subtitle: 'Digital systems and technical specifications for Malaysian government agencies.',
    roleBadge: 'Internship (Completed)',
    tenure: 'March 2026 – September 2026',
    overview: 'Requirements Engineer / Business Analyst Intern at GovTech Malaysia (Kementerian Digital), gathering requirements and authoring BRS, SRS, SDS, and comprehensive user manuals for public sector digital systems.',
    deliverablesTitle: 'Public Sector Digital Systems Documented',
    methodologiesTitle: 'Core Responsibilities & Methodologies',
    items: [
      {
        id: 'govtech-malaysia',
        organization: 'GovTech Malaysia',
        ministry: 'Kementerian Digital',
        role: 'Requirements Engineer / Business Analyst Intern',
        period: 'March 2026 – September 2026',
        location: 'Putrajaya / Kuala Lumpur',
        type: 'Public Sector Digital Systems',
        summary: 'Engaged with stakeholders across public sector projects to elicit, analyse, and document business and technical requirements for SRS, SDS, and BRS documentation, formulated UAT test strategies, facilitated end-to-end UAT sessions, and authored comprehensive System User Manuals.',
        projects: [
          {
            name: 'Hansard Parliament',
            tag: 'Parliament Malaysia',
            description: 'Web application developed to modernise the search and discovery of Malaysian parliamentary records (Hansards). Traditionally published only as static PDFs, the system transforms these documents into a searchable, machine-readable digital archive to enhance public transparency, accountability, and accessibility.',
            deliverables: [
              'Machine-readable digital archive architecture',
              'Searchable Hansard document discovery workflow',
              'SRS & SDS specifications',
              'Operational guidelines & staff user manuals'
            ]
          },
          {
            name: 'Portal Sekolahku',
            tag: 'Ministry of Education Malaysia',
            description: 'Initiative that replaces fragmented, third-party school sites with a unified, standardised web ecosystem for all public schools nationwide. Through a centralised CMS linked to national databases, school administrators can effortlessly manage, giving parents and the public reliable access to official school information and announcements.',
            deliverables: [
              'Unified public school web ecosystem architecture',
              'Centralised CMS linked to national databases',
              'SRS, SDS & bilingual onboarding manuals',
              'Role permission & announcement approval matrices'
            ]
          },
          {
            name: 'RDMKD',
            tag: 'Ministry of Digital Malaysia',
            description: 'Acts as a structured digital archive and knowledge base. It categorises Ministry documents, datasets, and internal collections in one place to ensure information is properly preserved, standardised, and easily searchable for internal stakeholders.',
            deliverables: [
              'Structured digital archive & knowledge repository',
              'Ministry document & dataset categorisation schema',
              'SRS & SDS technical documentation',
              'Internal stakeholder user guides & troubleshooting SOPs'
            ]
          },
          {
            name: 'GovSuiteDMS',
            tag: 'Cabinet Malaysia',
            description: 'Serves as a centralised platform designed to securely digitise, manage, route, and archive official government and cabinet records across ministries and agencies. The system aims to streamline inter-agency administration, improve document security and auditability, and support paperless public service workflows.',
            deliverables: [
              'Paperless routing & inter-agency approval workflows',
              'Confidential document access SRS controls',
              'High-security document management SDS',
              'Audit trail & security verification protocols'
            ]
          },
          {
            name: 'MYDS',
            tag: 'GovTech Design System',
            description: 'Provides designers and developers with a unified design guideline, Figma assets, and a reusable UI component library. Its goal is to speed up frontend development, ensure web accessibility (WCAG compliance), and deliver a consistent, modern, and trustworthy user experience across all government digital platforms.',
            deliverables: [
              'Unified government design guidelines & design tokens',
              'Figma UI asset library & component specifications',
              'WCAG compliance & accessibility audit criteria',
              'Developer documentation & UI component guides'
            ]
          },
          {
            name: 'GovSuiteCMS',
            tag: 'Public Sector Multi-Tenant CMS',
            description: 'A specialised digital platform designed for government and public sector agencies to manage, publish, and standardise web content across ministries and agencies.',
            deliverables: [
              'Multi-agency Business Requirements Specifications (BRS)',
              'Standardised web publishing workflows',
              'Multi-tenant agency access permission matrices',
              'Hands-on ToT training materials & user manuals'
            ]
          }
        ],
        skillsAcquired: [
          'Stakeholder Requirement Elicitation (BRS, SRS, SDS)',
          'UAT Strategy & Comprehensive Test Case Formulation',
          'End-to-End UAT Execution & Defect Resolution',
          'Training of Trainers (ToT) Workshops',
          'Project Timeline Tracking & Deliverable Monitoring',
          'Comprehensive System User Manual Authoring'
        ]
      }
    ]
  },
  projects: {
    sectionTag: 'Projects',
    title: 'Featured Projects',
    subtitle: 'Full-stack web applications, 3D data visualization, and modern digital systems.',
    viewDetails: 'View Details',
    viewDetailsAria: 'View details for',
    githubButton: 'GitHub',
    prototypeButton: 'Live Demo',
    placeholderNotice: 'Demo repository links and previews ready for verification.',
    modalClose: 'Close',
    modalOverview: 'Overview',
    modalProblem: 'Problem Statement',
    modalSolution: 'Solution & Architecture',
    modalFeatures: 'Key Capabilities',
    modalTech: 'Tech Stack',
    modalDeliverables: 'Deliverables',
    filterAll: 'All Projects',
    items: [
      {
        id: 'ianseo-pro',
        title: 'Ianseo Pro',
        subtitle: 'Modern & Ad-Free Archery Tournament Hub',
        category: 'Full-Stack Web App',
        summary: 'Engineered a high-performance web scraper and modern web application to extract and centralise archery tournament schedules, live results, and qualification rankings.',
        detailedOverview: 'Transforms cluttered legacy Ianseo tournament pages into an elevated, responsive, ad-free web platform with live match scraping, interactive elimination brackets, clean PDF streaming, and target practice simulation.',
        problemStatement: 'Legacy tournament sites are cluttered with invasive ads and tracking banners, causing slow page loads on mobile field devices and unreadable bracket navigation for competitors and coaches.',
        solutionAndArchitecture: 'Architected with Node.js, Express 5, and Cheerio for sub-second HTML scraping and in-memory caching, coupled with an ad-free modern frontend featuring responsive bracket visualization, live radar, and clean JSON/CSV exports.',
        keyFeatures: [
          'Engineered a high-performance web scraper to extract & centralise tournament schedules and live results',
          'Designed a responsive, ad-free frontend interface with HTML and CSS to optimise the digital experience for archery competitors and spectators',
          'Interactive elimination brackets with branch connectors and live match scoring',
          'Qualification scorecards with 10s/Xs tracking and podium highlights',
          'Official documents explorer with direct in-app clean PDF streaming',
          'Deployed on Vercel / Heroku with sub-second response times'
        ],
        techStack: ['Node.js', 'Express 5', 'Cheerio', 'JavaScript', 'HTML5', 'CSS3', 'Python 3', 'FontAwesome', 'Google Fonts', 'Vercel / Heroku'],
        role: 'Creator & Full-Stack Architect',
        githubUrl: 'https://github.com/lynx4444/ianseo-pro',
        liveDemoUrl: 'https://ianseo-pro.vercel.app',
        deliverables: [
          'Cheerio-Powered Web Scraper Engine',
          'RESTful Tournament API Endpoints',
          'Dynamic Bracket & Match Tree Visualizer',
          'Ad-Free Modern UI & Dark Mode',
          'JSON / CSV Dataset Export Utility'
        ],
        imagePlaceholderText: 'Ianseo Pro — Live Tournament Scraper & Elimination Brackets',
        accentColor: '#F59E0B'
      },
      {
        id: 'maqam',
        title: 'MAQAM',
        subtitle: 'Muslim Automated Qabr & Maqbarah Management',
        category: 'Full-Stack Web App',
        summary: 'A cemetery management system to digitise grave records and tracking for Masjid Al-Hidayah, implementing a searchable database with GPS-based mapping.',
        detailedOverview: 'Modernises cemetery record-keeping with an interactive GPS grave search for visitors and secure deceased record management for mosque administrators.',
        problemStatement: 'Traditional physical paper records caused search delays, record degradation, and complicated grave plot allocation for visitors and administrators.',
        solutionAndArchitecture: 'Built with Laravel and MySQL, integrating Google Maps API for interactive GPS plot coordinates and role-based administrative controls.',
        keyFeatures: [
          'A cemetery management system to digitise grave records and tracking for Masjid Al-Hidayah',
          'Implemented a searchable database with GPS-based mapping to help visitors locate graves via an interactive map',
          'Role-based administrative portal for plot allocation and record maintenance',
          'Mobile-responsive interface for on-site navigation by visitors'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind CSS', 'JavaScript'],
        role: 'Lead Full-Stack Developer',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Cemetery Management Database Schema & ERD',
          'Google Maps API GPS Plot Locator',
          'Admin Authentication & CRUD Module',
          'Searchable Grave Database'
        ],
        imagePlaceholderText: 'MAQAM — Cemetery Management & GPS Plot Search',
        accentColor: '#059669'
      },
      {
        id: 'networth-3d',
        title: 'Profile and Net Worth 3D Animation',
        subtitle: 'Interactive Three.js Data Visualization',
        category: '3D & Web Graphics',
        summary: 'Using Three.js to display data in immersive Table, Sphere, Helix, and Grid layouts with fluid motion transitions, connected to live Google Sheets CSV data.',
        detailedOverview: 'Renders dynamic financial and demographic CSV data into 3D particle and card structures using Three.js, Tween.js, and Google Identity Services OAuth.',
        problemStatement: 'Standard 2D tables lack visual engagement and spatial depth for multi-attribute numerical datasets like net worth.',
        solutionAndArchitecture: 'Engineered a robust pipeline to fetch and parse live CSV data from Google Sheets, utilising custom conditional logic to dynamically colour-code elements based on numerical metrics.',
        keyFeatures: [
          'Using Three.js to display data in immersive Table, Sphere, Helix, and Grid layouts, featuring fluid motion transitions',
          'Engineered a robust pipeline to fetch and parse live CSV data from Google Sheets',
          'Custom conditional logic to dynamically colour-code elements based on numerical metrics like Net Worth',
          'Integrated Google Identity Services (OAuth) for secure access and authentication'
        ],
        techStack: ['HTML5', 'Vanilla JavaScript', 'Tailwind CSS', 'Three.js', 'Tween.js', 'Google Identity Services (OAuth)', 'Google Sheets CSV API'],
        role: '3D Graphics & Frontend Developer',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Three.js 3D Layout Transition Engine',
          'Live Google Sheets CSV Parser Pipeline',
          'Conditional Metric Colour-Coding System',
          'Google Identity Services OAuth Integration'
        ],
        imagePlaceholderText: 'Three.js 3D Visualizer — Sphere & Helix Particle Layouts',
        accentColor: '#6366F1'
      },
      {
        id: 'hansard-parliament',
        title: 'Hansard Parliament',
        subtitle: 'Parliament Malaysia Digital Archive',
        category: 'Full-Stack Web App',
        summary: 'Web application developed to modernise the search and discovery of Malaysian parliamentary records (Hansards), transforming static PDFs into a searchable digital archive.',
        detailedOverview: 'Transforms Malaysian parliamentary records (Hansards) from static PDFs into a searchable, machine-readable digital archive to enhance public transparency, accountability, and accessibility.',
        problemStatement: 'Hansard parliamentary records were traditionally published only as static PDFs, making keyword discovery, speech cross-referencing, and public research cumbersome.',
        solutionAndArchitecture: 'Developed a modern, searchable digital archive with text extraction, indexed metadata, and intuitive search filters for citizens and parliamentary researchers.',
        keyFeatures: [
          'Machine-readable digital archive for parliamentary records',
          'Search and discovery engine for parliamentary Hansard speeches',
          'Enhanced public transparency, accountability, and accessibility',
          'Structured metadata categorisation by date, speaker, and sitting'
        ],
        techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Search Indexing', 'GovTech Standard'],
        role: 'Requirements Engineer & Frontend Contributor',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Searchable Hansard Digital Archive System',
          'SRS & SDS Technical Documentation',
          'Public Search & Discovery Interface',
          'System Operational Manuals'
        ],
        imagePlaceholderText: 'Hansard Parliament — Malaysian Parliamentary Digital Archive',
        accentColor: '#8B5CF6'
      },
      {
        id: 'portal-sekolahku',
        title: 'Portal Sekolahku',
        subtitle: 'Ministry of Education Malaysia',
        category: 'Public Sector System',
        summary: 'Initiative replacing fragmented, third-party school sites with a unified, standardised web ecosystem for all public schools nationwide linked to national databases.',
        detailedOverview: 'Through a centralised CMS linked to national databases, school administrators can effortlessly manage content, giving parents and the public reliable access to official school information and announcements.',
        problemStatement: 'Fragmented third-party school sites lacked standardization, centralized security, and direct integration with official Ministry databases.',
        solutionAndArchitecture: 'Architected a multi-tenant web ecosystem with centralized governance, unified branding, and direct national database synchronization.',
        keyFeatures: [
          'Unified, standardised web ecosystem for all public schools nationwide',
          'Centralised CMS linked directly to national education databases',
          'Effortless school administration and announcement publishing',
          'Reliable public and parent access to verified school information'
        ],
        techStack: ['Centralised CMS', 'Multi-Tenant Architecture', 'TypeScript', 'Tailwind CSS', 'National DB Integration'],
        role: 'Requirements Engineer & System Analyst',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Standardised School Portal Ecosystem Specs',
          'Centralised CMS Architecture (SRS & SDS)',
          'User Onboarding & Admin Manuals',
          'National Database Integration Specifications'
        ],
        imagePlaceholderText: 'Portal Sekolahku — National Public Schools Web Ecosystem',
        accentColor: '#0EA5E9'
      },
      {
        id: 'myds-system',
        title: 'MYDS',
        subtitle: 'Malaysian Government Design System',
        category: 'Design Systems & UI',
        summary: 'Unified design guideline, Figma assets, and reusable UI component library ensuring WCAG compliance across all government digital platforms.',
        detailedOverview: 'Provides designers and developers with a unified design guideline, Figma assets, and a reusable UI component library to accelerate frontend development and deliver modern, accessible public sector experiences.',
        problemStatement: 'Inconsistent UI/UX patterns across disparate government portals created fragmented user journeys and varying levels of web accessibility.',
        solutionAndArchitecture: 'Standardised design tokens, accessible React components conforming to WCAG standards, and comprehensive design documentation.',
        keyFeatures: [
          'Unified design guideline and Figma UI asset ecosystem',
          'Reusable UI component library for government digital platforms',
          'Web accessibility assurance (WCAG compliance)',
          'Accelerates public sector frontend development and trust'
        ],
        techStack: ['Figma', 'React', 'Tailwind CSS', 'WCAG Accessibility', 'Design Tokens'],
        role: 'BA & UI Component Specification Contributor',
        githubUrl: 'https://github.com/lynx4444',
        liveDemoUrl: 'https://github.com/lynx4444',
        deliverables: [
          'Unified Design Guideline Documentation',
          'Reusable UI Component Specifications',
          'WCAG Accessibility Compliance Criteria',
          'Developer Adoption & Hand-off Guides'
        ],
        imagePlaceholderText: 'MYDS — Government Design System & Reusable UI Components',
        accentColor: '#EC4899'
      }
    ]
  },
  achievements: {
    sectionTag: 'Honors',
    title: 'Awards & Co-Curricular Achievements',
    subtitle: 'Academic excellence, varsity archery captaincy, and national competition victories.',
    academicTab: 'Academic',
    innovationTab: 'Symposium',
    sportsTab: 'Archery Leadership',
    items: [
      {
        id: 'deans-list',
        title: "Dean's List Award (5 Semesters)",
        category: 'academic',
        organization: 'Department of ICT, IIUM Gombak',
        period: 'Oct 2022 – Dec 2026',
        description: 'Maintained top-tier academic standing throughout the BIT program specialising in Information Assurance and Security with a cumulative CGPA of 3.57.',
        highlightBadge: '5x Dean\'s List · CGPA 3.57',
        bullets: [
          'Recipient of the Dean\'s List Award for 5 consecutive semesters.',
          'Consistently high distinction across Information Assurance, System Security, Software Engineering, and Database Systems.',
          'Specialised in system security, privacy impact analysis, and ethical computing.'
        ]
      },
      {
        id: 'archery-captain',
        title: "Captain — IIUM's Mustang Archery",
        category: 'sports',
        organization: 'IIUM Sports Development Centre',
        period: '2024 – 2025',
        description: 'Served as Captain of IIUM\'s Mustang Archery varsity team, leading the university squad in prestigious national and international championships.',
        highlightBadge: 'Varsity Captain & National Champion',
        bullets: [
          '1st (National): Taylor’s Archery Indoor Competition 2026 (Gold Medal / National Champion).',
          '2nd Runner-up (International): SAAC Archery Championship 2025.',
          '2nd Runner-up (National): UNITEN SULI Open Archery Tournament.',
          'Led squad training regimens, athletic discipline, tournament strategy, and equipment logistics.'
        ]
      },
      {
        id: 'uia-symposium',
        title: 'Gold Award & Most Integrated Project',
        category: 'innovation',
        organization: '7th UIA Symposium',
        period: 'Edition VII',
        description: 'Awarded Gold and Most Integrated Project for "Aquaponic Meets Sustainable Urban Living".',
        highlightBadge: 'Gold Award & Most Integrated',
        bullets: [
          'Designed an urban agriculture IoT monitoring model combining environmental tech and economic sustainability.',
          'Authored technical proposals and coordinated cross-disciplinary team presentations.'
        ]
      }
    ]
  },
  contact: {
    sectionTag: 'Contact',
    title: 'Get In Touch',
    subtitle: 'Available immediately for full-time employment, technical roles, and collaboration.',
    directReachout: 'Direct Channels',
    emailLabel: 'Email Address',
    linkedinLabel: 'LinkedIn Profile',
    phoneLabel: 'Phone Number',
    phoneValue: '+6013-2811976',
    locationLabel: 'Location',
    locationValue: 'Kuala Langat, Selangor, Malaysia',
    availabilityTitle: 'Employment Availability',
    availabilityText: 'Available for full-time employment: Immediately',
    availabilityBadge: 'Available Immediately',
    formTitle: 'Send a Message',
    namePlaceholder: 'Your Name / Organization',
    emailPlaceholder: 'your.email@example.com',
    subjectPlaceholder: 'Job Opportunity / Inquiry',
    messagePlaceholder: 'Your message...',
    sendButton: 'Send Message',
    successMessage: 'Opening your mail client with your drafted message!',
    openInEmailClient: 'Or send directly via email client:',
    referencesTitle: 'Professional References',
    referencesSubtitle: 'Academic and industry references available for verification.',
    references: [
      {
        name: 'Ts. Dr. Hazwani Mohd Mohadis',
        title: 'Assistant Professor, Dept. of ICT',
        organization: 'International Islamic University Malaysia (IIUM)',
        email: 'hazwanimohadis@iium.edu.my'
      },
      {
        name: 'Mr Aiman Hakim Bin Zulkarnain',
        title: 'Project Analyst',
        organization: 'Revolabs',
        email: 'aiman.hakim01@gmail.com'
      }
    ]
  },
  footer: {
    rights: 'All rights reserved.',
    designedWith: 'Crafted with Next.js, React & Tailwind CSS.',
    backToTop: 'Top',
    placeholdersNote: 'Portfolio of Muhammad Johan Irfan bin Khairudin · Available for full-time employment: Immediately.'
  }
};
