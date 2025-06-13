'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import ParticleEffect from '../components/ParticleEffect'
import WarBar from '../components/WarBar'
import SimpleBuyButtons from '../components/SimpleBuyButtons'
import FlagIsrael from '../components/FlagIsrael'
import FlagIran from '../components/FlagIran'
import Image from 'next/image'
import { Trophy, Shield, Flame, ShieldChevron, Rocket } from '@phosphor-icons/react'
import { useRealTimeData } from '../hooks/useRealTimeData'

export default function Home() {
  const { israel, iran, loading, error, lastUpdate, refetch } = useRealTimeData()
  const [showConfetti, setShowConfetti] = useState(false)
  const confettiRef = useRef<HTMLCanvasElement>(null)

  // Calculate percentages for display
  const total = israel.liquidity + iran.liquidity
  const israelPercent = total > 0 ? (israel.liquidity / total) * 100 : 50
  const iranPercent = total > 0 ? (iran.liquidity / total) * 100 : 50

  const triggerConfetti = () => {
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      <div className="grid-bg" />
      {/* Particle effect */}
      <ParticleEffect />
      {showConfetti && <canvas ref={confettiRef} className="confetti" />}
      
      {/* Real-time Status Bar */}
      <div className="w-full flex justify-center pt-6 z-20 relative">
        <div className="bg-glass rounded-2xl px-8 py-3 flex items-center gap-8 border border-cyan-400/15 shadow-lg">
          <div className="flex items-center gap-2">
            <FlagIsrael />
            <span className="font-tech text-lg text-blue-300">{israelPercent.toFixed(1)}%</span>
          </div>
          <span className="font-space text-2xl text-gray-300 tracking-widest">|</span>
          <div className="flex items-center gap-2">
            <FlagIran />
            <span className="font-tech text-lg text-green-300">{iranPercent.toFixed(1)}%</span>
          </div>
          <span className="font-space text-lg text-yellow-300 ml-4">
            Combined Market Cap: ${(israel.marketCap + iran.marketCap).toLocaleString()}
          </span>
          {loading && (
            <div className="animate-spin w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
          )}
        </div>
      </div>

      {/* Header */}
      <motion.header
        className="text-center py-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative mb-8">
          <Image
            src="/logo/nbw-logo.png"
            alt="NBW Logo"
            width={120}
            height={120}
            className="mx-auto mb-6"
            priority
          />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-gray-200 mb-4 font-frohburg tracking-tight gradient-text">
          NBW
        </h1>
        <h2 className="text-2xl md:text-3xl text-cyan-300 mb-6 font-frohburg tracking-widest">
          NEW BIG WAR
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-future leading-relaxed">
          A revolutionary <span className="gradient-text font-bold">sentiment measurement platform</span> tracking community support between <span className="text-blue-400 font-bold">Israel</span> and{' '}
          <span className="text-green-400 font-bold">Iran</span> tokens on Solana blockchain
        </p>
        
        <div className="flex justify-center items-center space-x-10 mt-6">
          <div className="text-center">
            <FlagIsrael />
            <p className="text-blue-400 font-frohburg mt-2 text-sm">Israel</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-frohburg text-gray-300">VS</span>
          </div>
          <div className="text-center">
            <FlagIran />
            <p className="text-green-400 font-frohburg mt-2 text-sm">Iran</p>
          </div>
        </div>
      </motion.header>

      {/* Main content */}
      <main className="relative z-10">
        {/* War bar with real data */}
        <section className="card-glass mx-auto mt-8">
          <WarBar 
            israelLiquidity={israel.liquidity} 
            iranLiquidity={iran.liquidity} 
            showEnergyBar={true}
          />
        </section>

        {/* Simple buy buttons that redirect */}
        <section className="card-glass mx-auto mt-8">
          <SimpleBuyButtons
            israelPrice={israel.price}
            iranPrice={iran.price}
            onButtonClick={triggerConfetti}
          />
        </section>

        {/* Real-time statistics */}
        <motion.section
          className="card-glass w-full max-w-6xl mx-auto p-6 mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-10 border-2 border-cyan-400/15 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-200 mb-8 text-center font-frohburg flex items-center justify-center gap-3">
              <Trophy size={32} weight="fill" className="text-yellow-400 animate-pulse" />
              <span className="gradient-text">COMMUNITY SENTIMENT TRACKER</span>
              <Trophy size={32} weight="fill" className="text-yellow-400 animate-pulse" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center hover-lift bg-gradient-to-br from-blue-900/40 to-blue-800/20 rounded-xl p-6 border border-blue-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3 font-frohburg flex items-center justify-center gap-2">
                  <ShieldChevron size={32} className="text-blue-400 animate-bounce" />
                  <span className="gradient-text">${israel.price.toFixed(8)}</span>
                </div>
                <div className="text-xl text-gray-400 font-future">Israel Price</div>
                <div className="text-sm text-gray-500 font-future mt-2 flex items-center justify-center gap-1">
                  <Shield size={18} weight="fill" className="text-blue-400" /> 
                  Liquidity: {israel.liquidity.toLocaleString()}
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center hover-lift bg-gradient-to-br from-green-900/40 to-green-800/20 rounded-xl p-6 border border-green-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-green-400 mb-3 font-frohburg flex items-center justify-center gap-2">
                  <Flame size={32} className="text-green-400 animate-bounce" />
                  <span className="gradient-text">${iran.price.toFixed(8)}</span>
                </div>
                <div className="text-xl text-gray-400 font-future">Iran Price</div>
                <div className="text-sm text-gray-500 font-future mt-2 flex items-center justify-center gap-1">
                  <Rocket size={18} weight="fill" className="text-green-400" /> 
                  Liquidity: {iran.liquidity.toLocaleString()}
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center hover-lift bg-gradient-to-br from-yellow-900/40 to-yellow-800/20 rounded-xl p-6 border border-yellow-500/20"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-yellow-400 mb-3 font-frohburg flex items-center justify-center gap-2">
                  <Trophy size={32} weight="fill" className="text-yellow-400 animate-pulse" />
                  <span className="gradient-text">{israelPercent > iranPercent ? 'ISRAEL' : 'IRAN'}</span>
                </div>
                <div className="text-xl text-gray-400 font-future">Community Choice</div>
                <div className="text-sm text-gray-500 font-future mt-2 flex items-center justify-center gap-1">
                  <Trophy size={18} weight="fill" className="text-yellow-400" /> 
                  {Math.max(israelPercent, iranPercent).toFixed(1)}% Support Level
                </div>
              </motion.div>
            </div>
            
            {lastUpdate && (
              <div className="text-center mt-6 text-xs text-gray-500 font-tech">
                Last updated: {lastUpdate.toLocaleTimeString()}
              </div>
            )}
            
            {error && (
              <div className="text-center mt-4 text-red-400 font-tech text-sm">
                {error}
              </div>
            )}
          </div>
        </motion.section>

        {/* Token Information */}
        <motion.section
          className="w-full max-w-6xl mx-auto p-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl p-10 border-2 border-cyan-400/15 shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-200 mb-8 text-center font-frohburg">
              Token Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/10 rounded-xl p-6 border border-blue-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <FlagIsrael />
                  <h4 className="text-2xl font-bold text-blue-400 font-frohburg">Israel Token</h4>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-tech">Address:</span>
                    <span className="font-space text-sm text-blue-300">CQzT2xDP1hTsruxVUSRXgMBwnH3jgKNNEBHwUdRfpump</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-tech">Current Price:</span>
                    <span className="font-space text-blue-400">${israel.price.toFixed(8)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-tech">Liquidity:</span>
                    <span className="font-space text-blue-300">{israel.liquidity.toLocaleString()} SOL</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-900/30 to-green-800/10 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <FlagIran />
                  <h4 className="text-2xl font-bold text-green-400 font-frohburg">Iran Token</h4>
                </div>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span className="font-tech">Address:</span>
                    <span className="font-space text-sm text-green-300">F7HPUw7BnQzdfUjCUehqjEGjfkqFGGNmUEptHuVDpump</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-tech">Current Price:</span>
                    <span className="font-space text-green-400">${iran.price.toFixed(8)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-tech">Liquidity:</span>
                    <span className="font-space text-green-300">{iran.liquidity.toLocaleString()} SOL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="text-center py-12 mt-20 relative z-10">
          <div className="bg-glass rounded-2xl p-8 border border-cyan-400/15">
            <p className="text-gray-400 font-tech text-sm mb-4">
              NEW BIG WAR - Community Sentiment Measurement Platform
            </p>
            <p className="text-gray-500 font-tech text-xs">
              © 2025 NBW. All rights reserved. This platform measures community sentiment and support levels.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
} 