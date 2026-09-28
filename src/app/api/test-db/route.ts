import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const rawUrl = process.env.DATABASE_URL || '';
  const prefix = rawUrl.substring(0, 25);
  const charCodes = Array.from(rawUrl.substring(0, 5)).map((c) => ({
    char: c,
    code: c.charCodeAt(0),
  }));

  const envCheck = {
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    hasDirectUrl: Boolean(process.env.DIRECT_URL),
    hasDatabaseUri: Boolean(process.env.DATABASE_URI),
    hasPayloadSecret: Boolean(process.env.PAYLOAD_SECRET),
    urlPrefixPreview: prefix.replace(/:[^@]+@/, ':***@'), // safely mask any password if present early
    firstCharacters: charCodes,
    nodeEnv: process.env.NODE_ENV,
  };

  try {
    const projectCount = await prisma.project.count();
    return NextResponse.json({
      status: 'ok',
      database: 'connected',
      projectCount,
      environment: envCheck,
    });
  } catch (error: unknown) {
    const err = error as Error;
    return NextResponse.json(
      {
        status: 'database_error',
        message: err.message || 'Unknown database error',
        environment: envCheck,
      },
      { status: 500 }
    );
  }
}
