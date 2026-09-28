import type { Metadata } from 'next';
import { Space_Grotesk, Inter } from 'next/font/google';
import '../globals.css';
import { Analytics } from '@vercel/analytics/next';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Muhammad Johan Irfan | Requirements Engineer & Full-Stack Developer',
  description:
    'Portfolio of Muhammad Johan Irfan bin Khairudin — Requirements Engineer / Business Analyst Intern at GovTech Malaysia (Kementerian Digital) and Information Technology graduate at IIUM Gombak specialising in Information Assurance & Security (CGPA 3.57). Available immediately for full-time employment.',
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
    'Full Stack Developer Malaysia',
    'Available Immediately',
  ],
  authors: [{ name: 'Muhammad Johan Irfan bin Khairudin' }],
  creator: 'Muhammad Johan Irfan',
  openGraph: {
    title: 'Muhammad Johan Irfan | Requirements Engineer & Full-Stack Developer',
    description:
      'Requirements Engineer / BA Intern at GovTech Malaysia (Kementerian Digital) & BIT Graduate (Information Assurance & Security, CGPA 3.57) at IIUM.',
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
    <html lang="en" className={`scroll-smooth ${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio_theme');
                  var isDark = saved === 'dark' || ((!saved || saved === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches);
                  var activeTheme = isDark ? 'dark' : 'light';
                  document.documentElement.classList.remove('light', 'dark');
                  document.documentElement.classList.add(activeTheme);
                  document.documentElement.style.colorScheme = activeTheme;
                  document.documentElement.setAttribute('data-theme-mode', saved || 'system');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased selection:bg-blue-500/20 selection:text-blue-900 dark:selection:text-blue-100 min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <Analytics />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
