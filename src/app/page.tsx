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
import { HomeAnimate } from '@/components/home/HomeAnimate'

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
            <Button color={'blue'} variant={'solid'}>
              Try Corepass for free
            </Button>
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
      <Footer imgSrc={BG_IMG} title={'Run Your Business Smarter With AI'} />
    </>
  )
}
