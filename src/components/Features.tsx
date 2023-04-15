import { BgBlur } from './BgBlur'
import { features } from '../constants/features'
import { CardFeature } from './CardFeature'

export function Features() {
  return (
    <section className="w-full max-w-[1300px] mx-auto px-6 mb-44">
      <div className="w-full flex flex-col">
        <span className="text-sm text-blue-500 text-center mb-4 font-semibold">
          Diferenciais
        </span>
        <h1 className="font-bold text-4xl mb-8 dark:text-white text-gray-600 text-center">
          Tudo que você precisa na construção <br />
          do seu site ou sistema
        </h1>
      </div>

      <div className="flex flex-wrap justify-around gap-4 mt-10 relative">
        {features.map((feature) => {
          return (
            <CardFeature
              key={feature.id}
              caption={feature.caption}
              title={feature.title}
              icon={<feature.icon size={24} />}
            />
          )
        })}
        <BgBlur />
      </div>
    </section>
  )
}
