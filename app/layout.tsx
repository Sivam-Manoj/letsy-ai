import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ReduxProvider } from '@/components/ReduxProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Letsy Ai - Etsy Listing Creator',
  description:
    'Letsy AI helps Etsy sellers create optimized, AI-generated product listings with titles, descriptions, and pricing insights to increase sales and optimize stores.',
  keywords:
    'AI, Etsy, Listing Creation, SEO, Product Descriptions, AI for Etsy, Etsy Optimization, AI Tool',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add SVG favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
