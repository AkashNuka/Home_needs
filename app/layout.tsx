import type { Metadata } from 'next'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'

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
      <body className="font-sans">
        <CartProvider>
          <Navbar />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}
