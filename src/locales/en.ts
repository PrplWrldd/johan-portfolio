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
    badgeCgpa: 'CGPA 3.54 · 5x Dean\'s List',
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
    degree: 'B.IT (Honours) · Information Security',
    institution: 'International Islamic University Malaysia (IIUM)',
    expectedGrad: '2022 – 2026',
    cgpaLabel: 'CGPA: 3.54 / 4.00 · 5x Dean\'s List',
    currentInternshipTitle: 'GovTech Malaysia',
    currentInternshipText: 'Authoring BRS, SRS, SDS, and user guides for national-scale government portals and cabinet systems at Kementerian Digital.',
    interestsTitle: 'Core Focus',
    interests: [
      'Requirements Engineering (BRS / SRS / SDS)',
      'System Security & Vulnerability Auditing',
      'Privacy Impact Analysis (PIA)',
      'Full-Stack Web Dev (Laravel & React)',
      'IT Infrastructure & Systems Support'
    ],
    languagesTitle: 'Languages',
    languageItems: [
      { name: 'Bahasa Melayu', level: 'Native', note: 'Official government documentation & professional drafting.' },
      { name: 'English', level: 'Fluent', note: 'Technical documentation, presentations & stakeholder alignment.' }
    ],
    coreValues: [
      { title: 'Rigorous Specs', desc: 'Translating complex policies into verifiable, high-precision technical specifications.' },
      { title: 'Security by Design', desc: 'Embedding access controls, data integrity, and privacy safeguards from day one.' },
      { title: 'Stakeholder Alignment', desc: 'Bridging communication between civil service teams and software engineers.' }
    ]
  },
  skills: {
    sectionTag: 'Skills',
    title: 'Skills & Stack',
    subtitle: 'Technical toolkit across systems analysis, software development, and design.',
    categories: {
      languages: {
        title: 'Programming',
        description: 'Core languages for backends, algorithms, and databases.',
        iconName: 'Code',
        skills: [
          { name: 'PHP', level: 'Proficient', highlight: true },
          { name: 'SQL', level: 'Proficient', highlight: true },
          { name: 'JavaScript (ES6+)', level: 'Intermediate', highlight: true },
          { name: 'HTML5 / CSS3', level: 'Proficient' },
          { name: 'C', level: 'Foundational' }
        ]
      },
      frameworks: {
        title: 'Frameworks',
        description: 'Modern frameworks for fast, scalable web apps.',
        iconName: 'Layers',
        skills: [
          { name: 'Laravel', level: 'Proficient', highlight: true },
          { name: 'Tailwind CSS', level: 'Proficient', highlight: true },
          { name: 'React.js', level: 'Intermediate' },
          { name: 'Next.js', level: 'Intermediate' }
        ]
      },
      dataTools: {
        title: 'Data & Databases',
        description: 'Relational databases, BI, and data analysis.',
        iconName: 'Database',
        skills: [
          { name: 'MySQL', level: 'Proficient', highlight: true },
          { name: 'Power BI', level: 'Dashboards' },
          { name: 'Tableau', level: 'Analytics' },
          { name: 'Azure Data Studio', level: 'Queries' },
          { name: 'Microsoft Excel', level: 'Advanced' }
        ]
      },
      documentation: {
        title: 'Requirements & BA',
        description: 'Public sector specifications and agile artifacts.',
        iconName: 'FileText',
        skills: [
          { name: 'SRS Specifications', level: 'GovTech Standard', highlight: true },
          { name: 'SDS System Design', level: 'Architecture', highlight: true },
          { name: 'BRS Business Specs', level: 'Multi-Agency', highlight: true },
          { name: 'User Stories & UAT', level: 'Agile / Scrum' },
          { name: 'User Manuals & SOPs', level: 'Public Sector' }
        ]
      },
      multimedia: {
        title: 'Design & Media',
        description: 'UI/UX prototyping, visual assets, and video.',
        iconName: 'Palette',
        skills: [
          { name: 'Figma', level: 'UI/UX & Design Systems', highlight: true },
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
    title: 'Work Experience',
    subtitle: 'Digital systems and technical specifications for Malaysian government agencies.',
    roleBadge: 'Internship',
    tenure: 'March – September 2026',
    overview: 'Requirements Engineer / Business Analyst Intern at GovTech Malaysia (Kementerian Digital), authoring technical specifications (SRS, SDS, BRS, and User Guides) for national public sector platforms.',
    deliverablesTitle: 'Government Systems Documented',
    methodologiesTitle: 'Core Methodologies',
    items: [
      {
        id: 'govtech-malaysia',
        organization: 'GovTech Malaysia',
        ministry: 'Kementerian Digital',
        role: 'Requirements Engineer / Business Analyst Intern',
        period: 'March – September 2026',
        location: 'Putrajaya / Kuala Lumpur',
        type: 'Public Sector Digital Transformation',
        summary: 'Authored core technical specifications and user manuals across 5 national digital government platforms.',
        projects: [
          {
            name: 'Portal Sekolahku (KPM)',
            tag: 'Ministry of Education',
            description: 'Authored SRS, SDS, and bilingual user manuals for the national school portal.',
            deliverables: ['SRS & SDS Specifications', 'User Onboarding Manuals', 'Role Permission Matrices']
          },
          {
            name: 'Hansard Parlimen',
            tag: 'Malaysian Parliament',
            description: 'Drafted technical specifications and user manuals for Parliament\'s verbatim recording system.',
            deliverables: ['Workflow Modeling', 'SRS & SDS Specifications', 'Staff Operation Manuals']
          },
          {
            name: 'GovSuiteDMS',
            tag: 'Cabinet Document Management',
            description: 'Facilitated stakeholder discovery and authored SRS/SDS for Cabinet Document Management System.',
            deliverables: ['Stakeholder Discovery', 'Confidential Access SRS', 'Architecture & Schema SDS']
          },
          {
            name: 'GovSuiteCMS',
            tag: 'Centralised Multi-Tenant CMS',
            description: 'Drafted multi-agency Business Requirements Specifications (BRS) for government CMS.',
            deliverables: ['Agency Requirement Elicitation', 'Multi-Tenant BRS', 'Approval Workflow Matrix']
          },
          {
            name: 'RDMKD',
            tag: 'Ministry of Digital Repository',
            description: 'Formulated core specification documents and user guides for Ministry of Digital repository.',
            deliverables: ['SRS & SDS Specifications', 'User Guides & Troubleshooting SOPs']
          }
        ],
        skillsAcquired: [
          'Stakeholder Elicitation',
          'BRS / SRS / SDS Authoring',
          'Process Modeling',
          'Security Compliance',
          'UAT & User Manuals'
        ]
      }
    ]
  },
  projects: {
    sectionTag: 'Projects',
    title: 'Featured Projects',
    subtitle: 'Full-stack web applications, 3D graphics, and UI/UX prototypes.',
    viewDetails: 'View Details',
    viewDetailsAria: 'View details for',
    githubButton: 'GitHub',
    prototypeButton: 'Live Demo',
    placeholderNotice: 'Demo repository links and previews ready for asset swap.',
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
        id: 'maqam',
        title: 'MAQAM',
        subtitle: 'Cemetery Management & GPS Plot Locator',
        category: 'Full-Stack Web App',
        summary: 'Web platform for Masjid Al-Hidayah featuring GPS plot navigation and cemetery record management.',
        detailedOverview: 'Modernizes cemetery record-keeping with interactive GPS grave search for the public and secure plot management for mosque administrators.',
        problemStatement: 'Physical paper records caused search delays and complicated grave plot allocation.',
        solutionAndArchitecture: 'Built with Laravel and MySQL, integrating Google Maps API for interactive GPS plot coordinates and role-based admin controls.',
        keyFeatures: [
          'Interactive GPS map with pinpoint plot search',
          'Digitized burial records with instant search',
          'Role-based admin portal for plot allocation',
          'Mobile-responsive interface for on-site visitors'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind CSS', 'JavaScript'],
        role: 'Lead Full-Stack Developer',
        githubUrl: 'https://github.com/placeholder/maqam-cemetery-system',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/maqam',
        deliverables: ['Database Schema & ERD', 'Google Maps API Integration', 'Admin Auth & CRUD Module', 'UAT Test Cases'],
        imagePlaceholderText: 'MAQAM — Cemetery Management & GPS Plot Search',
        accentColor: '#059669'
      },
      {
        id: 'restaurant-pos',
        title: 'Restaurant POS System',
        subtitle: 'Real-Time POS & Kitchen Order Tracking',
        category: 'Full-Stack Web App',
        summary: 'Fast web POS system built with Laravel and AJAX for live order dispatch and kitchen status updates.',
        detailedOverview: 'Streamlines dining orders, table allocation, billing, and live kitchen dispatch without page reloads.',
        problemStatement: 'Paper ticketing created kitchen order bottlenecks and delayed cashier processing.',
        solutionAndArchitecture: 'Laravel MVC backend with AJAX-driven asynchronous ordering and transactional MySQL database queries.',
        keyFeatures: [
          'Menu management with category filtering',
          'AJAX live ordering with instant tax & total calculation',
          'Kitchen screen with pending/ready status tracking',
          'Automated receipt generation and sales summaries'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript (AJAX)', 'CSS3', 'Blade Templating'],
        role: 'Full-Stack Developer & Designer',
        githubUrl: 'https://github.com/placeholder/restaurant-pos-laravel',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/pos-system',
        deliverables: ['MVC Architecture & Routes', 'AJAX Live Order Engine', 'MySQL Schema & Transactions', 'Kitchen Ticket Dashboard'],
        imagePlaceholderText: 'Restaurant POS — Cashier & Kitchen Live Dashboard',
        accentColor: '#0284C7'
      },
      {
        id: 'networth-3d',
        title: 'Profile & Net Worth 3D Animation',
        subtitle: 'Interactive Three.js Data Visualization',
        category: '3D & Web Graphics',
        summary: 'Interactive 3D dashboard transforming live Google Sheets data into dynamic Sphere, Helix, and Table layouts.',
        detailedOverview: 'Renders live financial and demographic CSV data into 3D particle and card structures using Three.js and Google OAuth.',
        problemStatement: 'Standard 2D tables lack visual engagement for multi-attribute spatial data.',
        solutionAndArchitecture: 'Three.js 3D transforms (Periodic, Sphere, Helix, Grid) with OrbitControls and Google Identity Services OAuth.',
        keyFeatures: [
          'OrbitControls camera with smooth 3D inertia',
          '4 layouts: Periodic Table, 3D Sphere, Double Helix, Grid',
          'Live Google Sheets CSV data sync',
          'Google Identity Services authentication'
        ],
        techStack: ['Three.js', 'JavaScript (ES6+)', 'HTML5 Canvas', 'Tailwind CSS', 'Google Auth', 'Google Sheets API'],
        role: '3D Graphics & Frontend Developer',
        githubUrl: 'https://github.com/placeholder/profile-networth-3d-threejs',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/3d-networth',
        deliverables: ['Three.js Scene Engine', '3D Coordinate Algorithms', 'Google OAuth Integration', 'Google Sheets CSV Parser'],
        imagePlaceholderText: 'Three.js 3D Visualizer — Sphere & Helix Particle Layouts',
        accentColor: '#6366F1'
      },
      {
        id: 'iium-bus-tracker',
        title: 'IIUM Campus Bus Tracker',
        subtitle: 'Campus Mobility & Bus Tracker UI/UX',
        category: 'UI/UX & Prototyping',
        summary: 'High-fidelity Figma UI/UX prototype for real-time shuttle tracking across IIUM Gombak.',
        detailedOverview: 'Mobile app prototype featuring live shuttle GPS tracking, route status indicators, and ETA countdowns for students.',
        problemStatement: 'Unpredictable shuttle schedules led to missed lectures across the hilly campus.',
        solutionAndArchitecture: 'User journey mapping and student survey research synthesized into an interactive, WCAG-compliant Figma design system.',
        keyFeatures: [
          'Live bus location map with ETA countdown per stop',
          'Route congestion and delay alerts',
          'Bus occupancy meter (Empty, Moderate, Full)',
          'Departure reminders for upcoming classes'
        ],
        techStack: ['Figma', 'UI/UX Design Systems', 'User Research', 'Design Thinking', 'Wireframing'],
        role: 'Lead UI/UX Designer',
        githubUrl: 'https://github.com/placeholder/iium-bus-tracker-design',
        liveDemoUrl: 'https://www.figma.com/proto/placeholder-iium-bus-tracker',
        deliverables: ['User Personas & Journey Maps', 'Wireframes & Information Architecture', 'Interactive Figma Prototype', 'Design System Library'],
        imagePlaceholderText: 'IIUM Bus Tracker — Figma High-Fidelity Mobile App Screens',
        accentColor: '#EC4899'
      }
    ]
  },
  achievements: {
    sectionTag: 'Honors',
    title: 'Honors & Leadership',
    subtitle: 'Academic excellence, symposium awards, and varsity archery leadership.',
    academicTab: 'Academic',
    innovationTab: 'Symposium',
    sportsTab: 'Sports Leadership',
    items: [
      {
        id: 'deans-list',
        title: "Dean's List (5 Semesters)",
        category: 'academic',
        organization: 'KICT, IIUM',
        period: '2022 – Present',
        description: 'Maintained top-tier academic standing throughout the BIT program with a cumulative CGPA of 3.54.',
        highlightBadge: '5x Dean\'s List',
        bullets: [
          'Distinction grades across software engineering, databases, and cybersecurity.',
          'Led peer study sessions for Information Assurance & Security subjects.'
        ]
      },
      {
        id: 'uia-symposium',
        title: 'Gold Award & Most Integrated Project',
        category: 'innovation',
        organization: '7th UIA Symposium',
        period: 'Edition VII',
        description: 'Awarded Gold and Most Integrated Project for "Aquaponic Meets Sustainable Urban Living".',
        highlightBadge: 'Gold Award',
        bullets: [
          'Designed an urban agriculture IoT monitoring model combining environmental tech and economics.',
          'Authored the technical proposal and coordinated cross-disciplinary team.'
        ]
      },
      {
        id: 'archery-captain',
        title: 'Captain — IIUM Mustang Archery',
        category: 'sports',
        organization: 'IIUM Sports Development Centre',
        period: '2024 – 2025',
        description: 'Led the university varsity squad in national and international tournaments.',
        highlightBadge: 'Varsity Captain & Podium Finisher',
        bullets: [
          '2nd Runner-Up (International) — SAAC Archery Championship 2025.',
          '2nd Runner-Up (National) — UNITEN SULI Open Archery Tournament.',
          'Managed athlete training, equipment logistics, and tournament strategy.'
        ]
      }
    ]
  },
  contact: {
    sectionTag: 'Contact',
    title: 'Get In Touch',
    subtitle: 'Available for opportunities, technical collaboration, and inquiries.',
    directReachout: 'Direct Channels',
    emailLabel: 'Email Address',
    linkedinLabel: 'LinkedIn Profile',
    formTitle: 'Send a Message',
    namePlaceholder: 'Your Name / Organization',
    emailPlaceholder: 'your.email@example.com',
    subjectPlaceholder: 'Job Opportunity / Inquiry',
    messagePlaceholder: 'Your message...',
    sendButton: 'Send Message',
    successMessage: 'Opening your mail client with your drafted message!',
    openInEmailClient: 'Or send directly via email client:'
  },
  footer: {
    rights: 'All rights reserved.',
    designedWith: 'Crafted with Next.js, React & Tailwind CSS.',
    backToTop: 'Top',
    placeholdersNote: 'Portfolio for Muhammad Johan Irfan · Ready for production assets.'
  }
};
