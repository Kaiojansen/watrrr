'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const TANKS = [
  { src: '/particles/Israeltank.png', side: 'israel' },
  { src: '/particles/irantank.png', side: 'iran' }
]

interface TankParticle {
  id: number
  x: number
  y: number
  speed: number
  direction: 'left' | 'right'
  tankType: 0 | 1
  angle: number
  spin: number
  colliding: boolean
}

const TANK_SIZE = 48
const COLLISION_DIST = 56

export default function ParticleEffect() {
  const [tanks, setTanks] = useState<TankParticle[]>([])

  useEffect(() => {
    // Inicializa tanques
    const initialTanks: TankParticle[] = []
    for (let i = 0; i < 10; i++) {
      const tankType = i % 2 as 0 | 1
      const direction = tankType === 0 ? 'right' : 'left'
      initialTanks.push({
        id: i,
        x: direction === 'right' ? -100 - Math.random() * 200 : window.innerWidth + Math.random() * 200,
        y: Math.random() * (window.innerHeight - 80) + 40,
        speed: 0.5 + Math.random() * 1.2,
        direction,
        tankType,
        angle: Math.random() * 10 - 5,
        spin: (Math.random() - 0.5) * 0.2,
        colliding: false
      })
    }
    setTanks(initialTanks)
  }, [])

  useEffect(() => {
    const moveTanks = () => {
      setTanks(prev => {
        // Detecta colisões
        const updated = prev.map(tank => ({ ...tank, colliding: false }))
        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const a = updated[i], b = updated[j]
            if (a.tankType !== b.tankType && Math.abs(a.x - b.x) < COLLISION_DIST && Math.abs(a.y - b.y) < TANK_SIZE) {
              updated[i].colliding = true
              updated[j].colliding = true
            }
          }
        }
        // Move e gira
        return updated.map(tank => {
          let newX = tank.x + (tank.direction === 'right' ? tank.speed : -tank.speed)
          let newAngle = tank.angle + tank.spin
          let newSpin = tank.spin
          // Colisão: gira e recua
          if (tank.colliding) {
            newAngle += (Math.random() - 0.5) * 8
            newSpin = (Math.random() - 0.5) * 1.2
            newX += (tank.direction === 'right' ? -2 : 2)
          } else {
            // Oscilação normal
            if (Math.abs(newAngle) > 12) newSpin *= -1
            if (Math.random() < 0.01) newSpin = (Math.random() - 0.5) * 0.3
          }
          // Reset ao sair da tela
          if (tank.direction === 'right' && newX > window.innerWidth + 100) {
            newX = -120
            newAngle = 0
            newSpin = (Math.random() - 0.5) * 0.3
          }
          if (tank.direction === 'left' && newX < -100) {
            newX = window.innerWidth + 120
            newAngle = 0
            newSpin = (Math.random() - 0.5) * 0.3
          }
          return { ...tank, x: newX, angle: newAngle, spin: newSpin }
        })
      })
    }
    const interval = setInterval(moveTanks, 24)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {tanks.map(tank => (
        <Image
          key={tank.id}
          src={TANKS[tank.tankType].src}
          alt={TANKS[tank.tankType].side + ' tank'}
          width={TANK_SIZE}
          height={TANK_SIZE}
          style={{
            position: 'absolute',
            left: tank.x,
            top: tank.y,
            opacity: 0.7,
            transform: `scaleX(${tank.direction === 'right' ? 1 : -1}) rotate(${tank.angle}deg)`,
            filter: tank.tankType === 0 ? 'drop-shadow(0 0 8px #00eaff)' : 'drop-shadow(0 0 8px #00ffb3)',
            transition: tank.colliding ? 'filter 0.1s, transform 0.1s' : 'filter 0.2s, transform 0.2s',
            zIndex: tank.colliding ? 10 : 1
          }}
          className="select-none"
          draggable={false}
          priority
        />
      ))}
      {/* Efeito de colisão: flash */}
      {tanks.map((tank, i) => tank.colliding && (
        <div
          key={"flash-"+i}
          style={{
            position: 'absolute',
            left: tank.x + TANK_SIZE/2 - 12,
            top: tank.y + TANK_SIZE/2 - 12,
            width: 24,
            height: 24,
            borderRadius: '50%',
            background: 'radial-gradient(circle, #fff 0%, #00eaff 40%, transparent 80%)',
            opacity: 0.7,
            pointerEvents: 'none',
            zIndex: 20
          }}
        />
      ))}
    </div>
  )
} 