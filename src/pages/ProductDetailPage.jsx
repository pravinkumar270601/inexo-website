import { Navigate, useParams } from 'react-router-dom'
import searchIcon from '@/assets/images/brand/search_Icon.svg'
import { Container } from '@/components/common/Container'
import { FoundryProductCard } from '@/components/common/FoundryProductCard'
import { ProductsHero } from '@/components/products/ProductsHero'
import { SectionLabel } from '@/components/common/SectionLabel'
import { getProductById, productCatalog } from '@/data/productCatalog'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const product = getProductById(productId)

  if (!product) {
    return <Navigate replace to="/products" />
  }

  const familyKey = product.id.split('-')[0]
  const familyProducts = productCatalog.filter((item) => (
    item.id === familyKey || item.id.startsWith(`${familyKey}-`)
  ))
  const relatedProducts = productCatalog.filter((item) => item.id !== product.id).slice(0, 4)
  const heroSlides = [
    {
      id: `${product.id}-hero-main`,
      title: product.heroTitle,
      imageSrc: product.image,
    },
    {
      id: `${product.id}-hero-detail`,
      title: product.detailTitle,
      imageSrc: product.image,
    },
    {
      id: `${product.id}-hero-overview`,
      title: product.overview,
      imageSrc: product.image,
    },
  ]

  return (
    <>
      <ProductsHero slides={heroSlides} />

      <section className="bg-[#f4f4f4] py-10 md:py-20 lg:py-[120px]">
        <Container>
          <div className="mb-8 flex justify-end md:mb-12">
            <label className="relative block w-full max-w-[330px]">
              <img alt="Search" className="absolute left-[25px] top-1/2 h-[29.451px] w-[29.451px] -translate-y-1/2" src={searchIcon} />
              <input
                aria-label="Search for products"
                className="search-input w-full bg-transparent placeholder:text-[#A6B4CF] focus:outline-none"
                placeholder="Search for products"
                type="search"
              />
            </label>
          </div>

          <div className="w-full max-w-[991px]">
            <div>
              {/* <SectionLabel>{product.title}</SectionLabel> */}
              <h2 className="type-2 mt-10">{product.detailTitle}</h2>
              <p className="mt-8 text-[18px] leading-[1.65] text-[#2A2A2A] sm:text-[20px]">
                {product.description}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {familyProducts.map((familyProduct) => (
              <FoundryProductCard key={familyProduct.id} product={{ ...familyProduct, ctaLabel: 'View Details' }} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f4f4] py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <div className="text-center">
            <SectionLabel className="mx-auto">Products</SectionLabel>
            <h2 className="type-4 mt-8">Other Products</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <FoundryProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}