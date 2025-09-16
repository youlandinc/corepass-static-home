import { Header } from '@/components/Header'
import { KnowledgeHero } from '@/components/KnowledgeHero'
import { Footer } from '@/components/Footer'

import { HeaderLogo } from '@/images/knowledge/HeaderLogo'
import { KnowledgeFutureOfTeam } from '@/components/KnowledgeFutureOfTeam'
import { KnowledgeBuiltTeams } from '@/components/KnowledgeBuiltTeams'
import { Faqs } from '@/components/Faqs'
import { KNOWLEDGE_FAQ } from '@/constant/Knowledge'

export default function Knowledge() {
  return (
    <>
      <Header
        logo={<HeaderLogo />}
        btnClassName={'bg-[#1DAFCD] hover:bg-[#1DAFCD]/80'}
      />
      <main>
        <KnowledgeHero />
        <KnowledgeFutureOfTeam />
        <KnowledgeBuiltTeams />
        <Faqs subtitle={KNOWLEDGE_FAQ.subtitle} faqList={KNOWLEDGE_FAQ.list} />
      </main>
      <Footer className={'bg-[#1DAFCD]'} />
    </>
  )
}
