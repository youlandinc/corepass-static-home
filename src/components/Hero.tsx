'use client'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { BookDemo } from '@/components/BookDemoForm'

import { LOGIN_URL } from '@/constant'

import BRAND_1 from '@/images/brands/brand-1.svg'
import BRAND_2 from '@/images/brands/brand-2.svg'
import BRAND_3 from '@/images/brands/brand-3.svg'
import BRAND_4 from '@/images/brands/brand-4.svg'
import BRAND_5 from '@/images/brands/brand-5.svg'
import BRAND_6 from '@/images/brands/brand-6.svg'
import { FC, ReactNode } from 'react'

type HeroProps = {
  category?: ReactNode
  title?: ReactNode
  subtitle?: string
  action?: ReactNode
  footer?: ReactNode
  className?: string
}

export const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  action,
  footer,
  category,
  className,
}) => {
  return (
    <Container className={`text-center ${className}`}>
      <div className={'flex flex-col gap-[2.5]'}>
        {category}
        <div className={'flex flex-col gap-8'}>
          {title}
          <p className="mx-auto text-xl leading-normal tracking-tight text-[#334155] text-slate-700">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-x-6">
        {action}
        {/*TODO : Book a demo*/}
        <BookDemo
          className={
            'cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
          }
        />
      </div>
      {footer}
    </Container>
  )
}
