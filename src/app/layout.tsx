import { type Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Corepass',
    default: 'Loan Origination Platform | Corepass',
  },
  description:
    'Corepass is an all-in-one loan-origination platform that helps private and hard-money lenders close deals faster, cut costs, and scale without adding staff.',
}

const adell = localFont({
  src: [
    {
      path: '../fonts/adelle_400.otf',
      weight: '400',
    },
    {
      path: '../fonts/adelle_500.otf',
      weight: '500',
    },
    {
      path: '../fonts/adelle_600.otf',
      weight: '600',
    },
  ],
  display: 'swap',
  variable: '--font-adelle',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        adell.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
