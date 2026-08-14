export type Language = 'en' | 'ms';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  detailedOverview: string;
  problemStatement: string;
  solutionAndArchitecture: string;
  keyFeatures: string[];
  techStack: string[];
  role: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  deliverables?: string[];
  imagePlaceholderText: string;
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  ministry: string;
  role: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  projects: {
    name: string;
    description: string;
    deliverables: string[];
    tag: string;
  }[];
  skillsAcquired: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
    highlight?: boolean;
  }[];
}

export interface AchievementItem {
  id: string;
  title: string;
  category: 'academic' | 'innovation' | 'sports';
  organization: string;
  period: string;
  description: string;
  highlightBadge: string;
  bullets?: string[];
}

export interface TranslationDictionary {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    achievements: string;
    contact: string;
    resumeButton: string;
  };
  hero: {
    greeting: string;
    name: string;
    headline: string;
    hook: string;
    badgeGovTech: string;
    badgeEducation: string;
    badgeCgpa: string;
    ctaExperience: string;
    ctaProjects: string;
    ctaContact: string;
    copiedEmail: string;
    copyEmail: string;
    downloadResume: string;
  };
  about: {
    sectionTag: string;
    title: string;
    subtitle: string;
    educationTitle: string;
    degree: string;
    institution: string;
    expectedGrad: string;
    cgpaLabel: string;
    currentInternshipTitle: string;
    currentInternshipText: string;
    interestsTitle: string;
    interests: string[];
    languagesTitle: string;
    languageItems: { name: string; level: string; note: string }[];
    coreValues: { title: string; desc: string }[];
  };
  skills: {
    sectionTag: string;
    title: string;
    subtitle: string;
    categories: {
      languages: SkillCategory;
      frameworks: SkillCategory;
      dataTools: SkillCategory;
      documentation: SkillCategory;
      multimedia: SkillCategory;
    };
  };
  experience: {
    sectionTag: string;
    title: string;
    subtitle: string;
    roleBadge: string;
    tenure: string;
    overview: string;
    deliverablesTitle: string;
    methodologiesTitle: string;
    items: ExperienceItem[];
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    viewDetailsAria: string;
    githubButton: string;
    prototypeButton: string;
    placeholderNotice: string;
    modalClose: string;
    modalOverview: string;
    modalProblem: string;
    modalSolution: string;
    modalFeatures: string;
    modalTech: string;
    modalDeliverables: string;
    filterAll: string;
    items: ProjectItem[];
  };
  achievements: {
    sectionTag: string;
    title: string;
    subtitle: string;
    academicTab: string;
    innovationTab: string;
    sportsTab: string;
    items: AchievementItem[];
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    directReachout: string;
    emailLabel: string;
    linkedinLabel: string;
    formTitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    subjectPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    successMessage: string;
    openInEmailClient: string;
  };
  footer: {
    rights: string;
    designedWith: string;
    backToTop: string;
    placeholdersNote: string;
  };
}
