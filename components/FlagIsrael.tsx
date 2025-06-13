'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function FlagIsrael() {
  return (
    <div className="relative w-16 h-12 md:w-20 md:h-16 flex items-center justify-center">
      <Image
        src="/flags/israel.png"
        alt="Flag of Israel"
        fill
        style={{ objectFit: 'contain' }}
        sizes="(max-width: 80px) 100vw, 80px"
        priority
      />
    </div>
  )
} 