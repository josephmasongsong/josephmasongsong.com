import { useEffect, useState } from 'react'
import { linkResolver, hrefResolver } from '../helpers'
import { endPoint } from '../api'
import { RichText } from 'prismic-reactjs'
import { Link as ScrollLink, animateScroll } from 'react-scroll'
import Link from 'next/link'
import Burger from '../node_modules/react-css-burger/dist/'
import Prismic from 'prismic-javascript'

const NavbarHome = () => {

  const [ nav, setNav ] = useState({})
  const [ scroll, setScroll ] = useState(1)
  const [ isOpen, setIsOpen ] = useState(false)

  const endPoint = process.env.PRISMIC
  const Client = Prismic.client(endPoint)

  useEffect(
    () => {
      const fetchData = async () => {
        const res = await Client.query(
          Prismic.Predicates.at('document.type', 'navigation')
        )
        setNav(res.results[0])
      }
      fetchData()
    },[]
  )

  useEffect(
    () => {
      document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY < 1
        if (scrollCheck !== scroll) {
          setScroll(scrollCheck)
        }
      })
    },[]
  )

  const scrollToTop = () => {
    animateScroll.scrollTop()
  }

  const toggle = () => {
    setIsOpen(!isOpen)
	}

	const closeNavbar = () => {
    setIsOpen(false)
	}

  const NavLinks = props => {
    return props.slices.map((slice, i) => {
      if (slice.slice_type === 'nav_item') {
        return(
          <ScrollLink href="/"
            className="block text-center py-4 text-lg lg:text-base lg:-py-0 lg:inline-block lg:ml-12"
            key={i}
            activeClass="underline"
            to={slice.primary.scroll_target}
            spy={true}
            smooth={true}
            offset={-84}
            duration={400}
            onClick={closeNavbar}
          >
            {RichText.asText(slice.primary.label)}
          </ScrollLink>
        )
      } else {
        return null
      }
    })
  }

  const scrollClass = scroll ? 'topnav' : 'topnav-fixed bg-white'
  const showHideClass = isOpen ? '' : 'hidden'
  const showHideFixedClass = isOpen ? 'topnav-fixed bg-white' : ''

  return(
    <header className={`${scrollClass} ${showHideFixedClass} z-20 px-4 xl:px-0`}>
      {nav && nav.data &&
        <nav className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex justify-between items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={nav.data.logo.url} className="rounded-full xs:w-8 xs:h-8 w-10 h-10 md:w-12 md:h-12 mr-3"  alt={nav.data.logo.alt} />
              <span className="font-header text-xl md:text-2xl leading-none">{RichText.asText(nav.data.title)}</span>
            </a>
          </div>
          <div className="block lg:hidden">
            <Burger
              onClick={toggle}
              active={isOpen}
              burger="squeeze"
              color="#2b90d9"
              hoverOpacity={0.8}
              scale={1}
              marginTop='0.625rem'
            />
          </div>
          <div className={`w-full lg:flex lg:items-center lg:w-auto ${showHideClass}`} id="navlinks-container">
            <div className="mt-6 lg:mt-0 lg:flex-grow" id="navlinks">
              <NavLinks slices={nav.data.nav} />
              <Link href="/contact">
                <a className="mt-6 lg:mt-0 btn-callout w-full block text-center text-base lg:w-auto lg:inline-block" >
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      }
    </header>
  )

}
export default NavbarHome
