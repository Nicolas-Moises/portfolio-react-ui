import { GithubLogo, LinkSimple } from 'phosphor-react'

export interface ProjectProps {
  imgURL: any
  title: string
  description: string
  tags: string[]
  link_deploy: string
  link_github: string
}

export function Project(props: ProjectProps) {
  return (
    <div className="md:overflow-hidden rounded-lg w-[500px] md:min-h-[400px] relative group drop-shadow-xl md:h-full md:max-h-72 keen-slider__slide">
      <img
        src={props.imgURL}
        className="object-cover w-full md:group-hover:scale-105 transition-all ease md:group-hover:blur-md md:min-h-[400px]"
        alt="Project preview"
      />

      <span className="relative md:absolute md:bottom-[-100%] w-full md:bg-gradient-to-t from-black p-5 group-hover:bottom-0 transition-all ease">
        <div className="hidden absolute -top-20 right-6 md:flex items-center gap-2">
          {props.tags.map((tag, index) => {
            return (
              <span
                className="py-1 px-3 rounded-full text-sm bg-green-500 text-white font-bold"
                key={index}
              >
                {tag}
              </span>
            )
          })}
        </div>
        <h2 className="font-bold text-white text-lg mb-2">{props.title}</h2>
        <p className="text-white font-medium text-sm mb-4">
          {props.description}
        </p>
        <div className="flex items-center gap-2">
          <a
            href={props.link_deploy}
            title="Deploy"
            target="_blank"
            className="bg-green-500 border-green-500 border-2 flex items-center gap-2 text-white p-3 rounded font-bold hover:bg-green-700 hover:border-green-700 transition-all ease"
            rel="noreferrer"
          >
            <LinkSimple size={24} />
          </a>
          <a
            href={props.link_github}
            title="Repo"
            target="_blank"
            className="bg-transparent flex items-center gap-2 border-2 border-blue-300 text-white p-3 rounded font-bold hover:bg-blue-300 transition-all ease"
            rel="noreferrer"
          >
            <GithubLogo size={24} />
          </a>
        </div>
      </span>
    </div>
  )
}
