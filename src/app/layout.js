import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://crypcoin.org'),
  title: {
    default: 'CRYPCOIN | Real-Time Market Data & Crypto Analytics',
    template: '%s | CRYPCOIN',
  },
  description: 'Experience professional-grade cryptocurrency tracking and analysis with CRYPCOIN. Real-time data streams from Binance, advanced TradingView charts, and comprehensive market insights for every trader.',
  keywords: [
    'crypcoin',
    'cryp coin',
    'crypcoin.org',
    'crypto coin',
    'crypto',
    'crypto analytics',
    'real-time crypto data',
    'crypto tracking',
    'binance tracker',
    'tradingview charts',
    'bitcoin price',
    'ethereum analysis',
    'crypto market insights',
    'blockchain data',
    'cryptocurrency trading',
    'live crypto prices',
    'crypto portfolio tracker'
  ],
  authors: [{ name: 'CRYPCOIN Team' }],
  creator: 'CRYPCOIN',
  publisher: 'CRYPCOIN',
  alternates: {
    canonical: 'https://crypcoin.org',
  },
  applicationName: 'CRYPCOIN',
  openGraph: {
    title: 'CRYPCOIN | Professional Real-Time Market Data',
    description: 'Track and analyze cryptocurrency markets with professional-grade tools and real-time Binance data streams.',
    url: 'https://crypcoin.org',
    siteName: 'CRYPCOIN',
    images: [
      {
        url: 'https://crypcoin.org/brand/crypcoin_logo_2100x2100.png',
        width: 2100,
        height: 2100,
        alt: 'CRYPCOIN Logo - Professional Crypto Analytics',
      },
      {
        url: 'https://crypcoin.org/brand/crypcoin_logo_1920x1080.png',
        width: 1920,
        height: 1080,
        alt: 'CRYPCOIN Logo - Real-Time Market Data',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRYPCOIN | Real-Time Market Data & Crypto Analytics',
    description: 'Professional-grade cryptocurrency tracking and analysis. Real-time data streams from Binance and advanced market insights.',
    images: [
      {
        url: 'https://crypcoin.org/brand/crypcoin_logo_2100x2100.png',
        width: 2100,
        height: 2100,
        alt: 'CRYPCOIN Logo - Professional Crypto Analytics',
      },
      {
        url: 'https://crypcoin.org/brand/crypcoin_logo_1920x1080.png',
        width: 1920,
        height: 1080,
        alt: 'CRYPCOIN Logo - Real-Time Market Data',
      }
    ],
    creator: '@crypcoin',
    site: '@crypcoin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-gray-50`}
      >
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
