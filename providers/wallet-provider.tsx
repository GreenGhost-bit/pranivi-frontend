"\"use client"

import { WalletProvider, useInitWalletConnect } from "@txnlab/use-wallet-react"

export function WalletProviderWrapper({ children }) {
  useInitWalletConnect({
    bridge: "https://bridge.walletconnect.org",
    // Required for SafeWallet, also suggested by WalletConnect for other wallets
    // Flip this flag to enable/disable WalletConnect v1
    // WalletConnect v1 is deprecated and will be removed in a future release
    version: 1,
  })

  return (
    <WalletProvider defaultWallets={["pera", "myalgo", "defly", "exodus", "walletconnect"]}>{children}</WalletProvider>
  )
}
\
"
