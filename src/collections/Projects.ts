import type { CollectionConfig } from 'payload';

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'featured', 'displayOrder', 'updatedAt'],
  },
  access: {
    read: () => true, // Publicly readable for the portfolio frontend
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-friendly identifier (e.g. govtech-brs-engine)',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'GovTech', value: 'GovTech' },
        { label: 'Full Stack', value: 'Full Stack' },
        { label: 'Cybersecurity', value: 'Cybersecurity' },
        { label: 'Mobile App', value: 'Mobile' },
        { label: 'AI & Data', value: 'AI & Data' },
      ],
      defaultValue: 'GovTech',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      defaultValue: 'Requirements Engineer & Full-Stack Developer',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'detailedOverview',
      type: 'textarea',
      required: true,
    },
    {
      name: 'problemStatement',
      type: 'textarea',
      required: true,
    },
    {
      name: 'solutionAndArchitecture',
      type: 'textarea',
      required: true,
    },
    {
      name: 'keyFeatures',
      type: 'array',
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'techStack',
      type: 'array',
      fields: [
        {
          name: 'tech',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'deliverables',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'githubUrl',
      type: 'text',
    },
    {
      name: 'liveDemoUrl',
      type: 'text',
    },
    {
      name: 'accentColor',
      type: 'select',
      options: [
        { label: 'Purple (Default)', value: 'purple' },
        { label: 'Emerald (GovTech)', value: 'emerald' },
        { label: 'Blue', value: 'blue' },
        { label: 'Amber', value: 'amber' },
      ],
      defaultValue: 'purple',
    },
    {
      name: 'imagePlaceholderText',
      type: 'text',
      defaultValue: 'Project Preview',
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Lower number appears first on the portfolio',
      },
    },
  ],
};
