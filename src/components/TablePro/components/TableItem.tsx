import React, { CSSProperties, useRef, useState } from 'react'
import classnames from 'classnames'

import { CustomCSSProperties, ToReactNode } from '../types'
import { FaChevronDown } from 'react-icons/fa'
import { cn } from '../../../utils/classname'

interface TableItemProps<T> {
  item: T | ToReactNode<T>
  className?: string
  isSummary?: boolean
  styles?: CustomCSSProperties<T>
}
const TableItem = <T extends Record<string, any>>({
  item,
  className,
  isSummary,
  styles
}: TableItemProps<T>) => {
  const contentHeight = useRef<HTMLDivElement>(null)

  const hasExpand = item.hasOwnProperty('innerContent')

  const [activeInner, setActiveInner] = useState(false)

  const handleToggle = () => {
    setActiveInner(prev => !prev)
  }

  const renderNode = () => {
    const itemKeys = Object.keys(item) // => ['key1','key2',...]
    if (!itemKeys.length) return null
    const tableItems = itemKeys
      .filter(key => key !== 'innerContent')
      .map((element, index) => {
        return (
          <td
            key={index}
            className="border border-[color:var(--color-divider)] border-solid border-collapse transition-[background-color] duration-200 ease-[ease-in-out]"
            style={{
              ...({
                '--item-bgColor':
                  isSummary && item.hasOwnProperty(element)
                    ? 'var(--color-gray96)'
                    : 'transparent'
              } as CSSProperties),
              ...styles?.[element]
            }}
          >
            {item[element]}
          </td>
        )
      })

    if (hasExpand) {
      if (isSummary) {
        tableItems.unshift(<td key="header-item-toggle" className="p-4"></td>)
      } else {
        const toggle = (
          <td
            key="header-item-toggle"
            className="transition-[background-color] duration-200 ease-[ease-in-out]"
          >
            <div className="flex justify-center items-center p-1">
              <button
                className={cn('flex p-2', activeInner && '-rotate-180')}
                onClick={handleToggle}
              >
                <FaChevronDown className="" />
              </button>
            </div>
          </td>
        )

        tableItems.unshift(toggle)
      }
    }

    return tableItems
  }

  const row = renderNode()

  return (
    <>
      <tr className="bg-white">{row}</tr>

      {activeInner && hasExpand && !isSummary && (
        <tr className="p-1">
          <td
            colSpan={row?.length}
            className={cn(
              'p-0 border-0',
              activeInner && 'border',
              'transition-[background-color] duration-200 ease-[ease-in-out]'
            )}
          >
            <div
              ref={contentHeight}
              className="overflow-hidden transition-[height] duration-[0.35s] ease-[ease-in-out]"
            >
              <p
                style={{ margin: '1rem 1.25rem 0' }}
                className="bold text-sm block"
              >
                {item.innerContent.title}
              </p>
              {item.innerContent.value}
            </div>
          </td>
        </tr>
      )}
    </>
  )
}

export default TableItem
