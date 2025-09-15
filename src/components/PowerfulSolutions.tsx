'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import SALES_ICON from '@/images/home/powerful_solutions_sales.svg'
import LENDING_ICON from '@/images/home/powerful_solutions_lending.svg'
import KNOWLEDGE_ICON from '@/images/home/powerful_solutions_knowledge.svg'

import { Container } from '@/components/Container'

type ProductIndicatorProps = {
  label: string
  icon: string
  className?: string
  labelClassName?: string
}

const ProductIndicator: FC<ProductIndicatorProps> = ({
  label,
  icon,
  className,
  labelClassName,
}) => {
  return (
    <div
      className={`flex w-[fit-content] flex-row gap-2 rounded-full  px-4 py-2 ${className}`}
    >
      <Image src={icon} alt="" quality={100} sizes="16px" unoptimized />
      <p className={`indicatorLabel text-[12px] ${labelClassName}`}>{label}</p>
    </div>
  )
}

type SwipeCardProps = {
  image: string
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
      className={`group border-color-[#D2D6E1] w-full max-w-[600px] flex-col rounded-[48px] border ${className}`}
    >
      <Image src={image} alt="" quality={100} sizes="16px" unoptimized />
      <div className="flex flex-col px-12 pb-18">
        {indicator}
        {title}
        {description}
      </div>
    </div>
  )
}

export function PowerfulSolutions() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="One Platform, Three Powerful Solutions"
      className="relative overflow-hidden py-40"
    >
      {/*  <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        quality={100}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="md:mx-auto md:text-center xl:max-w-none">
          <p className="mx-auto mt-6 max-w-[700px] text-lg leading-6 font-semibold tracking-tight text-blue-600 italic">
            The Corepass AI platform
          </p>
          <h2 className="mx-auto mt-6 font-display font-medium tracking-tight xs:text-3xl lg:text-5xl">
            One Platform, Three Powerful Solutions
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-lg leading-6 tracking-tight">
            Built for the most operationally heavy parts of your business
          </p>
        </div>
        <Swiper
          spaceBetween={48}
          slidesPerView={2.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <SwipeCard
              indicator={
                <ProductIndicator
                  label={'Sales OS'}
                  icon={SALES_ICON}
                  className="group-hover:bg-white bg-[#6D4FFB]"
                  labelClassName="group-hover:text-[#6D4FFB] text-white"
                />
              }
              image={SALES_ICON}
              title={
                <div className="flex flex-col">
                  <h3 className="text-[32px]">Book More Meetings,</h3>
                  <h3 className="text-[32px]">With Less Manual Work</h3>
                </div>
              }
              description={
                <div className="flex flex-col gap-3">
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
              className='hover:bg-[#6D4FFB]'
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeCard
              indicator={
                <ProductIndicator label={'Lending OS'} icon={LENDING_ICON} />
              }
              image=""
              title={
                <div className="flex flex-col">
                  <h3 className="text-[32px]">Book More Meetings,</h3>
                  <h3 className="text-[32px]">With Less Manual Work</h3>
                </div>
              }
              description={
                <div className="flex flex-col gap-3">
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
            />
          </SwiperSlide>
          <SwiperSlide>
            <SwipeCard
              indicator={
                <ProductIndicator
                  label={'Knowledge OS'}
                  icon={KNOWLEDGE_ICON}
                />
              }
              image=""
              title={
                <div className="flex flex-col">
                  <h3 className="text-[32px]">Book More Meetings,</h3>
                  <h3 className="text-[32px]">With Less Manual Work</h3>
                </div>
              }
              description={
                <div className="flex flex-col gap-3">
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
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  )
}
