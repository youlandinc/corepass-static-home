import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/PowerfulSolutions'
import { KNOWLEDGE_FUTURE_OF_TEAM } from '@/constant/Knowledge'

import Image from 'next/image'

export const KnowledgeFutureOfTeam = () => {
  return (
    <Container className={''}>
      <SectionHeader
        title={'The Future of Team Intelligence'}
        subtitle={
          'Organize knowledge, integrate systems, and uncover insights instantly'
        }
      />
      <div className={'flex w-full flex-row flex-wrap gap-10 pt-20'}>
        {KNOWLEDGE_FUTURE_OF_TEAM.map((item, index) => (
          <div
            key={index}
            className={
              'flex max-w-[calc(50%-40px)] flex-col rounded-[48px] border border-[#D2D6E1] bg-[rgba(217,237,246,0.20)] px-12 pt-12'
            }
          >
            <p className={'text-[clamp(20px,1.875vw,36px)]'}>{item.title}</p>
            <ul className={'list-disc pt-6 pl-5'}>
              {item.list.map((text, j) => (
                <li key={j}>{text}</li>
              ))}
            </ul>
            <div className={'relative mt-auto'}>
              <Image src={item.img} alt={''} className={'block'} />
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}
