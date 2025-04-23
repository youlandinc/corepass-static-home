import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: "What is Corepass's loan management platform?",
      answer:
        'Corepass offers a comprehensive loan management solution that includes borrower and broker portals, automated document generation, loan pipeline tracking, and a dynamic pricing engine, all aimed at enhancing operational efficiency and transparency in the lending process.',
    },
    {
      question: 'How do I get started with Corepass?',
      answer:
        'You can begin by requesting a demo or contacting our sales team through our website. We will assess your specific needs and provide a tailored onboarding experience, including training and support.',
    },
    {
      question: "How does Corepass's pricing engine work?",
      answer:
        'Our pricing engine allows you to adjust loan terms based on factors like loan type, loan-to-value (LTV) ratio, credit score, and more, without the need for complex spreadsheets, streamlining the pricing process.',
    },
  ],
  [
    {
      question:
        'Is Corepass compliant with data security and regulatory standards?',
      answer:
        'Absolutely. Corepass employs advanced encryption, role-based access controls, and regular audits to ensure data security and compliance with industry regulations, safeguarding both lender and borrower information.',
    },
    {
      question: 'Is Corepass accessible on mobile devices?',
      answer:
        "Yes, Corepass's platform is mobile-responsive, allowing users to manage loan processes and access information from anywhere, ensuring flexibility and convenience.",
    },
    {
      question: 'What customer support does Corepass provide?',
      answer:
        'Corepass offers 24/7 customer support through various channels, including an online help center, email, and phone support, along with regular system updates and training sessions.',
    },
  ],
  [
    {
      question: 'Does Corepass support multiple loan types?',
      answer:
        'Yes, The platform is configurable to meet the requirements of different lending products.',
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
