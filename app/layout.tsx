import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NBW - New Big War | Israel vs Iran Token War',
  description: 'The most epic liquidity war in blockchain! Choose your side in the ultimate battle between Israel and Iran tokens on Solana.',
  keywords: 'solana, token, war, israel, iran, defi, trading, liquidity, blockchain',
  authors: [{ name: 'NBW Team' }],
  openGraph: {
    title: 'NBW - New Big War',
    description: 'Epic token war between Israel and Iran on Solana blockchain',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen battlefield-bg`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 