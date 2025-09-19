import Image from 'next/image'
import Link from 'next/link'

import { SALES_URL } from '@/constant'

import { Container } from '@/components/Container'
import { BookDemo } from '@/components/BookDemoForm'
import { HeroTailSale } from '@/components/HeroTailSale'

import { HeroContainer } from '@/components/HeroContainer'

import SALE_ICON from '@/images/sales/hero/sale-icon.svg'
import BG_IMG from '@/images/sales/hero/sales-bg.svg'

export const SaleHero = () => {
  return (
    <HeroContainer bgSrc={BG_IMG} className={'overflow-hidden'}>
      <Container className="max-w-full text-center">
        <div className={'relative flex flex-row justify-center gap-x-2'}>
          <Image src={SALE_ICON} alt={''} width={28} height={28} unoptimized />
          <p className={'font-semi text-[20px] font-semibold italic'}>
            SalesOS
          </p>
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
            className="rounded-full bg-[#8556F0] px-4 leading-10 font-semibold text-white hover:bg-[#8556F0]/90"
            href={SALES_URL}
            target={'_blank'}
          >
            Try SalesOS for free
          </Link>
          <BookDemo
            className={
              'cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
            }
          />
        </div>
        {/*<HeroTailSale />*/}
      </Container>
    </HeroContainer>
  )
}
