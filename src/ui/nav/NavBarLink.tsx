import { HTMLAttributeAnchorTarget, ReactNode } from 'react'
import cn from 'classnames'
import Link from 'next/link'

const NavLink = ({
  className,
  href,
  children,
  target,
}: {
  className?: string
  href: string
  children: ReactNode
  target?: HTMLAttributeAnchorTarget
}) => (
  <Link
    className={cn(
      'flex items-center h-[42px] font-bold text-navlink hover:text-white',
      className,
    )}
    href={href}
    target={target}
  >
    {children}
  </Link>
)

export { NavLink }
