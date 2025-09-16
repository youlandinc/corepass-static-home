'use client'

import { FC, ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import SALES_ICON from '@/images/home/powerfullSolution/sales.svg'
import SALES_ICON_ACTIVE from '@/images/home/powerfullSolution/sales-active.svg'
import LENDING_ICON from '@/images/home/powerfullSolution/lending.svg'
import LENDING_ICON_ACTIVE from '@/images/home/powerfullSolution/lending-active.svg'
import KNOWLEDGE_ICON from '@/images/home/powerfullSolution/knowledge.svg'
import KNOWLEDGE_ICON_ACTIVE from '@/images/home/powerfullSolution/knowledge-active.svg'
import SALES_IMAGE from '@/images/home/powerfullSolution/sales-OS.png'
import LENDING_IMAGE from '@/images/home/powerfullSolution/lending-OS.png'
import KNOWLEDGE_IMAGE from '@/images/home/powerfullSolution/knowledge-OS.png'

import { Container } from '@/components/Container'

type SectionHeaderProps = {
  category?: string
  title: string
  subtitle?: string
}
export const SectionHeader: FC<SectionHeaderProps> = ({
  category,
  title,
  subtitle,
}) => {
  return (
    <div
      className={
        'mx-auto flex max-w-[900px] flex-col gap-6 120xl:max-w-[1200px] [&>*]:text-center'
      }
    >
      {category && (
        <p
          className={
            'text-[clamp(14px,1.04vw,20px)] leading-[1.2] font-semibold text-[#2563EB] italic'
          }
        >
          {category}
        </p>
      )}
      <h2 className={'text-[clamp(14px,2.5vw,48px)] leading-[1.2]'}>{title}</h2>
      {subtitle && (
        <p
          className={
            'text-[clamp(14px,1.05vw,20px)] leading-normal text-[#202939]'
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

type ProductIndicatorProps = {
  label: string
  icon: string
  className?: string
  labelClassName?: string
  activeIcon: string
}

const ProductIndicator: FC<ProductIndicatorProps> = ({
  label,
  icon,
  activeIcon,
  className,
  labelClassName,
}) => {
  return (
    <div
      className={`flex w-[fit-content] flex-row gap-2 rounded-full px-4 py-2 ${className}`}
    >
      <Image
        src={icon}
        alt=""
        quality={100}
        sizes="16px"
        unoptimized
        className={'group-hover:hidden'}
      />
      <Image
        src={activeIcon}
        alt=""
        quality={100}
        sizes="16px"
        unoptimized
        className={'hidden group-hover:block'}
      />
      <p className={`indicatorLabel text-[12px] text-white ${labelClassName}`}>
        {label}
      </p>
    </div>
  )
}

type SwipeCardProps = {
  image: StaticImageData
  title: ReactNode
  description: ReactNode
  indicator?: ReactNode
  className?: string
}

const SwipeCard: FC<SwipeCardProps> = ({
  image,
  title,
  description,
  indicator,
  className,
}) => {
  return (
    <div
      className={`group border-color-[#D2D6E1] bg-[linear-gradient(to left, red 50%, blue 50%) right] flex min-h-[964px] w-full max-w-[600px] cursor-pointer flex-col justify-between overflow-hidden rounded-[48px] border bg-size-[100%_100%] bg-position-[left] ${className}`}
    >
      <div
        className={'relative mx-2 mt-2 overflow-hidden rounded-[48px] bg-white'}
      >
        <Image src={image} alt="" quality={100} unoptimized />
      </div>
      <div className="flex flex-col px-12 pb-18">
        {indicator}
        {title}
        {description}
      </div>
    </div>
  )
}

export function PowerfulSolutions() {
  return (
    <section
      id="features"
      aria-label="One Platform, Three Powerful Solutions"
      className="overflow-hidden py-40"
    >
      <Container className={'120xl:max-w-[1600px]'}>
        <SectionHeader
          category={'The Corepass AI platform'}
          title={'One Platform, Three Powerful Solutions'}
          subtitle={
            'Built for the most operationally heavy parts of your business'
          }
        />
        <Swiper
          spaceBetween={48}
          // slidesPerView={2.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className={'mt-12'}
          breakpoints={{
            // 640: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 48,
            },
            1366: {
              slidesPerView: 3,
              spaceBetween: 48,
            },
          }}
        >
          <SwiperSlide className={'w-[500px]'}>
            <SwipeCard
              indicator={
                <ProductIndicator
                  label={'Sales OS'}
                  icon={SALES_ICON}
                  activeIcon={SALES_ICON_ACTIVE}
                  className="bg-[#6D4FFB] group-hover:bg-white"
                  labelClassName="group-hover:text-[#6D4FFB]"
                />
              }
              image={SALES_IMAGE}
              title={
                <div className="flex flex-col group-hover:text-white">
                  <h3 className="text-[32px]">Book More Meetings,</h3>
                  <h3 className="text-[32px]">With Less Manual Work</h3>
                </div>
              }
              description={
                <div className="flex flex-col gap-3 group-hover:text-white">
                  <p className="text-lg leading-normal">
                    AI research + outreach agent finds, enriches, and contacts
                    leads automatically.
                  </p>
                  <p className="text-lg leading-normal">
                    Book more meetings and let your team focus on closing
                    deals—not prospecting
                  </p>
                </div>
              }
              className="hover:bg-[#6D4FFB]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeCard
              indicator={
                <ProductIndicator
                  label={'Lending OS'}
                  icon={LENDING_ICON}
                  activeIcon={LENDING_ICON_ACTIVE}
                  className="bg-[#2563EB] group-hover:bg-white"
                  labelClassName="group-hover:text-[#2F416A]"
                />
              }
              image={LENDING_IMAGE}
              title={
                <div className="flex flex-col group-hover:text-white">
                  <h3 className="text-[32px]">AI-Powered Lending OS</h3>
                </div>
              }
              description={
                <ul
                  className={
                    'ml-5.5 list-disc group-hover:text-white [&>*]:text-lg'
                  }
                >
                  <li>
                    Handles borrower intake, document generation, pipeline
                    tracking, and pricing automation.
                  </li>
                  <li>
                    Connects to existing email, and document tools—no
                    rip-and-replace needed.
                  </li>
                  <li>
                    Automates repetitive steps while keeping underwriting
                    decisions human-controlled.
                  </li>
                </ul>
              }
              className="hover:bg-[#2563EB]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeCard
              indicator={
                <ProductIndicator
                  label={'Knowledge OS'}
                  icon={KNOWLEDGE_ICON}
                  activeIcon={KNOWLEDGE_ICON_ACTIVE}
                  className="bg-[#1DAFCD] group-hover:bg-white"
                  labelClassName="group-hover:text-[#00839E] text-white"
                />
              }
              image={KNOWLEDGE_IMAGE}
              title={
                <div className="flex flex-col group-hover:text-white">
                  <h3 className="text-[32px]">Book More Meetings,</h3>
                  <h3 className="text-[32px]">With Less Manual Work</h3>
                </div>
              }
              description={
                <div className="flex flex-col gap-3 group-hover:text-white">
                  <p className="text-lg leading-normal">
                    AI research + outreach agent finds, enriches, and contacts
                    leads automatically.
                  </p>
                  <p className="text-lg leading-normal">
                    Book more meetings and let your team focus on closing
                    deals—not prospecting
                  </p>
                </div>
              }
              className="hover:bg-[#1DAFCD]"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  )
}
