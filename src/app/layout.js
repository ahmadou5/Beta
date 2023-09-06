import ProviderW3C from './ProviderW3C'
import Web3Provider from './ProviderW3C'
import './globals.css'
import { Inter, Poppins } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ['devanagari'],weight:'500'})

export const metadata = {
  title: 'YieldZone',
  description: 'bg-[#1E2329]',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      <ProviderW3C>
       <body className={`${poppins.className}  text-slate-300  `}>{children}</body>
      </ProviderW3C>
    </html>
  )
}
