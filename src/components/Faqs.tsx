import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'

import backgroundImage from '@/images/background-faqs.jpg'

interface FaqsProps {
  subtitle?: string
  faqList: Array<{ q: string; a: string }>[]
}

export const Faqs: FC<FaqsProps> = ({ subtitle, faqList=[] }) => {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {subtitle}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqList.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.q}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.a}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
