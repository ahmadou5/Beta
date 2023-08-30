import './globals.css'
import { Inter, Poppins } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({subsets: ['devanagari'],weight:'500'})

export const metadata = {
  title: 'YieldZone',
  description: '',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      <body className={`${poppins.className} bg-[#cbced1] text-slate-300  `}>{children}</body>
    </html>
  )
}
