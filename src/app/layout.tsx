import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import './globals.css'

const fontUrbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommerce Store',
  description: 'Ecommerce Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontUrbanist.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
