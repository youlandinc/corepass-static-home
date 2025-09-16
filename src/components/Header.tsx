'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import { BookDemo } from '@/components/BookDemoForm'
import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { LOGIN_URL } from '@/constant'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in [&>*]:text-sm"
      >
        <MobileNavLink href="/lenders">For Lenders</MobileNavLink>
        <MobileNavLink href="/sales">For Sales</MobileNavLink>
        <MobileNavLink href="/knowledge">For Knowledge Base</MobileNavLink>
        <MobileNavLink href="/#pricing">Pricing</MobileNavLink>
        <MobileNavLink href="/#pricing">FAQ</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href={LOGIN_URL}>Sign in</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

type HeaderProps = ComponentPropsWithoutRef<'header'> & {
  logo?: ReactNode
  btnClassName?: string
  fillColor?: string
}

export function Header(props: HeaderProps) {
  return (
    <header className={clsx('py-10', props.className)}>
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="h-8 w-auto xs:h-6" fillColor={props.fillColor} />
            </Link>
            <div className="hidden lg:flex lg:gap-x-6 [&>*]:text-sm">
              <Link href="/lenders">For Lenders</Link>
              <Link href="/sales">For Sales</Link>
              <Link href="/knowledge">For Knowledge Base</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#pricing">FAQ</Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 lg:gap-x-8">
            <div className="[& dev]:text-sm hidden lg:block">
              <NavLink href={LOGIN_URL}>Sign in</NavLink>
            </div>
            <BookDemo
              label={
                <span>
                  Get started <span className="hidden lg:inline">today</span>
                </span>
              }
              className={props.btnClassName}
            />

            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
