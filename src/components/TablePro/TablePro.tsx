import React, { useEffect, useState } from 'react'
import { TableHeader, TableItem } from './components'
import { SortHanler, ToReactNode, TableProProps } from './types'
import { extractHeaderData, handleSort } from './utils'
import _ from 'lodash'

const TablePro = <T extends Record<string, any>>({
  data,
  headerResolver,
  className,
  sortable,
  summary,
  itemResolver,
  options
}: TableProProps<T>) => {
  const [groupData, setGroupData] = useState<T[]>(data)
  const [sortBy, setSortBy] = useState<SortHanler>([])

  useEffect(() => {
    setGroupData(data)
  }, [data])

  const sortHandler = (field: string) => {
    let newSortBy = [...sortBy]
    const index = sortBy.findIndex(s => s.field === field)
    if (index !== -1) {
      const fieldSortBy = { ...sortBy[index] }
      if (fieldSortBy.order === 'asc') {
        fieldSortBy.order = 'desc'
        newSortBy[index] = fieldSortBy
      } else {
        newSortBy.splice(index, 1)
      }
    } else {
      newSortBy = [
        {
          field,
          order: 'asc'
        },
        ...newSortBy
      ]
    }

    setSortBy(newSortBy)

    const sorted = handleSort([...groupData], newSortBy)
    setGroupData(sorted)
  }

  const renderHeader = () => {
    if ((groupData || []).length > 0) {
      const headerData = extractHeaderData(groupData)
      return (
        <TableHeader
          headerData={headerData}
          headerResolver={headerResolver}
          sortBy={sortBy}
          sortHandler={sortHandler}
          sortable={sortable}
          styles={options?.styles}
        />
      )
    }
  }

  const renderItems = () => {
    if ((groupData || []).length > 0) {
      return groupData.map((item, idx) => {
        let itemData: T | ToReactNode<T> = item

        if (typeof itemResolver === 'function') {
          itemData = itemResolver(item)
        }

        return <TableItem key={idx} item={itemData} styles={options?.styles} />
      })
    }
  }

  const renderFooter = () => {
    if (_.isNil(summary)) return null
    return (
      <TableItem
        item={summary || {}}
        className="vmi-table-footer"
        isSummary
        styles={options?.summary}
      />
    )
  }

  if (!groupData.length) {
    return 'No records'
  }

  return (
    <div className="overflow-x-auto m-4">
      <table className="border border-[color:var(--color-divider)] w-full min-w-[calc(1600px_-_1rem)] border-solid border-collapse">
        <thead>{renderHeader()}</thead>
        <tbody>
          {renderItems()}
          {renderFooter()}
        </tbody>
      </table>
    </div>
  )
}

export default TablePro
