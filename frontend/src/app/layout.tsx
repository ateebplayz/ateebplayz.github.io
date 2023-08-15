import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Portfolio | Ateeb Sohail',
  description: 'Made via code... not generated.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
