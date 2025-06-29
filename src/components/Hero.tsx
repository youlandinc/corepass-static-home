'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { BookDemo } from '@/components/BookDemoForm'

import BRAND_1 from '@/images/brands/brand-1.svg'
import BRAND_2 from '@/images/brands/brand-2.svg'
import BRAND_3 from '@/images/brands/brand-3.svg'
import BRAND_4 from '@/images/brands/brand-4.svg'
import BRAND_5 from '@/images/brands/brand-5.svg'
import BRAND_6 from '@/images/brands/brand-6.svg'

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-3xl font-normal tracking-tight text-slate-900 xsm:text-4xl sm:text-6xl">
        All-in-one{' '}
        <span className="relative text-3xl whitespace-nowrap text-blue-600 xsm:text-4xl sm:text-6xl">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">origination platform</span>
        </span>{' '}
        for private lenders.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Corepass gives lenders the tools to close more deals, cut overhead, and
        compete at scale—without hiring a bigger team.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        {/*TODO : Book a demo*/}
        <BookDemo
          className={
            'mt-10 cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
          }
        />
      </div>
      <div className="mt-36 lg:mt-44">
        <p className="font-display text-base text-slate-900">
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
