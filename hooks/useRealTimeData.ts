'use client'

import { useState, useEffect, useCallback } from 'react'
import { getRealTimeTokenData } from '../lib/solana'

interface TokenData {
  price: number
  liquidity: number
  address: string
  symbol: string
  name: string
  decimals: number
}

interface RealTimeData {
  israel: TokenData
  iran: TokenData
  loading: boolean
  error: string | null
  lastUpdate: Date | null
}

export function useRealTimeData() {
  const [data, setData] = useState<RealTimeData>({
    israel: {
      price: 0.000045,
      liquidity: 1250000,
      address: 'CQzT2xDP1hTsruxVUSRXgMBwnH3jgKNNEBHwUdRfpump',
      symbol: 'ISRAEL',
      name: 'Israel Token',
      decimals: 6
    },
    iran: {
      price: 0.000038,
      liquidity: 980000,
      address: 'F7HPUw7BnQzdfUjCUehqjEGjfkqFGGNmUEptHuVDpump',
      symbol: 'IRAN',
      name: 'Iran Token',
      decimals: 6
    },
    loading: false,
    error: null,
    lastUpdate: null
  })

  const [mounted, setMounted] = useState(false)

  const fetchData = useCallback(async () => {
    if (!mounted) return
    
    try {
      setData(prev => ({ ...prev, loading: true, error: null }))
      
      const tokenData = await getRealTimeTokenData()
      
      setData(prev => ({
        ...prev,
        israel: tokenData.israel,
        iran: tokenData.iran,
        loading: false,
        lastUpdate: new Date()
      }))
    } catch (error) {
      console.error('Erro ao buscar dados:', error)
      setData(prev => ({
        ...prev,
        loading: false,
        error: 'Erro ao carregar dados dos tokens'
      }))
    }
  }, [mounted])

  // Verificar se está no client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Buscar dados iniciais apenas no client
  useEffect(() => {
    if (mounted) {
      fetchData()
    }
  }, [mounted, fetchData])

  // Atualizar dados a cada 30 segundos apenas no client
  useEffect(() => {
    if (!mounted) return
    
    const interval = setInterval(fetchData, 30000)
    return () => clearInterval(interval)
  }, [mounted, fetchData])

  return {
    ...data,
    refetch: fetchData
  }
} 