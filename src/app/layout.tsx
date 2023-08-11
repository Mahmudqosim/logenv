import Navbar from "@/components/Navbar"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"
import { Inter } from "next/font/google"

export const metadata = {
  title: "Logenv",
  description:
    "A developer networking app designed to foster collaboration, knowledge sharing, and community building among developers worldwide.",
}

const plusJakartaSans = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html
      lang="en"
      className={cn(
        "bg-white text-gray-800 antialiased",
        plusJakartaSans.className
      )}
    >
      <body className="min-h-screen pt-12 bg-gray-50 antialiased">
        <Navbar />
        
        <div className="container max-w-7xl mx-auto h-full pt-12">
          {children}
        </div>
      </body>
    </html>
  )
}
