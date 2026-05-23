import fedexoImage from '@/assets/images/home/FEDEXO.svg'
import fedinImage from '@/assets/images/home/FEDIN.svg'
import fedpourImage from '@/assets/images/home/FEDPOUR.svg'
import spotexImage from '@/assets/images/home/SPOTEX.svg'

export const categories = [
  {
    id: 1,
    name: 'SPOTEX',
    slug: 'spotex',
    image: spotexImage,
    description: 'High performance feeding sleeves.',
  },
  {
    id: 2,
    name: 'FEDPOUR',
    slug: 'fedpour',
    image: fedpourImage,
    description: 'Pouring solutions for consistency and control.',
  },
  {
    id: 3,
    name: 'FEDEXO',
    slug: 'fedexo',
    image: fedexoImage,
    description: 'High performance exothermic insulating sleeves.',
  },
  {
    id: 4,
    name: 'FEDIN',
    slug: 'fedin',
    image: fedinImage,
    description: 'Insulating sleeves for consistency and durability.',
  },
]

export const subCategories = [
  {
    id: 101,
    categoryId: 3,
    name: 'FEDEXO 55 (XP)',
    slug: 'fedexo-55-xp',
    image: fedexoImage,
    description: 'Insulating sleeves available in different shapes.',
  },
  {
    id: 102,
    categoryId: 3,
    name: 'FEDEXO 50',
    slug: 'fedexo-50',
    image: fedexoImage,
    description: 'Exothermic and insulating sleeves.',
  },
  {
    id: 103,
    categoryId: 3,
    name: 'FEDEXO LID',
    slug: 'fedexo-lid',
    image: fedexoImage,
    description: 'Innovative precision feeding solution.',
  },
]

export const products = [
  {
    id: 1001,
    categoryId: 3,
    subCategoryId: 101,
    name: 'EXOTHERMIC OPEN SLEEVES CYLINDRICAL',
    slug: 'exothermic-open-sleeves-cylindrical',
    shortDescription: 'Cylindrical open sleeves for open risers.',
    description: 'Highly Exothermic Open Sleeves Cylindrical Type are for use as open risers.',
    thumbnail: fedexoImage,
    gallery: [fedexoImage],
    features: [
      {
        title: 'Cylindrical Shape',
        description: 'Designed for open riser systems; easy to position.',
      },
      {
        title: 'Highly Exothermic',
        description: 'Generates intense heat upon metal contact, delaying solidification in the feeder.',
      },
      {
        title: 'Increased Feeding Efficiency',
        description: 'Improves feeding in the feeder head.',
      },
    ],
    benefits: [
      'Increases the solidification time by 2 to 2.6 times depending on the size.',
      'Enhances yield.',
      'Consistency in casting quality.',
      'Cuts down on fettling time.',
    ],
    specifications: {
      sizes: ['30mm', '50mm', '75mm', '100mm', '225mm'],
      material: 'Exothermic sleeve material',
      application: 'Open riser systems',
    },
    relatedProducts: [1002, 1003],
  },
  {
    id: 1002,
    categoryId: 3,
    subCategoryId: 101,
    name: 'EXOTHERMIC BLIND SLEEVES CYLINDRICAL',
    slug: 'exothermic-blind-sleeves-cylindrical',
    shortDescription: 'Blind cylindrical sleeves.',
    description: 'Highly exothermic cylindrical blind sleeves.',
    thumbnail: fedexoImage,
    gallery: [fedexoImage],
    features: [],
    benefits: [],
    specifications: {},
    relatedProducts: [1001],
  },
  {
    id: 1003,
    categoryId: 3,
    subCategoryId: 101,
    name: 'EXOTHERMIC NECK DOWN SLEEVES',
    slug: 'exothermic-neck-down-sleeves',
    shortDescription: 'Neck down sleeves.',
    description: 'Highly exothermic neck down sleeves.',
    thumbnail: fedexoImage,
    gallery: [fedexoImage],
    features: [],
    benefits: [],
    specifications: {},
    relatedProducts: [1001],
  },
  {
    id: 1004,
    categoryId: 3,
    subCategoryId: 102,
    name: 'FEDEXO 50',
    slug: 'fedexo-50',
    shortDescription: 'Exothermic and insulating sleeves with stable performance.',
    description: 'FEDEXO 50 products provide high thermal support and stable feeding behavior.',
    thumbnail: fedexoImage,
    gallery: [fedexoImage],
    features: [],
    benefits: ['Enhances yield.', 'Improves consistency.'],
    specifications: {},
    relatedProducts: [1001],
  },
  {
    id: 1005,
    categoryId: 3,
    subCategoryId: 103,
    name: 'FEDEXO LID',
    slug: 'fedexo-lid',
    shortDescription: 'Innovative precision feeding solution.',
    description: 'FEDEXO LID improves thermal control for difficult feed zones.',
    thumbnail: fedexoImage,
    gallery: [fedexoImage],
    features: [],
    benefits: ['Improves feed control.', 'Supports better casting quality.'],
    specifications: {},
    relatedProducts: [1001],
  },
  {
    id: 2001,
    categoryId: 3,
    subCategoryId: null,
    name: 'BREAKER CORE',
    slug: 'breaker-core',
    shortDescription: 'Breaker core product.',
    description: 'Breaker core used for casting applications.',
    thumbnail: fedexoImage,
    gallery: [fedexoImage],
    features: [],
    benefits: [],
    specifications: {},
    relatedProducts: [],
  },
  {
    id: 3001,
    categoryId: 1,
    subCategoryId: null,
    name: 'SPOTEX HD V 680',
    slug: 'spotex-hd-v680',
    shortDescription: 'High-performance highly exothermic sleeve.',
    description: 'SPOTEX HD V 680 is engineered for precision feeding and yield improvement.',
    thumbnail: spotexImage,
    gallery: [spotexImage],
    features: [],
    benefits: ['Improves yield.', 'Reduces shrinkage defects.'],
    specifications: {},
    relatedProducts: [],
  },
  {
    id: 4001,
    categoryId: 2,
    subCategoryId: null,
    name: 'FEDPOUR RT',
    slug: 'fedpour-rt',
    shortDescription: 'Pouring solution for repeatable process performance.',
    description: 'FEDPOUR RT products are designed for stable and controlled pouring behavior.',
    thumbnail: fedpourImage,
    gallery: [fedpourImage],
    features: [],
    benefits: ['Supports smooth mold filling.', 'Improves repeatability.'],
    specifications: {},
    relatedProducts: [],
  },
  {
    id: 5001,
    categoryId: 4,
    subCategoryId: null,
    name: 'FEDIN INSUL',
    slug: 'fedin-insul',
    shortDescription: 'Insulating sleeve range for durable process windows.',
    description: 'FEDIN INSUL helps maintain stable casting conditions across repeated runs.',
    thumbnail: fedinImage,
    gallery: [fedinImage],
    features: [],
    benefits: ['Stable insulation.', 'Consistent quality output.'],
    specifications: {},
    relatedProducts: [],
  },
  {
    id: 6001,
    categoryId: null,
    subCategoryId: null,
    name: 'STANDALONE PRODUCT',
    slug: 'standalone-product',
    shortDescription: 'Product without category.',
    description: 'Direct standalone product page.',
    thumbnail: spotexImage,
    gallery: [spotexImage],
    features: [],
    benefits: [],
    specifications: {},
    relatedProducts: [],
  },
]

export const productTree = {
  categories,
  subCategories,
  products,
}

const categoryBySlug = new Map(categories.map((category) => [category.slug, category]))
const categoryById = new Map(categories.map((category) => [category.id, category]))
const subCategoryBySlug = new Map(subCategories.map((subCategory) => [subCategory.slug, subCategory]))
const subCategoryById = new Map(subCategories.map((subCategory) => [subCategory.id, subCategory]))
const productBySlug = new Map(products.map((product) => [product.slug, product]))

export function getCategoryBySlug(categorySlug) {
  return categoryBySlug.get(categorySlug)
}

export function getCategoryById(categoryId) {
  return categoryById.get(categoryId)
}

export function getSubCategoryBySlug(subCategorySlug) {
  return subCategoryBySlug.get(subCategorySlug)
}

export function getSubCategoryById(subCategoryId) {
  return subCategoryById.get(subCategoryId)
}

export function getSubCategoriesByCategorySlug(categorySlug) {
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return []
  }

  return subCategories.filter((subCategory) => subCategory.categoryId === category.id)
}

export function getProductBySlug(productSlug) {
  return productBySlug.get(productSlug)
}

export function getProductsByCategorySlug(categorySlug) {
  const category = getCategoryBySlug(categorySlug)

  if (!category) {
    return []
  }

  return products.filter((product) => product.categoryId === category.id)
}

export function getProductsByCategoryAndSubCategorySlugs(categorySlug, subCategorySlug) {
  const category = getCategoryBySlug(categorySlug)
  const subCategory = getSubCategoryBySlug(subCategorySlug)

  if (!category || !subCategory || subCategory.categoryId !== category.id) {
    return []
  }

  return products.filter((product) => (
    product.categoryId === category.id && product.subCategoryId === subCategory.id
  ))
}

export function toCategoryCard(category, overrides = {}) {
  return {
    id: category.slug,
    title: category.name,
    image: category.image,
    description: category.description,
    href: `/products/${category.slug}`,
    ctaLabel: 'View Products',
    ...overrides,
  }
}

export function toSubCategoryCard(subCategory, overrides = {}) {
  const category = getCategoryById(subCategory.categoryId)
  const fallbackHref = '/products'

  return {
    id: subCategory.slug,
    title: subCategory.name,
    image: subCategory.image,
    description: subCategory.description,
    href: category ? `/products/${category.slug}/${subCategory.slug}` : fallbackHref,
    ctaLabel: 'View Products',
    ...overrides,
  }
}

export function toProductCard(product, overrides = {}) {
  return {
    id: product.slug,
    title: product.name,
    image: product.thumbnail,
    description: product.shortDescription,
    href: `/product/${product.slug}`,
    ctaLabel: 'View Details',
    ...overrides,
  }
}

function toLegacyCatalogProduct(product) {
  return {
    id: product.slug,
    title: product.name,
    image: product.thumbnail,
    href: `/product/${product.slug}`,
    description: product.shortDescription,
    heroTitle: `${product.name} - Strength in Every Structure.`,
    detailTitle: product.name,
    overview: product.description,
    highlights: product.features.map((feature) => feature.description),
    benefits: product.benefits,
    keyFeatureItems: product.features.map((feature) => ({
      title: feature.title,
      points: [feature.description],
    })),
    typicalBenefitItems: product.benefits.map((benefit) => ({
      points: [benefit],
    })),
    gallery: product.gallery,
  }
}

export const productCatalog = products.map((product) => toLegacyCatalogProduct(product))

export const homeProducts = categories.map((category) => toCategoryCard(category))

export const featuredProducts = [
  ...categories.map((category) => toCategoryCard(category)),
  ...products
    .filter((product) => product.categoryId === null)
    .map((product) => toProductCard(product, { ctaLabel: 'View Details' })),
]

export function getProductById(productId) {
  const bySlug = getProductBySlug(productId)

  if (bySlug) {
    return toLegacyCatalogProduct(bySlug)
  }

  const asNumber = Number(productId)

  if (!Number.isNaN(asNumber)) {
    const byNumericId = products.find((product) => product.id === asNumber)

    if (byNumericId) {
      return toLegacyCatalogProduct(byNumericId)
    }
  }

  return undefined
}