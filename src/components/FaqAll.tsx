import { Container } from './Container'
import { Faqs } from '@/components/Faqs'
import { SALES_FAQ } from '@/constant/Sales'

export const FaqAll = () => {
  return (
    <section>
      <Container>
        <div className={'flex flex-col gap-8'}>
          <h1
            className={
              'text-center text-[clamp(32px,3.75vw,72px)] leading-[1.1] font-[500]'
            }
          >
            FAQ
          </h1>
          <p className={'text-center text-[clamp(14px,1.04vw,20px)]'}>
            Find quick answers about our products — SalesOS, LendingOS, and
            KnowledgeOS — and learn how each one is designed to simplify your
            workflow.
          </p>
        </div>
      </Container>

      <Faqs title={'SalesOS'} faqList={SALES_FAQ.list} />
      <Faqs title={'LendingOS'} faqList={SALES_FAQ.list} />
      <Faqs title={'KnowledgeOS'} faqList={SALES_FAQ.list} />
    </section>
  )
}
