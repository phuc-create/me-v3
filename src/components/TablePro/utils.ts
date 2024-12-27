import { SortHanler } from './types'

export const handleSort = <T extends Record<string, any>>(
  arr: T[],
  sorts: SortHanler,
) => {
  sorts.forEach(({ field: by, order }) => {
    if (!by || !order) return arr
    arr.sort((a, b) => {
      if (order === 'desc') {
        if (a[by] > b[by]) {
          return -1
        }
        if (a[by] < b[by]) {
          return 1
        }
        if (a[by] || b[by]) {
          if (a[by] === null) {
            return 1
          }
          if (b[by] === null) {
            return -1
          }
        }
        return 0
      }
      if (a[by] < b[by]) {
        return -1
      }
      if (a[by] > b[by]) {
        return 1
      }
      if (a[by] || b[by]) {
        if (a[by] === null) {
          return -1
        }
        if (b[by] === null) {
          return 1
        }
      }
      return 0
    })
  })
  return arr
}

export const extractHeaderData = (data: Record<string, string>[] = []) => {
  let headerData: { key: string; node: string }[] = []
  if (data.length > 0) {
    const keys = Object.keys(data[0])
    headerData = keys.map(key => ({
      key,
      node: key,
    }))
    return headerData
  }
  return headerData
}
