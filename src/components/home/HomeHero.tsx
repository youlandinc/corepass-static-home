import Link from 'next/link'

import { LOGIN_URL } from '@/constant'
import { HeroTailHomeLender } from '@/components/HeroTailHomeLender'
import { BookDemo } from '@/components/BookDemoForm'
import { Container } from '@/components/Container'

export const HomeHero = () => {
  return (
    <section>
      <Container className={`!rounded-0 relative text-center`}>
        <div className={'flex flex-col gap-2.5'}>
          <div className={'flex flex-col gap-8'}>
            <div
              className={`flex flex-col gap-[1.25] [&>*]:text-[clamp(32px,3.75vw,72px)] [&>*]:font-medium`}
            >
              <h1 className={''}>The AI Platform That Automates</h1>
              <h1>
                Your Most{' '}
                <span className={'text-[#2563EB]'}>
                  Time-Intensive Workflows
                </span>
              </h1>
            </div>
            <p className="mx-auto text-xl leading-normal tracking-tight text-[#334155] text-slate-700">
              From sales outreach to loan origination to enterprise knowledge —
              Corepass replaces manual, operational busywork with AI-driven
              automation so your team can focus on growth, not grunt work.
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-x-6">
          <Link
            className="rounded-full bg-blue-600 px-4 leading-10 font-semibold text-white hover:bg-blue-600/90"
            href={LOGIN_URL}
          >
            Try Corepass for free
          </Link>
          {/*TODO : Book a demo*/}
          <BookDemo
            className={
              'cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80 active:text-white'
            }
          />
        </div>
        <HeroTailHomeLender />
      </Container>
    </section>
  )
}
