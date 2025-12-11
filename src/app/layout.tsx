import React from 'react';
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import AuthProviderWrapper from '../components/AuthProviderWrapper'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Auto Equity Group - Car Parts & Tools Rebates',
  description: 'Earn rebates on car parts and tools when using Auto Equity Group as your insurance broker.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} font-montserrat bg-[#F8F7F4]`}>
        <AuthProviderWrapper>{children}</AuthProviderWrapper>
      </body>
    </html>
  )
} 