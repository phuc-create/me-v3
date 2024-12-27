import React from 'react'
import { cn } from '../../../utils/classname'
interface TableHeadProps extends React.ComponentPropsWithoutRef<'th'> {
  children?: React.ReactNode
}

const TableHead: React.FC<TableHeadProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <th {...props} className={cn('items-center justify-start', className)}>
      {children}
    </th>
  )
}

export default TableHead
