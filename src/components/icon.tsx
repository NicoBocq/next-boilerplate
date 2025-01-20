import { ComponentSizeType } from '@/types/ui'

import React from 'react'
import { cva } from 'class-variance-authority'
import { icons, LucideProps } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface IconProps extends LucideProps {
  name: keyof typeof icons
  size?: ComponentSizeType
}

export const iconVariants = cva('', {
  variants: {
    size: {
      xxs: 'h-2 w-2',
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-6 w-6',
      lg: 'h-8 w-8',
      xl: 'h-10 w-10',
      hero: 'h-12 w-12',
      custom: '',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
})

const Icon = ({ name, className, size = 'sm', ...props }: IconProps) => {
  const LucideIcon = icons[name] ?? icons.CircleDashed

  return (
    <LucideIcon
      {...props}
      aria-hidden="true"
      className={cn(
        'shrink-0',
        iconVariants({ size }),
        name === 'LoaderCircle' ? 'animate-spin' : '',
        className,
      )}
    />
  )
}

export default Icon
