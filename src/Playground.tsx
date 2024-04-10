import React from 'react'
import { maxSubArray, mergeSort, minCores } from './utils/array'

const Playground = () => {
  /**
   * giải quyết bài toán lập lịch quy trình
  có n tiến trình, trong đó tiến trình thứ i bắt đầu thực thi tại start[i] và kết thúc tại end[i]
  tìm số lõi cần thiết để thực hiện các tiến trình
  ví dụ:
  đầu vào start = [1,3,4],end = [3, 5, 6]
  return 2
  giải thích:
  nếu CPU chỉ có 1 lõi, quy trình đầu tiên chạy từ 1 đến 3, quy trình thứ 2 bắt đầu ở 3, vì cả 2 quy trình đều cần bộ xử lý ở 3 nên chúng trùng nhau, phải có nhiều hơn 1 lõi
  nếu CPU có 2 lõi, quy trình đầu tiên chạy trên lõi thứ nhất từ 1 đến 3, quy trình thứ 2 chạy trên lõi thứ 2 từ 3 đến 5, và quy trình thứ 3 chạy trên lõi thứ nhất 4 đến 6
  trả về 2 là số lượng lõi tối thiểu
  giải quyết bài toán bằng javascript
  đầu vào start = [1,2,3],end = [3, 3, 5]
  return 3
   */

  // console.log(insertionSort([11, 4, 6, 8, 100, 2])) // [2, 4, 6, 8, 11, 100]
  console.log(minCores([1, 3, 4], [3, 5, 6])) // return 2
  console.log(minCores([1, 2, 3], [3, 3, 5])) // return 3
  // console.log('max sub array:', maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // return 6
  // console.log(
  //   binarySearch(
  //     6,
  //     Array.from({ length: 10000000 }).map((_, i) => i)
  //   )
  // ) // [2, 4, 6, 8, 11, 100]
  console.log(
    'array trước khi sort: ',
    [
      35, 65, 2, 54, 2, 34, 5, 345, 421, 6, 4543, 434, 475, 23, 5, 3, 467, 8, 9,
      1112, 21, 4, 354645612, 1, 2312, 32, 3, 234, 998239
    ]
  )
  console.log(
    'sorted array: ',
    mergeSort([
      35, 65, 2, 54, 2, 34, 5, 345, 421, 6, 4543, 434, 475, 23, 5, 3, 467, 8, 9,
      1112, 21, 4, 354645612, 1, 2312, 32, 3, 234, 998239
    ])
  )
  return <></>
}

export default Playground
