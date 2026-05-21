import { ProductsHero } from '@/components/products/ProductsHero'
import { ProductsFeaturedSection } from '@/components/products/ProductsFeaturedSection'
import { ProductsOverviewSection } from '@/components/products/ProductsOverviewSection'

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsOverviewSection />
      <ProductsFeaturedSection />
    </>
  )
}