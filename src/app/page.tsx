import { Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PowerfulSolutions } from '@/components/home/PowerfulSolutions'
import { HomeHero } from '@/components/home/HomeHero'
import { CorepassWay } from '@/components/home/CorepassWay'
import { Testimonials } from '@/components/Testimonials'
import { Button } from '@/components/Button'
import { HoverMenu } from '@/components/HoverMenu'

import { HOME_CALL, HOME_TESTIMONIALS } from '@/constant/Home'

import BG_IMG from '@/images/home/footer/home-footer.svg'
import { HomeAnimate } from '@/components/home/HomeAnimate'

export const metadata: Metadata = {
  title: 'Corepass | AI That Powers Growth & Scale',
}

export default function Home() {
  return (
    <>
      <main>
        <section className={'relative overflow-hidden'}>
          <Header />
          <HomeHero />
          <PowerfulSolutions />
          <HomeAnimate />
        </section>
        <CorepassWay />
        <CallToAction
          title={HOME_CALL.title}
          subtitle={HOME_CALL.subtitle}
          action={
            <HoverMenu
              triggerElement={
                <button className="cursor-pointer rounded-full bg-blue-600 px-4 leading-10 font-semibold text-white hover:bg-blue-600/90">
                  Try Corepass for free
                </button>
              }
            />
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
          <HoverMenu
            triggerElement={
              <Button
                className={
                  'cursor-pointer bg-white font-semibold !text-[#202939] hover:!bg-[white]/90'
                }
              >
                Try Corepass for free
              </Button>
            }
          />
        }
      />
    </>
  )
}
