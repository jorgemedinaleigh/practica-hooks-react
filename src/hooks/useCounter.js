import { useState } from 'react'

export const useCounter = (initialValue = 0) => {

  const [counter, setCounter] = useState(initialValue)
  const add = (value = 1) => {
    setCounter(counter + value)
  }
  const subtract = (value = 1) => {
    setCounter(counter - value)
  }
  const reset = () => {
    setCounter(0)
  }

  return {
    counter,
    add,
    subtract,
    reset
  }
}
