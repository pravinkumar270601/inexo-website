import { useState, useEffect } from 'react'
import { Container } from '@/components/common/Container'
import { SectionLabel } from '@/components/common/SectionLabel'

// Image imports
import Foundry_Solutions from '@/assets/images/home/Foundry_Solutions.png'
import Social_Responsibility from '@/assets/images/home/Social_Responsibility.png'
import facilityImage from '@/assets/images/home/who-we-are-facility.png'
import certificateImage from '@/assets/images/home/certificateImage.png'
import old_man from '@/assets/images/home/old_man.png'
import ADAPTOR from '@/assets/images/solutions/ADAPTOR.png'
import BRACKET from '@/assets/images/solutions/BRACKET.png'
import INNER_HUB from '@/assets/images/solutions/INNER HUB.png'
import PORT_BLOCK from '@/assets/images/solutions/PORT BLOCK.png'
import YOKE from '@/assets/images/solutions/YOKE.png'
import SWIVELLING_LEVER from '@/assets/images/solutions/SWIVELLING LEVER.png'

const galleryPages = [
  [
    { id: 1, src: Foundry_Solutions, alt: 'INEXO representatives at exhibition stand' },
    { id: 2, src: facilityImage, alt: 'INEXO state-of-the-art facility' },
    { id: 3, src: certificateImage, alt: 'INEXO quality standards & certifications' },
    { id: 4, src: old_man, alt: 'Customer discussion at exhibition stand' },
    { id: 5, src: INNER_HUB, alt: 'Inner Hub display casting' },
    { id: 6, src: Social_Responsibility, alt: 'INEXO supporting communities' },
  ],
  [
    { id: 7, src: ADAPTOR, alt: 'Adaptor product casting' },
    { id: 8, src: BRACKET, alt: 'Bracket product casting' },
    { id: 9, src: YOKE, alt: 'Yoke product casting' },
    { id: 10, src: SWIVELLING_LEVER, alt: 'Swivelling Lever product casting' },
    { id: 11, src: PORT_BLOCK, alt: 'Port Block product casting' },
    { id: 12, src: Foundry_Solutions, alt: 'INEXO casting demonstration' },
  ],
]

export function NewsEventsGallery() {
  const [currentPage, setCurrentPage] = useState(0)
  const [activeImage, setActiveImage] = useState(null)
  const totalPages = galleryPages.length

  // Lock scroll on body when modal is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeImage])

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <>
      {/* Gallery Section */}
      <section className="bg-white pb-14 sm:pb-18 lg:pb-[120px] border-t border-gray-100/50 pt-14 sm:pt-18 lg:pt-[100px]">
        <Container>
          {/* Header */}
          <div className="mb-10 lg:mb-12">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="type-2 mt-6 mb-5">INEXO in Pictures</h2>
          </div>

          {/* Sliding Grid Container */}
          <div className="relative overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {galleryPages.map((page, pageIdx) => (
                <div key={pageIdx} className="w-full shrink-0 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
                  {page.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveImage(item)}
                      className="group relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#f7f7f7] border border-gray-100 shadow-sm text-left cursor-pointer w-full focus:outline-none focus:ring-2 focus:ring-brand-blue/30"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,45,87,0.75),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                        <p className="text-white font-sans text-sm font-semibold">{item.alt}</p>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slider Navigation Controls */}
          <div className="mt-8 flex items-center justify-end gap-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`flex h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] lg:h-[52px] lg:w-[52px] items-center justify-center rounded-full transition-all duration-300 ${currentPage === 0
                  ? 'bg-[#e6ecf5] text-[#a6b4cf] cursor-not-allowed opacity-60'
                  : 'bg-brand-blue text-white hover:bg-brand-blue/80 hover:scale-105 transition-all'
                }`}
              aria-label="Previous Page"
            >
              <svg className="h-[14px] w-[7px] rotate-180 fill-current sm:h-[16px] sm:w-[8px] lg:h-[20px] lg:w-[10px]" viewBox="0 0 10 20">
                <path d="M1 1l8 9-8 9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className={`flex h-[40px] w-[40px] sm:h-[46px] sm:w-[46px] lg:h-[52px] lg:w-[52px] items-center justify-center rounded-full transition-all duration-300 ${currentPage === totalPages - 1
                  ? 'bg-[#e6ecf5] text-[#a6b4cf] cursor-not-allowed opacity-60'
                  : 'bg-brand-blue text-white hover:bg-brand-blue/80 hover:scale-105 transition-all'
                }`}
              aria-label="Next Page"
            >
              <svg className="h-[14px] w-[7px] fill-current sm:h-[16px] sm:w-[8px] lg:h-[20px] lg:w-[10px]" viewBox="0 0 10 20">
                <path d="M1 1l8 9-8 9" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Container>
      </section>

      {/* Modal Lightbox Overlay */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-fade-in cursor-zoom-out"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative bg-white p-3 sm:p-5 shadow-2xl max-w-[95vw] sm:max-w-4xl lg:max-w-5xl w-full flex items-center justify-center cursor-default animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button at top right of the white card */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white text-gray-800 hover:text-black hover:bg-gray-100 transition-all shadow-lg cursor-pointer border border-gray-100 z-10"
              aria-label="Close modal"
            >
              <svg className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image container frame matching the screenshot */}
            <div className="w-full overflow-hidden rounded-[10px] sm:rounded-[16px]">
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
