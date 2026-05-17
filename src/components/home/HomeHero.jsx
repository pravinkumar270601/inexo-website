import { useEffect, useState } from 'react'
import heroPoster from '@/assets/hero.png'
import heroArrowRight from '@/assets/images/home/heroarrow-right.svg'

const slides = [
  {
    id: 1,
    title: 'Leading Foundry Feeding Systems Manufacturers',
    ctaLabel: 'Watch Our Video',
    videoSrc: '/videos/inexo-foundry-1.mp4',
    poster: heroPoster,
  },
  {
    id: 2,
    title: 'Precision Solutions For Modern Foundry Operations',
    ctaLabel: 'Watch Our Video',
    videoSrc: '/videos/inexo-foundry-2.mp4',
    poster: heroPoster,
  },
  {
    id: 3,
    title: 'Reliable Engineering Backed By Proven Performance',
    ctaLabel: 'Watch Our Video',
    videoSrc: '/videos/inexo-foundry-3.mp4',
    poster: heroPoster,
  },
]

export function HomeHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((value) => (value + 1) % slides.length)
      setVideoError(false)
    }, 7000)

    return () => window.clearInterval(timer)
  }, [])

  const currentSlide = slides[currentIndex]

  const goToNext = () => {
    setCurrentIndex((value) => (value + 1) % slides.length)
    setVideoError(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((value) => (value - 1 + slides.length) % slides.length)
    setVideoError(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setVideoError(false)
  }

  return (
    <section className="bg-white">
      <div className="w-full">
        <div className="relative isolate min-h-[420px] h-[clamp(420px,52vw,807px)] overflow-hidden min-[1728px]:h-[807px]">
          {!videoError ? (
            <video
              autoPlay
              className="absolute inset-0 h-full w-full object-cover"
              loop
              muted
              onError={() => setVideoError(true)}
              playsInline
              poster={currentSlide.poster}
            >
              <source src={currentSlide.videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img
              alt="Inexo foundry"
              className="absolute inset-0 h-full w-full object-cover"
              src={currentSlide.poster}
            />
          )}

          <div className="absolute inset-0 bg-[rgba(0,48,122,0.63)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2d57]/72 via-[#0a2d57]/48 to-transparent" />

          <div className="relative z-10 flex h-full flex-col justify-center px-5 pb-8 pt-10 sm:px-8 sm:pb-10 lg:pl-[39px] lg:pr-[140px] lg:pb-[44px]">
            <h1 className="type-1 w-full max-w-3xl min-[1728px]:max-w-[1091px]">
              {currentSlide.title}
            </h1>

            <div className="mt-8 flex items-center gap-5">
              <button
                className="button-label-primary min-h-[48px] rounded-[100px] bg-brand-accent-yellow px-5 py-3 transition-colors duration-200 hover:bg-[#ffc933] sm:min-h-[56px] sm:px-7 sm:py-3.5 lg:h-[clamp(56px,4.4vw,76px)] lg:w-[clamp(190px,15.3vw,263px)] lg:px-0 lg:py-0"
                type="button"
              >
                {currentSlide.ctaLabel}
              </button>
            </div>

            <div className="absolute bottom-5 right-4 flex items-center gap-3 sm:bottom-7 sm:right-8 sm:gap-5 lg:bottom-11 lg:right-35 lg:gap-8 min-[1728px]:gap-[21px]">
              <button
                aria-label="Previous slide"
                className="grid h-[40px] w-[40px] place-items-center rounded-l-[6px] bg-white font-semibold leading-none text-[#0a2d57] cursor-pointer sm:h-[46px] sm:w-[47px] lg:h-[52px] lg:w-[53px]"
                onClick={goToPrevious}
                type="button"
              >
                <span className="inline-flex h-[40px] w-[40px] items-center justify-center sm:h-[46px] sm:w-[47px] lg:h-[52px] lg:w-[53px]">
                  <img alt="" aria-hidden="true" className="h-[16px] w-[8px] rotate-180 object-contain sm:h-[18px] sm:w-[9px] lg:h-[20px] lg:w-[10px]" src={heroArrowRight} />
                </span>
              </button>

              <div className="flex items-center gap-[6px] sm:gap-[8px]">
                {slides.map((slide, index) => (
                  <button
                    aria-label={`Go to slide ${index + 1}`}
                    className={`rounded-full transition-all duration-200 cursor-pointer ${
                      index === currentIndex
                        ? 'h-[10px] w-[28px] bg-[#FFB400] sm:h-[12px] sm:w-[34px] lg:h-[14px] lg:w-[39.5px]'
                        : 'h-[10px] w-[10px] bg-white/85 sm:h-[12px] sm:w-[12px] lg:h-[15px] lg:w-[15px]'
                    }`}
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    type="button"
                  />
                ))}
              </div>

              <button
                aria-label="Next slide"
                className="grid h-[40px] w-[40px] place-items-center rounded-r-[6px] bg-[#FFB400] font-semibold leading-none text-[#0a2d57] cursor-pointer sm:h-[46px] sm:w-[47px] lg:h-[52px] lg:w-[53px]"
                onClick={goToNext}
                type="button"
              >
                <span className="inline-flex h-[40px] w-[40px] items-center justify-center sm:h-[46px] sm:w-[47px] lg:h-[52px] lg:w-[53px]">
                  <img alt="" aria-hidden="true" className="h-[16px] w-[8px] object-contain sm:h-[18px] sm:w-[9px] lg:h-[20px] lg:w-[10px]" src={heroArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
