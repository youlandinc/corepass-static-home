import { Header } from '@/components/Header'

import { SaleHero } from '@/components/sale/SaleHero'
import { SalePrimaryFeatures } from '@/components/sale/SalePrimaryFeatures'
import { SaleSecondaryFeature } from '@/components/sale/SaleSecondaryFeature'

import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'

import { SALES_FAQ, SALES_TESTIMONIALS } from '@/constant/Sales'

export default function Sales() {
  return (
    <>
      <Header className={'bg-slate-50'} />
      <main className={'bg-slate-50'}>
        <SaleHero />
        <SalePrimaryFeatures />
        <SaleSecondaryFeature />
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
