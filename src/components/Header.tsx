import { Desktop, Moon, Sun } from 'phosphor-react'
import logo from '../assets/logo.svg'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Link as A } from 'react-scroll'
import { useEffect, useState } from 'react'
import { NavMobile } from './NavMobile'

export function Header() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark',
  )
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const element = document.documentElement

  function onWindowMatch() {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && darkQuery.matches)
    ) {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }
  }

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break
    }
  }, [theme])

  darkQuery.addEventListener('change', (e) => {
    if (!('theme' in localStorage)) {
      if (e.matches) {
        element.classList.add('dark')
      } else {
        element.classList.remove('dark')
      }
    }
  })

  return (
    <header className="w-full dark:bg-zinc-900/50 bg-gray-100/60 fixed z-[1500] top-0 backdrop-blur-2xl">
      <div className="w-full max-w-[1300px] flex items-center justify-between py-8 px-6 mx-auto">
        <img src={logo} alt="" />
        <nav className="hidden lg:block">
          <ul className="flex gap-10 items-center">
            <li>
              <A
                to="hero"
                smooth={true}
                spy={true}
                offset={-200}
                duration={500}
                className="font-semibold text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
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
                className="font-semibold text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
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
                className="font-semibold text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
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
                className="font-semibold text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
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
                className="font-semibold text-gray-600 hover:text-green-500 dark:text-gray-200 dark:hover:text-blue-300 transition-all ease cursor-pointer link-nav"
              >
                Contato
              </A>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <NavMobile />
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="p-4 rounded-lg text-gray-600 hover:text-green-500 dark:hover:bg-gray-800 dark:text-white transition-all ease data-[state=open]:text-white data-[state=open]:bg-green-500 focus:outline-none">
                {(theme === 'dark' && <Moon size={24} weight="fill" />) ||
                  (theme === 'light' && <Sun size={24} weight="fill" />) ||
                  (theme === 'system' && <Desktop size={24} weight="fill" />)}
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="end"
                sideOffset={50}
                className="transition-all ease-linear min-w-[250px] bg-white dark:bg-gray-800 p-6 shadow rounded-lg scale-in flex flex-col items-start gap-2 drop-shadow-2xl z-[999999]"
              >
                <button
                  className={`flex gap-3 items-center hover:bg-gray-50 text-gray-500 dark:text-gray-100  dark:hover:bg-gray-700 w-full px-4 py-3 rounded-lg`}
                  onClick={() => setTheme('dark')}
                >
                  <div
                    className={`p-2 border border-green-300 rounded-lg ${
                      theme === 'dark' && 'bg-green-500 text-white'
                    }`}
                  >
                    <Moon weight="fill" size={20} />
                  </div>
                  <span className="font-bold">Dark</span>
                </button>

                <button
                  className="flex gap-3 items-center hover:bg-gray-50 text-gray-500 dark:text-gray-100  dark:hover:bg-gray-700 w-full px-4 py-3 rounded-lg"
                  onClick={() => setTheme('light')}
                >
                  <div
                    className={`p-2 border border-green-300 rounded-lg ${
                      theme === 'light' && 'bg-green-500 text-white'
                    }`}
                  >
                    <Sun weight="fill" size={20} />
                  </div>
                  <span>Light</span>
                </button>

                <button
                  className="flex gap-3 items-center hover:bg-gray-50 text-gray-500 dark:text-gray-100  dark:hover:bg-gray-700 w-full px-4 py-3 rounded-lg"
                  onClick={() => setTheme('system')}
                >
                  <div
                    className={`p-2 border border-green-300 rounded-lg ${
                      theme === 'system' && 'bg-green-500 text-white'
                    }`}
                  >
                    <Desktop weight="fill" size={20} />
                  </div>
                  <span>System</span>
                </button>
                <DropdownMenu.Arrow className="fill-gray-800" />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </header>
  )
}
