import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'

import { LENDERS_FAQ } from '@/constant/Lenders'

export default function Lenders() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Faqs subtitle={LENDERS_FAQ.subtitle} faqList={LENDERS_FAQ.list} />
      </main>
      <Footer />
    </>
  )
}
