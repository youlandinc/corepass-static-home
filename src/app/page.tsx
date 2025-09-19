import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PowerfulSolutions } from '@/components/home/PowerfulSolutions'
import { HomeHero } from '@/components/home/HomeHero'
import { CorepassWay } from '@/components/home/CorepassWay'
import { Testimonials } from '@/components/Testimonials'
import { Button } from '@/components/Button'
import { HOME_CALL, HOME_TESTIMONIALS } from '@/constant/Home'

import BG_IMG from '@/images/home/footer/home-footer.svg'
import { LOGIN_URL } from '@/constant'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <title>Corepass | AI That Powers Growth & Scale</title>
      <main>
        <section className={'relative overflow-hidden'}>
          <Header />
          <HomeHero />
          <PowerfulSolutions />
          <div
            className={
              'absolute top-[120px] left-[50%] z-[-1] h-[567px] w-[1280px] translate-x-[-640px]'
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
                'absolute top-[30%] left-[50%] z-[-1] animate-[spin_20s_linear_reverse_infinite]'
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
        </section>
        <CorepassWay />
        <CallToAction
          title={HOME_CALL.title}
          subtitle={HOME_CALL.subtitle}
          action={
            <Link
              className="rounded-full bg-blue-600 px-4 leading-10 font-semibold text-white hover:bg-blue-600/90"
              href={LOGIN_URL}
              target={'_blank'}
            >
              Try Corepass for free
            </Link>
          }
        />

        <section id={'123'} className={'relative z-[1] w-full overflow-hidden'}>
          <Testimonials
            title={HOME_TESTIMONIALS.title}
            subtitle={HOME_TESTIMONIALS.subtitle}
            testimonials={HOME_TESTIMONIALS.list}
          />
        </section>
      </main>
      <Footer
        imgSrc={BG_IMG}
        title={'Run Your Business Smarter With AI'}
        action={
          <Button
            href={LOGIN_URL}
            target={'_blank'}
            className={
              'bg-white font-semibold !text-[#202939] hover:!bg-[white]/90'
            }
          >
            Try Corepass for free
          </Button>
        }
      />
    </>
  )
}
