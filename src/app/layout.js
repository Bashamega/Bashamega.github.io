import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adam Basha Portofolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Adam Basha Portofolio</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
