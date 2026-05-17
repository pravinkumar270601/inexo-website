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
      className={`flex min-h-[210px] items-center justify-between gap-6 rounded-[15px] bg-[rgba(0,48,122,0.03)] px-7 py-8 sm:px-9 min-[1400px]:h-[248px] min-[1400px]:w-[470px] ${className}`.trim()}
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
      className={`flex items-center justify-center rounded-[15px] bg-brand-blue text-white ${className}`.trim()}
    >
      <span className="font-['IBM_Plex_Serif'] text-[58px] font-semibold leading-none sm:text-[66px] lg:text-[76px]">
        98%
      </span>
    </div>
  )
}

function RatingStat({ className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[15px] bg-brand-yellow text-brand-blue ${className}`.trim()}
    >
      <span className="relative font-['IBM_Plex_Serif'] text-[78px] font-semibold leading-none sm:text-[90px] lg:text-[104px]">
        9
        <sup className="absolute -right-6 top-2 font-['IBM_Plex_Sans'] text-[28px] font-bold leading-none sm:text-[32px] lg:text-[36px]">
          +
        </sup>
      </span>
    </div>
  )
}

function RatingCard({ className = '' }) {
  return (
    <article
      className={`flex min-h-[250px] items-center gap-7 rounded-[15px] bg-[rgba(0,48,122,0.03)] px-7 py-8 sm:px-9 min-[1400px]:h-[248px] ${className}`.trim()}
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

          <h2 className="type-4 mt-8">
            Trusted by Industry. Proven by Results.
          </h2>
        </div>

        {/* Mobile + Tablet Layout */}
        <div className="mt-12 space-y-6 min-[1400px]:hidden">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] md:items-center lg:grid-cols-[minmax(0,1fr)_minmax(300px,356px)]">
            <RetentionCard className="h-full" />

            <RetentionStat className="mx-auto flex aspect-square w-full max-w-[280px] md:mx-0 md:max-w-none" />
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] md:items-center lg:grid-cols-[minmax(300px,356px)_minmax(0,1fr)]">
            <RatingStat className="mx-auto flex aspect-square w-full max-w-[280px] md:mx-0 md:max-w-none" />

            <RatingCard className="h-full" />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="relative mx-auto mt-16 hidden h-[470px] max-w-[1120px] min-[1400px]:block">
          {/* Left Card */}
          <RetentionCard className="absolute left-0 top-0 z-[1]" />

          {/* Blue Stat */}
          <RetentionStat className="absolute left-[330px] top-0 z-[3] h-[250px] w-[250px]" />

          {/* Yellow Stat */}
          <RatingStat className="absolute left-[440px] top-[205px] z-[4] h-[250px] w-[250px]" />

          {/* Right Card */}
          <RatingCard className="absolute right-0 top-[205px] z-[2] w-[500px] pl-[128px] pr-8" />
        </div>
      </Container>
    </section>
  )
}