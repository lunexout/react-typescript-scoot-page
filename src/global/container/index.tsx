import clsx from 'clsx'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: Props) => {
  return (
    <div className={clsx('mt-[96px] max-w-screen-xl mx-auto', className)}>
      {children}
    </div>
  )
}
