import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';

// Auto-sanitize environment variables (strip accidental quotes/whitespace added in Vercel UI)
['DATABASE_URL', 'DIRECT_URL', 'DATABASE_URI', 'PAYLOAD_SECRET'].forEach((key) => {
  const val = process.env[key];
  if (val) {
    process.env[key] = val.trim().replace(/^["']|["']$/g, '');
  }
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPayload(nextConfig);
