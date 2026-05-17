import arrowIcon from '@/assets/images/home/card-right-arrow.svg'
import { Container } from '@/components/common/Container'
import { SectionLabel } from '@/components/common/SectionLabel'

const ratingPoints = [
  'Initiation of Quotation Process',
  'Understanding Customer Needs',
  'Communication',
  'Infrastructure',
  'Quality Of Supplies',
  'Ontime Deliveries',
]

function ArrowBadge({ direction = 'right', className = '' }) {
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-yellow ${className}`.trim()}
    >
      <img
        alt=""
        aria-hidden="true"
        className={`h-4 w-4 ${direction === 'left' ? 'rotate-180' : ''}`.trim()}
        src={arrowIcon}
      />
    </span>
  )
}

function RetentionCard({ className = '' }) {
  return (
    <article
      className={`flex min-h-[210px] items-center justify-between gap-6 rounded-[15px] bg-[rgba(0,48,122,0.03)] px-7 py-8 sm:px-9 lg:h-[clamp(300px,21vw,356px)] lg:min-h-0 lg:w-[520px] ${className}`.trim()}
    >
      <div>
        <h3 className="font-['IBM_Plex_Sans'] text-[24px] font-bold leading-tight text-brand-blue lg:text-[28px]">
          Customer Retention
        </h3>
        <p className="mt-6 max-w-[250px] font-['IBM_Plex_Sans'] text-[17px] font-medium leading-[1.35] text-brand-blue lg:text-[18px]">
          Consistently trusted by our Customer year after year
        </p>
      </div>
      <ArrowBadge />
    </article>
  )
}

function RetentionStat({ className = '' }) {
  return (
    <div
      className={`flex aspect-square w-full max-w-[356px] items-center justify-center rounded-[15px] bg-brand-blue text-white ${className}`.trim()}
    >
      <span className="font-['IBM_Plex_Serif'] text-[72px] font-semibold leading-none md:text-[88px] lg:text-[96px]">
        98%
      </span>
    </div>
  )
}

function RatingStat({ className = '' }) {
  return (
    <div
      className={`flex aspect-square w-full max-w-[356px] items-center justify-center rounded-[15px] bg-brand-yellow text-brand-blue ${className}`.trim()}
    >
      <span className="relative font-['IBM_Plex_Serif'] text-[88px] font-semibold leading-none md:text-[112px] lg:text-[128px]">
        9
        <sup className="absolute -right-8 top-3 font-['IBM_Plex_Sans'] text-[34px] font-bold leading-none md:text-[40px]">
          +
        </sup>
      </span>
    </div>
  )
}

function RatingCard({ className = '' }) {
  return (
    <article
      className={`flex min-h-[250px] items-center gap-7 rounded-[15px] bg-[rgba(0,48,122,0.03)] px-7 py-8 sm:px-9 lg:h-[clamp(300px,21vw,356px)] lg:min-h-0 lg:pl-[clamp(300px,21vw,356px)] ${className}`.trim()}
    >
      <ArrowBadge direction="left" />

      <div>
        <h3 className="font-['IBM_Plex_Sans'] text-[24px] font-bold leading-tight text-brand-blue lg:text-[28px]">
          Rated By Customers
        </h3>
        <p className="mt-6 font-['IBM_Plex_Sans'] text-[17px] font-medium leading-[1.35] text-brand-blue lg:text-[18px]">
          Across by customers touch points
        </p>
        <ul className="mt-5 space-y-2 font-['IBM_Plex_Sans'] text-[13px] font-medium leading-tight text-brand-blue lg:text-[14px]">
          {ratingPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function HomeWhyInexo() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <div className="text-center">
          <SectionLabel className="mx-auto">Why Inexo</SectionLabel>
          <h2 className="type-4 mt-8">Trusted by Industry. Proven by Results.</h2>
        </div>

        <div className="mt-12 grid gap-6 lg:hidden">
          <RetentionCard />
          <RetentionStat className="mx-auto" />
          <RatingStat className="mx-auto" />
          <RatingCard />
        </div>

        <div className="relative mx-auto mt-16 hidden min-h-[610px] max-w-[1600px] lg:block">
          <RetentionCard className="absolute left-0 top-0" />
          <RetentionStat className="absolute left-[31%] top-0 z-10 w-[clamp(300px,21vw,356px)]" />
          <RatingStat className="absolute left-[47%] top-[280px] z-20 w-[clamp(300px,21vw,356px)]" />
          <RatingCard className="absolute left-[47%] right-0 top-[280px]" />
        </div>
      </Container>
    </section>
  )
}
