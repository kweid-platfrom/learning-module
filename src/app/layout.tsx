// ============================================
// FILE: /src/app/layout.tsx
// Root Layout - Simple, no providers needed for learning platform
// ============================================
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Assura Learn - Master QA & Testing',
  description: 'Learn quality assurance through interactive lessons and AI-assisted learning',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}