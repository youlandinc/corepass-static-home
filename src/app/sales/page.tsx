import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'

import { SALES_FAQ, SALES_TESTIMONIALS } from '@/constant/Sales'

export default function Sales() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Testimonials
          title={SALES_TESTIMONIALS.title}
          subtitle={SALES_TESTIMONIALS.subtitle}
          testimonials={SALES_TESTIMONIALS.list}
        />
        <Faqs subtitle={SALES_FAQ.subtitle} faqList={SALES_FAQ.list} />
      </main>
      <Footer />
    </>
  )
}
