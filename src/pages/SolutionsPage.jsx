import { useState } from 'react'
import { Container } from '@/components/common/Container'
import { Hero } from '@/components/common/Hero'
import foundrySolutionsImage from '@/assets/images/home/Foundry_Solutions.png'
import facilityImage from '@/assets/images/home/who-we-are-facility.png'

const solutionsHeroSlides = [
  {
    id: 1,
    title: 'Built to Solve. Designed to Perform.',
    imageSrc: facilityImage,
  },
  {
    id: 2,
    title: 'Solutions Engineered For Modern Foundry Demands.',
    imageSrc: facilityImage,
  },
  {
    id: 3,
    title: 'Performance You Can Measure. Reliability You Can Trust.',
    imageSrc: facilityImage,
  },
]

const solutionCategories = [
  {
    id: 'iron',
    title: 'IRON Casting Solutions',
    items: [
      {
        id: 'adaptor-casting',
        title: 'Yield Improvement of ADAPTOR Casting',
        summary:
          'SPOTEX HD replaces 3 conventional sleeves to reduce shrinkage defects and improve yield to 77%.',
        castingDetails: [
          'Casting family: ADAPTOR iron casting with critical hot spots around the feed head.',
          'Target outcome: improve usable metal yield while preserving dimensional stability.',
          'Result: higher recovery with visibly reduced shrinkage defects in the final casting.',
        ],
        processDetails: [
          'Feeding was redesigned to replace three conventional sleeves with one SPOTEX HD sleeve.',
          'Thermal balance was tightened around the last-freezing zone to improve solidification control.',
          'The revised layout reduced process variation and simplified mould preparation for the team.',
        ],
        productsBenefits: [
          'Improves yield to 77% with fewer consumables.',
          'Cuts rework caused by shrinkage and unstable feeding.',
          'Makes the process easier to repeat consistently at production scale.',
        ],
      },
      {
        id: 'bracket-casting',
        title: 'Reduce fettling time for BRACKET Casting',
        summary:
          'Optimized feeding layout and cleaner gate placement reduce finishing effort and speed up downstream handling.',
        castingDetails: [
          'Casting family: bracket geometry with recurring clean-up load near feeder contact points.',
          'Target outcome: lower post-cast fettling effort without compromising metal soundness.',
          'Result: smoother removal zones and less manual finishing per casting.',
        ],
        processDetails: [
          'The feed path was repositioned to reduce excess metal around cut-off areas.',
          'Sleeve selection was tuned to feed the section while limiting unnecessary contact mass.',
          'Gate and riser balance was adjusted to support both quality and finishing efficiency.',
        ],
        productsBenefits: [
          'Reduces grinding and finishing time.',
          'Improves operator productivity on repetitive parts.',
          'Lowers variation in final surface condition.',
        ],
      },
      {
        id: 'port-block-casting',
        title: 'Eliminating Shrinkage in PORT BLOCK casting',
        summary:
          'Focused hot-spot control helps remove shrinkage-related rejects in heavy-section port block production.',
        castingDetails: [
          'Casting family: port block casting with localized thermal concentration.',
          'Target outcome: remove internal shrinkage in the heaviest section of the part.',
          'Result: lower rejection rate and better soundness in critical inspection zones.',
        ],
        processDetails: [
          'Feeder sizing was recalibrated to match the actual modulus of the critical section.',
          'Insulating performance was increased where directional solidification was previously lost.',
          'The revised method stabilized feeding through the last-freezing volume.',
        ],
        productsBenefits: [
          'Reduces scrap from internal shrinkage.',
          'Supports consistent radiographic and section test results.',
          'Improves confidence for repeat production batches.',
        ],
      },
      {
        id: 'inner-hub-casting',
        title: 'Maximise yield and eliminate shrinkage on INNER HUB casting',
        summary:
          'A more efficient feeding strategy improves casting yield while protecting the hub against shrinkage defects.',
        castingDetails: [
          'Casting family: inner hub component with yield pressure driven by mass concentration.',
          'Target outcome: achieve better metal efficiency and defect-free sections together.',
          'Result: improved recovery without sacrificing structural integrity.',
        ],
        processDetails: [
          'Riser placement was simplified to focus energy where it matters most during solidification.',
          'Sleeve selection was matched to hub geometry instead of using a generic feeder arrangement.',
          'The process now feeds effectively with less excess metal tied up in the method.',
        ],
        productsBenefits: [
          'Raises yield while keeping shrinkage under control.',
          'Reduces excess method weight and finishing burden.',
          'Improves cost efficiency on repeat production.',
        ],
      },
      {
        id: 'exhaust-manifold-casting',
        title: 'Eliminate shrinkage and reduce fettling for EXHAUST MANIFOLD casting',
        summary:
          'Combined feeding and layout refinement addresses shrinkage risk while cutting manual finishing time.',
        castingDetails: [
          'Casting family: manifold geometry with thin-to-thick section transitions.',
          'Target outcome: maintain soundness in heavy zones and simplify finishing at cut points.',
          'Result: better casting quality with reduced post-cast handling effort.',
        ],
        processDetails: [
          'Thermal control was localized to the sections most vulnerable to shrinkage.',
          'Method geometry was refined to lower excess metal around removal points.',
          'The overall solution balanced feeding efficiency with practical shop-floor finishing needs.',
        ],
        productsBenefits: [
          'Improves soundness in complex geometry.',
          'Cuts fettling time and related labor cost.',
          'Creates a more stable, scalable process route.',
        ],
      },
    ],
  },
  {
    id: 'steel',
    title: 'STEEL Casting Solutions',
    items: [
      {
        id: 'valve-body-steel',
        title: 'Improve feeding reliability for VALVE BODY casting',
        summary:
          'Engineered riser performance helps steel valve body castings solidify with fewer internal discontinuities.',
        castingDetails: [
          'Casting family: steel valve body with demanding soundness requirements.',
          'Target outcome: reduce internal discontinuities in critical pressure-bearing sections.',
          'Result: more stable quality for inspected and machined parts.',
        ],
        processDetails: [
          'Feeder performance was tuned to match steel solidification behavior more closely.',
          'Method balance was revised to maintain feed efficiency through the critical section.',
          'The solution supports consistent mould practice without unnecessary complexity.',
        ],
        productsBenefits: [
          'Improves internal soundness for high-value castings.',
          'Reduces rejection linked to feeding instability.',
          'Supports repeatability across heats and mould lots.',
        ],
      },
      {
        id: 'housing-steel',
        title: 'Reduce rework in STEEL HOUSING casting',
        summary:
          'Process refinement reduces post-cast corrections and supports a more predictable steel housing output.',
        castingDetails: [
          'Casting family: steel housing with multiple heavy junctions.',
          'Target outcome: reduce rework from localized defects and uneven feeding.',
          'Result: cleaner casting performance through inspection and machining.',
        ],
        processDetails: [
          'Feeding support was concentrated around high-risk junctions.',
          'Method geometry was simplified to improve repeatability for moulding teams.',
          'A more controlled solidification path reduced downstream correction work.',
        ],
        productsBenefits: [
          'Cuts rework and handling delays.',
          'Improves consistency in dimensional finish.',
          'Supports better throughput on production orders.',
        ],
      },
      {
        id: 'pump-casing-steel',
        title: 'Stabilize quality for PUMP CASING steel casting',
        summary:
          'Balanced feeding and solidification control improve soundness for large-section steel pump casings.',
        castingDetails: [
          'Casting family: pump casing steel casting with thick wall transitions.',
          'Target outcome: stabilize internal quality in sections exposed to shrinkage risk.',
          'Result: stronger batch-to-batch consistency for critical parts.',
        ],
        processDetails: [
          'Feeder selection was aligned with the casing modulus profile.',
          'Hot-spot control was tightened to support directional solidification.',
          'The revised solution reduces variation without adding avoidable process steps.',
        ],
        productsBenefits: [
          'Improves quality repeatability.',
          'Reduces the likelihood of shrinkage-related rejection.',
          'Helps foundries scale stable production for demanding steel parts.',
        ],
      },
    ],
  },
]

const accordionSections = [
  { id: 'castingDetails', label: 'Casting Details' },
  { id: 'processDetails', label: 'Process Details' },
  { id: 'productsBenefits', label: 'Products & Benefits' },
]

function ChevronIcon({ open = false }) {
  return (
    <svg
      aria-hidden="true"
      className={`h-6 w-6 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 9L12 15L18 9" stroke="#00307A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" className="h-8 w-8 translate-x-[2px] text-brand-blue sm:h-10 sm:w-10" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5.14v13.72c0 .77.84 1.25 1.5.86l10.53-6.86a1 1 0 0 0 0-1.72L9.5 4.28A1 1 0 0 0 8 5.14Z" />
    </svg>
  )
}

function SolutionsShowcase() {
  const [activeCategoryId, setActiveCategoryId] = useState(solutionCategories[0].id)
  const [activeSolutionId, setActiveSolutionId] = useState(solutionCategories[0].items[0].id)
  const [openPanels, setOpenPanels] = useState({})
  const [showVideo, setShowVideo] = useState(false)

  const activeCategory = solutionCategories.find((category) => category.id === activeCategoryId) ?? solutionCategories[0]
  const activeSolution = activeCategory.items.find((item) => item.id === activeSolutionId) ?? activeCategory.items[0]

  const handleCategoryChange = (category) => {
    setActiveCategoryId(category.id)
    setActiveSolutionId(category.items[0].id)
    setOpenPanels({})
    setShowVideo(false)
  }

  const handleSolutionChange = (solutionId) => {
    setActiveSolutionId(solutionId)
    setOpenPanels({})
    setShowVideo(false)
  }

  const togglePanel = (panelId) => {
    setOpenPanels((current) => ({
      ...current,
      [panelId]: !current[panelId],
    }))
  }

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-[1680px]">
          <div className="max-w-[1120px]">
            <h2 className="type-2">Comprehensive Foundry Solutions</h2>
            <p className="body-copy-large mt-4 max-w-[1180px] text-[15px] leading-[1.7] text-[#1F1F1F] sm:mt-6 sm:text-[18px] lg:text-[20px]">
              INEXO stands as a trusted foundry partner, delivering precision-cast components engineered for strength,
              consistency, and long-term performance. Backed by technical expertise and quality-focused manufacturing
              practices, we serve a wide range of industries with reliable iron casting solutions. Our commitment to
              innovation, process control, and customer satisfaction enables us to meet complex casting requirements with
              confidence and efficiency. At INEXO, every casting reflects our dedication to engineering excellence,
              operational reliability, and lasting industrial value.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-10">
            <aside className="bg-[#FBF8EF] px-5 py-7 sm:px-8 sm:py-9 lg:min-h-[760px]">
              <h3 className="font-serif text-center text-[36px] font-bold leading-none text-brand-blue sm:text-[42px]">
                Our Solutions
              </h3>

              <div className="mt-10 space-y-7">
                {solutionCategories.map((category) => {
                  const isCategoryActive = category.id === activeCategoryId

                  return (
                    <div key={category.id}>
                      <button
                        className="flex w-full items-center justify-between gap-4 text-left font-serif text-[24px] font-bold leading-[1.2] text-brand-blue transition-opacity duration-200 hover:opacity-80 sm:text-[28px]"
                        onClick={() => handleCategoryChange(category)}
                        type="button"
                      >
                        <span>{category.title}</span>
                        <ChevronIcon open={isCategoryActive} />
                      </button>

                      {isCategoryActive ? (
                        <ul className="mt-6 space-y-1">
                          {category.items.map((solution) => {
                            const isSelected = solution.id === activeSolution.id

                            return (
                              <li key={solution.id}>
                                <button
                                  className={`group relative w-full pl-5 pr-2 py-3 text-left font-serif text-[18px] font-semibold leading-[1.45] text-brand-blue transition-colors duration-200 sm:text-[20px] ${
                                    isSelected ? 'bg-white/50' : 'hover:bg-white/40'
                                  }`}
                                  onClick={() => handleSolutionChange(solution.id)}
                                  type="button"
                                >
                                  <span
                                    className={`absolute left-0 top-1/2 h-7 w-[4px] -translate-y-1/2 rounded-full bg-brand-yellow transition-opacity duration-200 ${
                                      isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                                    }`}
                                  />
                                  {solution.title}
                                </button>
                              </li>
                            )
                          })}
                        </ul>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </aside>

            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="relative overflow-hidden rounded-[10px] bg-[#D9E0EC]">
                {showVideo ? (
                  <video
                    autoPlay
                    className="aspect-[16/9] w-full object-cover"
                    controls
                    poster={foundrySolutionsImage}
                    src="/videos/INEXO_COMPANY VIDEO_27_01_2026.mp4"
                  />
                ) : (
                  <>
                    <img
                      alt={activeSolution.title}
                      className="aspect-[16/9] w-full object-cover"
                      src={foundrySolutionsImage}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,48,122,0.08),rgba(0,48,122,0.18))]" />
                    <button
                      aria-label={`Play video for ${activeSolution.title}`}
                      className="absolute left-1/2 top-1/2 inline-flex h-[76px] w-[76px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_18px_40px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:scale-105 sm:h-[92px] sm:w-[92px]"
                      onClick={() => setShowVideo(true)}
                      type="button"
                    >
                      <PlayIcon />
                    </button>
                  </>
                )}
              </div>

              <div>
                <h3 className="font-serif text-[28px] font-semibold leading-[1.3] text-brand-blue sm:text-[34px] lg:text-[38px]">
                  {activeSolution.title}
                </h3>
                <p className="mt-4 max-w-[950px] text-[15px] font-normal leading-[1.8] text-[#2A2A2A] sm:text-[18px] lg:text-[20px]">
                  {activeSolution.summary}
                </p>
              </div>

              <div>
                {accordionSections.map((section, index) => {
                  const isOpen = Boolean(openPanels[section.id])
                  const content = activeSolution[section.id]

                  return (
                    <div
                      className={`border-b border-[#9FB1D4] ${index === 0 ? 'border-t' : ''}`}
                      key={section.id}
                    >
                      <button
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-[24px] font-semibold leading-[1.3] text-brand-blue sm:text-[28px]"
                        onClick={() => togglePanel(section.id)}
                        type="button"
                      >
                        <span>{section.label}</span>
                        <ChevronIcon open={isOpen} />
                      </button>

                      {isOpen ? (
                        <div className="pb-5">
                          <ul className="space-y-3 pl-5 text-[15px] leading-[1.8] text-[#2A2A2A] sm:text-[18px] lg:text-[19px]">
                            {content.map((entry) => (
                              <li key={entry} className="list-disc">
                                {entry}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function SolutionsPage() {
  return (
    <>
      <Hero slides={solutionsHeroSlides} />
      <SolutionsShowcase />
    </>
  )
}
