import { ComponentProps } from "react";
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentProps<'button'> {
  selected?: boolean
}

export function Button({ selected, ...props }: ButtonProps) {
  return (
    <button className={
      twMerge(" text-label mx-2 py-2 px-2 text-50 rounded-md ring-0",
        selected ? 'bg-30' : ''
      )
    }
      {...props} />
  )
}

