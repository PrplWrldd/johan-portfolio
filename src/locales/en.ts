import { TranslationDictionary } from '../types/portfolio';

export const en: TranslationDictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    achievements: 'Achievements',
    contact: 'Contact',
    resumeButton: 'View Resume / CV',
  },
  hero: {
    greeting: 'Hello, I am',
    name: 'Muhammad Johan Irfan bin Khairudin',
    headline: 'Requirements Engineer / Business Analyst Intern · IT Student specialising in Information Assurance & Security',
    hook: 'Bridging public sector digital transformation with rigorous requirements engineering (BRS/SRS/SDS), full-stack web architecture, and cybersecurity assurance.',
    badgeGovTech: 'GovTech Malaysia (Kementerian Digital) Intern',
    badgeEducation: 'Final-Year BIT @ IIUM Gombak',
    badgeCgpa: 'CGPA 3.54 · 5x Dean\'s List',
    ctaExperience: 'Explore GovTech Experience',
    ctaProjects: 'View Featured Projects',
    ctaContact: 'Get in Touch',
    copiedEmail: 'Email copied to clipboard!',
    copyEmail: 'Copy Email',
    downloadResume: 'Download Resume (PDF)',
  },
  about: {
    sectionTag: 'Academic & Professional Profile',
    title: 'About Me',
    subtitle: 'Combining analytical requirements discovery with secure software engineering to deliver high-impact digital solutions.',
    educationTitle: 'Education & Academic Standing',
    degree: 'Bachelor of Information Technology (Honours)',
    institution: 'International Islamic University Malaysia (IIUM), Gombak',
    expectedGrad: 'Oct 2022 – Oct 2026 (Expected Graduation)',
    cgpaLabel: 'Cumulative Grade Point Average (CGPA): 3.54 / 4.00 (5 Semesters Dean\'s List)',
    currentInternshipTitle: 'Current Internship — GovTech Malaysia',
    currentInternshipText: 'Serving as a Requirements Engineer / Business Analyst Intern under Kementerian Digital (Ministry of Digital) from March to September 2026. Actively authoring high-standard BRS, SRS, SDS, and User Manuals for mission-critical government digital portals and cabinet systems.',
    interestsTitle: 'Core Focus & Research Interests',
    interests: [
      'Requirements Discovery, BRS, SRS & SDS Authoring',
      'System Security, Vulnerability Auditing & Risk Management',
      'Privacy Impact Analysis (PIA) & Computing Ethics',
      'Full-Stack Web Development (Laravel & React Ecosystems)',
      'Systems Troubleshooting & IT Infrastructure (Windows & macOS)'
    ],
    languagesTitle: 'Language Proficiency',
    languageItems: [
      { name: 'Bahasa Melayu', level: 'Native', note: 'Primary national language — fluent in official government drafting and professional documentation.' },
      { name: 'English', level: 'Conversational & Professional', note: 'Full professional working proficiency for technical writing, presentations, and stakeholder meetings.' }
    ],
    coreValues: [
      { title: 'Rigorous Documentation', desc: 'Translating complex stakeholder policies into clear, verifiable functional and non-functional specifications.' },
      { title: 'Security by Design', desc: 'Applying information assurance principles, access controls, and data integrity safeguards from day one.' },
      { title: 'Stakeholder Empathy', desc: 'Bridging the communication gap between non-technical civil servants and engineering sprint teams.' }
    ]
  },
  skills: {
    sectionTag: 'Capabilities & Technical Arsenal',
    title: 'Skills & Competencies',
    subtitle: 'A balanced toolkit spanning analytical business documentation, full-stack software development, and multimedia design.',
    categories: {
      languages: {
        title: 'Programming Languages',
        description: 'Core languages utilized for backend services, algorithms, and database querying.',
        iconName: 'Code',
        skills: [
          { name: 'PHP', level: 'Proficient', highlight: true },
          { name: 'SQL', level: 'Proficient', highlight: true },
          { name: 'JavaScript (ES6+)', level: 'Intermediate', highlight: true },
          { name: 'HTML5 / CSS3', level: 'Proficient' },
          { name: 'C', level: 'Academic Foundations' }
        ]
      },
      frameworks: {
        title: 'Frameworks & Libraries',
        description: 'Modern development frameworks for building scalable, responsive web applications.',
        iconName: 'Layers',
        skills: [
          { name: 'Laravel', level: 'Proficient (MVC, Eloquent, Blade)', highlight: true },
          { name: 'Tailwind CSS', level: 'Intermediate (Custom Themes, Responsive)', highlight: true },
          { name: 'React.js', level: 'Intermediate (Hooks, Context, State)' },
          { name: 'Next.js', level: 'Intermediate (App Router, Server Components)' }
        ]
      },
      dataTools: {
        title: 'Data & Database Tools',
        description: 'Relational databases, business intelligence, and analytical tooling.',
        iconName: 'Database',
        skills: [
          { name: 'MySQL', level: 'Proficient', highlight: true },
          { name: 'Power BI', level: 'Data Modeling & Dashboards' },
          { name: 'Tableau', level: 'Visual Analytics' },
          { name: 'Azure Data Studio', level: 'Querying & Management' },
          { name: 'Microsoft Excel', level: 'Advanced Formulas & Data Analysis' }
        ]
      },
      documentation: {
        title: 'Documentation & BA Engineering',
        description: 'Standard software engineering lifecycle and public sector specification artifacts.',
        iconName: 'FileText',
        skills: [
          { name: 'Software Requirements Specifications (SRS)', level: 'GovTech Standard', highlight: true },
          { name: 'System Design Specifications (SDS)', level: 'Architecture & Schemas', highlight: true },
          { name: 'Business Requirements Specs (BRS)', level: 'Multi-Agency Level', highlight: true },
          { name: 'User Stories & Acceptance Criteria', level: 'Agile / Scrum' },
          { name: 'User Manuals & SOPs', level: 'Public Sector Training' }
        ]
      },
      multimedia: {
        title: 'Multimedia & UI/UX Design',
        description: 'Prototyping, visual asset creation, and video post-production.',
        iconName: 'Palette',
        skills: [
          { name: 'Figma', level: 'UI/UX Prototyping & Design Systems', highlight: true },
          { name: 'Canva', level: 'Presentations & Visual Assets' },
          { name: 'Adobe Premiere Pro', level: 'Video Production' },
          { name: 'Adobe Lightroom', level: 'Photo Post-Processing' },
          { name: 'Adobe After Effects', level: 'Motion Graphics' }
        ]
      }
    }
  },
  experience: {
    sectionTag: 'Public Sector Impact',
    title: 'Work Experience',
    subtitle: 'Driving digital delivery and system specification standards for Malaysian government agencies.',
    roleBadge: 'Internship',
    tenure: 'March 2026 – September 2026 (6 Months)',
    overview: 'As a Requirements Engineer / Business Analyst Intern at GovTech Malaysia (Kementerian Digital), I specialize in eliciting user needs, facilitating stakeholder alignment workshops, and authoring authoritative technical specification documents (SRS, SDS, BRS, and User Manuals) for high-profile public sector platforms.',
    deliverablesTitle: 'Featured Government Projects & Initiatives Documented',
    methodologiesTitle: 'Core Methodologies Applied',
    items: [
      {
        id: 'govtech-malaysia',
        organization: 'GovTech Malaysia',
        ministry: 'Kementerian Digital (Ministry of Digital)',
        role: 'Requirements Engineer / Business Analyst Intern',
        period: 'March 2026 – September 2026',
        location: 'Putrajaya / Kuala Lumpur, Malaysia',
        type: 'Public Sector Digital Transformation',
        summary: 'Engaged across 5 nationwide digital government systems, delivering robust software engineering artifacts that directly guide engineering teams and civil service stakeholders.',
        projects: [
          {
            name: 'Portal Sekolahku (KPM)',
            tag: 'Ministry of Education',
            description: 'Prepared comprehensive Software Requirements Specifications (SRS), System Design Specifications (SDS), and bilingual User Manuals for the national school portal platform.',
            deliverables: ['Full SRS & SDS documentation', 'Step-by-step User Onboarding Manuals', 'Functional role permission matrices']
          },
          {
            name: 'Hansard Parlimen',
            tag: 'Malaysian Parliament',
            description: 'Authored technical documentation (SRS, SDS, User Manuals) for the official verbatim recording and retrieval system of the Malaysian Parliament.',
            deliverables: ['Legislative transcript workflow modeling', 'SRS & SDS system specifications', 'Parliamentary staff operation manuals']
          },
          {
            name: 'GovSuiteDMS (Malaysian Cabinet)',
            tag: 'Cabinet Document Management',
            description: 'Led requirement-gathering sessions with high-ranking public sector stakeholders and formulated SRS/SDS for the secure Document Management System utilized by the Cabinet.',
            deliverables: ['Stakeholder interview & discovery sessions', 'Cabinet-grade confidentiality & access SRS', 'System Architecture & Schema SDS']
          },
          {
            name: 'GovSuiteCMS',
            tag: 'Centralised Multi-Tenant CMS',
            description: 'Gathered requirements and drafted the Business Requirements Specifications (BRS) for a scalable, multi-tenant Content Management System powering public sector agency websites.',
            deliverables: ['Multi-agency requirement elicitation', 'Centralised multi-tenant BRS', 'Workflow approval and publishing matrix']
          },
          {
            name: 'RDMKD (Ministry of Digital)',
            tag: 'Kementerian Digital Repository',
            description: 'Formulated core specification documents and user documentation for internal digital repository and workflow tracking systems within the Ministry of Digital.',
            deliverables: ['SRS & SDS authoring', 'Internal user guides & troubleshooting walkthroughs']
          }
        ],
        skillsAcquired: [
          'Stakeholder Elicitation & Negotiation',
          'BRS, SRS, SDS Technical Writing',
          'Process Modeling & Flowcharts',
          'Public Sector Security Compliance',
          'User Acceptance Testing (UAT) Alignment'
        ]
      }
    ]
  },
  projects: {
    sectionTag: 'Engineering & Prototyping Portfolio',
    title: 'Featured Projects',
    subtitle: 'Hands-on full-stack development, interactive 3D visualizations, and human-centered UI/UX prototypes.',
    viewDetails: 'View System Details',
    viewDetailsAria: 'View system details for',
    githubButton: 'GitHub Repository',
    prototypeButton: 'Live Prototype / Demo',
    placeholderNotice: 'Demo repository links and UI previews are placeholders ready for final asset swap.',
    modalClose: 'Close Dialog',
    modalOverview: 'System Overview',
    modalProblem: 'Problem Statement & Context',
    modalSolution: 'Solution & Technical Architecture',
    modalFeatures: 'Key Capabilities & Functionality',
    modalTech: 'Tech Stack & Tools',
    modalDeliverables: 'Key Artifacts & Deliverables',
    filterAll: 'All Projects',
    items: [
      {
        id: 'maqam',
        title: 'MAQAM',
        subtitle: 'Digital Cemetery Management & GPS Plot Locator System',
        category: 'Full-Stack Web App',
        summary: 'A web-based cemetery management platform developed for Masjid Al-Hidayah to digitize grave records, enable GPS-based plot navigation, and provide a secure administrative portal.',
        detailedOverview: 'MAQAM modernizes legacy paper-based cemetery record-keeping for community mosques. It offers an intuitive public interface where family members can search for deceased relatives and pinpoint their exact grave location on an interactive map, backed by a role-restricted administrative dashboard for mosque committees to manage plots, burials, and maintenance logs.',
        problemStatement: 'Mosque administrators relied on physical logbooks that deteriorated over time, making it difficult for families to locate ancestral graves and complicating plot allocation during new burial requests.',
        solutionAndArchitecture: 'Architected using Laravel MVC with a normalized MySQL database schema. Integrated Google Maps JavaScript API to visualize cemetery boundaries, plot grids, and pinpoint GPS coordinates. Implemented authentication middleware to ensure that only authorized mosque committee members can register or modify plot records.',
        keyFeatures: [
          'Interactive GPS-based cemetery map with search & pinpoint routing',
          'Digitized burial archive searchable by name, IC number, or burial date',
          'Role-based administrative portal for plot allocation and status tracking',
          'Responsive UI optimized for mobile devices when visitors are on-site'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'Google Maps API', 'Tailwind CSS', 'JavaScript'],
        role: 'Lead Full-Stack Developer & Database Architect',
        githubUrl: 'https://github.com/placeholder/maqam-cemetery-system',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/maqam',
        deliverables: ['Database ERD & Schema Design', 'Google Maps API Integration Module', 'Admin CRUD & Auth Portal', 'User Acceptance Testing Test Cases'],
        imagePlaceholderText: 'MAQAM — Cemetery Management Interface & GPS Search',
        accentColor: '#059669'
      },
      {
        id: 'restaurant-pos',
        title: 'Restaurant POS System',
        subtitle: 'Real-Time Web Point-of-Sale & Kitchen Order Tracking',
        category: 'Full-Stack Web App',
        summary: 'A responsive web-based Point of Sale (POS) system engineered with Laravel and AJAX for live order processing, dynamic menu management, and real-time kitchen status tracking.',
        detailedOverview: 'Built to streamline dining operations in high-traffic food establishments. The system handles table management, order queuing, bill generation, and kitchen dispatch without requiring page refreshes, ensuring rapid turnaround between cashier stations and food prep lines.',
        problemStatement: 'Paper-based ticket handling and sluggish cashier interfaces lead to kitchen order bottlenecks, lost ticket items, and inaccurate end-of-day sales reconciliation.',
        solutionAndArchitecture: 'Developed following Laravel\'s MVC architecture. Designed an asynchronous ordering pipeline using AJAX and JavaScript DOM updates. Structured transactional database queries in MySQL with foreign-key constraints to guarantee financial consistency and audit-trail integrity for daily revenue reporting.',
        keyFeatures: [
          'Dynamic CRUD menu management with category filtering and pricing tiers',
          'Live AJAX-driven ordering interface with instant total and tax calculation',
          'Real-time kitchen order dispatch screen with pending/ready status states',
          'Automated receipt generation and daily transaction breakdown reports'
        ],
        techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript (AJAX)', 'CSS3', 'Blade Templating'],
        role: 'Full-Stack Developer & System Designer',
        githubUrl: 'https://github.com/placeholder/restaurant-pos-laravel',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/pos-system',
        deliverables: ['MVC Controller & Route Architecture', 'AJAX Live Order Dispatch Engine', 'MySQL Database Schema & Stored Procedures', 'Kitchen Ticket Interface'],
        imagePlaceholderText: 'Restaurant POS — Cashier & Kitchen Live Dashboard',
        accentColor: '#0284C7'
      },
      {
        id: 'networth-3d',
        title: 'Profile & Net Worth 3D Animation',
        subtitle: 'Interactive Three.js Data Visualization & Google Auth Dashboard',
        category: '3D & Web Graphics',
        summary: 'An interactive 3D data visualization dashboard rendering live financial and demographic CSV data from Google Sheets into dynamic Table, Sphere, Helix, and Grid layouts with Google Identity Services sign-in.',
        detailedOverview: 'A visual computing project demonstrating real-time 3D web graphics. It connects directly to live Google Sheets data via CSV endpoints and generates dynamic 3D particle and card structures using Three.js / CSS3DRenderer, accompanied by secure Google OAuth 2.0 authentication.',
        problemStatement: 'Traditional 2D spreadsheets fail to provide engaging spatial visual representations for multi-attribute wealth, demographic, and portfolio data sets.',
        solutionAndArchitecture: 'Leveraged Three.js with custom mathematical transform algorithms to calculate 3D spatial coordinates for Table (periodic style), Sphere (geodesic distribution), Helix (spiral strand), and Grid (matrix volumetric layout). Integrated Google Identity Services API for client-side token validation and secure profile data ingestion.',
        keyFeatures: [
          'Interactive camera controls with smooth OrbitControls inertia and zooming',
          '4 Dynamic 3D transform layouts: Periodic Table, 3D Sphere, Double Helix, and Multi-Level Grid',
          'Live data synchronization pulling fresh CSV entries from Google Sheets',
          'Google Identity Services OAuth integration for secure user profile authentication'
        ],
        techStack: ['Three.js', 'JavaScript (ES6+)', 'HTML5 Canvas', 'Tailwind CSS', 'Google Identity Services', 'Google Sheets API'],
        role: 'Frontend & 3D Graphics Developer',
        githubUrl: 'https://github.com/placeholder/profile-networth-3d-threejs',
        liveDemoUrl: 'https://demo-placeholder.govtech.my/3d-networth',
        deliverables: ['Three.js Scene & Camera Engine', 'Mathematical 3D Coordinate Mapping Algorithms', 'Google OAuth 2.0 Client Integration', 'Live Google Sheets CSV Parser'],
        imagePlaceholderText: 'Three.js 3D Visualizer — Sphere & Helix Particle Layouts',
        accentColor: '#6366F1'
      },
      {
        id: 'iium-bus-tracker',
        title: 'IIUM Campus Bus Tracker',
        subtitle: 'Real-Time Campus Mobility & Shuttle Scheduling UI/UX Prototype',
        category: 'UI/UX & Prototyping',
        summary: 'A user-centered mobile UI/UX prototype created in Figma to address campus shuttle unpredictability for thousands of IIUM Gombak students and staff.',
        detailedOverview: 'An empirical design project focused on solving student commuting bottlenecks. The prototype features live bus GPS tracking, route congestion maps, estimated time of arrival (ETA) countdowns, and schedule notifications based on student interview findings.',
        problemStatement: 'Students frequently experienced missed lectures due to irregular bus schedules and lack of real-time visibility into bus occupancy and route arrival times across the hilly IIUM Gombak terrain.',
        solutionAndArchitecture: 'Conducted user journey mapping and student surveys to formulate core user personas. Built high-fidelity Figma interactive prototypes with micro-interactions, responsive mobile frames, high-contrast dark/light modes, and accessible typography compliant with WCAG 2.1 guidelines.',
        keyFeatures: [
          'Real-time bus location map with ETA countdown per Mahallah (hostel) stop',
          'Route status indicators showing heavy traffic or delayed shuttle loops',
          'Bus occupancy meter (Empty, Moderate, Full) to assist planning',
          'Custom reminder notifications for upcoming departures before peak class hours'
        ],
        techStack: ['Figma', 'UI/UX Design Systems', 'User Research', 'Design Thinking', 'Wireframing'],
        role: 'Lead UI/UX Researcher & Product Designer',
        githubUrl: 'https://github.com/placeholder/iium-bus-tracker-design',
        liveDemoUrl: 'https://www.figma.com/proto/placeholder-iium-bus-tracker',
        deliverables: ['User Personas & Empathy Maps', 'Wireframes & Information Architecture', 'High-Fidelity Interactive Figma Prototype', 'Design System & Component Library'],
        imagePlaceholderText: 'IIUM Bus Tracker — Figma High-Fidelity Mobile App Screens',
        accentColor: '#EC4899'
      }
    ]
  },
  achievements: {
    sectionTag: 'Leadership & Recognition',
    title: 'Honors & Achievements',
    subtitle: 'Demonstrating academic excellence, interdisciplinary innovation, and competitive sports leadership.',
    academicTab: 'Academic Standing',
    innovationTab: 'Symposium & Innovation',
    sportsTab: 'Sports Leadership & Archery',
    items: [
      {
        id: 'deans-list',
        title: "Dean's List Recipient (5 Semesters)",
        category: 'academic',
        organization: 'Kulliyyah of Information and Communication Technology (KICT), IIUM',
        period: '2022 – Present',
        description: 'Maintained consistent top-tier academic performance throughout the Bachelor of Information Technology degree program, achieving a cumulative CGPA of 3.54.',
        highlightBadge: '5-Time Dean\'s List Honoree',
        bullets: [
          'Recognized for exceptional academic excellence across multiple semesters.',
          'Consistently scored distinction grades in core software engineering, data management, and cybersecurity courses.',
          'Active peer study group lead for Information Assurance & Security subjects.'
        ]
      },
      {
        id: 'uia-symposium',
        title: 'Gold Award & Most Integrated Project',
        category: 'innovation',
        organization: '7th University In Action (UIA) Symposium',
        period: 'Symposium Edition VII',
        description: 'Awarded the prestigious Gold Award and the Most Integrated Project title for the flagship project "Aquaponic Meets Sustainable Urban Living".',
        highlightBadge: 'Gold Award & Most Integrated Project',
        bullets: [
          'Designed and presented an interdisciplinary sustainable urban agriculture model integrating IoT monitoring with aquaponics.',
          'Recognized by academic judges for exceptional integration of technological sensing, environmental sustainability, and economic viability.',
          'Authored the technical proposal and led cross-functional team coordination.'
        ]
      },
      {
        id: 'archery-captain',
        title: 'Captain — IIUM Mustang Archery',
        category: 'sports',
        organization: 'IIUM Sports Development Centre / IIUM Mustang Archery Team',
        period: '2024 – 2025',
        description: 'Led the university varsity archery squad in high-stakes national and international competitive tournaments while steering training regimens and athlete development.',
        highlightBadge: 'Varsity Team Captain & Podium Finisher',
        bullets: [
          '2nd Runner-Up (International Category) — SAAC Archery Championship 2025.',
          '2nd Runner-Up (National Category) — UNITEN SULI Open Archery Tournament.',
          'Multiple podium finishes and qualifying placements in National-Level Varsity Archery Championships (MASUM / SUKIPT circuits).',
          'Managed athlete discipline, equipment maintenance logistics, and tournament strategy.'
        ]
      }
    ]
  },
  contact: {
    sectionTag: 'Connect & Inquire',
    title: 'Get In Touch',
    subtitle: 'Looking for a dedicated Requirements Engineer, Business Analyst, or Full-Stack Developer? Let\'s discuss how I can contribute to your team.',
    directReachout: 'Direct Channels',
    emailLabel: 'Email Address',
    linkedinLabel: 'LinkedIn Profile',
    formTitle: 'Send a Message',
    namePlaceholder: 'Your Full Name / Organization',
    emailPlaceholder: 'your.email@example.com',
    subjectPlaceholder: 'Job Opportunity / Project Collaboration / Inquiry',
    messagePlaceholder: 'Write your message or inquiry here...',
    sendButton: 'Send Message via Email',
    successMessage: 'Opening your default mail client with your message drafted!',
    openInEmailClient: 'Or click to compose directly in your favorite email client:'
  },
  footer: {
    rights: 'All rights reserved.',
    designedWith: 'Crafted with Next.js 14, React & Tailwind CSS. Hosted on Vercel.',
    backToTop: 'Back to Top',
    placeholdersNote: 'Portfolio prototype built for Muhammad Johan Irfan. Note: Project preview links and screenshots contain demo placeholders that can be updated with final production assets.'
  }
};
