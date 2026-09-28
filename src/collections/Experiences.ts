import type { CollectionConfig } from 'payload';

export const Experiences: CollectionConfig = {
  slug: 'experiences',
  admin: {
    useAsTitle: 'organization',
    defaultColumns: ['organization', 'role', 'period', 'displayOrder'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'organization',
      type: 'text',
      required: true,
    },
    {
      name: 'ministry',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'period',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'text',
      defaultValue: 'Internship',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'projects',
      type: 'array',
      label: 'Deliverables & Systems',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'tag',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
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
      ],
    },
    {
      name: 'skillsAcquired',
      type: 'array',
      fields: [
        {
          name: 'skill',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 0,
    },
  ],
};
