import { FC } from 'react'

type SectionHeaderProps = {
  category?: string
  title: string
  subtitle?: string
}
export const SectionHeader: FC<SectionHeaderProps> = ({
  category,
  title,
  subtitle,
}) => {
  return (
    <div
      className={
        'mx-auto flex max-w-[900px] flex-col gap-6 120xl:max-w-[1200px] [&>*]:text-center'
      }
    >
      {category && (
        <p
          className={
            'text-[clamp(14px,1.04vw,20px)] leading-[1.2] font-semibold text-[#2563EB] italic'
          }
        >
          {category}
        </p>
      )}
      <h2 className={'text-[clamp(14px,2.5vw,48px)] leading-normal'}>
        {title}
      </h2>
      {subtitle && (
        <p
          className={
            'text-[clamp(14px,1.05vw,20px)] leading-normal text-[#202939]'
          }
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
