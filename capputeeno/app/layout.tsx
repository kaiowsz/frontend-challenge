import type { Metadata } from 'next'
import { Inter, Saira_Stencil_One, Saira,  } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const saira = Saira({ 
  weight: ["400", "500", "600", "700"],
  subsets: ['latin'] 
})

const saira_stencil_one = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
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
        {children}
      </body>
    </html>
  )
}
