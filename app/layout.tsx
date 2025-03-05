import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import type React from "react"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pranivi - Innovative Procurement Management",
  description: "Streamline your procurement process with Pranivi's powerful management platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900`}>
        <Header />
        {children}
      </body>
    </html>
  )
}

