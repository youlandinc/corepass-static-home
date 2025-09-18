import { FaqAll } from '@/components/FaqAll'
import { Header } from '@/components/Header'
import BG_IMG from '@/images/home/footer/home-footer.svg'
import { Footer } from '@/components/Footer'

export default function Faq() {
  return (
    <>
      <Header />
      <main>
        <FaqAll />
      </main>
      <Footer imgSrc={BG_IMG} title={'Run Your Business Smarter With AI'} />
    </>
  )
}
