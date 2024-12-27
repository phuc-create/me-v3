import React from 'react'
import Node from './Node'
import TableSortButton from './TableSortButton'
import { CustomCSSProperties, SortHanler } from '../types'

interface TableHeaderProps<T> {
  headerData: { key: string; node: string }[]
  headerResolver: Record<string, string>
  className?: string
  sortBy: SortHanler
  sortHandler: (key: string) => void
  sortable?: { [K in keyof T]?: boolean }
  styles?: CustomCSSProperties<T>
}

const TableHeader = <T extends Record<string, string>>({
  headerData,
  headerResolver: resolver,
  className,
  sortBy,
  sortHandler,
  sortable,
  styles
}: TableHeaderProps<T>) => {
  const renderHeaderNode = () => {
    if (!headerData.length) return null
    const renderSortBtn = (key: string) => {
      if (!sortable?.[key]) return null
      const fieldSortBy = sortBy.find(s => s.field === key)
      return (
        <TableSortButton
          onClickHandler={() => sortHandler(key)}
          id={`${key}-sortbtn`}
          order={fieldSortBy?.order}
        />
      )
    }

    const items = headerData
      .filter(header => header.key !== 'innerContent')
      .map((header, idx) => {
        const title = resolver[header.key] || header.node
        return (
          <th
            key={'header-item-' + idx}
            className="p-4"
            style={styles?.[header.node]}
          >
            <Node>
              {title}
              {renderSortBtn(header.key)}
            </Node>
          </th>
        )
      })

    if (headerData.some(header => header.key === 'innerContent')) {
      const toggle = <th key="header-item-toggle"></th>
      items.unshift(toggle)
    }

    return items
  }

  return <tr className="bg-gray-200">{renderHeaderNode()}</tr>
}

export default TableHeader
