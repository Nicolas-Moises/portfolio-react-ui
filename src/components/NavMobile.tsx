import { List, X } from 'phosphor-react'
import { useState } from 'react'

import { Link as A } from 'react-scroll'

export function NavMobile() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [isActive, setIsActive] = useState(false)

  function handleActiveMenu() {
    if (!toggleMenu) {
      setToggleMenu(true)
      setIsActive(true)
    } else {
      setToggleMenu(false)
      setIsActive(false)
    }
  }

  return (
    <div>
      <div
        className="p-4 rounded-lg text-gray-600 hover:text-green-500 dark:hover:bg-gray-800 dark:text-white transition-all ease lg:hidden"
        onClick={handleActiveMenu}
      >
        {toggleMenu ? <X size={24} /> : <List size={24} />}
      </div>
      {isActive && (
        <nav className="absolute top-[100%] inset-x-0 z-50 bg-gray-100 dark:bg-gray-900 p-6 lg:hidden menu-sidebar min-h-[80vh] flex items-center justify-center">
          <ul className="flex flex-col gap-14 items-center justify-center">
            <li>
              <A
                to="hero"
                smooth={true}
                spy={true}
                offset={-200}
                duration={500}
                className="font-semibold text-lg text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
              >
                Início
              </A>
            </li>
            <li>
              <A
                to="about"
                smooth={true}
                spy={true}
                offset={-200}
                duration={500}
                className="font-semibold text-lg text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
              >
                Sobre
              </A>
            </li>
            <li>
              <A
                to="skills"
                smooth={true}
                spy={true}
                offset={-200}
                duration={500}
                className="font-semibold text-lg text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
              >
                Skills
              </A>
            </li>
            <li>
              <A
                to="projects"
                smooth={true}
                spy={true}
                offset={-200}
                duration={500}
                className="font-semibold text-lg text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
              >
                Projetos
              </A>
            </li>
            <li>
              <A
                to="cta"
                smooth={true}
                spy={true}
                offset={-200}
                duration={500}
                className="font-semibold text-lg text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
              >
                Contato
              </A>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}
