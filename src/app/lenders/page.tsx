import { Button } from '@/components/Button'

import { Header } from '@/components/Header'

import { LenderHero } from '@/components/lender/LenderHero'
import { LenderPrimaryFeatures } from '@/components/lender/LenderPrimaryFeatures'
import { LenderSecondaryFeatures } from '@/components/lender/LenderSecondaryFeatures'

import { CallToAction } from '@/components/CallToAction'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'

import {
  LENDERS_CALL,
  LENDERS_FAQ,
  LENDERS_TESTIMONIALS,
} from '@/constant/Lenders'

export default function Lenders() {
  return (
    <>
      <Header />
      <main>
        <LenderHero />
        <section className={'relative z-[1] w-full overflow-hidden'}>
          <LenderPrimaryFeatures />
          <LenderSecondaryFeatures />
          <div className="absolute top-[45%] right-[-40%] z-[9] h-[65.625vw] max-h-[1260px] min-h-[600px] w-[65.625vw] max-w-[1260px] min-w-[600px] rounded-[50%] bg-[linear-gradient(218deg,rgba(37,99,235,0.11)_20.84%,rgba(67,178,249,0.11)_87.11%)] blur-[50px]" />
        </section>
        <CallToAction
          title={LENDERS_CALL.title}
          subtitle={LENDERS_CALL.subtitle}
          action={
            <Button color={'blue'} variant={'solid'}>
              Try Corepass for free
            </Button>
          }
        />

        <section className={'relative z-[1] w-full overflow-hidden'}>
          <Testimonials
            title={LENDERS_TESTIMONIALS.title}
            subtitle={LENDERS_TESTIMONIALS.subtitle}
            testimonials={LENDERS_TESTIMONIALS.list}
          />
          <Faqs subtitle={LENDERS_FAQ.subtitle} faqList={LENDERS_FAQ.list} />
          <div className="absolute top-[10%] left-[-40%] z-[9] h-[65.625vw] max-h-[1260px] min-h-[600px] w-[65.625vw] max-w-[1260px] min-w-[600px] rounded-[50%] bg-[linear-gradient(218deg,rgba(37,99,235,0.11)_20.84%,rgba(67,178,249,0.11)_87.11%)] blur-[50px]" />
        </section>
      </main>

      <Footer />
    </>
  )
}
