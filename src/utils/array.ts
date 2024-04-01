const binarySearch = (
  n: number,
  arr: number[],
  start = 0,
  end = arr.length - 1
): number => {
  const middle = Math.ceil((start + end) / 2)
  console.log('start: ', start, 'end: ', end, 'middle: ', middle, n)
  if (arr[middle] === n) return middle
  if (start >= end) return -1
  if (arr[middle] > n) {
    return binarySearch(n, arr, 0, middle - 1)
  }
  return binarySearch(n, arr, middle + 1, end)
}

const insertionSort = (arr: number[]): number[] => {
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > cur) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = cur
  }
  return arr
}

const maxSubArray = (arr: number[]) => {
  let curMax = arr[0]
  let total = arr[0]
  for (let i = 1; i < arr.length; i++) {
    curMax = Math.max(arr[i], arr[i] + curMax)
    total = Math.max(curMax, total)
    console.log(
      'i: ',
      i,
      '|value: ',
      arr[i],
      '|curMax: ',
      curMax,
      '|total: ',
      total
    )
  }
  return total
}

const getMinCores = (start: Array<number>, end: Array<number>) => {
  // Sắp xếp các thời điểm kết thúc tăng dần
  const events = []
  for (let i = 0; i < start.length; i++) {
    events.push([start[i], 1]) // Thời điểm bắt đầu sự kiện
    events.push([end[i], -1]) // Thời điểm kết thúc sự kiện
  }
  console.log(events)
  events.sort((a, b) => a[0] - b[0])
  console.log(events)

  let coresNeeded = 0
  let maxCores = 0

  // Duyệt qua các sự kiện
  for (const event of events) {
    coresNeeded += event[1] // Tăng hoặc giảm số lõi cần thiết
    maxCores = Math.max(maxCores, coresNeeded) // Cập nhật số lõi tối đa cần thiết
  }

  return maxCores
}

export { binarySearch, insertionSort, maxSubArray, getMinCores }
