'use client'
import { FC, ReactNode, useState } from 'react'
import Image from 'next/image'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { LENDING_URL, SALES_URL } from '@/constant'

import SALES_ICON from '@/images/header/salesOS.svg'
import LENDERS_ICON from '@/images/header/lendersOS.svg'
import clsx from 'clsx'

type HoverMenuProps = {
  triggerElement: ReactNode
}

export const HoverMenu: FC<HoverMenuProps> = ({ triggerElement }) => {
  const [open, setOpen] = useState(false)
  return (
    <div
      onMouseLeave={() => setOpen(false)}
      onMouseEnter={() => {
        setOpen(true)
        // setIsVisible(true)
      }}
      className={'relative'}
    >
      <DropdownMenu.Root open={open}>
        <DropdownMenu.Trigger asChild>
          <div
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            {triggerElement}
          </div>
        </DropdownMenu.Trigger>
        <div
          data-state={open ? 'open' : 'closed'}
          className={clsx(
            'absolute right-0 duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            open ? 'visible' : 'invisible',
          )}
        >
          <div className={'h-4'}></div>
          <div className="min-w-[180px] rounded-md bg-white px-3 py-2 shadow-[0_0_2px_0_rgba(17,52,227,0.10),0_10px_10px_0_rgba(17,52,227,0.10)]">
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
          </div>
        </div>
      </DropdownMenu.Root>
    </div>
  )
}
