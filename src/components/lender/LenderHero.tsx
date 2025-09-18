import Image from 'next/image'
import Link from 'next/link'

import { LENDING_URL, LOGIN_URL } from '@/constant'

import { Container } from '@/components/Container'
import { BookDemo } from '@/components/BookDemoForm'
import { HeroTailHomeLender } from '@/components/HeroTailHomeLender'
import { HeroContainer } from '@/components/HeroContainer'

import LENDER_ICON from '@/images/lender/hero/lender-icon.svg'
import BG_IMG from '@/images/lender/hero/lending-bg.svg'

export const LenderHero = () => {
  return (
    <HeroContainer bgSrc={BG_IMG} className={'!rounded-0'}>
      <Container className="text-center">
        <div className={'relative flex flex-row justify-center gap-x-2'}>
          <Image
            src={LENDER_ICON}
            alt={''}
            width={29}
            height={29}
            unoptimized
          />
          <p className={'font-semi text-[20px] font-semibold italic'}>
            LendingOS
          </p>
        </div>
        <h1 className="font-semi mx-auto mt-3 max-w-5xl font-display text-3xl tracking-tight text-slate-900 xsm:text-4xl lg:text-7xl">
          <p>
            AI That Powers{' '}
            <span className="bg-gradient-to-r from-[#2564EB] to-[#43AAF5] bg-clip-text text-3xl whitespace-nowrap text-transparent xsm:text-4xl sm:text-7xl">
              Faster Lending
            </span>
          </p>
          <p>
            &{' '}
            <span className="bg-gradient-to-r from-[#2564EB] to-[#43AAF5] bg-clip-text text-transparent">
              Smarter Underwriting
            </span>
          </p>
        </h1>
        <p className="mx-auto mt-8 max-w-[900px] text-[20px] leading-normal tracking-tight text-[#334155]">
          LendingOS gives lenders the tools to close more deals, cut overhead,
          and compete at scale—without hiring a bigger team.
        </p>
        <div className="mt-10 flex justify-center gap-x-6">
          <Link
            className="rounded-full bg-blue-600 px-4 leading-10 font-semibold text-white hover:bg-blue-600/90"
            href={LENDING_URL}
          >
            Try LendingOS for free
          </Link>
          <BookDemo
            className={
              'cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
            }
          />
        </div>
        <HeroTailHomeLender />
      </Container>
    </HeroContainer>
  )
}
