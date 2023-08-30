import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'YieldZone',
  description: '',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <script src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js"></script>
      <body className={`${inter.className} bg-[#cbced1] text-slate-900  `}>{children}</body>
    </html>
  )
}
