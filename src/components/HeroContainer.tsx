import { FC, PropsWithChildren } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

type HeroContainerProps = {
  bgSrc?: string
  className?: string
}
export const HeroContainer: FC<PropsWithChildren<HeroContainerProps>> = ({
  bgSrc,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        'relative lg:rounded-br-[120px] lg:rounded-bl-[120px]',
        className,
      )}
    >
      <Image
        src={bgSrc || ''}
        alt={''}
        fill
        className={'absolute inset-0 z-[-1] object-cover'}
      />
      {children}
    </div>
  )
}
