import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import searchIcon from '@/assets/images/brand/search_Icon.svg'
import { Container } from '@/components/common/Container'
import { ProductsHero } from '@/components/products/ProductsHero'
import { FoundryProductCard } from '@/components/common/FoundryProductCard'
import {
  getProductBySlug,
  getProductsByCategorySlug,
  getCategoryById,
  getSubCategoryById,
  products,
  toProductCard,
} from '@/data/productCatalog'

function ImageCarousel({ images = [], alt = 'Gallery' }) {
  const imgs = images && images.length > 0 ? images : []
  const [index, setIndex] = useState(0)

  if (imgs.length === 0) {
    return null
  }

  return (
    <div className="mx-auto w-full max-w-[740px]">
      <div className="aspect-[740/456] w-full overflow-hidden rounded-[20px] bg-[#F7F7F7]">
        <img alt={alt} className="h-full w-full object-contain p-4" src={imgs[index]} />
      </div>

      {imgs.length > 1 ? (
        <div className="mt-3 flex items-center justify-center gap-[6px]">
          {imgs.map((_, i) => (
            <button
              aria-label={`Go to image ${i + 1}`}
              key={i}
              className={`rounded-full transition-all duration-200 ${i === index ? 'h-[10px] w-[32px] bg-[#FFB400]' : 'h-[10px] w-[10px] bg-[#D3D3D3]'}`}
              onClick={() => setIndex(i)}
              type="button"
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default function ProductDetailPage() {
  const { productSlug } = useParams()
  const product = getProductBySlug(productSlug)

  if (!product) return <Navigate replace to="/products" />

  const category = product.categoryId ? getCategoryById(product.categoryId) : null
  const subCategory = product.subCategoryId ? getSubCategoryById(product.subCategoryId) : null

  const heroSlides = [
    { id: `${product.slug}-hero-main`, title: `${product.name} - Strength in Every Structure.`, imageSrc: product.thumbnail },
    { id: `${product.slug}-hero-detail`, title: product.description, imageSrc: product.thumbnail },
  ]

  const gallery = product.gallery?.length ? product.gallery : [product.thumbnail]

  const relatedProducts = (product.relatedProducts?.length
    ? product.relatedProducts
        .map((relatedId) => products.find((item) => item.id === relatedId))
        .filter(Boolean)
    : category
      ? getProductsByCategorySlug(category.slug)
          .filter((item) => item.id !== product.id)
          .slice(0, 4)
      : products.filter((item) => item.id !== product.id).slice(0, 4)
  ).map((item) => toProductCard(item))

  const keyFeatureItems = product.features?.length
    ? product.features.map((feature) => ({
        title: feature.title,
        points: [feature.description],
      }))
    : [
        {
          title: 'Application',
          points: [product.specifications?.application ?? 'General foundry feeding applications.'],
        },
        {
          title: 'Material',
          points: [product.specifications?.material ?? 'Engineered foundry sleeve material.'],
        },
        ...(product.specifications?.sizes?.length
          ? [{ points: [`Available ${product.specifications.sizes.join(', ')}`] }]
          : []),
      ]

  const typicalBenefitItems = product.benefits?.length
    ? product.benefits.map((benefit) => ({ points: [benefit] }))
    : [
        { points: ['Supports reliable foundry process performance.'] },
        { points: ['Helps maintain consistent casting quality.'] },
      ]

  const renderOptionList = (items = []) => (
    <ul className="space-y-4 pl-5 text-[20px] leading-[1.45] text-[#2A2A2A]">
      {items.map((item, idx) => {
        const points = Array.isArray(item.points) ? item.points : []
        const hasTitle = Boolean(item.title)

        if (!hasTitle) {
          return points.map((point, pointIndex) => (
            <li key={`plain-${idx}-${pointIndex}`} className="list-disc">
              {point}
            </li>
          ))
        }

        return (
          <li key={`${item.title}-${idx}`} className="list-disc">
            <span className="font-semibold text-[#1f1f1f]">{item.title}:</span>

            {points.length > 0 ? (
              <ul className="mt-2 list-disc pl-5">
                {points.map((point, pointIndex) => (
                  <li key={`${point}-${pointIndex}`}>{point}</li>
                ))}
              </ul>
            ) : null}
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      <ProductsHero slides={heroSlides} />

      <section className="py-10 md:py-20 lg:py-[120px]">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <h2 className="type-2 w-full max-w-[991px]">{product.name}</h2>

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

          <div className="mt-10">
            <ImageCarousel images={gallery} alt={product.name} />
            <p className="mx-auto mt-8 w-full max-w-[991px] text-[16px] leading-[1.65] text-[#2A2A2A] sm:text-[18px]">
              {product.description}
            </p>
            {category || subCategory ? (
              <p className="mx-auto mt-4 w-full max-w-[991px] text-[14px] font-medium uppercase tracking-[0.08em] text-[#5872A1] sm:text-[15px]">
                {[category?.name, subCategory?.name].filter(Boolean).join(' / ')}
              </p>
            ) : null}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="solutions-category-title">Key Features:</h3>
              <div className="mt-5">
                {renderOptionList(keyFeatureItems)}
              </div>
            </div>

            <div className="md:border-l md:border-[#C9D1E2] md:pl-10 lg:pl-14">
              <h3 className="solutions-category-title">Typical Benefits:</h3>
              <div className="mt-5">
                {renderOptionList(typicalBenefitItems)}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className=" py-16 sm:py-20 lg:py-[120px]">
        <Container>
          <div className="text-center">
            <h2 className="type-4">Related Products</h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {relatedProducts.map((rp) => (
              <FoundryProductCard key={rp.id} product={rp} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
