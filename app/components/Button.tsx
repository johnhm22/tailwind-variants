import React from 'react'
import { tv } from 'tailwind-variants'

const button = tv({
  base: 'font-medium bg-blue-500 text-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary:
        'bg-blue-500 text-black hover:bg-blue-700 transition ease-out duration-500',
      secondary:
        'bg-purple-500 text-white hover:bg-purple-700 transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration:300',
      warning: 'bg-red-500 text-white hover:bg-red-600'
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'px-4 py-3 text-lg font-semibold'
    },
    disabled: {
      true: 'opacity-50 bg-gray-500 pointer-events-none'
    }
  },
  compoundVariants: [
    {
      size: ['sm', 'md'],
      class: 'px-3 py-1'
    }
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
})

const Button = ({
  text,
  size,
  color,
  disabled
}: {
  text: string
  size?: 'sm' | 'md' | 'lg' | undefined
  color?: 'primary' | 'secondary' | 'warning' | undefined
  disabled?: true
}) => {
  return <button className={button({ size, color, disabled })}>{text}</button>
}

export default Button
