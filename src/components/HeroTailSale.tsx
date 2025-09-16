export const HeroTailSale = () => {
  return (
    <div className="mt-30 flex flex-col gap-[32px]">
      <p className="font-display text-base text-slate-900">
        Trusted by Modern Sales Teams:
      </p>
      <ul
        className={
          'mx-auto flex flex-row items-center justify-center gap-16 font-medium text-[#33415B] italic'
        }
      >
        <li>Early-stage startups</li>
        <li>Enterprise SaaS companies</li>
        <li>Financial services firms</li>
      </ul>
    </div>
  )
}
