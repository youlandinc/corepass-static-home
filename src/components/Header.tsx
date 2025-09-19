'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import * as HoverCard from '@radix-ui/react-hover-card'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import { BookDemo } from '@/components/BookDemoForm'
import { ComponentPropsWithoutRef, ReactNode, useState } from 'react'
import { LOGIN_URL, SALES_URL, LENDING_URL } from '@/constant'

import SALES_ICON from '@/images/header/salesOS.svg'
import LENDERS_ICON from '@/images/header/lendersOS.svg'
import Image from 'next/image'

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
        <MobileNavLink href="/lenders">LendingOS</MobileNavLink>
        <MobileNavLink href="/sales">SalesOS</MobileNavLink>
        <MobileNavLink href="/knowledge">KnowledgeOS</MobileNavLink>
        {/*<MobileNavLink href="/faq">FAQ</MobileNavLink>*/}
        <hr className="m-2 border-slate-300/40" />
        <MobileNavLink href={''}>
          <span onClick={() => window.open(SALES_URL, '_blank')}>
            Sign in to SalesOS
          </span>
        </MobileNavLink>
        <MobileNavLink href={''}>
          <span onClick={() => window.open(LENDING_URL, '_blank')}>
            Sign in to LendingOS
          </span>
        </MobileNavLink>
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
  const [open, setOpen] = useState(false)
  return (
    <header className={clsx(props.className)}>
      <Container className={'!py-10'}>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo
                className="h-8 w-auto xs:h-6"
                color={props.fillColor || '#2563EB'}
              />
            </Link>
            <div className="hidden lg:flex lg:gap-x-6 [&>*]:text-sm">
              <Link
                href="/lenders"
                className={
                  'inline-block cursor-pointer rounded-lg px-2 py-1 text-sm hover:bg-slate-100 hover:text-slate-900'
                }
              >
                LendingOS
              </Link>
              <Link
                href="/sales"
                className={
                  'inline-block cursor-pointer rounded-lg px-2 py-1 text-sm hover:bg-slate-100 hover:text-slate-900'
                }
              >
                SalesOS
              </Link>
              <Link
                href="/knowledge"
                className={
                  'inline-block cursor-pointer rounded-lg px-2 py-1 text-sm hover:bg-slate-100 hover:text-slate-900'
                }
              >
                KnowledgeOS
              </Link>
              {/*<Link*/}
              {/*  href="/faq"*/}
              {/*  className={*/}
              {/*    'inline-block cursor-pointer rounded-lg px-2 py-1 text-sm hover:bg-slate-100 hover:text-slate-900'*/}
              {/*  }*/}
              {/*>*/}
              {/*  FAQ*/}
              {/*</Link>*/}
            </div>
          </div>
          <div className="flex items-center gap-x-5 lg:gap-x-8">
            <div className="[& dev]:text-sm hidden lg:block">
              <HoverCard.Root openDelay={200} closeDelay={300}>
                <HoverCard.Trigger asChild>
                  <button className="cursor-pointer rounded-lg px-2 py-1 text-sm outline-none hover:bg-slate-100 hover:text-slate-900">
                    Sign in
                  </button>
                </HoverCard.Trigger>
                <HoverCard.Portal>
                  <HoverCard.Content
                    className="min-w-[180px] rounded-md bg-white px-3 py-2 shadow-[0_0_2px_0_rgba(17,52,227,0.10),0_10px_10px_0_rgba(17,52,227,0.10)] duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95"
                    sideOffset={12}
                    align={'end'}
                  >
                    <div
                      className={
                        'rounded-1 flex cursor-pointer flex-row items-center gap-1 rounded-[4px] p-1 outline-none hover:bg-[#F0F4FF]'
                      }
                      onClick={() => {
                        window.open(SALES_URL, '_target')
                      }}
                    >
                      <Image src={SALES_ICON} alt={''} />
                      SalesOS
                    </div>
                    <DropdownMenu.Separator
                      className={'my-3 h-[1px] w-full bg-[#F0F4FF]'}
                    />
                    <div
                      className={
                        'rounded-1 flex cursor-pointer flex-row items-center gap-1 rounded-[4px] p-1 outline-none hover:bg-[#F0F4FF]'
                      }
                      onClick={() => {
                        window.open(LENDING_URL, '_target')
                      }}
                    >
                      <Image src={LENDERS_ICON} alt={''} />
                      LendingOS
                    </div>
                  </HoverCard.Content>
                </HoverCard.Portal>
              </HoverCard.Root>
              {/*<NavLink href={LOGIN_URL}>Sign in</NavLink>*/}
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
