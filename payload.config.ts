import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import { fileURLToPath } from 'url';

import sharp from 'sharp';

import { Users } from './src/collections/Users';
import { Projects } from './src/collections/Projects';
import { Experiences } from './src/collections/Experiences';
import { Media } from './src/collections/Media';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

function cleanEnv(val?: string) {
  if (!val) return '';
  return val.trim().replace(/^["']|["']$/g, '');
}

const dbConnectionString =
  cleanEnv(process.env.DATABASE_URI) ||
  cleanEnv(process.env.DIRECT_URL) ||
  cleanEnv(process.env.DATABASE_URL);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Projects, Experiences, Media],
  editor: lexicalEditor(),
  sharp,
  secret: cleanEnv(process.env.PAYLOAD_SECRET) || 'dev-payload-secret-key-at-least-32-chars-long-12345',
  typescript: {
    outputFile: path.resolve(dirname, 'src/types/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: dbConnectionString,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
    },
    schemaName: 'payload',
    push: process.env.NODE_ENV !== 'production',
  }),
});
