import { PrismaClient } from '@prisma/client';

function sanitizeUrl(raw?: string): string {
  if (!raw) return '';
  let url = raw.trim();
  // Strip surrounding quotes
  url = url.replace(/^["'`]|["'`]$/g, '').trim();
  // Strip variable name if accidentally pasted into the value field
  if (url.startsWith('DATABASE_URL=') || url.startsWith('DIRECT_URL=') || url.startsWith('DATABASE_URI=')) {
    url = url.substring(url.indexOf('=') + 1).trim();
  }
  // Strip quotes again if it was KEY="value"
  url = url.replace(/^["'`]|["'`]$/g, '').trim();
  return url;
}

const cleanedUrl = sanitizeUrl(process.env.DATABASE_URL || process.env.DIRECT_URL || process.env.DATABASE_URI);

// Ensure process.env is also patched for any internal Prisma calls
if (cleanedUrl) {
  process.env.DATABASE_URL = cleanedUrl;
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: cleanedUrl || undefined,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
