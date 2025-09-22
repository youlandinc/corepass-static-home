'use client'
import * as HoverCard from '@radix-ui/react-hover-card'
import { LENDING_URL, SALES_URL } from '@/constant'
import Image from 'next/image'
import SALES_ICON from '@/images/header/salesOS.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import LENDERS_ICON from '@/images/header/lendersOS.svg'
import { FC, ReactNode } from 'react'

type HoverMenuProps = {
  triggerElement: ReactNode
}

export const HoverMenu: FC<HoverMenuProps> = ({ triggerElement }) => {
  return (
    <HoverCard.Root openDelay={200} closeDelay={300}>
      <HoverCard.Trigger asChild>
        {/*  <button className="cursor-pointer rounded-lg px-2 py-1 text-sm outline-none hover:bg-slate-100 hover:text-slate-900">
          Sign in
        </button>*/}
        {triggerElement}
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
  )
}
