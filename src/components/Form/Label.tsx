import { LabelHTMLAttributes } from 'react'

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className="text-sm dark:text-gray-100 text-gray-500 flex items-center justify-between font-bold"
      {...props}
    />
  )
}
