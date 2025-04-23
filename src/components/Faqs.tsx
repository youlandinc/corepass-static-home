import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What is Corepass?',
      answer:
        'Corepass is a modern loan operating system for private lenders. We help you manage your entire pipeline — from borrower intake to document generation to pricing — all in one place. No more spreadsheets. No more chaos.',
    },
    {
      question: 'How do I get started with Corepass?',
      answer:
        'Just book a demo or message our team. We’ll understand your workflow, customize onboarding, and get your team live in days — not months.',
    },
    {
      question: "How does Corepass's pricing engine work?",
      answer:
        'Our dynamic pricing engine lets you set terms by loan type, LTV, credit score, and more, without needing formulas or Excel.',
    },
  ],
  [
    {
      question: 'Is Corepass secure and compliant?',
      answer:
        'Yes. Corepass uses bank-level encryption, role-based permissions, and regular audits to meet lending compliance standards and protect borrower data.',
    },
    {
      question: 'Is Corepass accessible on mobile devices?',
      answer:
        'Yes. Corepass is fully mobile-responsive, so your team can check statuses, approve deals, or upload docs on the go.',
    },
    {
      question: 'What customer support does Corepass provide?',
      answer:
        'Corepass offers 24/7 customer support through various channels, including an online help center, email, and phone support, along with regular system updates and training sessions.​',
    },
  ],
  [
    {
      question: 'Does Corepass support multiple loan types?',
      answer:
        'Yes. The platform is fully configurable to handle bridge loans, fix-and-flips, DSCRs, and any other product you offer.',
    },
    {
      question: 'Can Corepass integrate with other software systems?',
      answer:
        'Yes, Corepass offers API integrations with CRM systems, accounting software, credit scoring tools, and more, facilitating seamless data flow and enhancing operational efficiency.',
    },
    {
      question: 'How customizable is Corepass for my business needs?',
      answer:
        'Corepass is highly customizable. You can tailor the platform’s features, such as loan terms, pricing models, and document generation templates, to align with your specific business requirements and lending policies.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg/7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
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
