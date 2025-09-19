import Image from 'next/image'

import { Container } from '@/components/Container'

import SALE_SECONDARY_1 from '@/images/sales/secondary/sale-secondary-1.png'
import SALE_SECONDARY_2 from '@/images/sales/secondary/sale-secondary-2.png'
import SALE_SECONDARY_3 from '@/images/sales/secondary/sale-secondary-3.png'
import SALE_SECONDARY_4 from '@/images/sales/secondary/sale-secondary-4.png'

const list = [
  {
    image: SALE_SECONDARY_1,
    title: 'CRM Sync',
    subtitle:
      'Bi-directional sync with Salesforce, HubSpot, and others. Keep CRM clean without manual entry.',
  },
  {
    image: SALE_SECONDARY_2,
    title: 'AI Research Assistant',
    subtitle:
      'Summarize company news, prospect signals, and buying triggers instantly.',
  },
  {
    image: SALE_SECONDARY_3,
    title: 'Workflow Automation',
    subtitle:
      'Auto-create tasks in Slack, Salesforce, or Asana based on lead actions.',
  },
  {
    image: SALE_SECONDARY_4,
    title: 'Reporting & Analytics',
    subtitle:
      'Track open, reply, and meeting rates Identify best-performing messages and sequences.',
  },
]

export const SaleSecondaryFeature = () => {
  return (
    <Container
      className={
        'max-w-[1760px] rounded-[64px] bg-gradient-to-b from-[rgba(234,222,248,0.17)] via-[rgba(243,186,197,0.09)] to-[rgba(234,222,248,0.32)]'
      }
    >
      <div className={'mx-auto max-w-[1280px] text-center'}>
        <h2 className={'text-5xl leading-[1.2] font-medium'}>
          Built for high-velocity sales teams
        </h2>
        <p className={'mt-6'}>More conversations, less busywork</p>
      </div>

      <ul
        className={
          'mx-auto mt-20 flex max-w-[1280px] flex-wrap gap-x-[40px] gap-y-[40px] xs:flex-col xl:flex-row'
        }
      >
        {list.map((section, index) => (
          <li
            key={`${section.title}-${index}`}
            className={
              'flex h-[540px] flex-col justify-between gap-10 rounded-[48px] border-2 border-[var(--border,#D2D6E1)] bg-[rgba(255,255,255,0.40)] px-12 pt-12 xs:w-full xl:w-[calc(50%-20px)]'
            }
          >
            <div className={'flex flex-col gap-3'}>
              <p className={'text-[36px] text-[#202939]'}>{section.title}</p>
              <p className={'mt-6 text-[18px] text-[#202939]'}>
                {section.subtitle}
              </p>
            </div>

            <div className={'relative mt-auto overflow-hidden'}>
              <Image src={section.image} alt={''} className={'object-cover'} />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  )
}
