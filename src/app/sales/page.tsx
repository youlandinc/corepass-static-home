import { Header } from '@/components/Header'

import { SaleHero } from '@/components/sale/SaleHero'
import { SalePrimaryFeatures } from '@/components/sale/SalePrimaryFeatures'
import { SaleSecondaryFeature } from '@/components/sale/SaleSecondaryFeature'

import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'

import { SALES_FAQ, SALES_TESTIMONIALS } from '@/constant/Sales'

import BG_IMG from '@/images/sales/footer/sales-footer.svg'
import { Button } from '@/components/Button'
import { SALES_URL } from '@/constant'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SalesOS | AI-Powered Sales Automation',
}

export default function Sales() {
  return (
    <>
      <Header
        className={'bg-slate-50'}
        fillColor={'#202939'}
        btnClassName={'bg-[#8556F0]'}
      />
      <main>
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
      <Footer
        imgSrc={BG_IMG}
        action={
          <Button
            href={SALES_URL}
            target={'_blank'}
            className={
              'bg-white font-semibold !text-[#4C357E] hover:!bg-[white]/90'
            }
          >
            Get started today
          </Button>
        }
      />
    </>
  )
}
