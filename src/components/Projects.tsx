import { projects } from '../constants/projects'
import { Project } from './Project'

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full max-w-[1300px] mx-auto px-6 mb-44 relative bg-grid bg-no-repeat"
    >
      <div className="w-full flex flex-col">
        <span className="text-sm text-blue-500 text-center mb-4 font-semibold">
          Portfólio
        </span>
        <h1 className="font-bold text-4xl mb-8 dark:text-white text-gray-600 text-center">
          Alguns projetos que construí
          <br />
          até aqui
        </h1>
      </div>

      <div className="flex flex-wrap justify-around gap-x-6 gap-y-14 mt-10">
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
