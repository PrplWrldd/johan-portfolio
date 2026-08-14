import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '../context/LanguageContext';

export const metadata: Metadata = {
  title: 'Muhammad Johan Irfan | Requirements Engineer & Full-Stack Developer',
  description:
    'Portfolio of Muhammad Johan Irfan bin Khairudin — Requirements Engineer / Business Analyst Intern at GovTech Malaysia (Kementerian Digital) and Final-Year IT Student at IIUM Gombak specialising in Information Assurance & Security.',
  keywords: [
    'Muhammad Johan Irfan',
    'Johan Irfan',
    'GovTech Malaysia',
    'Kementerian Digital',
    'Requirements Engineer',
    'Business Analyst',
    'BRS SRS SDS',
    'IIUM Gombak',
    'Information Assurance and Security',
    'Laravel Developer',
    'Full Stack Developer Malaysia'
  ],
  authors: [{ name: 'Muhammad Johan Irfan bin Khairudin' }],
  creator: 'Muhammad Johan Irfan',
  openGraph: {
    title: 'Muhammad Johan Irfan | Requirements Engineer & Full-Stack Developer',
    description:
      'Requirements Engineer / BA Intern at GovTech Malaysia (Kementerian Digital) & BIT Student (Information Assurance) at IIUM.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ms_MY',
    siteName: 'Muhammad Johan Irfan Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-sky-500/30 selection:text-sky-200">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
