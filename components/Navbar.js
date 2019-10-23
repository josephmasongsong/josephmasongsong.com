import { useEffect, useState } from 'react'
import { linkResolver, hrefResolver } from '../helpers'
import { getNavbarAPI } from '../api'
import { RichText } from 'prismic-reactjs'
import { Link as ScrollLink, animateScroll } from 'react-scroll'
import Link from 'next/link'
import Burger from '../node_modules/react-css-burger/dist/'
import fetch from 'isomorphic-unfetch'
import Prismic from 'prismic-javascript'

const Navbar = () => {

  const [ nav, setNav ] = useState({})
  const [ scroll, setScroll ] = useState(1)
  const [ isOpen, setIsOpen ] = useState(false)

  const endPoint = process.env.PRISMIC
  const Client = Prismic.client(`https://josephmasongsong.cdn.prismic.io/api/v2`)

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

  const scrollClass = scroll ? 'topnav' : 'topnav-fixed bg-white'
  const showHideClass = isOpen ? '' : 'hidden'
  const showHideFixedClass = isOpen ? 'topnav-fixed bg-white' : ''

  return(
    <header className={`${scrollClass} ${showHideFixedClass} z-20 px-4 xl:px-0`}>
      {nav && nav.data &&
        <nav className="container mx-auto flex items-center justify-between flex-wrap">
          <div className=" flex justify-between items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={nav.data.logo.url} className="rounded-full xs:w-8 xs:h-8  w-10 h-10 md:w-12 md:h-12 mr-3" alt="Joseph Masongsong - Vancouver, BC based web developer and consultant" />
              <span className="font-header text-xl md:text-2xl leading-none">{RichText.asText(nav.data.title)}</span>
            </a>
          </div>
          <div className="block md:hidden">
            <Burger
              onClick={toggle}
              active={isOpen}
              burger="squeeze"
              color="#2b90d9"
              hoverOpacity={0.8}
              scale={1}
              marginTop='0.625rem'
              maringLeft='0rem'
            />
          </div>
          <div className={`w-full md:flex md:items-center md:w-auto ${showHideClass}`} id="navlinks-container">
            <div className="mt-6 md:mt-0 md:flex-grow" id="navlinks">

              <Link href="/" passHref>
                <a className="mt-6 md:mt-0 btn-callout w-full block text-center text-base md:w-auto md:inline-block" >
                  Home
                </a>
              </Link>

            </div>
          </div>
        </nav>
      }
    </header>
  )

}
export default Navbar
