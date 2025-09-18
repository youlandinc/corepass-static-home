import Image from 'next/image'
import { clsx } from 'clsx'

import { Container } from '@/components/Container'

import SALE_PRIMARY_1 from '@/images/sales/primary/sale-primary-1.png'
import SALE_PRIMARY_2 from '@/images/sales/primary/sale-primary-2.png'
import SALE_PRIMARY_3 from '@/images/sales/primary/sale-primary-3.png'
import SALE_PRIMARY_4 from '@/images/sales/primary/sale-primary-4.png'

const list = [
  {
    image: SALE_PRIMARY_1,
    title: 'AI-Powered Prospecting And Research',
    subtitle:
      'An AI teammate that finds the right info online—at scale, and always up to date.',
    desc: [
      {
        title: 'Flexible by design',
        content:
          'Research a potential customer, uncover what an investor tends to fund, or gather context on a partner — the AI adapts to whatever you need.',
      },
      {
        title: 'Saves you hours',
        content:
          'Instead of Googling and scrolling manually, it researches dozens or even hundreds of prospects at once, delivering results in seconds.',
      },
      {
        title: 'Always current',
        content:
          'The AI pulls directly from the latest information on the web, so your team never works with stale data.',
      },
    ],
  },
  {
    image: SALE_PRIMARY_2,
    title: 'Personalized Outreach At Scale',
    subtitle:
      'Crafted messages that feel like they were written just for them.',
    desc: [
      {
        title: 'Understands psychology',
        content:
          'Identifies what motivates each person based on profile and research — growth, efficiency, recognition — and adapts the message to fit.',
      },
      {
        title: 'Tailored for impact',
        content:
          'Crafts subject lines, body copy, and calls-to-action that feel personal, not generic.',
      },
      {
        title: 'Perfectly timed',
        content:
          'Suggests the best moments to reach out and follows up with the right cadence to maximize replies.',
      },
    ],
  },
  {
    image: SALE_PRIMARY_3,
    title: 'Intent-Based Lead Scoring',
    subtitle: 'Know who’s ready to buy — and who’s not worth the chase.',
    desc: [
      {
        title: 'Understands buyer intent',
        content:
          'Detects signals like funding events, role changes, website activity, or engagement patterns that reveal interest.',
      },
      {
        title: 'Ranks & prioritizes automatically',
        content:
          'Scores leads based on fit and intent, pushing the hottest prospects to the top of your list.',
      },
      {
        title: 'Adapts in real time',
        content:
          'As new data comes in, rankings adjust instantly so your reps always focus on the most promising opportunities.',
      },
    ],
  },
  {
    image: SALE_PRIMARY_4,
    title: 'Multi-Channel Sequences',
    subtitle: 'Coordinate outreach across every step of the journey.',
    desc: [
      {
        title: 'One flow, many touchpoints',
        content:
          'Orchestrates messages across email, LinkedIn, calls, and more as part of a single sequence.',
      },
      {
        title: 'Consistent & personalized',
        content:
          'Ensures every touchpoint feels connected and relevant — no disjointed messaging.',
      },
      {
        title: 'Smart orchestration',
        content:
          'Adapts timing, channel, and next steps automatically based on prospect behavior.',
      },
    ],
  },
]

export const SalePrimaryFeatures = () => {
  return (
    <section className={'w-full overflow-x-hidden'}>
      <Container className={''}>
        <div className={'max-w-[1280px] text-center'}>
          <h2 className={'text-5xl leading-[1.2] font-medium'}>
            Run your entire sales outreach workflow in one place
          </h2>
          <p className={'mt-6'}>
            SalesOS replaces manual prospecting, disconnected data enrichment
            tools, and fragmented outreach software with a single AI-driven
            platform.
          </p>
        </div>

        <ul className={'relative mt-40 flex w-full flex-col gap-y-[160px]'}>
          {list.map((section, index) => (
            <li
              key={`${section.title}-${index}`}
              className={'relative z-[10] flex flex-col gap-y-[160px]'}
            >
              <div
                className={clsx(
                  'flex flex-col-reverse items-center gap-x-[60px] gap-y-6 xs:flex-col xl:flex-row',
                )}
              >
                <div
                  className={clsx(
                    index % 2 === 0 ? 'xl:order-first' : 'xl:order-last',
                    'relative shrink-0 xs:order-first xs:w-full xl:w-[40.625%]',
                  )}
                >
                  <Image src={section.image} alt={''} objectFit={'cover'} />
                </div>
                <div
                  className={clsx(
                    index % 2 === 0 ? 'order-last' : 'order-first',
                    'shrink-0 xs:w-full xl:w-[53.125%]',
                  )}
                >
                  <h3 className={'text-[40px] leading-[1.2] font-medium'}>
                    {section.title}
                  </h3>
                  <p className={'mt-6 text-[20px]'}>{section.subtitle}</p>

                  <ul className={'mt-3 flex list-disc flex-col gap-y-3 pl-4'}>
                    {section.desc.map((intro, introIndex) => (
                      <li key={`${intro.title}-${introIndex}`}>
                        <p className={'text-[18px]'}>{intro.title}</p>
                        <p className={'text-[18px] text-[#636A7C]'}>
                          {intro.content}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < list.length - 1 && (
                <div className="h-[2px] bg-gradient-to-r from-[#F2F0FF] via-[#E2DDFE] to-[#F6F5FD]" />
              )}
            </li>
          ))}

          <div className="absolute top-[50%] right-[-36vw] h-[40vw] w-[40vw] rounded-[50%] bg-[linear-gradient(48deg,rgba(252,178,255,0.08)_24.95%,rgba(133,86,240,0.11)_96.76%)] blur-[50px]" />

          <div className="absolute top-[200px] left-[-20vw] h-[40vw] w-[40vw] rounded-[50%] bg-[linear-gradient(48deg,rgba(252,178,255,0.08)_24.95%,rgba(133,86,240,0.11)_96.76%)] blur-[50px]" />
        </ul>
      </Container>
    </section>
  )
}
