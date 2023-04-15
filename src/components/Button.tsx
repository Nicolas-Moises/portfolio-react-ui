import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant: 'primay' | 'secondary' | 'tertiary'
}

export function Button(props: ButtonProps) {
  return (
    <button className="" {...props}>
      {props.children}
    </button>
  )
}
