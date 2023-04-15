import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  placeholder: string
}

export function Input(props: InputProps) {
  const { register } = useFormContext()

  return (
    <input
      id={props.name}
      className="flex-1 rounded border dark:bg-gray-900 dark:border-zinc-700 border-gray-200 shadow-sm px-5 py-4 dark:text-gray-300 text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300
        placeholder:text-gray-400 text-sm"
      {...register(props.name)}
      {...props}
    />
  )
}
