// CONFIGURAÇÃO CENTRAL DOS TOKENS - ÚNICO LUGAR PARA ALTERAR ENDEREÇOS
export const TOKEN_CONFIG = {
  ISRAEL: {
    address: 'CQzT2xDP1hTsruxVUSRXgMBwnH3jgKNNEBHwUdRfpump',
    symbol: 'ISRAEL',
    name: 'Israel Token',
    decimals: 6,
    color: {
      primary: '#3B82F6', // blue
      secondary: '#93C5FD',
      gradient: 'from-blue-900/60 via-blue-800/40 to-blue-900/60'
    }
  },
  IRAN: {
    address: 'F7HPUw7BnQzdfUjCUehqjEGjfkqFGGNmUEptHuVDpump',
    symbol: 'IRAN',
    name: 'Iran Token',
    decimals: 6,
    color: {
      primary: '#10B981', // green
      secondary: '#6EE7B7',
      gradient: 'from-green-900/60 via-green-800/40 to-green-900/60'
    }
  }
} as const;

// URLs e configurações
export const CONFIG = {
  PUMP_FUN_BASE_URL: 'https://pump.fun',
  DEX_SCREENER_API: 'https://api.dexscreener.com/latest/dex/tokens',
  SOLANA_RPC_URL: process.env.NEXT_PUBLIC_SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com',
  NETWORK: 'mainnet-beta' as const
} as const;

// Funções utilitárias
export const getTokenByAddress = (address: string) => {
  return Object.values(TOKEN_CONFIG).find(token => token.address === address);
};

export const getPumpFunUrl = (tokenAddress: string) => {
  return `${CONFIG.PUMP_FUN_BASE_URL}/${tokenAddress}`;
};

export const getDexScreenerUrl = (tokenAddress: string) => {
  return `${CONFIG.DEX_SCREENER_API}/${tokenAddress}`;
}; 