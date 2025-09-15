import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'

import {
  LENDERS_CALL,
  LENDERS_FAQ,
  LENDERS_TESTIMONIALS,
} from '@/constant/Lenders'
import { CallToAction } from '@/components/CallToAction'

export default function Lenders() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CallToAction
          title={LENDERS_CALL.title}
          subtitle={LENDERS_CALL.subtitle}
          action={<Button>123</Button>}
        />
        <Testimonials
          title={LENDERS_TESTIMONIALS.title}
          subtitle={LENDERS_TESTIMONIALS.subtitle}
          testimonials={LENDERS_TESTIMONIALS.list}
        />
        <Faqs subtitle={LENDERS_FAQ.subtitle} faqList={LENDERS_FAQ.list} />
      </main>
      <Footer />
    </>
  )
}
