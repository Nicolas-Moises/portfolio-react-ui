import { useState } from 'react'

import { CaretUp } from 'phosphor-react'
import { About } from '../components/About'
import { Cta } from '../components/Cta'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Stats } from '../components/Stats'
import { Testimonials } from '../components/Testimonials'

import { Link as A } from 'react-scroll'

export function DefaultLayout() {
  const [scrollTop, setScrollTop] = useState(false)

  function scrollUp() {
    if (scrollY >= 150) {
      setScrollTop(true)
    } else {
      setScrollTop(false)
    }
  }

  window.addEventListener('scroll', scrollUp)

  return (
    <div className="">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Features />
      <Skills />
      <Projects />
      <Testimonials />
      <div className="px-6">
        <Cta />
      </div>
      <Footer />
      <A
        to="hero"
        smooth={true}
        spy={true}
        offset={-200}
        duration={500}
        className={`cursor-pointer -bottom-1/3  transition-all ease-linear duration-200 fixed inline-flex right-4  bg-white text-gray-500 dark:bg-gray-800
         dark:text-gray-100 p-2 rounded text-xl z-50 hover:-translate-y-1 hover:text-green-500
         ${scrollTop && 'bottom-10'}`}
        id="scroll-up"
      >
        <CaretUp size={20} weight="fill" />
      </A>
    </div>
  )
}
