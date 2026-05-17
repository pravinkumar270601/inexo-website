import { useState } from 'react'
import logo from '@/assets/images/brand/inexo-logo.svg'
import { Container } from '@/components/common/Container'

const navItems = ['Products', 'Solutions', 'News & Events', 'Contact us', 'Careers']

export function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-[#d8d8d8] bg-[#f5f5f5]">
      <Container className="flex h-[82px] items-center justify-between gap-6 sm:h-[96px] lg:h-[126px]">
        <a aria-label="Inexo Home" className="shrink-0" href="#">
          <img alt="Inexo logo" className="h-[64px] w-[64px] object-contain sm:h-[78px] sm:w-[78px] lg:h-[104px] lg:w-[104px]" src={logo} />
        </a>

        <nav aria-label="Primary navigation" className="hidden flex-1 justify-center md:flex">
          <ul className="flex items-center gap-[28px] md:gap-[34px] lg:gap-[45px] xl:gap-[56px] 2xl:gap-[76px]">
            {navItems.map((item) => (
              <li key={item}>
                <a className="nav-menu-item-text transition-opacity duration-200 hover:opacity-70" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          aria-controls="mobile-menu"
          aria-expanded={menuOpen}
          className="relative w-6 h-6 md:hidden focus:outline-none"
          onClick={() => setMenuOpen((value) => !value)}
          type="button"
        >
          <span
            className={`absolute top-1 left-0 block w-full h-0.5 bg-[#1f1f1f] transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 block w-full h-0.5 bg-[#1f1f1f] -translate-y-1/2 transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute bottom-1 left-0 block w-full h-0.5 bg-[#1f1f1f] transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </Container>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="border-t border-[#dddddd] bg-[#f8f8f8]">
          <Container className="py-4">
            <ul className="flex flex-col gap-3 text-lg text-[#1f1f1f]">
              {navItems.map((item) => (
                <li key={item}>
                  <a className="block py-1 font-medium" href="#" onClick={() => setMenuOpen(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </header>
  )
}
