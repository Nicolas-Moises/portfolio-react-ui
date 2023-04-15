import { skills } from '../constants/skills'
import { CardSkills } from './CardSkills'

export function Skills() {
  return (
    <section
      id="skills"
      className="w-full max-w-[1300px] mx-auto px-6 mb-44 relative"
    >
      <div className="w-full flex flex-col">
        <span className="text-sm text-blue-500 text-center mb-4 font-semibold">
          Habilidades
        </span>
        <h1 className="font-bold text-4xl mb-8 dark:text-white text-gray-600 text-center">
          Algumas das stacks que <br />
          tenho conhecimento
        </h1>
        <p className="text-center dark:text-gray-300 text-gray-400">
          Abaixo estão algumas das tecnologias que mais estou estudando e
          utilizando nos projetos atuais. Futuramente pretendo focar também em{' '}
          <br />
          ampliar os conhecimentos no back-end, principalmente em Node e Elixir.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 gap-y-10 justify-around mt-10">
        {skills.map((skill) => {
          return (
            <CardSkills
              key={skill.id}
              progressPercentage={skill.progress}
              tech={skill.tech}
            />
          )
        })}
      </div>
      <div className="top-14 left-0 absolute -z-[50] w-1/2 h-1/2 rounded-full blue__gradient" />
    </section>
  )
}
