'use client'
import { useRouter } from 'next/navigation'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div
      className="inline-block cursor-pointer rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      onClick={() => location.href = href}
    >
      {children}
    </div>
  )
}
