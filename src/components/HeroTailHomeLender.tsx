import Image from 'next/image'

import BRAND_1 from '@/images/brands/brand-1.svg'
import BRAND_2 from '@/images/brands/brand-2.svg'
import BRAND_3 from '@/images/brands/brand-3.svg'
import BRAND_4 from '@/images/brands/brand-4.svg'
import BRAND_5 from '@/images/brands/brand-5.svg'
import BRAND_6 from '@/images/brands/brand-6.svg'

export const HeroTailHomeLender = () => {
  return (
    <div className="mt-30">
      <p className="font-display text-base text-slate-900">
        Trusted by leading companies
      </p>
      <ul
        role="list"
        className="mt-8 flex items-center justify-center gap-x-25 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-25 xl:gap-y-0"
      >
        {[
          [
            { name: '1 Sharpe', logo: BRAND_1 },
            { name: 'PML', logo: BRAND_2 },
            { name: 'YouLand', logo: BRAND_3 },
          ],
          [
            { name: 'Alameda', logo: BRAND_4 },
            { name: 'Attune', logo: BRAND_5 },
            { name: 'Phoenix', logo: BRAND_6 },
          ],
        ].map((group, groupIndex) => (
          <li key={groupIndex}>
            <ul
              role="list"
              className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-25 sm:gap-y-0"
            >
              {group.map((company) => (
                <li key={company.name} className="flex">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    unoptimized
                    quality={100}
                  />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}
