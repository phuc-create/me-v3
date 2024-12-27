import React from 'react'
import Node from './Node'
import TableSortButton from './TableSortButton'
import { CustomCSSProperties, SortHanler } from '../types'
import { cn } from '../../../utils/classname'

interface TableHeaderProps<T> {
  headerData: { key: string; node: string }[]
  headerResolver: Record<string, string>
  className?: string
  sortBy: SortHanler
  sortHandler: (key: string) => void
  sortable?: { [K in keyof T]?: boolean }
  styles?: CustomCSSProperties<T>
}

interface TableHeaderNodeProps extends React.ComponentPropsWithoutRef<'thead'> {
  children?: React.ReactNode
}

const TableHeaderNode = ({
  children,
  className,
  ...props
}: TableHeaderNodeProps) => {
  return (
    <thead className={cn('bg-gray-200', className)} {...props}>
      {children}
    </thead>
  )
}

export default TableHeaderNode
