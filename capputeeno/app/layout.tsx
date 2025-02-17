import type { Metadata } from "next"
import { Saira_Stencil_One, Saira,  } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Providers from "@/utils/Providers"

export const saira = Saira({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"] 
})

export const saira_stencil_one = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"]
})

const metadata: Metadata = {
  title: "Capputeeno",
  description: "A web ecommerce application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
