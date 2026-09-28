import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

import sharp from 'sharp';

import { Users } from './src/collections/Users';
import { Projects } from './src/collections/Projects';
import { Experiences } from './src/collections/Experiences';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

function sanitizeUrl(raw?: string): string {
  if (!raw) return '';
  let url = raw.trim();
  url = url.replace(/^["'`]|["'`]$/g, '').trim();
  if (url.startsWith('DATABASE_URI=') || url.startsWith('DATABASE_URL=') || url.startsWith('DIRECT_URL=')) {
    url = url.substring(url.indexOf('=') + 1).trim();
  }
  url = url.replace(/^["'`]|["'`]$/g, '').trim();
  return url;
}

const dbConnectionString =
  sanitizeUrl(process.env.DATABASE_URI) ||
  sanitizeUrl(process.env.DIRECT_URL) ||
  sanitizeUrl(process.env.DATABASE_URL);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Projects, Experiences],
  editor: lexicalEditor(),
  sharp,
  secret: sanitizeUrl(process.env.PAYLOAD_SECRET) || 'dev-payload-secret-key-at-least-32-chars-long-12345',
  typescript: {
    outputFile: path.resolve(dirname, 'src/types/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: dbConnectionString,
      max: 3,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 10000,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
    },
    schemaName: 'payload',
    push: false,
  }),
});
