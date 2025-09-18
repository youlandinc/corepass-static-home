import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { KNOWLEDGE_FUTURE_OF_TEAM } from '@/constant/Knowledge'

import Image from 'next/image'
import { LinearGradientCircle } from '@/components/LinearGradientCircle'
import clsx from 'clsx'

export const KnowledgeFutureOfTeam = () => {
  return (
    <section className={'relative'}>
      <Container className={'relative'}>
        <SectionHeader
          title={'The Future of Team Intelligence'}
          subtitle={
            'Organize knowledge, integrate systems, and uncover insights instantly'
          }
        />
        <div
          className={
            'flex w-full flex-wrap gap-10 pt-20 xs:flex-col lg:flex-row'
          }
        >
          {KNOWLEDGE_FUTURE_OF_TEAM.map((item, index) => (
            <div
              key={index}
              className={
                'border-radius-breakpoint flex flex-col gap-12 border border-[#D2D6E1] bg-[rgba(217,237,246,0.20)] px-12 pt-12 lg:max-w-[calc(50%-40px)] xl:w-full'
              }
            >
              <div className={'flex flex-col gap-6'}>
                <p className={'text-[clamp(20px,1.875vw,36px)] leading-[1.2]'}>
                  {item.title}
                </p>
                <ul
                  className={
                    'flex list-disc flex-col gap-2 pl-5 leading-normal'
                  }
                >
                  {item.list.map((text, j) => (
                    <li key={j}>{text}</li>
                  ))}
                </ul>
              </div>
              <div className={'relative mx-auto mt-auto max-w-[500px]'}>
                <Image src={item.img} alt={''} className={'block'} />
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div
        className={clsx(
          `absolute top-[20%] left-[-840px] flex h-[950px] w-[950px] rotate-[114deg] flex-row items-center justify-center rounded-[950px] blur-[50px]`,
          `bg-[linear-gradient(11deg,#1DAFCD_0%,#FCB2FF00_100%)]`,
        )}
      >
        <div className={'h-[610px] w-[610px] rounded-[610px] bg-[#FFF]'}></div>
      </div>
    </section>
  )
}
