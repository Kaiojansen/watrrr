'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import FlagIsrael from './FlagIsrael'
import FlagIran from './FlagIran'
import { Shield, Lightning, Trophy, Flame } from '@phosphor-icons/react'

interface WarBarProps {
  israelLiquidity: number
  iranLiquidity: number
  showEnergyBar?: boolean
}

const battlePhrases = [
  'Israel support is growing!',
  'Iran sentiment is rising!',
  'Community sentiment shifting!',
  'Public opinion changing!',
  'Support levels fluctuating!',
  'Sentiment tracker active!'
]

export default function WarBar({ israelLiquidity, iranLiquidity, showEnergyBar }: WarBarProps) {
  const total = israelLiquidity + iranLiquidity
  const israelPercentage = total > 0 ? (israelLiquidity / total) * 100 : 50
  const iranPercentage = total > 0 ? (iranLiquidity / total) * 100 : 50
  const leading = israelPercentage > iranPercentage ? 'Israel' : 'Iran'

  // Frase de impacto só no client
  const [phrase, setPhrase] = useState(battlePhrases[0])
  useEffect(() => {
    let idx = 0
    setPhrase(battlePhrases[idx])
    const interval = setInterval(() => {
      idx = (idx + 1) % battlePhrases.length
      setPhrase(battlePhrases[idx])
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 font-battle tracking-tight gradient-text glow-text">
          Community Sentiment
        </h2>
        <p className="text-base text-cyan-300 font-tech uppercase tracking-widest animate-pulse text-shadow-cyber">
          {phrase}
        </p>
      </div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FlagIsrael />
          <span className="text-blue-400 font-tech text-lg">Israel</span>
        </div>
        <span className="text-gray-400 font-tech text-xl">VS</span>
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-tech text-lg">Iran</span>
          <FlagIran />
        </div>
      </div>
      <div className="relative h-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl overflow-hidden border border-cyan-400/30 flex items-center shadow-2xl">
        {showEnergyBar && <div className="energy-bar" />}
        <div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-600/90 to-blue-500/80 flex items-center justify-end transition-all duration-700 shadow-lg"
          style={{ width: `${israelPercentage}%` }}
        >
          <span className="text-white font-bold px-4 text-lg font-space text-shadow-cyber">
            {israelPercentage.toFixed(1)}%
          </span>
        </div>
        <div
          className="absolute right-0 top-0 h-full bg-gradient-to-l from-green-600/90 to-green-500/80 flex items-center justify-start transition-all duration-700 shadow-lg"
          style={{ width: `${iranPercentage}%` }}
        >
          <span className="text-white font-bold px-4 text-lg font-space text-shadow-cyber">
            {iranPercentage.toFixed(1)}%
          </span>
        </div>
        <div className="absolute bottom-2 left-4 right-4 h-2 bg-gray-800/80 rounded-full overflow-hidden border border-cyan-400/20">
          <div
            className={`h-full transition-all duration-700 ${leading === 'Israel' ? 'bg-gradient-to-r from-blue-400 to-blue-300' : 'bg-gradient-to-r from-green-400 to-green-300'}`}
            style={{ width: `${Math.max(israelPercentage, iranPercentage)}%` }}
          />
        </div>
        <div className="absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent transform -translate-x-1/2" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        <div className="bg-glass rounded-xl p-5 flex flex-col items-center border border-blue-500/30 pulse-card hover:scale-105 transition-transform duration-200 bg-gradient-to-br from-blue-900/40 to-blue-800/20">
          <Shield size={36} weight="fill" className="text-blue-400 animate-bounce mb-2" />
          <div className="text-lg font-tech text-blue-200">Israel Support</div>
          <div className="text-2xl font-space text-white mt-1 gradient-text">{israelLiquidity.toLocaleString()} SOL</div>
        </div>
        <div className="bg-glass rounded-xl p-5 flex flex-col items-center border border-green-500/30 pulse-card hover:scale-105 transition-transform duration-200 bg-gradient-to-br from-green-900/40 to-green-800/20">
          <Flame size={36} weight="fill" className="text-green-400 animate-bounce mb-2" />
          <div className="text-lg font-tech text-green-200">Iran Support</div>
          <div className="text-2xl font-space text-white mt-1 gradient-text">{iranLiquidity.toLocaleString()} SOL</div>
        </div>
        <div className="bg-glass rounded-xl p-5 flex flex-col items-center border border-yellow-400/20 hover:scale-105 transition-transform duration-200 bg-gradient-to-br from-yellow-900/40 to-yellow-800/20">
          <Trophy size={36} weight="fill" className="text-yellow-300 animate-pulse mb-2" />
          <div className="text-lg font-tech text-yellow-200">Community Choice</div>
          <div className="text-2xl font-space text-white mt-1 gradient-text">{leading}</div>
        </div>
        <div className="bg-glass rounded-xl p-5 flex flex-col items-center border border-cyan-400/20 hover:scale-105 transition-transform duration-200 bg-gradient-to-br from-cyan-900/40 to-cyan-800/20">
          <Lightning size={36} weight="fill" className="text-cyan-300 animate-spin-slow mb-2" />
          <div className="text-lg font-tech text-cyan-200">Sentiment Gap</div>
          <div className="text-2xl font-space text-white mt-1 gradient-text">{(Math.abs(israelLiquidity - iranLiquidity)).toLocaleString()} SOL</div>
        </div>
      </div>
    </div>
  )
} 