import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ReduxProvider } from '@/components/ReduxProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarWrapper from '@/components/navbar/NavbarWrapper';

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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-gray-100`}>
        <div className="h-screen flex">
          {/* Sidebar/Navbar */}
          <NavbarWrapper />

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            <ReduxProvider>{children}</ReduxProvider>
          </main>
        </div>

        {/* Toastify Container */}
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
      </body>
    </html>
  );
}
