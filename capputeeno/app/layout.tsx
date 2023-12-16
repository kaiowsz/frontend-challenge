import type { Metadata } from 'next'
import { Inter, Saira_Stencil_One, Saira,  } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Header'
import { QueryClientProvider } from '@tanstack/react-query'

export const saira = Saira({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ['latin'] 
})

export const saira_stencil_one = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"]
})

const metadata: Metadata = {
  title: 'Capputeeno',
  description: 'A web ecommerce application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
