import { Navigate, useParams } from 'react-router-dom'
import searchIcon from '@/assets/images/brand/search_Icon.svg'
import { Container } from '@/components/common/Container'
import { FoundryProductCard } from '@/components/common/FoundryProductCard'
import { ProductsHero } from '@/components/products/ProductsHero'
import {
  categories,
  getCategoryBySlug,
  getProductsByCategorySlug,
  getSubCategoriesByCategorySlug,
  toCategoryCard,
  toProductCard,
  toSubCategoryCard,
} from '@/data/productCatalog'

export default function ProductCategories() {
  const { categorySlug } = useParams()
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return <Navigate replace to="/products" />
  }

  const categorySubCategories = getSubCategoriesByCategorySlug(category.slug).map((subCategory) => (
    toSubCategoryCard(subCategory)
  ))
  const directCategoryProducts = getProductsByCategorySlug(category.slug)
    .filter((product) => product.subCategoryId === null)
    .map((product) => toProductCard(product))
  const categoryCards = [...categorySubCategories, ...directCategoryProducts]
  const relatedCategories = categories
    .filter((item) => item.id !== category.id)
    .slice(0, 4)
    .map((item) => toCategoryCard(item, { ctaLabel: 'View Products' }))
  const heroSlides = [
    {
      id: `${category.slug}-hero-main`,
      title: `${category.name} - Strength in Every Structure.`,
      imageSrc: category.image,
    },
    {
      id: `${category.slug}-hero-detail`,
      title: category.description,
      imageSrc: category.image,
    },
    {
      id: `${category.slug}-hero-overview`,
      title: `Explore ${category.name} categories and products.`,
      imageSrc: category.image,
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
              <h2 className="type-2 mt-10">{category.name}</h2>
              <p className="mt-8 text-[18px] leading-[1.65] text-[#2A2A2A] sm:text-[20px]">
                {category.description}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {categoryCards.map((card) => (
              <FoundryProductCard key={card.id} product={card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4f4f4] py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <div className="text-center">
            <h2 className="type-2 mt-8">Other Categories</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {relatedCategories.map((relatedCategory) => (
              <FoundryProductCard key={relatedCategory.id} product={relatedCategory} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
