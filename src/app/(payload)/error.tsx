'use client';

import React from 'react';
import Link from 'next/link';

export default function PayloadError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        padding: '2.5rem',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
        backgroundColor: '#090d16',
        color: '#f8fafc',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          padding: '2rem',
          backgroundColor: '#131b2e',
          borderRadius: '12px',
          border: '1px solid #ef4444',
          textAlign: 'left',
        }}
      >
        <h2 style={{ color: '#ef4444', fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          Payload CMS Initialization Error
        </h2>
        <p style={{ color: '#cbd5e1', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
          An error occurred while loading Payload CMS on the server:
        </p>
        <pre
          style={{
            backgroundColor: '#050811',
            padding: '1rem',
            borderRadius: '8px',
            color: '#fca5a5',
            fontSize: '0.8rem',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {error.message || 'Unknown Server Component Error'}
        </pre>
        {error.digest && (
          <p style={{ marginTop: '0.75rem', color: '#64748b', fontSize: '0.75rem' }}>
            Next.js Error Digest: <code>{error.digest}</code>
          </p>
        )}
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => reset()}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              borderRadius: '6px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
          <Link
            href="/"
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#1e293b',
              color: '#cbd5e1',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '0.875rem',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
