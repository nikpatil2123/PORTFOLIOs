import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nikhil Patil - Frontend Developer",
  description: "Frontend Developer | React.js Enthusiast",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-vscode-bg text-vscode-text`}>{children}</body>
    </html>
  )
}

