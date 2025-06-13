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
  metadataBase: new URL('https://newbigwar.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NBW - New Big War | Community Sentiment Tracker',
    description: 'Join the ultimate community sentiment tracker! Express your support for Israel or Iran tokens on Solana blockchain. Real-time statistics, beautiful UI, and epic visual effects.',
    url: 'https://newbigwar.xyz',
    siteName: 'NBW - New Big War',
    images: [
      {
        url: '/logo/nbw-logo.png',
        width: 120,
        height: 120,
        alt: 'NBW Logo - New Big War',
        type: 'image/png',
      },
      {
        url: '/logo/nbw-logo.png',
        width: 600,
        height: 600,
        alt: 'NBW - New Big War Community Sentiment Tracker',
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NBW - New Big War | Community Sentiment Tracker',
    description: 'Join the ultimate community sentiment tracker! Express your support for Israel or Iran tokens on Solana blockchain. Real-time statistics and epic visual effects.',
    images: ['/logo/nbw-logo.png'],
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
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="NBW - New Big War | Community Sentiment Tracker" />
        <meta property="og:description" content="Join the ultimate community sentiment tracker! Express your support for Israel or Iran tokens on Solana blockchain." />
        <meta property="og:url" content="https://newbigwar.xyz" />
        <meta property="og:site_name" content="NBW - New Big War" />
        <meta property="og:image" content="https://newbigwar.xyz/logo/nbw-logo.png" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="NBW Logo - New Big War" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NBW - New Big War | Community Sentiment Tracker" />
        <meta name="twitter:description" content="Join the ultimate community sentiment tracker! Express your support for Israel or Iran tokens on Solana blockchain." />
        <meta name="twitter:image" content="https://newbigwar.xyz/logo/nbw-logo.png" />
        <meta name="twitter:creator" content="@nbw_team" />
        <meta name="twitter:site" content="@nbw_war" />
        
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