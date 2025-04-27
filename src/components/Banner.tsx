import clsx from 'clsx'

export function Banner({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'mx-auto w-full bg-[#F8F9FC] px-6 pb-8 lg:px-8 lg:py-20',
        className,
      )}
      {...props}
    />
  )
}
