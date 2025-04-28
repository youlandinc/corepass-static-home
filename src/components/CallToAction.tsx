import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'
import { BookDemo } from '@/components/BookDemoForm'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        quality={100}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-[1000px] text-center">
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Corepass replaces disconnected tools and manual processes with one
            system that gives your team visibility, accountability, and speed at
            every stage of the loan lifecycle.
          </p>
          <BookDemo
            className={
              'mt-10 cursor-pointer bg-white text-primary hover:bg-amber-50 hover:text-primary focus:outline-hidden focus-visible:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-amber-50 active:text-primary'
            }
          />
        </div>
      </Container>
    </section>
  )
}
