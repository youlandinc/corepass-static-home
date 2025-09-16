import { FC } from 'react'

import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/PowerfulSolutions'
import { KNOWLEDGE_BUILT_TEAMS } from '@/constant/Knowledge'

type ContentCardProps = {
  title: string
  subtitle: string
  className?: string
}
const ContentCard: FC<ContentCardProps> = ({ title, subtitle, className }) => {
  return (
    <div
      className={`flex flex-col gap-6 rounded-[48px] border border-[#D2D6E1] p-8 ${className}`}
    >
      <p className={'text-2xl'}>{title}</p>
      <p className={'text-xl text-[#475569]'}>{subtitle}</p>
    </div>
  )
}

export const KnowledgeBuiltTeams = () => {
  return (
    <Container className={'flex flex-col gap-20'}>
      <SectionHeader
        title={'Built for Knowledge-Driven Teams'}
        subtitle={'Turn information into an always-ready advantage'}
      />
      <div className={'flex flex-col gap-8'}>
        <div className={'flex flex-row gap-8'}>
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
  )
}
