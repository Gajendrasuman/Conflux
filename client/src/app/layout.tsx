import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/styles/globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Conflux',
  description: 'Conflux is a comprehensive web application designed to streamline the process of creating, managing, and attending events. This system includes features such as event creation and management, ticket booking, user registration, calendar integration, notifications, and an analytics dashboard.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
