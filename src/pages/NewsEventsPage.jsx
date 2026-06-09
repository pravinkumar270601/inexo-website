import { useState } from 'react'
import { Hero } from '@/components/common/Hero'
import { Container } from '@/components/common/Container'
import { SectionLabel } from '@/components/common/SectionLabel'
import { NewsMediaCard } from '@/components/home/NewsMediaCard'
import { NewsEventsGallery } from '@/components/newsEvents/NewsEventsGallery'
import { EventDetailModal } from '@/components/newsEvents/EventDetailModal'

// Image imports
import Foundry_Solutions from '@/assets/images/home/Foundry_Solutions.png'
import Social_Responsibility from '@/assets/images/home/Social_Responsibility.png'
import facilityImage from '@/assets/images/home/who-we-are-facility.png'

const newsEventSlides = [
  {
    id: 1,
    title: 'Latest News & Events from INEXO Metal Casts',
    ctaLabel: 'Explore Updates',
    imageSrc: facilityImage,
  },
  {
    id: 2,
    title: 'Industry Events & Corporate Updates',
    imageSrc: facilityImage,
  },
  {
    id: 3,
    title: 'Stay Connected With Our Community',
    imageSrc: facilityImage,
  },
]

const newsEventItems = [
  {
    id: 'industry-exhibition',
    image: Foundry_Solutions,
    imageAlt: 'INEXO representatives at an industry exhibition',
    title: 'INEXO Showcases Advanced Foundry Solutions at Industry Exhibition',
    description:
      'INEXO Metal Casts successfully participated in a major industry exhibition, showcasing its advanced feeding systems and innovative casting solutions.',
    fullDescription:
      'INEXO proudly showcased its advanced foundry solutions at a leading industry exhibition, highlighting its commitment to precision, quality, and innovation. The event provided an excellent platform to present INEXO\'s wide range of iron casting capabilities and engineered components, allowing visitors to experience firsthand its expertise in delivering high-performance solutions for diverse industrial applications. The display emphasized INEXO\'S strength in manufacturing durable, dimensionally accurate, and reliable castings, while also highlighting its advanced production processes and robust quality assurance systems. The team actively engaged with industry professionals, sharing insights into modern foundry practices and customer-focused approaches. The exhibition also enabled INEXO to strengthen relationships with existing clients, connect with new partners, and gain valuable insights into emerging market trends and evolving industry requirements. Through its participation, INEXO reinforced its position as a trusted, innovative, and forward-thinking foundry solutions provider.',
    date: '07/02/2026',
    readMoreHref: '#',
  },
  {
    id: 'csr-community',
    image: Social_Responsibility,
    imageAlt: 'INEXO team supporting a community program',
    title: 'Supporting Communities Through Social Responsibility',
    description:
      'INEXO Metal Casts continues to strengthen its commitment to community development through meaningful CSR initiatives.',
    fullDescription:
      'INEXO Metal Casts continues to strengthen its commitment to community development through meaningful CSR initiatives. The company actively supports educational programs, healthcare drives, and community upliftment projects in the regions where it operates. By empowering local communities and fostering sustainable growth, INEXO demonstrates that corporate responsibility goes hand-in-hand with business excellence. These efforts reflect the company\'s core values of integrity, empathy, and social accountability, ensuring a positive impact beyond the factory floor.',
    date: '07/02/2026',
    readMoreHref: '#',
  },
  {
    id: 'tech-innovation',
    image: Foundry_Solutions,
    imageAlt: 'Innovation lab at INEXO',
    title: 'Latest Technology Innovations in Foundry Solutions',
    description:
      'Discover how INEXO continues to push boundaries with cutting-edge technology and innovative solutions for modern foundries.',
    fullDescription:
      'Discover how INEXO continues to push boundaries with cutting-edge technology and innovative solutions for modern foundries. By integrating advanced simulation software, precision machining tools, and automated quality control systems, INEXO ensures every casting meets the highest standards. The company\'s investment in research and development has led to breakthroughs in feeding system design, material optimization, and process efficiency. These innovations enable INEXO to deliver superior products with reduced lead times, helping clients stay ahead in competitive markets.',
    date: '06/28/2026',
    readMoreHref: '#',
  },
  {
    id: 'partnership-announcement',
    image: Social_Responsibility,
    imageAlt: 'Partnership announcement event',
    title: 'Strategic Partnership Announcement',
    description:
      'INEXO Metal Casts announces a new strategic partnership to expand its reach and deliver enhanced solutions to global markets.',
    fullDescription:
      'INEXO Metal Casts announces a new strategic partnership to expand its reach and deliver enhanced solutions to global markets. This collaboration brings together complementary strengths in engineering, manufacturing, and distribution, creating new opportunities for growth and innovation. The partnership aims to accelerate product development, improve supply chain efficiency, and open doors to new industry sectors. By joining forces with a trusted global partner, INEXO is poised to enhance its service offerings and deliver even greater value to customers worldwide.',
    date: '06/25/2026',
    readMoreHref: '#',
  },
]

export default function NewsEventsPage() {
  const [activeEvent, setActiveEvent] = useState(null)

  return (
    <>
      <Hero slides={newsEventSlides} />

      <section className="bg-white py-14 sm:py-18 lg:py-[120px]">
        <Container>
          {/* Events, Updates & CSR Programs Section */}
          <div className="mb-14 lg:mb-20">
            <SectionLabel>From News</SectionLabel>
            <h2 className="type-2 mt-6 mb-5">Events, Updates & CSR Programs</h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#4b4b4b] max-w-[980px]">
              Stay updated with the latest happenings at INEXO Metal Casts. Our News & Events section highlights important company milestones, industry participation, product developments, exhibitions, and corporate initiatives. Through this section, we share updates on our achievements, collaborations, CSR initiatives, and events that reflect our commitment to excellence, innovation, and responsible corporate growth.
            </p>
          </div>

          {/* Latest Events Grid Section */}
          <div>
            <h2 className="type-2 mb-8">Latest Events</h2>
            <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 min-[1400px]:gap-10">
              {newsEventItems.map((item) => (
                <NewsMediaCard
                  key={item.id}
                  date={item.date}
                  description={item.description}
                  image={item.image}
                  imageAlt={item.imageAlt}
                  title={item.title}
                  readMoreHref={item.readMoreHref}
                  onClick={() => setActiveEvent(item)}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <NewsEventsGallery />

      {/* Event Detail Modal */}
      {activeEvent && (
        <EventDetailModal
          event={activeEvent}
          allEvents={newsEventItems}
          onClose={() => setActiveEvent(null)}
          onSelectEvent={(item) => setActiveEvent(item)}
        />
      )}
    </>
  )
}
