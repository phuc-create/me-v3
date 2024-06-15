import { useEffect, useState } from 'react'

const useVisible = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setVisible(() => true)
    }, 1000)
  }, [])
  return {
    visible
  }
}

export default useVisible
