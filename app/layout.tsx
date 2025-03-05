import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import FloatingContactButtons from "@/components/floating-contact-buttons"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Huggie Decking | Premium Decking Solutions in Johannesburg",
  description:
    "Transform your outdoor space with premium decking solutions from Huggie Decking. We provide expert installation services across Johannesburg, South Africa.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <FloatingContactButtons/>
        <Footer />
      </body>
    </html>
  )
}

