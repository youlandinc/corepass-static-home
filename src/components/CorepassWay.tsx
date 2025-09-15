import { FC } from 'react'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/PowerfulSolutions'
import docImage from '@/images/home/corepass_way_doc.png'
import Image from 'next/image'

export const CorepassWay: FC = () => {
  return (
    <section>
      <Container className={'flex flex-col gap-12 py-40'}>
        <SectionHeader
          title={'AI That Works The Way You Do'}
          category={'The Corepass Way '}
          subtitle={
            'Our system centralizes your data, automates repetitive work, and adapts to your workflows—so your team can focus on closing deals, not juggling tools.'
          }
        />
        <div className={'flex flex-row gap-10'}>
          <div
            className={
              'flex w-1/2 flex-col gap-3 rounded-[48px] border border-[#D2D6E1] px-12 pt-12'
            }
          >
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
                uses—Salesforce, HubSpot, Slack, Outlook, Dropbox, Google Drive.
              </li>
            </ul>
            <div className={'relative h-[758px] overflow-hidden'}>
              <Image
                className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
                src={docImage}
                alt=""
                width={672}
                height={758}
                quality={100}
                unoptimized
              />
            </div>
          </div>
          <div className={'flex w-1/2 flex-col gap-10'}>
            <div
              className={
                'flex flex-col gap-3 rounded-[48px] border border-[#D2D6E1] p-12'
              }
            >
              <h4 className={'text-[clamp(20px,1.875vw,36px)] leading-normal'}>
                Automate the Busywork,
                <br /> Keep Control of the Rest
              </h4>
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
                Reps still control tone, messaging strategy, and closing calls.
              </p>
            </div>
            <div
              className={
                'flex flex-col gap-3 rounded-[48px] border border-[#D2D6E1] p-12'
              }
            >
              <h4 className={'text-[clamp(20px,1.875vw,36px)] leading-normal'}>
                Automate the Busywork,
                <br /> Keep Control of the Rest
              </h4>
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
                Reps still control tone, messaging strategy, and closing calls.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
