import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { BookDemo } from './BookDemoForm'
import { LOGIN_URL } from '@/constant'
import { FC } from 'react'
import clsx from 'clsx'

type FooterProps = {
  className?: string
}

export function Footer({ className }: FooterProps) {
  return (
    <footer>
      <Container
        className={clsx(
          `max-w-full rounded-tl-[60px] rounded-tr-[60px]`,
          className,
        )}
      >
        <div className="flex flex-col gap-3 text-center [&>*]:text-white">
          <h2 className="text-5xl leading-[1.2]">
            Run your operations with AI
          </h2>
          <p className="text-xl leading-normal">
            Automate repetitive work with Corepass so your team can focus on
            strategy and growth.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-6 pt-16 pb-12">
          <Link
            className="rounded-full bg-white px-4 leading-10 font-semibold text-[#202939]"
            href={LOGIN_URL}
          >
            Try Corepass for free
          </Link>
          <BookDemo
            label={<span>Book a demo</span>}
            className="bg-black text-white hover:bg-black/80 hover:text-white"
          />
        </div>
        <div className="pt-16">
          <Logo color={'white'} style={{ margin: '0 auto' }} />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6 [&>*]:text-sm [&>*]:text-white">
              <Link href="/lenders">For Lenders</Link>
              <Link href="/sales">For Sales</Link>
              <Link href="/#pricing">For Knowledge Base</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#pricing">FAQ</Link>
            </div>
          </nav>
        </div>
        <div className="flex items-center pt-9 pb-15 xs:flex-col xs:justify-center xs:gap-3 lg:flex-row lg:gap-6">
          <p className="mt-0 text-sm text-[rgba(255,255,255,0.70)] md:mt-6">
            Copyright &copy; {new Date().getFullYear()} Corepass. All rights
            reserved.
          </p>
          <Link
            className="mt-0 cursor-pointer text-sm text-[rgba(255,255,255,0.70)] hover:text-blue-400 md:mt-6"
            href={'/legal/privacy-policy'}
          >
            Privacy Policy
          </Link>
          <Link
            className="mt-0 cursor-pointer text-sm text-[rgba(255,255,255,0.70)] hover:text-blue-400 md:mt-6"
            href={'/legal/terms-and-conditions'}
          >
            Terms & Conditions
          </Link>
        </div>
      </Container>
    </footer>
  )
}
