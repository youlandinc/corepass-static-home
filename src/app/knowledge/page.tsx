import { Header } from '@/components/Header'
import { KnowledgeHero } from '@/components/knowledge/KnowledgeHero'
import { Footer } from '@/components/Footer'
import { KnowledgeFutureOfTeam } from '@/components/knowledge/KnowledgeFutureOfTeam'
import { KnowledgeBuiltTeams } from '@/components/knowledge/KnowledgeBuiltTeams'
import { Testimonials } from '@/components/Testimonials'
import { Faqs } from '@/components/Faqs'

import { KNOWLEDGE_FAQ, KNOWLEDGE_TESTIMONIALS } from '@/constant/Knowledge'

import BG_IMG from '@/images/knowledge/footer/Knowledge-footer.svg'

export default function Knowledge() {
  return (
    <>
      <Header
        btnClassName={'bg-[#1DAFCD] hover:bg-[#1DAFCD]/80'}
        fillColor={'#202939'}
      />
      <main>
        <KnowledgeHero />
        <KnowledgeFutureOfTeam />
        <section className={'overflow-hidden'}>
          <KnowledgeBuiltTeams />
          <section className={'relative z-[1] w-full overflow-hidden'}>
            <Testimonials
              title={KNOWLEDGE_TESTIMONIALS.title}
              subtitle={KNOWLEDGE_TESTIMONIALS.subtitle}
              testimonials={KNOWLEDGE_TESTIMONIALS.list}
            />
          </section>
        </section>
        <Faqs subtitle={KNOWLEDGE_FAQ.subtitle} faqList={KNOWLEDGE_FAQ.list} />
      </main>
      <Footer imgSrc={BG_IMG} />
    </>
  )
}
