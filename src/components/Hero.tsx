import { PaperPlaneRight } from 'phosphor-react'
import previewHero from '../assets/preview-hero.png'
import previewHeroMobile from '../assets/preview-hero-mobile.png'

import * as Dialog from '@radix-ui/react-dialog'
import { ContactModal } from './ContactModal'

export function Hero() {
  return (
    <section
      id="hero"
      className="w-full max-w-[calc(100vw-((100vw-1300px)/2))] flex flex-col lg:flex-row items-center ml-auto px-6 gap-20 mt-44"
    >
      <div>
        <span className="text-sm flex gap-2 items-center dark:text-gray-300 text-gray-400 mb-4 font-semibold justify-center lg:justify-start">
          Olá, me chamo
          <span className="py-1 px-3 bg-green-100 text-green-500 font-bold rounded-full border border-green-500">
            Nicolas Moises
          </span>
        </span>
        <h1 className="font-black text-6xl mb-8 dark:text-white text-gray-600 text-center lg:text-left ">
          Avançando o <br /> nível do{' '}
          <span className="dark:text-blue-300 text-green-500">Front-end</span>
        </h1>
        <p className="w-auto lg:w-[550px] dark:text-gray-300 text-gray-400 leading-relaxed text-center lg:text-left ">
          Sou um desenvolvedor Front-end em início de carreira em busca de uma
          oportunidade para migração de carreira. Enquanto isso estou aberto a
          freelancers. Caso deseje contato para conversarmos sobre seu projeto,
          basta clicar no botão abaixo!
        </p>

        <div className="inline-flex w-full justify-center lg:justify-start">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="flex items-center gap-2 px-10 py-4 bg-green-500 rounded mt-6 hover:bg-green-300 transition-all ease hover:shadow-2xl hover:shadow-green-400/10 font-bold">
                <PaperPlaneRight size={24} weight="bold" />
                Vamos conversar
              </button>
            </Dialog.Trigger>
            <ContactModal />
          </Dialog.Root>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -z-[50] w-1/2 h-1/2 -left-1/2 rounded-full white__gradient dark:blue__gradient" />
        <img className="hidden lg:block" src={previewHero} alt="Preview" />
        <img className="lg:hidden" src={previewHeroMobile} alt="Preview" />
      </div>
    </section>
  )
}
