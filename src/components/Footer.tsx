import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { BookDemo } from './BookDemoForm'

import Image from 'next/image'
import { ReactNode } from 'react'

type FooterProps = {
  className?: string
  imgSrc?: string
  title?: string
  action?: ReactNode
}

export function Footer({ className, imgSrc, action }: FooterProps) {
  return (
    <footer>
      <Container
        className={clsx(
          `relative max-w-full overflow-hidden rounded-tl-[60px] rounded-tr-[60px]`,
          className,
        )}
      >
        <div className="flex flex-col gap-3 text-center [&>*]:text-white">
          <h2 className="text-5xl leading-[1.2]">
            Run Your Business Smarter With AI
          </h2>
          <p className="text-xl leading-normal">
            Automate repetitive work with Corepass so your team can focus on
            strategy and growth.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-6 pt-16">
          {action}
          <BookDemo
            label={<span>Book a demo</span>}
            className="active:text-white' cursor-pointer bg-black text-white hover:bg-black/80 hover:text-white focus:outline-hidden focus-visible:bg-black/80 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-black/80"
          />
        </div>
        <div className="flex flex-col gap-9 pt-40 pb-15">
          <Link href={'/'}>
            <Logo color={'white'} style={{ margin: '0 auto' }} />
          </Link>
          <nav className="text-sm" aria-label="quick links">
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row [&>*]:text-white [&>a]:text-sm">
              <div className={'flex flex-row gap-6'}>
                <Link
                  href={'/'}
                  className={'px-2 py-1 hover:text-[rgba(255,255,255,0.70)]'}
                  scroll
                >
                  Home
                </Link>
                <Link
                  href={'/lenders'}
                  className={'px-2 py-1 hover:text-[rgba(255,255,255,0.70)]'}
                  scroll
                >
                  LendingOS
                </Link>
                <Link
                  href={'/sales'}
                  className={'px-2 py-1 hover:text-[rgba(255,255,255,0.70)]'}
                  scroll
                >
                  SalesOS
                </Link>
              </div>
              <div className={'flex flex-row gap-6'}>
                <Link
                  scroll
                  href={'/knowledge'}
                  className={'px-2 py-1 hover:text-[rgba(255,255,255,0.70)]'}
                >
                  KnowledgeOS
                </Link>
                {/*<Link*/}
                {/*  href="/faq"*/}
                {/*  className={'px-2 py-1 hover:text-[rgba(255,255,255,0.70)]'}*/}
                {/*>*/}
                {/*  FAQ*/}
                {/*</Link>*/}
              </div>
            </div>
          </nav>
          <div className={'h-[1px] w-full bg-[#D2D6E1] lg:hidden'} />
          <div className="flex items-center xs:flex-col xs:justify-center xs:gap-3 sm:flex-row sm:gap-6">
            <p className="mt-0 text-sm text-[rgba(255,255,255,0.70)]">
              Copyright &copy; {new Date().getFullYear()} Corepass. All rights
              reserved.
            </p>
            <Link
              className="mt-0 cursor-pointer text-sm text-[rgba(255,255,255,0.70)] hover:text-white"
              href={'/legal/privacy-policy'}
            >
              Privacy Policy
            </Link>
            <Link
              className="mt-0 cursor-pointer text-sm text-[rgba(255,255,255,0.70)] hover:text-white"
              href={'/legal/terms-and-conditions'}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
        <Image
          src={imgSrc || ''}
          alt={''}
          fill
          className={'absolute inset-0 z-[-1] object-cover'}
        />
      </Container>
    </footer>
  )
}
