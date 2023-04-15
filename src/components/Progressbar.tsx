import * as Progress from '@radix-ui/react-progress'
import { useEffect, useState } from 'react'

interface ProgressbarProps {
  progress: number
}

export function Progressbar(props: ProgressbarProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setProgress(props.progress), 1000)
    return () => clearTimeout(timer)
  }, [props.progress])

  return (
    <div className="flex flex-col items-end">
      <span className="text-xs font-bold mr-4 uppercase dark:text-gray-100 text-gray-500">
        {(props.progress <= 25 && 'Iniciante') ||
          (props.progress > 25 && props.progress <= 50 && 'Intermediário') ||
          (props.progress > 50 && props.progress <= 75 && 'Avançado') ||
          (props.progress > 75 && 'Profissional')}{' '}
        • {progress}%
      </span>
      <Progress.Root
        className="h-3 rounded-xl bg-gray-300 dark:bg-gray-800 w-full mt-4"
        value={progress}
      >
        <Progress.Indicator
          className="h-3 rounded-xl bg-violet-500 transition-all ease-linear"
          style={{
            width: `${progress}%`,
          }}
        />
      </Progress.Root>
    </div>
  )
}
