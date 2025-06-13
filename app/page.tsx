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
        <div className="bg-glass rounded-2xl px-8 py-3 flex items-center gap-8 border border-cyan-400/20 shadow-lg">
          <div className="flex items-center gap-2">
            <FlagIsrael />
            <span className="font-tech text-lg text-blue-300">{israelPercent.toFixed(1)}%</span>
          </div>
          <span className="font-space text-2xl text-gray-200 tracking-widest">|</span>
          <div className="flex items-center gap-2">
            <FlagIran />
            <span className="font-tech text-lg text-green-300">{iranPercent.toFixed(1)}%</span>
          </div>
          <span className="font-space text-lg text-yellow-300 ml-4">
            Market Cap: ${((israel.price * israel.liquidity) + (iran.price * iran.liquidity)).toLocaleString()}
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
        
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 font-battle glow-text tracking-tight">
          NBW
        </h1>
        <h2 className="text-2xl md:text-3xl text-cyan-300 mb-6 font-space tracking-widest">
          NEW BIG WAR
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto font-future leading-relaxed">
          A sentiment measurement platform tracking community support between <span className="text-blue-400 font-bold">Israel</span> and{' '}
          <span className="text-green-400 font-bold">Iran</span> tokens on Solana blockchain
        </p>
        
        <div className="flex justify-center items-center space-x-10 mt-6">
          <div className="text-center">
            <FlagIsrael />
            <p className="text-blue-400 font-future mt-2 text-sm">Israel</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-battle text-gray-300">VS</span>
          </div>
          <div className="text-center">
            <FlagIran />
            <p className="text-green-400 font-future mt-2 text-sm">Iran</p>
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
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-10 border-2 border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-8 text-center font-battle glow-text flex items-center justify-center gap-3">
              <Trophy size={32} weight="fill" className="text-yellow-400" />
              COMMUNITY SENTIMENT TRACKER
              <Trophy size={32} weight="fill" className="text-yellow-400" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="text-center hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-blue-400 mb-3 font-space flex items-center justify-center gap-2">
                  <ShieldChevron size={32} className="text-blue-400" />
                  ${israel.price.toFixed(8)}
                </div>
                <div className="text-xl text-gray-400 font-future">Israel Price</div>
                <div className="text-sm text-gray-500 font-future mt-2 flex items-center justify-center gap-1">
                  <Shield size={18} weight="fill" className="text-blue-400" /> 
                  Liquidity: {israel.liquidity.toLocaleString()}
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-green-400 mb-3 font-space flex items-center justify-center gap-2">
                  <Flame size={32} className="text-green-400" />
                  ${iran.price.toFixed(8)}
                </div>
                <div className="text-xl text-gray-400 font-future">Iran Price</div>
                <div className="text-sm text-gray-500 font-future mt-2 flex items-center justify-center gap-1">
                  <Rocket size={18} weight="fill" className="text-green-400" /> 
                  Liquidity: {iran.liquidity.toLocaleString()}
                </div>
              </motion.div>
              
              <motion.div 
                className="text-center hover-lift"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl font-bold text-yellow-400 mb-3 font-space flex items-center justify-center gap-2">
                  <Trophy size={32} weight="fill" className="text-yellow-400" />
                  {israelPercent > iranPercent ? 'ISRAEL' : 'IRAN'}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-blue-500 hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-2xl font-bold text-blue-400 mb-4 font-tech flex items-center gap-2">
                <ShieldChevron size={24} className="text-blue-400" /> Israel Token
              </h4>
              <p className="text-gray-300 font-future leading-relaxed mb-4">
                Show your support for Israel! Each token purchase represents community sentiment 
                and contributes to measuring public opinion in this digital sentiment tracker.
              </p>
              <div className="text-sm text-blue-300 font-tech">
                Contract: {israel.address}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-2xl border-2 border-green-500 hover-lift"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="text-2xl font-bold text-green-400 mb-4 font-tech flex items-center gap-2">
                <Flame size={24} className="text-green-400" /> Iran Token
              </h4>
              <p className="text-gray-300 font-future leading-relaxed mb-4">
                Express your support for Iran! Every token purchase reflects community sentiment 
                and helps measure public opinion in this digital sentiment tracker.
              </p>
              <div className="text-sm text-green-300 font-tech">
                Contract: {iran.address}
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="relative z-10 text-center py-8 mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="text-gray-500 font-future">
          <p className="text-lg">© 2024 NBW - New Big War</p>
          <p className="mt-2 text-sm">Community sentiment measurement on Solana blockchain</p>
          <div className="flex justify-center items-center space-x-8 mt-6">
            <FlagIsrael />
            <Trophy size={28} weight="fill" className="text-yellow-400" />
            <FlagIran />
          </div>
        </div>
      </motion.footer>
    </div>
  )
} 