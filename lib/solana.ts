import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'
import { TOKEN_CONFIG, CONFIG, getDexScreenerUrl } from '../config/tokens'

// Re-export para compatibilidade
export const TOKENS = TOKEN_CONFIG

// Configuração da conexão Solana
export const connection = new Connection(
  CONFIG.SOLANA_RPC_URL || clusterApiUrl(CONFIG.NETWORK),
  'confirmed'
)

// Função para buscar preço real do token via API
export async function getTokenPrice(tokenAddress: string): Promise<number> {
  try {
    // Buscar dados reais do DexScreener
    const response = await fetch(getDexScreenerUrl(tokenAddress))
    const data = await response.json()
    
    if (data.pairs && data.pairs.length > 0) {
      // Pegar o primeiro par encontrado
      const pair = data.pairs[0]
      return parseFloat(pair.priceUsd) || 0
    }
    
    // Fallback: valores base se não conseguir buscar
    if (tokenAddress === TOKENS.ISRAEL.address) {
      return 0.000045
    } else if (tokenAddress === TOKENS.IRAN.address) {
      return 0.000038
    }
    
    return 0
  } catch (error) {
    console.error('Erro ao buscar preço:', error)
    // Fallback com valores base
    if (tokenAddress === TOKENS.ISRAEL.address) {
      return 0.000045
    } else if (tokenAddress === TOKENS.IRAN.address) {
      return 0.000038
    }
    return 0
  }
}

// Função para buscar liquidez real do pool
export async function getPoolLiquidity(tokenAddress: string): Promise<number> {
  try {
    // Buscar dados reais do DexScreener
    const response = await fetch(getDexScreenerUrl(tokenAddress))
    const data = await response.json()
    
    if (data.pairs && data.pairs.length > 0) {
      // Pegar o par com maior liquidez
      const pair = data.pairs[0]
      return parseFloat(pair.liquidity?.usd || pair.fdv || '0') || 0
    }
    
    // Fallback: valores base se não conseguir buscar
    if (tokenAddress === TOKENS.ISRAEL.address) {
      return 1250000
    } else if (tokenAddress === TOKENS.IRAN.address) {
      return 980000
    }
    
    return 0
  } catch (error) {
    console.error('Erro ao buscar liquidez:', error)
    // Fallback com valores base
    if (tokenAddress === TOKENS.ISRAEL.address) {
      return 1250000
    } else if (tokenAddress === TOKENS.IRAN.address) {
      return 980000
    }
    return 0
  }
}

// Função para buscar dados em tempo real dos tokens
// Função para buscar market cap real via API
export async function getTokenMarketCap(tokenAddress: string): Promise<number> {
  try {
    const response = await fetch(getDexScreenerUrl(tokenAddress))
    const data = await response.json()
    
    if (data.pairs && data.pairs.length > 0) {
      const pair = data.pairs[0]
      return parseFloat(pair.marketCap || pair.fdv || '0') || 0
    }
    
    return 0
  } catch (error) {
    console.error('Erro ao buscar market cap:', error)
    return 0
  }
}

export async function getRealTimeTokenData() {
  try {
    const [israelPrice, iranPrice] = await Promise.all([
      getTokenPrice(TOKENS.ISRAEL.address),
      getTokenPrice(TOKENS.IRAN.address)
    ])

    const [israelLiquidity, iranLiquidity] = await Promise.all([
      getPoolLiquidity(TOKENS.ISRAEL.address),
      getPoolLiquidity(TOKENS.IRAN.address)
    ])

    const [israelMarketCap, iranMarketCap] = await Promise.all([
      getTokenMarketCap(TOKENS.ISRAEL.address),
      getTokenMarketCap(TOKENS.IRAN.address)
    ])

    return {
      israel: {
        price: israelPrice,
        liquidity: israelLiquidity,
        marketCap: israelMarketCap,
        ...TOKENS.ISRAEL
      },
      iran: {
        price: iranPrice,
        liquidity: iranLiquidity,
        marketCap: iranMarketCap,
        ...TOKENS.IRAN
      }
    }
  } catch (error) {
    console.error('Erro ao buscar dados em tempo real:', error)
    return {
      israel: { price: 0.000045, liquidity: 1250000, marketCap: 0, ...TOKENS.ISRAEL },
      iran: { price: 0.000038, liquidity: 980000, marketCap: 0, ...TOKENS.IRAN }
    }
  }
} 