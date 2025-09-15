import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PowerfulSolutions } from '@/components/PowerfulSolutions'
import { Pricing } from '@/components/Pricing'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { HomeHero } from '@/components/HomeHero'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <PowerfulSolutions />
        <SecondaryFeatures />
        <CallToAction />
        {/*<Testimonials />*/}
        <Pricing />
        {/*<Faqs />*/}
      </main>
      <Footer />
    </>
  )
}
