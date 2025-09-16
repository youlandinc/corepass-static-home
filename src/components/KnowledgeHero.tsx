import Link from 'next/link'
import { LOGIN_URL } from '@/constant'
import BRAND_1 from '@/images/brands/brand-1.svg'
import BRAND_2 from '@/images/brands/brand-2.svg'
import BRAND_3 from '@/images/brands/brand-3.svg'
import BRAND_4 from '@/images/brands/brand-4.svg'
import BRAND_5 from '@/images/brands/brand-5.svg'
import BRAND_6 from '@/images/brands/brand-6.svg'
import Image from 'next/image'
import { Hero } from '@/components/Hero'

export const KnowledgeHero = () => {
  return (
    <Hero
      category={
        <div className={'mx-auto flex flex-row items-center gap-[10px]'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
          >
            <rect x="1" y="0.5" width="27" height="27" rx="6.5" fill="white" />
            <rect
              x="1"
              y="0.5"
              width="27"
              height="27"
              rx="6.5"
              stroke="#D2D6E1"
            />
            <path
              d="M10.6748 10.1748C10.6748 11.282 11.1146 12.3439 11.8976 13.1268C12.6805 13.9098 13.7424 14.3496 14.8496 14.3496C15.9568 14.3496 17.0187 13.9098 17.8016 13.1268C18.5846 12.3439 19.0244 11.282 19.0244 10.1748C19.0244 9.06758 18.5846 8.0057 17.8016 7.22277C17.0187 6.43984 15.9568 6 14.8496 6C13.7424 6 12.6805 6.43984 11.8976 7.22277C11.1146 8.0057 10.6748 9.06758 10.6748 10.1748Z"
              fill="#1DAFCD"
            />
            <path
              d="M10.6748 18.5244C10.6748 19.6316 11.1146 20.6935 11.8976 21.4764C12.6805 22.2594 13.7424 22.6992 14.8496 22.6992C15.9568 22.6992 17.0187 22.2594 17.8016 21.4764C18.5846 20.6935 19.0244 19.6316 19.0244 18.5244C19.0244 17.4172 18.5846 16.3553 17.8016 15.5724C17.0187 14.7895 15.9568 14.3496 14.8496 14.3496C13.7424 14.3496 12.6805 14.7895 11.8976 15.5724C11.1146 16.3553 10.6748 17.4172 10.6748 18.5244Z"
              fill="#1DAFCD"
            />
            <path
              d="M14.8496 14.3496C14.8496 15.4568 15.2895 16.5187 16.0724 17.3016C16.8553 18.0846 17.9172 18.5244 19.0244 18.5244C20.1316 18.5244 21.1935 18.0846 21.9764 17.3016C22.7594 16.5187 23.1992 15.4568 23.1992 14.3496C23.1992 13.2424 22.7594 12.1805 21.9764 11.3976C21.1935 10.6146 20.1316 10.1748 19.0244 10.1748C17.9172 10.1748 16.8553 10.6146 16.0724 11.3976C15.2895 12.1805 14.8496 13.2424 14.8496 14.3496Z"
              fill="#45DFFF"
            />
            <path
              d="M6.5 14.3496C6.5 15.4568 6.93984 16.5187 7.72277 17.3016C8.5057 18.0846 9.56758 18.5244 10.6748 18.5244C11.782 18.5244 12.8439 18.0846 13.6268 17.3016C14.4098 16.5187 14.8496 15.4568 14.8496 14.3496C14.8496 13.2424 14.4098 12.1805 13.6268 11.3976C12.8439 10.6146 11.782 10.1748 10.6748 10.1748C9.56758 10.1748 8.5057 10.6146 7.72277 11.3976C6.93984 12.1805 6.5 13.2424 6.5 14.3496Z"
              fill="#45DFFF"
            />
            <path
              d="M14.8496 14.3496C12.544 14.3496 10.6748 12.4805 10.6748 10.1748C12.9805 10.1748 14.8496 12.044 14.8496 14.3496ZM19.0244 10.1748C19.0244 12.4805 17.1553 14.3496 14.8496 14.3496C14.8496 12.044 16.7188 10.1748 19.0244 10.1748ZM14.8496 14.3496C14.8496 16.6553 12.9805 18.5244 10.6748 18.5244C10.6748 16.2188 12.544 14.3496 14.8496 14.3496ZM19.0244 18.5244C16.7188 18.5244 14.8496 16.6553 14.8496 14.3496C17.1553 14.3496 19.0244 16.2188 19.0244 18.5244Z"
              fill="white"
              fill-opacity="0.6"
            />
            <path
              d="M19.0244 18.5244C16.7188 18.5244 14.8496 16.6553 14.8496 14.3496C17.1553 14.3496 19.0244 16.2188 19.0244 18.5244ZM14.8496 14.3496C14.8496 12.044 16.7188 10.1748 19.0244 10.1748C19.0244 12.4805 17.1553 14.3496 14.8496 14.3496ZM14.8496 14.3496C14.8496 16.6553 12.9805 18.5244 10.6748 18.5244C10.6748 16.2188 12.544 14.3496 14.8496 14.3496ZM14.8496 14.3496C12.544 14.3496 10.6748 12.4805 10.6748 10.1748C12.9805 10.1748 14.8496 12.044 14.8496 14.3496Z"
              fill="#00839E"
            />
          </svg>
          <p
            className={
              'text-[clamp(14px,1.04vw,20px)] leading-[1.2] font-semibold italic'
            }
          >
            KnowledgeOS
          </p>
        </div>
      }
      title={
        <div
          className={`flex flex-col gap-[1.25] [&>*]:text-[clamp(32px,3.75vw,72px)] [&>*]:font-medium`}
        >
          <h1>
            Your
            <span className={'text-[#1DAFCD]'}>
              AI-Powered, Always Up-to-Date
            </span>
            <br />
            Company Brain
          </h1>
        </div>
      }
      subtitle={
        'KnowledgeOS centralizes company documents, conversations, and data sources into one searchable, AI-powered platform — automatically updating as new information flows in.'
      }
      action={
        <Link
          className="rounded-full bg-[#1DAFCD] px-4 leading-10 font-semibold text-white hover:bg-[#1DAFCD]/80"
          href={LOGIN_URL}
        >
          Try KnowledgeOS for free
        </Link>
      }
      className={
        'border-r-amber-20000 rounded-br-[120px] rounded-bl-[120px] border'
      }
    />
  )
}
