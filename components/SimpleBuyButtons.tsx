'use client'

import { motion } from 'framer-motion'
import { ShieldChevron, Flame, ArrowSquareOut } from '@phosphor-icons/react'
import FlagIsrael from './FlagIsrael'
import FlagIran from './FlagIran'

interface SimpleBuyButtonsProps {
  israelPrice: number
  iranPrice: number
  onButtonClick?: () => void
}

export default function SimpleBuyButtons({ 
  israelPrice, 
  iranPrice, 
  onButtonClick 
}: SimpleBuyButtonsProps) {

  const handleBuyIsrael = () => {
    onButtonClick?.()
    window.open('https://pump.fun/CQzT2xDP1hTsruxVUSRXgMBwnH3jgKNNEBHwUdRfpump', '_blank')
  }

  const handleBuyIran = () => {
    onButtonClick?.()
    window.open('https://pump.fun/F7HPUw7BnQzdfUjCUehqjEGjfkqFGGNmUEptHuVDpump', '_blank')
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-2 font-battle tracking-tight gradient-text">
          Show Your Support
        </h2>
        <p className="text-base text-gray-400 font-future">
          Choose your side and express community sentiment
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Israel Button */}
        <motion.div 
          className="bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-blue-900/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center border border-blue-500/20 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <FlagIsrael />
          <div className="mt-4 mb-2 text-lg font-tech text-blue-300">Israel Token</div>
          <div className="mb-4 text-2xl font-space text-gray-200 gradient-text">
            ${israelPrice.toFixed(8)}
          </div>
          <button
            onClick={handleBuyIsrael}
            className="btn-modern hover-glow w-full mt-2 flex items-center justify-center gap-2"
          >
            <ShieldChevron size={22} weight="fill" className="text-blue-400" />
            Support Israel
            <ArrowSquareOut size={16} className="text-blue-400" />
          </button>
        </motion.div>

        {/* Iran Button */}
        <motion.div 
          className="bg-gradient-to-br from-green-900/60 via-green-800/40 to-green-900/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center border border-green-500/20 shadow-2xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <FlagIran />
          <div className="mt-4 mb-2 text-lg font-tech text-green-300">Iran Token</div>
          <div className="mb-4 text-2xl font-space text-gray-200 gradient-text">
            ${iranPrice.toFixed(8)}
          </div>
          <button
            onClick={handleBuyIran}
            className="btn-modern hover-glow w-full mt-2 flex items-center justify-center gap-2"
          >
            <Flame size={22} weight="fill" className="text-green-400" />
            Support Iran
            <ArrowSquareOut size={16} className="text-green-400" />
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-xl p-4 border border-cyan-400/15 shadow-lg">
          <p className="text-sm text-gray-300 font-tech mb-2">
            <ArrowSquareOut size={16} className="inline mr-2 text-cyan-400 animate-pulse" />
            Redirects to external platform for community support
          </p>
          <p className="text-xs text-gray-500 font-tech">
            Powered by Pump.fun | Network: Solana Mainnet | Sentiment Tracker
          </p>
        </div>
      </div>
    </div>
  )
} 