'use client'

import React from 'react'
import { useFormStatus } from 'react-dom'

import { cn } from '@/lib/utils'

import { Button, ButtonProps } from '../ui/button'
import Icon, { type IconProps } from './icon'

interface FormSubmitProps extends ButtonProps {
  label?: string
  loading?: boolean
  icon?: IconProps['name']
}

export default function CustomSubmitButton({
  label,
  id,
  disabled,
  icon,
  loading,
  className,
  ...props
}: FormSubmitProps) {
  const { pending } = useFormStatus()

  const isLoading = loading || pending

  return (
    <Button
      disabled={disabled || isLoading}
      {...props}
      id={id}
      className={cn('relative gap-2', className)}
      type="submit"
      size={!label ? 'icon' : props.size}
    >
      {icon && (
        <Icon
          name={icon}
          className={cn(
            isLoading ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-100',
          )}
        />
      )}
      {label && (
        <span
          className={cn(
            isLoading ? 'opacity-0' : 'opacity-100',
            'transition-opacity duration-100',
          )}
        >
          {label}
        </span>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon name="LoaderCircle" className="animate-spin" />
        </div>
      )}
      <span className="sr-only">{isLoading ? 'Submiting' : 'Submit'}</span>
    </Button>
  )
}
