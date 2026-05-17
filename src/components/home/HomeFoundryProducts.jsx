import { Container } from '@/components/common/Container'
import { FoundryProductCard } from '@/components/common/FoundryProductCard'
import { SectionLabel } from '@/components/common/SectionLabel'
import fedexoImage from '@/assets/images/home/FEDEXO.svg'
import fedinImage from '@/assets/images/home/FEDIN.svg'
import fedpourImage from '@/assets/images/home/FEDPOUR.svg'
import spotexImage from '@/assets/images/home/SPOTEX.svg'

const foundryProducts = [
  {
    id: 'spotex',
    title: 'SPOTEX',
    image: spotexImage,
    description:
      'SPOTEX is a range of high performance highly exothermic sleeves which represents innovation, reliability and build for precision feeding.',
  },
  {
    id: 'fedpour',
    title: 'FEDPOUR',
    image: fedpourImage,
    description: 'FEDPOUR is a range of pouring solutions engineered for consistency and flow control.',
  },
  {
    id: 'fedexo',
    title: 'FEDEXO',
    image: fedexoImage,
    description:
      'FEDEXO is a range of high performance exothermic cum insulating sleeves built for precision applications and reliability.',
  },
  {
    id: 'fedin',
    title: 'FEDIN',
    image: fedinImage,
    description: 'FEDIN are a range of insulating sleeves designed for consistency and durability.',
  },
]

export function HomeFoundryProducts() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-[120px]">
      <Container>
        <div className="text-center">
          <SectionLabel className="mx-auto">Feeding Systems</SectionLabel>

          <h2 className="type-4 mt-8">Foundry Products</h2>

          <div className="relative mx-auto mt-6 max-w-[980px]">
            <p className="type-5 mx-auto max-w-[730px] bg-white px-4 text-center text-[16px] leading-[1.7] text-[#4b4b4b] sm:text-[17px] lg:px-12">
              INEXO&apos;s products are used for making castings in a wide range of metals and alloys. These castings
              cover a wide range of applications like automotive, earthmoving, railways, petrochemicals,
              infrastructure, wind energy and power plants.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {foundryProducts.map((product) => (
            <FoundryProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  )
}
