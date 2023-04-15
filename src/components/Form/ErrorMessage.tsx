import { WarningCircle } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'

interface ErrorMessageProps {
  field: string
}

function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj,
      )

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)

  return result
}

export function ErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext()

  const fieldError = get(errors, field)

  if (!fieldError) {
    return null
  }

  return (
    <span className="flex items-center gap-2 text-xs text-red-500 mt-1">
      <WarningCircle size={16} />
      {fieldError.message?.toString()}
    </span>
  )
}
