import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'windows-portfolio',
  description: 'buildfolio-submission',
  generator: 'akmal, ram & navaneeth',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
