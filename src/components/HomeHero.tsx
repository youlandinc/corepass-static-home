'use client'
import Link from 'next/link'
import Image from 'next/image'

import { Hero } from '@/components/Hero'

import { LOGIN_URL } from '@/constant'

import BRAND_1 from '@/images/brands/brand-1.svg'
import BRAND_2 from '@/images/brands/brand-2.svg'
import BRAND_3 from '@/images/brands/brand-3.svg'
import BRAND_4 from '@/images/brands/brand-4.svg'
import BRAND_5 from '@/images/brands/brand-5.svg'
import BRAND_6 from '@/images/brands/brand-6.svg'

export const HomeHero = () => {
  return (
    <Hero
      title={
        <div
          className={`flex flex-col gap-[1.25] [&>*]:text-[clamp(32px,3.75vw,72px)] [&>*]:font-medium`}
        >
          <h1 className={''}>The AI Platform That Automates</h1>
          <h1>
            Your Most{' '}
            <span className={'text-[#2563EB]'}>Time-Intensive Workflows</span>
          </h1>
        </div>
      }
      subtitle={
        'From sales outreach to loan origination to enterprise knowledge — Corepass replaces manual, operational busywork with AI-driven automation so your team can focus on growth, not grunt work.'
      }
      action={
        <Link
          className="rounded-full bg-blue-600 px-4 leading-10 font-semibold text-white"
          href={LOGIN_URL}
        >
          Try Corepass for free
        </Link>
      }
      description={'Trusted by leading companies'}
      footer={
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
      }
    />
  )
}
