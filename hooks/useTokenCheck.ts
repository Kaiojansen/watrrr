import { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { TOKEN_CONFIG, CONFIG } from '../config/tokens';

// Endereços dos tokens vindos da configuração central
const ISRAEL_TOKEN_ADDRESS = TOKEN_CONFIG.ISRAEL.address;
const IRAN_TOKEN_ADDRESS = TOKEN_CONFIG.IRAN.address;

export interface TokenBalance {
  israel: number;
  iran: number;
}

export interface UserTokenInfo {
  hasAccess: boolean;
  tokenBalances: TokenBalance;
  primaryCountry: 'israel' | 'iran' | null;
  walletAddress: string;
}

export const useTokenCheck = (): UserTokenInfo => {
  const { publicKey, connected } = useWallet();
  const [tokenInfo, setTokenInfo] = useState<UserTokenInfo>({
    hasAccess: false,
    tokenBalances: { israel: 0, iran: 0 },
    primaryCountry: null,
    walletAddress: ''
  });

  useEffect(() => {
    if (!connected || !publicKey) {
      setTokenInfo({
        hasAccess: false,
        tokenBalances: { israel: 0, iran: 0 },
        primaryCountry: null,
        walletAddress: ''
      });
      return;
    }

    const checkTokens = async () => {
      try {
        const connection = new Connection(CONFIG.SOLANA_RPC_URL);
        
        // Obter todas as contas de token da carteira
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          {
            programId: TOKEN_PROGRAM_ID,
          }
        );

        let israelBalance = 0;
        let iranBalance = 0;

        // Verificar balanços dos tokens
        tokenAccounts.value.forEach((tokenAccount) => {
          const mintAddress = tokenAccount.account.data.parsed.info.mint;
          const balance = tokenAccount.account.data.parsed.info.tokenAmount.uiAmount;

          if (mintAddress === ISRAEL_TOKEN_ADDRESS) {
            israelBalance = balance || 0;
          } else if (mintAddress === IRAN_TOKEN_ADDRESS) {
            iranBalance = balance || 0;
          }
        });

        const hasAccess = israelBalance > 0 || iranBalance > 0;
        const primaryCountry = israelBalance > iranBalance ? 'israel' : 
                              iranBalance > israelBalance ? 'iran' : 
                              israelBalance > 0 ? 'israel' : null;

        setTokenInfo({
          hasAccess,
          tokenBalances: { israel: israelBalance, iran: iranBalance },
          primaryCountry,
          walletAddress: publicKey.toBase58()
        });

      } catch (error) {
        console.error('Erro ao verificar tokens:', error);
        setTokenInfo({
          hasAccess: false,
          tokenBalances: { israel: 0, iran: 0 },
          primaryCountry: null,
          walletAddress: publicKey.toBase58()
        });
      }
    };

    checkTokens();
  }, [connected, publicKey]);

  return tokenInfo;
}; 