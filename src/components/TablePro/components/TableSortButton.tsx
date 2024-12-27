import React from 'react'
import { FaSort } from 'react-icons/fa'

interface TableSortButtonProps {
  id: string
  onClickHandler: () => void
  order?: 'asc' | 'desc'
  className?: string
}
const TableSortButton: React.FC<TableSortButtonProps> = ({
  id,
  onClickHandler,
  order,
  className
}) => {
  return (
    <button id={id} onClick={onClickHandler}>
      <FaSort width={16} order={order || ''} />
    </button>
  )
}

export default TableSortButton
