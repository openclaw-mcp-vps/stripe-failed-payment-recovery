import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Recover Failed Payments | Smart Stripe Retry Logic',
  description: 'Monitor failed Stripe payments, implement intelligent retry schedules, and send automated recovery emails to recover lost subscription revenue.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2c5697fe-d78b-41ad-8cd2-a9cfe3b1b63e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
