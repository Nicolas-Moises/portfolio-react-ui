import { ReactElement } from 'react'

export interface CardFeatureProps {
  icon: ReactElement
  title: string
  caption: string
}

export function CardFeature(props: CardFeatureProps) {
  return (
    <div className="flex items-start gap-4 p-6 rounded-lg max-w-lg hover:bg-gradient-to-r dark:from-gray-800 from-white transition-colors ease-linear">
      <div className="p-2 rounded-lg bg-green-500">{props.icon}</div>
      <div>
        <h4 className="font-bold text-lg dark:text-white text-gray-500 mb-2">
          {props.title}
        </h4>
        <p className="dark:text-gray-200 text-gray-400">{props.caption}</p>
      </div>
    </div>
  )
}
