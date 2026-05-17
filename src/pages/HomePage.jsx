import { HomeFoundryProducts } from '@/components/home/HomeFoundryProducts'
import { HomeHero } from '@/components/home/HomeHero'
import { HomeIndustryRecognition } from '@/components/home/HomeIndustryRecognition'
import { HomeNavbar } from '@/components/home/HomeNavbar'
import { HomePurpose } from '@/components/home/HomePurpose'
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
    </main>
  )
}
