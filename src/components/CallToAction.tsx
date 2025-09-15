import { FC, ReactNode } from 'react'
import Image from 'next/image'

import { BookDemo } from '@/components/BookDemoForm'
import { Container } from '@/components/Container'

import backgroundImage from '@/images/background-call-to-action.jpg'

interface CallToActionProps {
  title: string
  subtitle: string
  action?: ReactNode
}

export const CallToAction: FC<CallToActionProps> = ({
  title,
  subtitle,
  action,
}) => {
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
            {title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">{subtitle}</p>
          <div>
            {action}
            <BookDemo
              className={
                'mt-10 cursor-pointer bg-white text-primary hover:bg-amber-50 hover:text-primary focus:outline-hidden focus-visible:bg-amber-50 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-amber-50 active:text-primary'
              }
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
