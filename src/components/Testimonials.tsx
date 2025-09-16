'use client'
import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

import { Container } from '@/components/Container'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

interface TestimonialsProps {
  title: string
  subtitle: string
  testimonials: {
    content: string
    auth: string
    title: string
    avatar: StaticImageData
  }[]
}

export const Testimonials: FC<TestimonialsProps> = ({
  title,
  subtitle,
  testimonials = [],
}) => {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-40"
    >
      <Container>
        <div className="max-w-[1280px] text-center">
          <h2 className="font-display text-3xl leading-[1.2] tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg tracking-tight text-slate-700">
            {subtitle}
          </p>
        </div>

        <div className="relative left-1/2 mt-20 -ml-[50vw] w-screen pt-2 lg:mt-16">
          <Carousel
            plugins={[
              AutoScroll({
                playOnInit: true,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
                stopOnFocusIn: false,
                startDelay: 0,
                speed: 1,
              }),
            ]}
            opts={{
              align: 'start',
              loop: true,
              watchDrag: false,
            }}
            className="relative w-[95%] max-w-full scale-[1.1]"
          >
            <CarouselContent className="-ml-8">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={`${testimonial.content}-${index}`}
                  className="basis-96 pl-8 lg:basis-125"
                >
                  <figure className="group relative h-auto transform rounded-[24px] border border-[#D2D6E1] bg-white p-6 transition-all duration-500 hover:bg-gradient-to-br hover:from-white hover:to-slate-50 lg:rounded-[48px]">
                    <QuoteIcon className="absolute top-6 left-6 fill-slate-100 transition-all duration-300 group-hover:fill-slate-200" />
                    <blockquote className="relative">
                      <p className="text-lg tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-800">
                        {testimonial.content}
                      </p>
                    </blockquote>
                    <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6 transition-colors duration-300 group-hover:border-slate-200">
                      <div>
                        <div className="font-display text-base text-slate-900 transition-colors duration-300 group-hover:text-slate-800">
                          {testimonial.auth}
                        </div>
                        <div className="mt-1 text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-600">
                          {testimonial.title}
                        </div>
                      </div>
                      <div className="overflow-hidden rounded-full bg-slate-50 transition-all duration-300 group-hover:bg-white">
                        <Image
                          className="h-14 w-14 object-cover"
                          src={testimonial.avatar}
                          unoptimized
                          alt=""
                          width={56}
                          quality={100}
                          height={56}
                        />
                      </div>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
