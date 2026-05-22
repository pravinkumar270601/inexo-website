import fedexoImage from '@/assets/images/home/FEDEXO.svg'
import fedinImage from '@/assets/images/home/FEDIN.svg'
import fedpourImage from '@/assets/images/home/FEDPOUR.svg'
import spotexImage from '@/assets/images/home/SPOTEX.svg'

export const productCatalog = [
  {
    id: 'spotex',
    title: 'SPOTEX',
    image: spotexImage,
    href: '/products/spotex',
    description:
      'SPOTEX is a range of high performance highly exothermic sleeves which represents innovation, reliability and build for precision feeding.',
    heroTitle: 'SPOTEX - Strength in Every Structure.',
    detailTitle: 'Highly exothermic sleeves built for dependable feeding performance.',
    overview:
      ' th  hermal behavior and repeatable results.',
    highlights: [
      'High exothermic performance for demanding feed zones.',
      'Supports lower fettling effort and cleaner castings.',
      'Designed for stable foundry output across repeat production.',
    ],
  },
  {
    id: 'fedpour',
    title: 'FEDPOUR',
    image: fedpourImage,
    href: '/products/fedpour',
    description: 'FEDPOUR is a range of pouring solutions engineered for consistency and flow control.',
    heroTitle: 'FEDPOUR - Controlled flow for reliable pouring.',
    detailTitle: 'Pouring solutions designed for predictable metal flow.',
    overview:
      'FEDPOUR products help regulate pouring behavior so foundries can maintain cleaner fills, better operator control, and more repeatable mold performance. The range is suited to applications where flow discipline has a direct impact on casting quality.',
    highlights: [
      'Improves pouring consistency across production cycles.',
      'Supports smoother mold filling and reduced turbulence.',
      'Built for repeatable foundry process control.',
    ],
  },
  {
    id: 'fedexo',
    title: 'FEDEXO',
    image: fedexoImage,
    href: '/products/fedexo',
    description:
      'FEDEXO is a range of high performance exothermic cum insulating sleeves built for precision applications and reliability.',
    heroTitle: 'FEDEXO - Thermal efficiency for sound castings.',
    detailTitle: 'Exothermic and insulating sleeves for efficient feeding.',
    overview:
      'FEDEXO combines exothermic and insulating performance to keep feed metal active for longer, helping foundries improve yield while protecting casting integrity. It is suited to applications that demand strong thermal support without sacrificing repeatability.',
    highlights: [
      'Thermal efficiency that helps extend feeding action.',
      'Supports improved yield and reduced casting defects.',
      'Engineered for precision-focused foundry applications.',
    ],
  },
  {
    id: 'fedin',
    title: 'FEDIN',
    image: fedinImage,
    href: '/products/fedin',
    description: 'FEDIN are a range of insulating sleeves designed for consistency and durability.',
    heroTitle: 'FEDIN - Insulating sleeves for process stability.',
    detailTitle: 'Insulating sleeves designed to support durable process windows.',
    overview:
      'FEDIN sleeves are designed to preserve heat efficiently and provide stable operating conditions in foundry feeding systems. The range supports dependable casting outcomes where process robustness and consistency are priorities.',
    highlights: [
      'Reliable insulation for stable foundry conditions.',
      'Supports consistent casting quality in repeat runs.',
      'Built for durability in everyday production use.',
    ],
  },
  {
    id: 'spotex-plus',
    title: 'SPOTEX PLUS',
    image: spotexImage,
    href: '/products/spotex-plus',
    description: 'Enhanced SPOTEX sleeve options designed for controlled feeding in demanding foundry conditions.',
    heroTitle: 'SPOTEX PLUS - Added control for advanced feeding needs.',
    detailTitle: 'Enhanced sleeve options for higher-demand feeding scenarios.',
    overview:
      'SPOTEX PLUS extends the SPOTEX product family with options aimed at more demanding feeding conditions where additional control and thermal confidence are required. It helps maintain product quality while supporting efficient foundry throughput.',
    highlights: [
      'Enhanced control for demanding foundry applications.',
      'Helps maintain feeding reliability in tougher conditions.',
      'Extends the SPOTEX family for broader process coverage.',
    ],
  },
  {
    id: 'spotex-plus2',
    title: 'SPOTEX PLUS',
    image: spotexImage,
    href: '/products/spotex-plus',
    description: 'Enhanced SPOTEX sleeve options designed for controlled feeding in demanding foundry conditions.',
    heroTitle: 'SPOTEX PLUS - Added control for advanced feeding needs.',
    detailTitle: 'Enhanced sleeve options for higher-demand feeding scenarios.',
    overview:
      'SPOTEX PLUS extends the SPOTEX product family with options aimed at more demanding feeding conditions where additional control and thermal confidence are required. It helps maintain product quality while supporting efficient foundry throughput.',
    highlights: [
      'Enhanced control for demanding foundry applications.',
      'Helps maintain feeding reliability in tougher conditions.',
      'Extends the SPOTEX family for broader process coverage.',
    ],
  },
  {
    id: 'fedpour-rt',
    title: 'FEDPOUR RT',
    image: fedpourImage,
    href: '/products/fedpour-rt',
    description: 'FEDPOUR RT variants provide stable pouring behavior and repeatable process performance.',
    heroTitle: 'FEDPOUR RT - Repeatable pouring with stable performance.',
    detailTitle: 'Pouring variants built for repeatability and control.',
    overview:
      'FEDPOUR RT variants are developed for foundries that need highly repeatable pouring behavior and controlled mold filling from run to run. The range helps strengthen process consistency without adding unnecessary complexity.',
    highlights: [
      'Repeatable pouring behavior across production runs.',
      'Supports cleaner fills with stronger process control.',
      'Designed for stable day-to-day foundry performance.',
    ],
  },
  {
    id: 'fedexo-xp',
    title: 'FEDEXO XP',
    image: fedexoImage,
    href: '/products/fedexo-xp',
    description: 'FEDEXO XP products are engineered to maintain thermal efficiency for sound castings.',
    heroTitle: 'FEDEXO XP - Extended thermal support for critical feed zones.',
    detailTitle: 'XP-grade sleeves for higher thermal performance demands.',
    overview:
      'FEDEXO XP products are tailored for casting programs that require stronger thermal performance and reliable feeding over demanding geometries. They help improve casting soundness while supporting efficient foundry operation.',
    highlights: [
      'Higher thermal support for critical feeding needs.',
      'Helps improve casting soundness in demanding layouts.',
      'Designed for efficient foundry output with reliable performance.',
    ],
  },
  {
    id: 'fedin-insul',
    title: 'FEDIN INSUL',
    image: fedinImage,
    href: '/products/fedin-insul',
    description: 'Insulating sleeve formats for robust process windows and consistent casting quality.',
    heroTitle: 'FEDIN INSUL - Robust insulation for consistent output.',
    detailTitle: 'Insulating formats designed for robust process windows.',
    overview:
      'FEDIN INSUL focuses on dependable insulating performance for foundries that need stable process windows and consistent casting quality. It is suited to operations where steady heat retention and repeatability matter most.',
    highlights: [
      'Stable insulation for robust production windows.',
      'Supports consistent quality in everyday foundry use.',
      'Built to balance process reliability and durability.',
    ],
  },
]

export const homeProducts = productCatalog.filter((product) => (
  product.id === 'spotex'
  || product.id === 'fedpour'
  || product.id === 'fedexo'
  || product.id === 'fedin'
))

export const featuredProducts = productCatalog

export function getProductById(productId) {
  return productCatalog.find((product) => product.id === productId)
}