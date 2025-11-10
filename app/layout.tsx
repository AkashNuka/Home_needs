import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HomeNeeds - Quick Commerce for Daily Essentials',
  description: 'Order pooja items, fruits, vegetables, flowers, idols, and garlands with fast delivery',
  keywords: 'quick commerce, grocery, pooja items, fruits, vegetables, flowers, idols, garlands',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
