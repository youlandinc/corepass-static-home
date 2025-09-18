import { FC } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'

import docImage from '@/images/home/corepassWay/doc.png'
import docImageClip from '@/images/home/corepassWay/doc-clip.png'
import trendImage from '@/images/home/corepassWay/trend-clip.png'
import iconsImage from '@/images/home/corepassWay/icons.png'
import LINEAR_IMG from '@/images/home/corepassWay/linear.png'
import LINEAR2_IMG from '@/images/home/corepassWay/linear2.png'

export const CorepassWay: FC = () => {
  return (
    <section className={'relative overflow-hidden'}>
      <Container className={'flex flex-col gap-12'}>
        <SectionHeader
          title={'AI That Works The Way You Do'}
          category={'The Corepass Way '}
          subtitle={
            'Our system centralizes your data, automates repetitive work, and adapts to your workflows—so your team can focus on closing deals, not juggling tools.'
          }
        />
        <div className={'flex gap-10 xs:flex-col xl:flex-row'}>
          <div
            className={
              'border-radius-breakpoint flex flex-col justify-between gap-14 overflow-hidden border border-[#D2D6E1] bg-white xs:w-full xl:w-1/2'
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
              className={'relative overflow-hidden pl-12 xs:hidden xl:block'}
            >
              <Image
                src={docImageClip}
                width={672}
                height={758}
                alt=""
                quality={100}
                unoptimized
                className={'object-cover object-top'}
              />
            </div>
            <div
              className={
                'relative mx-12 overflow-hidden pb-[80%] xs:block xl:hidden'
              }
            >
              <Image
                src={docImage}
                // width={672}
                // height={758}
                alt=""
                quality={100}
                unoptimized
                fill
                className={'object-cover object-top'}
              />
            </div>
          </div>
          <div
            className={
              'flex flex-col gap-10 overflow-hidden xs:w-full xl:w-1/2'
            }
          >
            <div
              className={
                'border-radius-breakpoint flex flex-col gap-3 border border-[#D2D6E1] bg-white p-12'
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
                'border-radius-breakpoint z-1 flex flex-col border border-[#D2D6E1] bg-white px-12 pt-12'
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
      <div
        className={'absolute top-[0px] left-[0px] z-[-1] h-[1953px] w-[978px]'}
      >
        <Image
          src={LINEAR_IMG}
          // width={1920}
          // height={1150}
          alt=""
          quality={100}
          unoptimized
          fill
          // className={'absolute top-0 left-[-95px]'}
        />
      </div>
      <div
        className={'absolute top-0 right-[-100px] z-[-1] h-[1953px] w-[978px]'}
      >
        <Image
          src={LINEAR2_IMG}
          // width={1920}
          // height={1150}
          alt=""
          quality={100}
          unoptimized
          fill
          // className={'absolute top-0 left-[-95px]'}
        />
      </div>
    </section>
  )
}
