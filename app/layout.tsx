import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'windows-portfolio',
  description: 'buildfolio-submission',
  authors: [{ name: 'akmal, ram & navaneeth' }],
  icons: {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Windows_logo_-_2012.png',
  },
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
