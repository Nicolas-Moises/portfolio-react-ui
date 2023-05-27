import { CloudArrowDown, MouseSimple } from 'phosphor-react'
import previewAbout from '../assets/preview-about.png'
import explore from '../assets/explore.svg'

import Balance from 'react-wrap-balancer'

export function About() {
  return (
    <section
      id="about"
      className="w-full max-w-[1300px] flex flex-col-reverse gap-10 xl:gap-0 xl:flex-row items-center mx-auto my-44 px-6 justify-between bg-grid bg-auto bg-right bg-no-repeat"
    >
      <div className="relative w-3/4 xl:w-auto">
        <div className="absolute bg-white/5 backdrop-blur-3xl p-1 rounded-full top-[50%] translate-y-[-50%] right-[-11%] w-32">
          <img src={explore} className="animate-spin-slow" alt="" />
          <MouseSimple
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            size={24}
          />
        </div>
        <img
          className="object-cover w-full xl:w-auto"
          src={previewAbout}
          alt="Preview"
        />
      </div>

      <div className="w-3/4 xl:w-auto">
        <span className="text-sm flex gap-2 items-center text-blue-500 mb-4 font-semibold justify-center xl:justify-start">
          Sobre mim
        </span>
        <h1 className="font-bold text-4xl mb-8 dark:text-white text-gray-600 text-center xl:text-left max-w-xl">
          <Balance>Criar e desenvolver são minhas paixões</Balance>
        </h1>
        <p className="w-auto xl:w-[550px] dark:text-gray-300 text-gray-400 leading-relaxed text-center xl:text-left">
          Hello world! Agradeço pela visita e espero que gostem desse projeto
          que decidi construir para inovar em meu portfólio. Hoje estou na busca
          de realizar a transição de carreira. A tecnologia com certeza mudou
          minha vida e descobri que codar é minha paixão! Ainda não tenho
          experiência sólida no mercado de trabalho, tirando os freelancers que
          venho realizando até aqui e projetos de estudo pessoal para
          desenvolvimento e especialização. Peço que baixem meu currículo
          clicando no botão abaixo ou me chamem por algum de meus contatos para
          batermos um papo.
        </p>
        <div className="inline-flex w-full justify-center xl:justify-start">
          <a
            href="../../assets/curriculo.pdf"
            download
            className="flex items-center gap-2 px-10 py-4 bg-transparent border-2 border-green-500 dark:border-blue-500 rounded mt-6 hover:bg-green-500 hover:text-white transition-all 
        ease hover:shadow-2xl hover:shadow-green-400/10 font-bold text-green-500 dark:text-blue-300 dark:hover:text-white dark:hover:bg-blue-500"
          >
            <CloudArrowDown size={24} weight="bold" />
            Baixar meu currículo
          </a>
        </div>
      </div>
    </section>
  )
}
