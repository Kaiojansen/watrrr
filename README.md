# NBW - New Big War 🚀⚔️

## Overview

NBW (New Big War) is a revolutionary platform that transforms real token trading into an epic and visually stunning war. Two real tokens on Solana blockchain - **Israel** and **Iran** - compete for supremacy through actual liquidity and trading volume.

## 🎯 Real Token Integration

### ✨ Live Trading Features
- **Real Solana tokens** with actual market data
- **Jupiter Protocol integration** for best swap prices
- **Live price feeds** and liquidity tracking
- **Wallet connectivity** (Phantom, Solflare, etc.)
- **Real-time statistics** from blockchain data

### 🪙 Token Addresses
- **Israel Token**: `E4n5gooEoFaDPb1oSDmN2VXjWKekrTn3EFE7KjNKpump`
- **Iran Token**: `FTUFPc23YHBqSuLLNEAwLUCcgexUizpEGhN9FrUupump`

### ⚔️ Battle System
- **Real liquidity war** based on actual trading volume
- **Live market cap** calculations
- **Dynamic percentages** from real data
- **Transaction confirmations** on Solana blockchain

## 🎯 Main Features

### ✨ Impressive Visual Interface
- **Futuristic design** with space war theme
- **Fluid animations** using Framer Motion
- **Real-time particle effects**
- **Dynamic gradients** that change based on liquidity
- **Special typography** (Anton, Roboto Condensed, Exo 2, Orbitron)

### ⚔️ Liquidity War System
- **Dynamic war bar** showing liquidity proportion
- **Real-time updates** of values
- **Visual effects** when one token dominates
- **Detailed statistics** for each side

### 🛒 Interactive Buy Buttons
- **Buttons with impressive hover effects**
- **Real-time prices** for tokens
- **Visual feedback** when making purchases
- **Wallet integration ready**

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Static typing
- **Tailwind CSS** - Modern styling
- **Framer Motion** - Advanced animations
- **@solana/web3.js** - Solana blockchain integration
- **@solana/wallet-adapter** - Wallet connectivity
- **Jupiter Protocol** - Token swaps and pricing
- **@phosphor-icons/react** - Modern sci-fi icons

## 🚀 How to Run

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Solana wallet (Phantom recommended)

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd nbw

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Run in development mode
npm run dev

# Build for production
npm run build

# Run production
npm start
```

### Environment Variables
Create a `.env.local` file with:
```env
NEXT_PUBLIC_SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
NEXT_PUBLIC_SOLANA_NETWORK=mainnet-beta
NEXT_PUBLIC_ISRAEL_TOKEN=E4n5gooEoFaDPb1oSDmN2VXjWKekrTn3EFE7KjNKpump
NEXT_PUBLIC_IRAN_TOKEN=FTUFPc23YHBqSuLLNEAwLUCcgexUizpEGhN9FrUupump
```

### Access
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Project Structure

```
nbw/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Main layout with wallet provider
│   └── page.tsx             # Main page with real data
├── components/
│   ├── ParticleEffect.tsx   # Particle effect
│   ├── WarBar.tsx           # War bar with real data
│   ├── RealTimeBuyButtons.tsx # Real trading buttons
│   ├── WalletProvider.tsx   # Solana wallet provider
│   ├── WalletButton.tsx     # Wallet connection button
│   ├── FlagIsrael.tsx       # Israel flag
│   └── FlagIran.tsx         # Iran flag
├── hooks/
│   └── useRealTimeData.ts   # Real-time data fetching
├── lib/
│   └── solana.ts            # Solana integration utilities
├── public/                  # Static assets
└── package.json            # Dependencies
```

## 🎯 Features

### Real Trading System
- Connect Solana wallet (Phantom, Solflare, etc.)
- Buy real tokens with SOL
- Real-time price updates from Jupiter
- Transaction confirmations on blockchain
- Slippage protection (0.5%)

### Live Data Display
- Real token prices from market
- Actual liquidity tracking
- Live market cap calculations
- Real-time dominance percentages
- Last update timestamps

### Visual Effects
- Sci-fi themed interface
- Floating tank particles
- Dynamic war animations
- Glassmorphism design
- Custom Waruna font

## 🔗 Integrations

### Jupiter Protocol
- **Token swaps** with best prices
- **Price feeds** for real-time data
- **Liquidity routing** optimization
- **Slippage protection**

### Solana Blockchain
- **Mainnet integration** for real trading
- **Wallet adapter** for multiple wallets
- **Transaction handling** with confirmations
- **Real-time data** from RPC nodes

## 🎨 Token Information

### Israel Token (ISRAEL)
- **Symbol**: ISRAEL
- **Decimals**: 6
- **Network**: Solana Mainnet
- **Theme**: Digital defense force

### Iran Token (IRAN)
- **Symbol**: IRAN
- **Decimals**: 6
- **Network**: Solana Mainnet
- **Theme**: Digital revolution

## 🚀 Deployment

The project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- Any platform supporting Next.js

### Environment Setup for Production
Ensure all environment variables are set in your deployment platform.

## 📱 Wallet Support

Supported wallets:
- **Phantom** (recommended)
- **Solflare**
- **Torus**
- **Ledger**

## ⚠️ Important Notes

- This involves **real cryptocurrency trading**
- Always **verify token addresses** before trading
- **Connect only trusted wallets**
- **Start with small amounts** to test
- **Slippage may occur** during high volatility

## 📄 License

This project is open source and available under the MIT license.

---

**NBW - The most epic REAL liquidity war in blockchain! ⚔️🚀** 