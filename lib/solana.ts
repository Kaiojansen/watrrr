import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js'

// Configuração dos tokens reais
export const TOKENS = {
  ISRAEL: {
    address: 'CQzT2xDP1hTsruxVUSRXgMBwnH3jgKNNEBHwUdRfpump',
    symbol: 'ISRAEL',
    name: 'Israel Token',
    decimals: 6
  },
  IRAN: {
    address: 'F7HPUw7BnQzdfUjCUehqjEGjfkqFGGNmUEptHuVDpump',
    symbol: 'IRAN', 
    name: 'Iran Token',
    decimals: 6
  }
}

// Configuração da conexão Solana
export const SOLANA_NETWORK = 'mainnet-beta'
export const connection = new Connection(
  process.env.NEXT_PUBLIC_SOLANA_RPC_URL || clusterApiUrl(SOLANA_NETWORK),
  'confirmed'
)

// Função para simular preço do token (para demonstração)
export async function getTokenPrice(tokenAddress: string): Promise<number> {
  try {
    // Simular dados para demonstração
    await new Promise(resolve => setTimeout(resolve, 500)) // Simular delay de API
    
    if (tokenAddress === TOKENS.ISRAEL.address) {
      return 0.000045 + (Math.random() - 0.5) * 0.000001 // Preço base com variação
    } else if (tokenAddress === TOKENS.IRAN.address) {
      return 0.000038 + (Math.random() - 0.5) * 0.000001 // Preço base com variação
    }
    
    return 0
  } catch (error) {
    console.error('Erro ao buscar preço:', error)
    return 0
  }
}

// Função para simular liquidez do pool (para demonstração)
export async function getPoolLiquidity(tokenAddress: string): Promise<number> {
  try {
    // Simular dados para demonstração
    await new Promise(resolve => setTimeout(resolve, 300))
    
    if (tokenAddress === TOKENS.ISRAEL.address) {
      return 1250000 + Math.floor(Math.random() * 100000) // Base com variação
    } else if (tokenAddress === TOKENS.IRAN.address) {
      return 980000 + Math.floor(Math.random() * 100000) // Base com variação
    }
    
    return 0
  } catch (error) {
    console.error('Erro ao buscar liquidez:', error)
    return 0
  }
}

// Função para buscar dados em tempo real dos tokens (simulados)
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

    return {
      israel: {
        price: israelPrice,
        liquidity: israelLiquidity,
        ...TOKENS.ISRAEL
      },
      iran: {
        price: iranPrice,
        liquidity: iranLiquidity,
        ...TOKENS.IRAN
      }
    }
  } catch (error) {
    console.error('Erro ao buscar dados em tempo real:', error)
    return {
      israel: { price: 0.000045, liquidity: 1250000, ...TOKENS.ISRAEL },
      iran: { price: 0.000038, liquidity: 980000, ...TOKENS.IRAN }
    }
  }
} 