import { FC } from 'react'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/PowerfulSolutions'
import docImage from '@/images/home/corepassWay/doc.png'
import trendImage from '@/images/home/corepassWay/trend.png'
import iconsImage from '@/images/home/corepassWay/icons.png'
import Image from 'next/image'

// const CardContainer = () => {
//   return
// }

export const CorepassWay: FC = () => {
  return (
    <section>
      <Container className={'flex flex-col gap-12'}>
        <SectionHeader
          title={'AI That Works The Way You Do'}
          category={'The Corepass Way '}
          subtitle={
            'Our system centralizes your data, automates repetitive work, and adapts to your workflows—so your team can focus on closing deals, not juggling tools.'
          }
        />
        <div className={'flex gap-10 xs:flex-col lg:flex-row'}>
          <div
            className={
              'flex flex-col justify-between gap-3 overflow-hidden rounded-[48px] border border-[#D2D6E1] xs:w-full lg:w-1/2'
            }
          >
            <div className={'px-12 pt-12'}>
              <h4 className={'text-[clamp(20px,1.875vw,36px)] leading-normal'}>
                Centralize Everything in One Place
              </h4>
              <p
                className={
                  'text-[clamp(14px,0.9375,18px)] leading-normal text-[#636A7C]'
                }
              >
                AI thrives on centralized data—Corepass makes it effortless.
              </p>
              <ul
                className={
                  'ml-5.5 list-disc text-[clamp(14px,0.9375,18px)] text-[#636A7C]'
                }
              >
                <li>
                  Data Hub for Sales & Ops: Bring your CRM, inbox, docs, and
                  communication channels together.
                </li>
                <li>
                  3rd-Party Integrations: Works with tools your team already
                  uses—Salesforce, HubSpot, Slack, Outlook, Dropbox, Google
                  Drive.
                </li>
              </ul>
            </div>
            <div
              className={
                'relative bottom-[-80px] left-[48px] overflow-hidden pt-30'
              }
            >
              <Image
                src={docImage}
                width={672}
                height={758}
                alt=""
                quality={100}
                unoptimized
              />
            </div>
          </div>
          <div
            className={
              'flex w-1/2 flex-col gap-10 overflow-hidden xs:w-full lg:w-1/2'
            }
          >
            <div
              className={
                'flex flex-col gap-3 rounded-[48px] border border-[#D2D6E1] p-12'
              }
            >
              <h4 className={'text-[clamp(20px,1.875vw,36px)] leading-normal'}>
                Automate the Busywork,
                <br /> Keep Control of the Rest
              </h4>
              <div className={'flex flex-col gap-3 pt-8 pb-12'}>
                <p className={'text-[clamp(14px,0.9375,18px)] text-[#636A7C]'}>
                  <span className={'font-medium text-[#202939]'}>
                    AI Handles Repetition:
                  </span>{' '}
                  Prospect research, contact enrichment, email drafting,
                  follow-ups, and meeting scheduling.
                </p>
                <p className={'text-[clamp(14px,0.9375,18px)] text-[#636A7C]'}>
                  <span className={'font-medium text-[#202939]'}>
                    Human-in-the-Loop:
                  </span>{' '}
                  Reps still control tone, messaging strategy, and closing
                  calls.
                </p>
              </div>
              <div className={'relative max-w-[240px]'}>
                <Image src={iconsImage} alt="" quality={100} unoptimized />
              </div>
            </div>
            <div
              className={
                'flex flex-col rounded-[48px] border border-[#D2D6E1] px-12 pt-12'
              }
            >
              <h4 className={'text-[clamp(20px,1.875vw,36px)] leading-normal'}>
                AI That Learns and Adapts
              </h4>
              <div className={'flex flex-col gap-3 pt-8 pb-12'}>
                <p className={'text-[clamp(14px,0.9375,18px)]'}>
                  The longer you use Corepass, the better it becomes.
                </p>
                <ul
                  className={
                    'ml-6 flex list-disc flex-col gap-3 [&>li]:text-[clamp(14px,0.9375,18px)] [&>li]:text-[#636A7C]'
                  }
                >
                  <li>
                    Gets smarter with every sequence, dataset, and customer
                    interaction.
                  </li>
                  <li>
                    Learns your team’s style—improves email tone, prospect
                    targeting, and decision-making over time.
                  </li>
                </ul>
              </div>
              <div
                className={
                  'relative z-[-1] mb-[clamp(-65px,-3.385vw,-30px)] overflow-hidden pb-[55.83%]'
                }
              >
                <Image
                  className="absolute top-[100px] max-w-none"
                  src={trendImage}
                  alt=""
                  // width={1112}
                  // height={642}
                  quality={100}
                  unoptimized
                  fill
                  // objectFit={'cover'}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
