import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { BookDemo } from './BookDemoForm'
import { LOGIN_URL } from '@/constant'

import Image from 'next/image'

type FooterProps = {
  className?: string
  imgSrc?: string
  title?: string
}

export function Footer({ className, imgSrc, title }: FooterProps) {
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
            {title || 'Run your operations with AI'}
          </h2>
          <p className="text-xl leading-normal">
            Automate repetitive work with Corepass so your team can focus on
            strategy and growth.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-6 pt-16">
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
        <div className="flex flex-col gap-9 pt-40 pb-15">
          <Logo color={'white'} style={{ margin: '0 auto' }} />
          <nav className="text-sm" aria-label="quick links">
            <div className="flex items-center justify-center gap-6 xs:flex-col sm:flex-row [&>*]:text-white [&>a]:text-sm">
              <div className={'flex flex-row gap-6'}>
                <Link href="/lenders" className={'px-2 py-1'}>
                  For Lenders
                </Link>
                <Link href="/sales" className={'px-2 py-1'}>
                  For Sales
                </Link>
              </div>
              <div className={'flex flex-row gap-6'}>
                <Link href="/knowledge" className={'px-2 py-1'}>
                  For Knowledge Base
                </Link>
                <Link href="/#faq" className={'px-2 py-1'}>
                  FAQ
                </Link>
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
              className="mt-0 cursor-pointer text-sm text-[rgba(255,255,255,0.70)] hover:text-blue-400"
              href={'/legal/privacy-policy'}
            >
              Privacy Policy
            </Link>
            <Link
              className="mt-0 cursor-pointer text-sm text-[rgba(255,255,255,0.70)] hover:text-blue-400"
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
          className={'absolute inset-0 z-[-1]'}
          objectFit={'cover'}
        />
      </Container>
    </footer>
  )
}
