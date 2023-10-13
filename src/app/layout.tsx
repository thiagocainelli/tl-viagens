import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TL Viagens - Viaje sem dor de cabeça',
  description: 'TL Viagens - Viaje sem dor de cabeça',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
