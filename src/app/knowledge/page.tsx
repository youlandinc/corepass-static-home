import { Header } from '@/components/Header'
import { KnowledgeHero } from '@/components/KnowledgeHero'
import { Footer } from '@/components/Footer'

import { HeaderLogo } from '@/images/knowledge/HeaderLogo'
import { KnowledgeFutureOfTeam } from '@/components/KnowledgeFutureOfTeam'
import { KnowledgeBuiltTeams } from '@/components/KnowledgeBuiltTeams'
import { Faqs } from '@/components/Faqs'
import { KNOWLEDGE_FAQ, KNOWLEDGE_TESTIMONIALS } from '@/constant/Knowledge'
import { Testimonials } from '@/components/Testimonials'

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
        <KnowledgeBuiltTeams />
        <section className={'relative z-[1] w-full overflow-hidden'}>
          <Testimonials
            title={KNOWLEDGE_TESTIMONIALS.title}
            subtitle={KNOWLEDGE_TESTIMONIALS.subtitle}
            testimonials={KNOWLEDGE_TESTIMONIALS.list}
          />
        </section>
        <Faqs subtitle={KNOWLEDGE_FAQ.subtitle} faqList={KNOWLEDGE_FAQ.list} />
      </main>
      <Footer className={'bg-[#1DAFCD]'} />
    </>
  )
}
