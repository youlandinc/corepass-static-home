'use client'

import { FC, ReactNode, useMemo, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { useRouter } from 'next/navigation'

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
import clsx from 'clsx'
import { SectionHeader } from '@/components/SectionHeader'

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
  type: 'sales' | 'lending' | 'knowledge'
  path: string
}

const SwipeCard: FC<SwipeCardProps> = ({
  image,
  title,
  description,
  indicator,
  className,
  type,
  path,
}) => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push(path)}
      className={clsx(
        `group border-color-[#D2D6E1] border-radius-breakpoint flex min-h-[870px] cursor-pointer flex-col justify-between gap-14 overflow-hidden border bg-white transition-all duration-400 xs:w-full lg:w-[500px]`,
        type === 'sales' && 'hover:bg-[#6D4FFB]',
        type === 'lending' && 'hover:bg-[#2563EB]',
        type === 'knowledge' && 'hover:bg-[#1DAFCD]',
      )}
    >
      <div
        className={
          'border-radius-breakpoint relative z-10 mx-2 mt-2 overflow-hidden bg-white transition-colors duration-400'
        }
      >
        <Image src={image} alt="" quality={100} unoptimized />
      </div>
      <div className="z-10 flex flex-col gap-6 px-12 pb-12">
        {indicator}
        {title}
        {description}
      </div>
      {/*  <span
        className={`transition-[transform .5s cubic-bezier(.65,0,.35,1)] border-radius-breakpoint absolute inset-x-0 top-[-40%] bottom-0 box-content scale-[0] duration-300 group-hover:scale-[1] bg-[${computedBgcolor}]`}
      />*/}
    </div>
  )
}

const SalesOsCard = () => {
  return (
    <SwipeCard
      path={'/sales'}
      indicator={
        <ProductIndicator
          label={'SalesOS'}
          icon={SALES_ICON}
          activeIcon={SALES_ICON_ACTIVE}
          className="bg-[#6D4FFB] group-hover:bg-white"
          labelClassName="group-hover:text-[#6D4FFB]"
        />
      }
      image={SALES_IMAGE}
      type={'sales'}
      title={
        <div className="flex flex-col group-hover:text-white">
          <h3 className="text-[32px]">Book More Meetings,</h3>
          <h3 className="text-[32px]">With Less Manual Work</h3>
        </div>
      }
      description={
        <div className="flex flex-col gap-3 group-hover:text-white">
          <p className="text-lg leading-normal">
            AI research + outreach agent finds, enriches, and contacts leads
            automatically.
          </p>
          <p className="text-lg leading-normal text-[#636A7C] group-hover:text-white">
            Book more meetings and let your team focus on closing deals—not
            prospecting
          </p>
        </div>
      }
    />
  )
}

const LendingOsCard = () => {
  return (
    <SwipeCard
      path={'/lenders'}
      type={'lending'}
      indicator={
        <ProductIndicator
          label={'LendingOS'}
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
            'ml-5.5 flex list-disc flex-col gap-3 group-hover:text-white [&>*]:text-lg [&>*]:leading-normal'
          }
        >
          <li>
            Handles borrower intake, document generation, pipeline tracking, and
            pricing automation.
          </li>
          <li>
            Connects to existing email, and document tools—no rip-and-replace
            needed.
          </li>
          <li>
            Automates repetitive steps while keeping underwriting decisions
            human-controlled.
          </li>
        </ul>
      }
    />
  )
}

const KnowledgeOsCard = () => {
  return (
    <SwipeCard
      path={'/knowledge'}
      type={'knowledge'}
      indicator={
        <ProductIndicator
          label={'KnowledgeOS'}
          icon={KNOWLEDGE_ICON}
          activeIcon={KNOWLEDGE_ICON_ACTIVE}
          className="bg-[#1DAFCD] group-hover:bg-white"
          labelClassName="group-hover:text-[#00839E] text-white"
        />
      }
      image={KNOWLEDGE_IMAGE}
      title={
        <div className="flex flex-col group-hover:text-white">
          <h3 className="text-[32px]">AI-Powered Company Brain</h3>
        </div>
      }
      description={
        <ul
          className={
            'ml-5.5 flex list-disc flex-col gap-3 leading-normal group-hover:text-white [&>*]:text-lg [&>*]:leading-normal'
          }
        >
          <li>
            Centralizes documents, Slack threads, and notes into one searchable
            hub.
          </li>
          <li>
            Syncs with Dropbox, Google Drive, and Notion in real time — no
            manual updates.
          </li>
          <li>
            AI keeps knowledge summarized, indexed, and always up to date.
          </li>
        </ul>
      }
    />
  )
}

export function PowerfulSolutions() {
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const computedShowOrHidden = (show: boolean) => {
    return show ? 'invisible opacity-0' : 'visible opacity-100'
  }

  const NavBtnDefaultStyle =
    'absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2 text-white shadow-[0_0_2px_0_rgba(17,52,227,0.10),0_10px_10px_0_rgba(17,52,227,0.10)] transition-all duration-500 hover:bg-[rgb(239,240,240)]'

  return (
    <section
      id="features"
      aria-label="One Platform, Three Powerful Solutions"
      className="overflow-hidden"
    >
      <Container className={'!pb-0'}>
        <SectionHeader
          category={'The Corepass AI platform'}
          title={'One Platform, Three Powerful Solutions'}
          subtitle={
            'Built for the most operationally heavy parts of your business'
          }
        />
      </Container>
      <Container
        className={
          '!max-w-[unset] !pt-0 !pr-0 xs:hidden lg:block lg:!pl-[clamp(24px,calc((calc(100vw-0px)-calc((calc(((min((100vw-0px),1440px))-312px)/12)*12+(24px*12))))/2),320px)] lg:pl-12'
        }
      >
        <div className={'relative'}>
          <Swiper
            spaceBetween={48}
            slidesPerView={'auto'}
            className={'xs:hidden!important mt-12 lg:block'}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            modules={[Navigation]}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            onAfterInit={(swiper) => {
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
            onResize={(swiper) => {
              // 窗口缩放时，重新计算
              setIsBeginning(swiper.isBeginning)
              setIsEnd(swiper.isEnd)
            }}
          >
            <SwiperSlide className={'!w-auto'}>
              <SalesOsCard />
            </SwiperSlide>
            <SwiperSlide className={'!w-auto'}>
              <LendingOsCard />
            </SwiperSlide>
            <SwiperSlide className={'!w-auto'}>
              <KnowledgeOsCard />
            </SwiperSlide>
          </Swiper>

          <button
            className={clsx(
              NavBtnDefaultStyle,
              'custom-prev left-8',
              computedShowOrHidden(isBeginning),
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className={'rotate-180'}
            >
              <path
                d="M27.7075 16.7074L18.7075 25.7074C18.5199 25.8951 18.2654 26.0005 18 26.0005C17.7346 26.0005 17.4801 25.8951 17.2925 25.7074C17.1049 25.5198 16.9994 25.2653 16.9994 24.9999C16.9994 24.7346 17.1049 24.4801 17.2925 24.2924L24.5863 16.9999H5C4.73478 16.9999 4.48043 16.8946 4.29289 16.7071C4.10536 16.5195 4 16.2652 4 15.9999C4 15.7347 4.10536 15.4804 4.29289 15.2928C4.48043 15.1053 4.73478 14.9999 5 14.9999H24.5863L17.2925 7.70745C17.1049 7.5198 16.9994 7.26531 16.9994 6.99995C16.9994 6.73458 17.1049 6.48009 17.2925 6.29245C17.4801 6.1048 17.7346 5.99939 18 5.99939C18.2654 5.99939 18.5199 6.1048 18.7075 6.29245L27.7075 15.2924C27.8005 15.3853 27.8742 15.4956 27.9246 15.617C27.9749 15.7384 28.0008 15.8685 28.0008 15.9999C28.0008 16.1314 27.9749 16.2615 27.9246 16.3829C27.8742 16.5043 27.8005 16.6146 27.7075 16.7074Z"
                fill="#202939"
              />
            </svg>
          </button>

          <button
            className={clsx(
              NavBtnDefaultStyle,
              'custom-next right-8',
              computedShowOrHidden(isEnd),
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M27.7075 16.7074L18.7075 25.7074C18.5199 25.8951 18.2654 26.0005 18 26.0005C17.7346 26.0005 17.4801 25.8951 17.2925 25.7074C17.1049 25.5198 16.9994 25.2653 16.9994 24.9999C16.9994 24.7346 17.1049 24.4801 17.2925 24.2924L24.5863 16.9999H5C4.73478 16.9999 4.48043 16.8946 4.29289 16.7071C4.10536 16.5195 4 16.2652 4 15.9999C4 15.7347 4.10536 15.4804 4.29289 15.2928C4.48043 15.1053 4.73478 14.9999 5 14.9999H24.5863L17.2925 7.70745C17.1049 7.5198 16.9994 7.26531 16.9994 6.99995C16.9994 6.73458 17.1049 6.48009 17.2925 6.29245C17.4801 6.1048 17.7346 5.99939 18 5.99939C18.2654 5.99939 18.5199 6.1048 18.7075 6.29245L27.7075 15.2924C27.8005 15.3853 27.8742 15.4956 27.9246 15.617C27.9749 15.7384 28.0008 15.8685 28.0008 15.9999C28.0008 16.1314 27.9749 16.2615 27.9246 16.3829C27.8742 16.5043 27.8005 16.6146 27.7075 16.7074Z"
                fill="#202939"
              />
            </svg>
          </button>
        </div>
      </Container>
      <Container className={'xs:block lg:hidden'}>
        <div className={'flex flex-col gap-12'}>
          <SalesOsCard />
          <LendingOsCard />
          <KnowledgeOsCard />
        </div>
      </Container>
    </section>
  )
}
