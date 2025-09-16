import Image from 'next/image'
import Link from 'next/link'

import { LOGIN_URL } from '@/constant'

import { Container } from '@/components/Container'
import { BookDemo } from '@/components/BookDemoForm'
import { HeroTailSale } from '@/components/HeroTailSale'

import SALE_ICON from '@/images/sales/hero/sale-icon.svg'

export const SaleHero = () => {
  return (
    <Container className="max-w-full rounded-b-[120px] bg-gradient-to-b from-[rgba(249,250,252,0.52)] to-[rgba(233,220,247,0.52)] py-40 text-center">
      <div className={'relative flex flex-row justify-center gap-x-2'}>
        <Image src={SALE_ICON} alt={''} width={28} height={28} unoptimized />
        <p className={'font-semi text-[20px]'}>SalesOS</p>
      </div>
      <h1 className="font-semi mx-auto mt-3 max-w-5xl font-display text-3xl tracking-tight text-slate-900 xsm:text-4xl lg:text-7xl">
        <span className="bg-gradient-to-r from-[#794BF5] to-[#F5BCC4] bg-clip-text text-transparent">
          AI-Powered
        </span>{' '}
        Sales Automation
      </h1>
      <p className="mx-auto mt-8 max-w-[900px] text-[20px] leading-normal tracking-tight text-[#334155]">
        SalesOS gives go-to-market teams the tools to find, enrich, and engage
        leads automatically—so your reps focus on closing, not data entry.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Link
          className="rounded-full bg-blue-600 px-4 leading-10 font-semibold text-white"
          href={LOGIN_URL}
        >
          Try LendingOS for free
        </Link>
        <BookDemo
          className={
            'cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
          }
        />
      </div>
      <HeroTailSale />
    </Container>
  )
}
