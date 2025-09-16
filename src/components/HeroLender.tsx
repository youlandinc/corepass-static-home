import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { BookDemo } from '@/components/BookDemoForm'

import { LOGIN_URL } from '@/constant'

import LENDER_ICON from '@/images/lender/hero/lender-icon.svg'

import BRAND_1 from '@/images/brands/brand-1.svg'
import BRAND_2 from '@/images/brands/brand-2.svg'
import BRAND_3 from '@/images/brands/brand-3.svg'
import BRAND_4 from '@/images/brands/brand-4.svg'
import BRAND_5 from '@/images/brands/brand-5.svg'
import BRAND_6 from '@/images/brands/brand-6.svg'

export const HeroLender = () => {
  return (
    <Container className="py-40 text-center">
      <div className={'relative flex flex-row justify-center gap-x-2'}>
        <Image src={LENDER_ICON} alt={''} width={29} height={29} unoptimized />
        <p className={'font-semi text-[20px]'}>LendingOS</p>
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
        LendingOS gives lenders the tools to close more deals, cut overhead, and
        compete at scale—without hiring a bigger team.
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
      <div className="mt-30">
        <p className="font-display text-base leading-[1.75] text-slate-900">
          Trusted by leading companies
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-25 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-25 xl:gap-y-0"
        >
          {[
            [
              { name: '1 Sharpe', logo: BRAND_1 },
              { name: 'PML', logo: BRAND_2 },
              { name: 'YouLand', logo: BRAND_3 },
            ],
            [
              { name: 'Alameda', logo: BRAND_4 },
              { name: 'Attune', logo: BRAND_5 },
              { name: 'Phoenix', logo: BRAND_6 },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-25 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      unoptimized
                      quality={100}
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
