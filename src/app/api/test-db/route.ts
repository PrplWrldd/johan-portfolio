import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const envCheck = {
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    hasDirectUrl: Boolean(process.env.DIRECT_URL),
    hasDatabaseUri: Boolean(process.env.DATABASE_URI),
    hasPayloadSecret: Boolean(process.env.PAYLOAD_SECRET),
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
