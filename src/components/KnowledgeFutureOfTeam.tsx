import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/PowerfulSolutions'
import { KNOWLEDGE_FUTURE_OF_TEAM } from '@/constant/Knowledge'

export const KnowledgeFutureOfTeam = () => {
  return (
    <Container className={'py-40'}>
      <SectionHeader
        title={'The Future of Team Intelligence'}
        subtitle={
          'Organize knowledge, integrate systems, and uncover insights instantly'
        }
      />
      <div className={'flex flex-row flex-wrap gap-[2.5] pt-20'}>
        {KNOWLEDGE_FUTURE_OF_TEAM.map((item, index) => (
          <div
            key={index}
            className={
              'w-[calc(50%-40px)] rounded-[48px] border border-[#D2D6E1] px-12 pt-12'
            }
          >
            <p className={'text-[clamp(20px,1.875vw,36px)]'}>{item.title}</p>
            <ul className={'list-disc pt-6 pl-5'}>
              {item.list.map((text, j) => (
                <li key={j}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}
