import './globals.css'
import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify Layout',
  description: 'Based on the Spotify app, we created a beautiful demo layout.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-zinc-50 bg-zinc-900">{children}</body>
    </html>
  )
}
