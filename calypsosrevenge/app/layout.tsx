import type { Metadata } from 'next'
import { Yellowtail } from 'next/font/google'
import './globals.css'

// https://www.youtube.com/watch?v=uiJRBtfLgxs

// const forum = Forum({ weight: '400', subsets: ['latin'] })
const yellowtail = Yellowtail({weight: '400', subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Calypso Revenge'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={yellowtail.className}>{children}</body>
    </html>
  )
}
