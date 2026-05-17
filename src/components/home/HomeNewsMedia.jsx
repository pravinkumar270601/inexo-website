import Foundry_Solutions from '@/assets/images/home/Foundry_Solutions.png'
import Social_Responsibility from '@/assets/images/home/Social_Responsibility.png'
import { Container } from '@/components/common/Container'
import { NewsMediaCard } from '@/components/home/NewsMediaCard'

const newsItems = [
  {
    id: 'industry-exhibition',
    image: Foundry_Solutions,
    imageAlt: 'INEXO representatives at an industry exhibition',
    title: 'INEXO Showcases Advanced Foundry Solutions at Industry Exhibition',
    description:
      'INEXO Metal Casts successfully participated in a major industry exhibition, showcasing its advanced feeding systems and innovative casting solutions.',
    date: '07/02/2026',
  },
  {
    id: 'csr-community',
    image: Social_Responsibility,
    imageAlt: 'INEXO team supporting a community program',
    title: 'Supporting Communities Through Social Responsibility',
    description:
      'INEXO Metal Casts continues to strengthen its commitment to community development through meaningful CSR initiatives.',
    date: '07/02/2026',
  },
]

export function HomeNewsMedia() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-[120px]">
      <Container>
        <div className="grid items-start gap-8 min-[1400px]:grid-cols-[630px_minmax(0,1fr)] min-[1400px]:gap-8">
          <div className="clip-news-panel w-full bg-[#F0F3F8] px-8 py-12 sm:px-10 sm:py-14 lg:h-[395px] lg:px-0 lg:py-0">
            <div className="w-full max-[1399px]:mx-auto max-[1399px]:flex max-[1399px]:flex-col max-[1399px]:items-center min-[1400px]:ml-[132px] lg:pt-[52px]">
              <h2 className="type-2 w-full max-[1399px]:mx-auto max-[1399px]:w-[50%] min-[1400px]:w-[70%]">
                News &amp; Media
                <br />
                Center
              </h2>

              <p className="mt-8 type-3 w-full text-center lg:mt-[42px] max-[1399px]:mx-auto max-[1399px]:w-[50%] min-[1400px]:w-[70%]">
                Stay updated with the latest news, milestones, and industry developments from INEXO Metal Casts.
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 min-[1400px]:max-w-[920px]">
              {newsItems.map((item) => (
                <NewsMediaCard
                  key={item.id}
                  date={item.date}
                  description={item.description}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                />
              ))}
            </div>

            <div className="mt-8 flex justify-end lg:mt-10">
              <a
                className="inline-flex min-h-[52px] min-w-[126px] items-center justify-center rounded-full border border-brand-blue px-8 font-serif text-[19px] font-bold leading-none text-brand-blue transition-colors hover:bg-brand-blue hover:text-white lg:min-h-[58px] lg:min-w-[140px]"
                href="#"
              >
                View All
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}