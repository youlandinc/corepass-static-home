'use client'

import {
  ComponentPropsWithoutRef,
  ComponentType,
  ReactNode,
  useId,
} from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

import BANNER_1 from '@/images/banner/banner-1.png'
import BANNER_2 from '@/images/banner/banner-2.png'
import BANNER_3 from '@/images/banner/banner-3.png'

import BRAND_1 from '@/images/lender/secondaryFeatures/brand-1.svg'
import BRAND_2 from '@/images/lender/secondaryFeatures/brand-2.svg'
import BRAND_3 from '@/images/lender/secondaryFeatures/brand-3.svg'
import BRAND_4 from '@/images/lender/secondaryFeatures/brand-4.svg'
import BRAND_5 from '@/images/lender/secondaryFeatures/brand-5.svg'
import BRAND_6 from '@/images/lender/secondaryFeatures/brand-6.svg'

interface Feature {
  name: ReactNode
  intro: string[]
  image: ImageProps['src']
  icon: ComponentType
  mark: string
}

const features: Array<Feature> = [
  {
    name: 'Document Tracking',
    mark: 'Document Tracking',
    intro: [
      'Never chase paperwork again',
      'Automatically track every required doc by loan type',
      'Instantly spot missing, expired, or incomplete items before they delay closing',
    ],
    image: BANNER_1,
    icon: function ReportingIcon() {
      let id = useId()
      return (
        <>
          <defs>
            <linearGradient
              id={id}
              x1="11.5"
              y1={18}
              x2={36}
              y2="15.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".194" stopColor="#fff" />
              <stop offset={1} stopColor="#6692F1" />
            </linearGradient>
          </defs>
          <path
            d="m30 15-4 5-4-11-4 18-4-11-4 7-4-5"
            stroke={`url(#${id})`}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )
    },
  },
  {
    name: 'Team Management',
    mark: 'Team Management',
    intro: [
      'Assign roles across processors, underwriters, and AEs',
      'Keep workflows clean and scalable without extra overhead',
    ],
    image: BANNER_2,
    icon: function InventoryIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M8 17a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            opacity=".3"
            d="M8 24a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
          <path
            d="M8 10a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2Z"
            fill="#fff"
          />
        </>
      )
    },
  },
  {
    name: 'Analytics',
    mark: 'Analytics',
    intro: [
      'Track loan pipeline, team output, and deal performance with built-in reporting',
      'Spot conversion drops, bottlenecks, and market trends in real time',
    ],
    image: BANNER_3,
    icon: function ContactsIcon() {
      return (
        <>
          <path
            opacity=".5"
            d="M25.778 25.778c.39.39 1.027.393 1.384-.028A11.952 11.952 0 0 0 30 18c0-6.627-5.373-12-12-12S6 11.373 6 18c0 2.954 1.067 5.659 2.838 7.75.357.421.993.419 1.384.028.39-.39.386-1.02.036-1.448A9.959 9.959 0 0 1 8 18c0-5.523 4.477-10 10-10s10 4.477 10 10a9.959 9.959 0 0 1-2.258 6.33c-.35.427-.354 1.058.036 1.448Z"
            fill="#fff"
          />
          <path
            d="M12 28.395V28a6 6 0 0 1 12 0v.395A11.945 11.945 0 0 1 18 30c-2.186 0-4.235-.584-6-1.605ZM21 16.5c0-1.933-.5-3.5-3-3.5s-3 1.567-3 3.5 1.343 3.5 3 3.5 3-1.567 3-3.5Z"
            fill="#fff"
          />
        </>
      )
    },
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-blue-600' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3 className={clsx('mt-6 text-[20px]')}>{feature.name}</h3>
      <ul className={'mt-3 list-disc pl-4'}>
        {feature.intro.map((intro, index) => (
          <li key={`${intro}-${index}`} className={'text-[#475569]'}>
            {intro}
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.mark}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 top-8 bottom-0 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
              <Image
                className="w-full"
                src={feature.image}
                alt=""
                quality={100}
                sizes="52.75rem"
                unoptimized
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.mark}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="data-selected:not-data-focus:outline-hidden">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-[#F0F4FF] px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <TabPanel
                  static
                  key={feature.mark}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out data-selected:not-data-focus:outline-hidden',
                    featureIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg ring-1 shadow-slate-900/5 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={feature.image}
                      unoptimized
                      alt=""
                      quality={100}
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-slate-900/10 ring-inset" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <h2 className="mx-auto max-w-[1280px] font-display text-3xl leading-[1.2] tracking-tight text-slate-900 md:text-center lg:text-[48px]">
          Lendingos Respects The High-Touch, Fast-Turn Nature Of Lending Teams.
        </h2>
        <FeaturesMobile />
        <FeaturesDesktop />
        <div className="mt-36 lg:mt-44">
          <p className="text-center font-display text-slate-900">
            Trusted by leading companies
          </p>
          <ul
            role="list"
            className="mt-8 flex items-center justify-center gap-x-25 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-25 xl:gap-y-0"
          >
            {[
              [
                { name: 'class valuation', logo: BRAND_1 },
                { name: 'equifax', logo: BRAND_2 },
                { name: 'hubspot', logo: BRAND_3 },
              ],
              [
                { name: 'lexisnexis', logo: BRAND_4 },
                { name: 'dropbox', logo: BRAND_5 },
                { name: 'wells fargo', logo: BRAND_6 },
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
    </section>
  )
}
