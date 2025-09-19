import Link from 'next/link'
import Image from 'next/image'

import { LOGIN_URL } from '@/constant'

import { BookDemo } from '@/components/BookDemoForm'
import { Container } from '@/components/Container'
import { HeroContainer } from '@/components/HeroContainer'

import KNOWLEDGE_ICON from '@/images/knowledge/hero/knowledge-icon.svg'
import BG_IMG from '@/images/knowledge/hero/knowledge-bg.svg'

export const KnowledgeHero = () => {
  return (
    <HeroContainer
      bgSrc={BG_IMG}
      className={'overflow-hidden lg:rounded-br-[120px] lg:rounded-bl-[120px]'}
    >
      <section>
        <Container className={`text-center`}>
          <div className={'flex flex-col gap-2.5'}>
            <div className={'mx-auto flex flex-row items-center gap-[10px]'}>
              <Image
                src={KNOWLEDGE_ICON}
                alt={''}
                width={29}
                height={29}
                unoptimized
              />
              <p
                className={
                  'text-[clamp(14px,1.04vw,20px)] leading-[1.4] font-semibold italic'
                }
              >
                KnowledgeOS
              </p>
            </div>
            <div className={'flex flex-col gap-8'}>
              <div
                className={`flex flex-col leading-[1.1] tracking-[-1.8px] [&>*]:text-[clamp(32px,3.75vw,72px)] [&>*]:font-medium`}
              >
                <h1>
                  Your{' '}
                  <span className={'text-[#1DAFCD]'}>
                    AI-Powered, Always Up-to-Date
                  </span>
                  <br />
                  Company Brain
                </h1>
              </div>
              <p className="mx-auto text-xl leading-normal tracking-tight text-[#334155] text-slate-700">
                KnowledgeOS centralizes company documents, conversations, and
                data sources into one searchable, AI-powered platform —
                automatically updating as new information flows in.
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-x-6">
            {/*TODO : Book a demo*/}
            <BookDemo
              className={
                'cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
              }
            />
          </div>
        </Container>
      </section>
    </HeroContainer>
  )
}
