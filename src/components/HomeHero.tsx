'use client'
import Link from 'next/link'

import { Hero } from '@/components/Hero'

import { LOGIN_URL } from '@/constant'
import { HeroTailHomeLender } from '@/components/HeroTailHomeLender'

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
      footer={<HeroTailHomeLender />}
    />
  )
}
