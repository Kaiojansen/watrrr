import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NBW - New Big War | Community Sentiment Tracker',
  description: 'A revolutionary sentiment measurement platform tracking community support between Israel and Iran tokens on Solana blockchain. Join the digital battlefield and express your support!',
  keywords: 'solana, token, sentiment, israel, iran, defi, community, blockchain, crypto, war, support, measurement, pump.fun',
  authors: [{ name: 'NBW Team', url: 'https://github.com/Kaiojansen/watrrr' }],
  creator: 'NBW Team',
  publisher: 'NBW - New Big War',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nbw-war.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NBW - New Big War | Community Sentiment Tracker',
    description: 'Join the ultimate community sentiment tracker! Express your support for Israel or Iran tokens on Solana blockchain. Real-time statistics, beautiful UI, and epic visual effects.',
    url: 'https://nbw-war.vercel.app',
    siteName: 'NBW - New Big War',
    images: [
      {
        url: 'https://nbw-war.vercel.app/logo/nbw-logo.png',
        width: 120,
        height: 120,
        alt: 'NBW Logo - New Big War',
      },
      {
        url: 'https://nbw-war.vercel.app/logo/nbw-logo.png',
        width: 600,
        height: 600,
        alt: 'NBW - New Big War Community Sentiment Tracker',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBW - New Big War | Community Sentiment Tracker',
    description: 'Join the ultimate community sentiment tracker! Express your support for Israel or Iran tokens on Solana blockchain. Real-time statistics and epic visual effects.',
    images: ['https://nbw-war.vercel.app/logo/nbw-logo.png'],
    creator: '@nbw_team',
    site: '@nbw_war',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Community Sentiment Tracker',
  other: {
    'theme-color': '#000000',
    'color-scheme': 'dark',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'NBW - New Big War',
    'application-name': 'NBW - New Big War',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/logo/nbw-logo.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/logo/nbw-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/nbw-logo.png" />
        <link rel="shortcut icon" href="/logo/nbw-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="NBW - New Big War" />
        <meta name="application-name" content="NBW - New Big War" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} min-h-screen battlefield-bg`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 