import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-10 w-auto" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6 [&>*]:text-sm">
              <Link href="/#features">For Sales</Link>
              <Link href="/#testimonials">For Lending</Link>
              <Link href="/#pricing">For Knowledge Base</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/#pricing">FAQ</Link>
            </div>
          </nav>
        </div>
        <div className="flex items-center border-t border-slate-400/10 py-5 xs:flex-col xs:justify-center xs:gap-3 md:py-10 lg:flex-row lg:gap-6">
          <p className="mt-0 text-sm text-slate-500 md:mt-6">
            Copyright &copy; {new Date().getFullYear()} Corepass. All rights
            reserved.
          </p>
          <Link
            className="mt-0 cursor-pointer text-sm text-slate-500 hover:text-blue-400 md:mt-6"
            href={'/legal/privacy-policy'}
          >
            Privacy Policy
          </Link>
          <Link
            className="mt-0 cursor-pointer text-sm text-slate-500 hover:text-blue-400 md:mt-6"
            href={'/legal/terms-and-conditions'}
          >
            Terms & Conditions
          </Link>
        </div>
      </Container>
    </footer>
  )
}
