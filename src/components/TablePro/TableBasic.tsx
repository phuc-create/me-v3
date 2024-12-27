import React from 'react'
import _ from 'lodash'
import { cn } from '../../utils/classname'

export interface TableBasicProps
  extends React.ComponentPropsWithoutRef<'table'> {
  children?: React.ReactNode
}

const TableBasic = ({ className, children }: TableBasicProps) => {
  return (
    <div className="overflow-x-auto m-4">
      <table
        className={cn(
          'border border-gray-400 w-full border-solid border-collapse',
          className
        )}
      >
        {children}
      </table>
    </div>
  )
}

export default TableBasic
