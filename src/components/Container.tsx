import clsx from 'clsx'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        'mx-auto box-content max-w-7xl xs:px-3 sm:px-6 lg:px-12',
        className,
      )}
      {...props}
    />
  )
}
