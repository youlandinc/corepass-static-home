import { FC } from 'react'
import clsx from 'clsx'

type LinearGradientCircleProps = {
  from: string
  to: string
  className?: string
}
export const LinearGradientCircle: FC<LinearGradientCircleProps> = ({
  from,
  to,
  className,
}) => {
  return (
    <div
      className={clsx(
        `absolute top-[20%] left-[-840px] flex h-[950px] w-[950px] rotate-[114deg] flex-row items-center justify-center rounded-[950px] blur-[50px]`,
        `bg-[linear-gradient(11deg,${from}_0%,${to}00_100%)]`,
        className,
      )}
    >
      <div className={'h-[610px] w-[610px] rounded-[610px] bg-[#FFF]'}></div>
    </div>
  )
}
