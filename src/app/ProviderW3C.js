'use client'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { Children } from 'react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, baseGoerli, bscTestnet, } from 'wagmi/chains'

const chains = [arbitrum, mainnet, polygon, baseGoerli, bscTestnet ]
const projectId = '72e32db0e21f13c04c130ebbfe281dd2'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: false,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

export default function ProviderW3C({children}) {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        {children}
      </WagmiConfig>

      <Web3Modal tokenContracts={{84531:'0x67F9378694bC3fE3CD2C9d717Df0415261f08e38'}} projectId={projectId} ethereumClient={ethereumClient} />
    </>
  )
}