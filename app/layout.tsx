import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/header';

// Optimize font loading configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ],
  adjustFontFallback: true
});

export const metadata: Metadata = {
  title: 'RealX - Fractional Real Estate Investment Platform',
  description: 'Invest in premium real estate properties with fractional ownership. Access institutional-grade real estate investments with as little as $100.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}