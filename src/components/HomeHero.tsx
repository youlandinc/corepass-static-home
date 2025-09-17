'use client'
import Link from 'next/link'

import { Hero } from '@/components/Hero'

import { LOGIN_URL } from '@/constant'
import { HeroTailHomeLender } from '@/components/HeroTailHomeLender'
import { BookDemo } from '@/components/BookDemoForm'
import { Container } from '@/components/Container'

export const HomeHero = () => {
  return (
    <section>
      <Container className={`relative text-center`}>
        <div className={'flex flex-col gap-2.5'}>
          <div className={'flex flex-col gap-8'}>
            <div
              className={`flex flex-col gap-[1.25] [&>*]:text-[clamp(32px,3.75vw,72px)] [&>*]:font-medium`}
            >
              <h1 className={''}>The AI Platform That Automates</h1>
              <h1>
                Your Most{' '}
                <span className={'text-[#2563EB]'}>
                  Time-Intensive Workflows
                </span>
              </h1>
            </div>
            <p className="mx-auto text-xl leading-normal tracking-tight text-[#334155] text-slate-700">
              From sales outreach to loan origination to enterprise knowledge —
              Corepass replaces manual, operational busywork with AI-driven
              automation so your team can focus on growth, not grunt work.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-x-6">
          <Link
            className="rounded-full bg-blue-600 px-4 leading-10 font-semibold text-white"
            href={LOGIN_URL}
          >
            Try Corepass for free
          </Link>
          {/*TODO : Book a demo*/}
          <BookDemo
            className={
              'cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
            }
          />
        </div>
        <HeroTailHomeLender />
        <div
          className={
            'absolute top-0 left-[50%] z-[-1] h-[567px] w-[1280px] translate-x-[-640px]'
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="930"
            height="930"
            viewBox="0 0 1133 1133"
            // preserveAspectRatio={'xMidYMid meet'}
            fill="none"
            className={
              'absolute top-[-90px] left-0 z-[-1] animate-[spin_60s_linear_infinite]'
            }
          >
            <g filter="url(#filter0_g_530_5923)">
              <circle
                cx="566.5"
                cy="566.5"
                r="394"
                stroke="url(#paint0_linear_530_5923)"
                stroke-opacity="0.46"
                stroke-width="145"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_530_5923"
                x="0"
                y="4.57764e-05"
                width="1133"
                height="1133"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="2 2"
                  numOctaves="3"
                  seed="9178"
                />
                <feDisplacementMap
                  in="shape"
                  scale="200"
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displacedImage"
                  width="100%"
                  height="100%"
                />
                <feMerge result="effect1_texture_530_5923">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
              <linearGradient
                id="paint0_linear_530_5923"
                x1="717"
                y1="324.5"
                x2="279.5"
                y2="721.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2563EB" />
                <stop offset="1" stop-color="#FCB2FF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="680"
            height="680"
            viewBox="0 0 881 881"
            // preserveAspectRatio={'xMidYMid meet'}
            fill="none"
            className={
              'absolute top-[30%] left-[55%] z-[-1] animate-[spin_20s_linear_reverse_infinite]'
            }
          >
            <g filter="url(#filter0_g_530_5924)">
              <circle
                cx="440.703"
                cy="440.397"
                r="267.5"
                transform="rotate(103.896 440.703 440.397)"
                stroke="url(#paint0_linear_530_5924)"
                stroke-opacity="0.46"
                stroke-width="145"
              />
            </g>
            <defs>
              <filter
                id="filter0_g_530_5924"
                x="0.622864"
                y="0.317062"
                width="880.16"
                height="880.16"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="2 2"
                  numOctaves="3"
                  seed="9178"
                />
                <feDisplacementMap
                  in="shape"
                  scale="200"
                  xChannelSelector="R"
                  yChannelSelector="G"
                  result="displacedImage"
                  width="100%"
                  height="100%"
                />
                <feMerge result="effect1_texture_530_5924">
                  <feMergeNode in="displacedImage" />
                </feMerge>
              </filter>
              <linearGradient
                id="paint0_linear_530_5924"
                x1="661.174"
                y1="162.348"
                x2="231.528"
                y2="553.366"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2563EB" />
                <stop offset="1" stop-color="#FCB2FF" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </Container>
    </section>
  )
}
