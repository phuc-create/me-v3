import React from 'react'

export interface TableListProps {
  data?: []
}

export type SortHanler = {
  field: string
  order: 'asc' | 'desc'
}[]

export type ToReactNode<T> = {
  [K in keyof T]?: React.ReactNode
}

export type CustomCSSProperties<T> = {
  [K in keyof T]?: React.CSSProperties & {
    [key: string]: string | number
  }
}

export type TableOptions<T> = {
  styles?: CustomCSSProperties<T>
  summary?: CustomCSSProperties<T>
}

export interface TableProProps<T extends Record<string, any>> {
  data: T[]
  headerResolver: Record<string, string>
  itemResolver?: (data: T) => ToReactNode<T>
  className?: string
  sortable?: { [K in keyof T]?: boolean }
  summary?: T
  options?: TableOptions<T>
}
