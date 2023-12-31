import "@/styles/globals.css"
import { Inter as FontSans } from "next/font/google"
import Providers from "./providers"
import Nav from "@/components/ui/nav"
import { Toaster } from "@/components/ui/toaster"

import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <Nav />
          <main>
            {children}
          </main>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}
