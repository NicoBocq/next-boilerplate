import { HTMLAttributes } from 'react'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/lib/utils'

import { ButtonProps, buttonVariants } from '../ui/button'
import Icon, { IconProps } from './icon'

interface LinkCustomProps extends LinkProps, HTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
  className?: string
  noVariant?: boolean
  icon?: IconProps['name']
  iconRight?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export default function CustomLink(props: LinkCustomProps) {
  const { icon, noVariant, target, className, children, iconRight, ...rest } =
    props
  const size = props.size ? props.size : !children ? 'icon' : 'default'
  return (
    <Link
      {...rest}
      className={cn(
        'inline-flex items-center gap-2',
        iconRight ? 'flex-row-reverse' : '',
        noVariant ? '' : buttonVariants({ variant: props.variant, size }),
        className,
      )}
      target={target}
    >
      {icon && <Icon name={icon} />}
      {children && <span>{children}</span>}
    </Link>
  )
}
