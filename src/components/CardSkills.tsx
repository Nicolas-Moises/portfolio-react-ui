import { CheckCircle } from 'phosphor-react'
import { Progressbar } from './Progressbar'

interface CardSkillsProps {
  tech: string
  progressPercentage: number
}

export function CardSkills(props: CardSkillsProps) {
  return (
    <div className="flex flex-col w-[500px]">
      <div className="flex items-center gap-2 -mb-4 text-gray-500 dark:text-white">
        <div className="text-green-500 dark:text-green-300">
          <CheckCircle size={32} weight="fill" />
        </div>
        <span className="font-bold text-gray-600 dark:text-white">
          {props.tech}
        </span>
      </div>
      <Progressbar progress={props.progressPercentage} />
    </div>
  )
}
