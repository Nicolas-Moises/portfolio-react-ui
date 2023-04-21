import { projects } from '../constants/projects'
import { Project } from './Project'

import { useKeenSlider } from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

export function Projects() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <section
      id="projects"
      className="w-full px-6 mb-44 relative bg-grid bg-no-repeat"
    >
      <div className="w-full flex flex-col  max-w-[1300px] mx-auto">
        <span className="text-sm text-blue-500 text-center mb-4 font-semibold">
          Portfólio
        </span>
        <h1 className="font-bold text-4xl mb-8 dark:text-white text-gray-600 text-center">
          Alguns projetos que construí
          <br />
          até aqui
        </h1>

        <p className="text-center dark:text-gray-300 text-gray-400">
          Abaixo estão alguns dos projetos que construí recentemente visando
          estudo e <br />o aperfeiçoamento de algumas técnicas.
        </p>
      </div>

      <div
        className="mt-10 max-w-[calc(100vw-((100vw-1180px)/2))] ml-auto keen-slider"
        ref={sliderRef}
      >
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              description={project.subtitle}
              title={project.title}
              imgURL={project.img}
              link_deploy={project.link_deploy}
              link_github={project.link_github}
              tags={project.tags}
            />
          )
        })}
      </div>
      <div className="bottom-14 left-[60%] absolute -z-[50] w-80 h-1/2 rounded-full blue__gradient hidden md:block" />
    </section>
  )
}
