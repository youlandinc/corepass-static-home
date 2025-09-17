import { FC } from 'react'

import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/PowerfulSolutions'
import { KNOWLEDGE_BUILT_TEAMS } from '@/constant/Knowledge'
import { LinearGradientCircle } from '@/components/LinearGradientCircle'
import clsx from 'clsx'

type ContentCardProps = {
  title: string
  subtitle: string
  className?: string
}
const ContentCard: FC<ContentCardProps> = ({ title, subtitle, className }) => {
  return (
    <div
      className={`border-radius-breakpoint flex flex-col gap-6 border border-[#D2D6E1] p-8 ${className}`}
    >
      <p className={'text-2xl leading-normal'}>{title}</p>
      <p className={'text-xl leading-normal text-[#475569]'}>{subtitle}</p>
    </div>
  )
}

export const KnowledgeBuiltTeams = () => {
  return (
    <section className={'relative z-[2] overflow-visible'}>
      <Container className={'flex flex-col gap-20'}>
        <SectionHeader
          title={'Built for Knowledge-Driven Teams'}
          subtitle={'Turn information into an always-ready advantage'}
        />
        <div className={'flex flex-col gap-8'}>
          <div className={'flex gap-8 xs:flex-col lg:flex-row'}>
            {KNOWLEDGE_BUILT_TEAMS.list.map((item, index) => (
              <ContentCard
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                className={'flex-1/3'}
              />
            ))}
          </div>
          <ContentCard
            title={KNOWLEDGE_BUILT_TEAMS.single.title}
            subtitle={KNOWLEDGE_BUILT_TEAMS.single.subtitle}
          />
        </div>
      </Container>
      <div
        className={clsx(
          `absolute top-[20%] left-[-840px] flex h-[950px] w-[950px] rotate-[114deg] flex-row items-center justify-center rounded-[950px] blur-[50px]`,
          `top-[unset] right-[-800px] bottom-[-240px] left-[unset] rotate-[270deg] bg-[linear-gradient(11deg,#1DAFCD_0%,#FCB2FF00_100%)]`,
        )}
      >
        <div className={'h-[610px] w-[610px] rounded-[610px] bg-[#FFF]'}></div>
      </div>
    </section>
  )
}
