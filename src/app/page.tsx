import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PowerfulSolutions } from '@/components/PowerfulSolutions'
import { HomeHero } from '@/components/HomeHero'
import { CorepassWay } from '@/components/CorepassWay'
import { Testimonials } from '@/components/Testimonials'
import { Button } from '@/components/Button'
import { HOME_CALL, HOME_TESTIMONIALS } from '@/constant/Home'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <PowerfulSolutions />
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

        <section className={'relative z-[1] w-full overflow-hidden'}>
          <Testimonials
            title={HOME_TESTIMONIALS.title}
            subtitle={HOME_TESTIMONIALS.subtitle}
            testimonials={HOME_TESTIMONIALS.list}
          />
        </section>
      </main>
      <Footer className={'bg-[#2563EA]'} />
    </>
  )
}
