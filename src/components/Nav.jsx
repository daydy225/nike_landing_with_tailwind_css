import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import LangButton from './LangButton'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const Nav = () => {
  //  add position fixed to header on scroll
  const [isNavFixed, setIsNavFixed] = useState(false)
  const [scrollPos, setScrollPos] = useState(0)

  // add english and french languages
  const { t } = useTranslation()

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY

    if (currentScrollPos > 10 && currentScrollPos < scrollPos && !isNavFixed) {
      setIsNavFixed(true)
    } else if (
      (currentScrollPos <= 10 || currentScrollPos > scrollPos) &&
      isNavFixed
    ) {
      setIsNavFixed(false)
    }

    setScrollPos(currentScrollPos)
  }, [isNavFixed, scrollPos])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isNavFixed, handleScroll])

  const navClass = isNavFixed
    ? 'fixed top-0 left-0 right-0 z-12 backdrop-blur-md bg-white/30 shadow-md z-20'
    : 'absolute z-10 w-full'

  return (
    <header className={`padding-x py-8 ${navClass}`}>
      <nav
        id="nav"
        className="flex justify-between items-center max-container"
      >
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map(item => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-sm  text-slate-gray border-b-2 border-transparent hover:border-coral-red transition-colors duration-200"
              >
                {t(`${item.label}`)}
              </a>
            </li>
          ))}
        </ul>
        {/* Select languages */}
        <div className="max-lg:hidden lg:pr-10">
          <LangButton />
        </div>
        <div className="flex gap-2 text-md leading-normal font-semibold font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">{t('sign_in')}</a>
          <span>/</span>
          <a href="/">{t('explore')}</a>
        </div>
        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburger icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
