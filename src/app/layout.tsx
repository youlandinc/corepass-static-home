import { type Metadata } from 'next'
import localFont from 'next/font/local'
import clsx from 'clsx'
import { Toaster } from '@/components/ui/sonner'

import '@/styles/tailwind.css'
import Head from 'next/head'

export const metadata: Metadata = {
  title: {
    template: '%s | Corepass',
    default: 'Loan Origination Platform for Private Lenders | Corepass',
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
      {/*<head>*/}
      {/*  <link rel="icon" href="/favicon.ico" sizes="any" />*/}
      {/*</head>*/}
      <body className="flex h-full flex-col">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
