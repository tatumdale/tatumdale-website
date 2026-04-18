import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tatumdale | AI Product Leader',
  description: 'Fractional CPO & AI Product Leadership. Discover, Design, Deliver.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
