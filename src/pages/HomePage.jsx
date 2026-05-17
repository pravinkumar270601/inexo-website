import { HomeManagingDirectorDesk } from '@/components/home/HomeManagingDirectorDesk'
import { HomeCustomersWeServe } from '@/components/home/HomeCustomersWeServe'
import { HomeFooter } from '@/components/home/HomeFooter'
import { HomeFoundryProducts } from '@/components/home/HomeFoundryProducts'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeIndustryRecognition } from '@/components/home/HomeIndustryRecognition'
import { HomeNewsMedia } from '@/components/home/HomeNewsMedia'
import { HomeNavbar } from '@/components/home/HomeNavbar'
import { HomePurpose } from '@/components/home/HomePurpose'
import { HomeTestimonials } from '@/components/home/HomeTestimonials'
import { HomeWhoWeAre } from '@/components/home/HomeWhoWeAre'
import { HomeWhyInexo } from '@/components/home/HomeWhyInexo'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HomeNavbar />
      <HomeHero />
      <HomeWhoWeAre />
      <HomeFoundryProducts />
      <HomeIndustryRecognition />
      <HomePurpose />
      <HomeWhyInexo />
      <HomeCustomersWeServe />
      <HomeManagingDirectorDesk />
      <HomeTestimonials />
      <HomeNewsMedia />
      <HomeFooter />

    </main>
  )
}
