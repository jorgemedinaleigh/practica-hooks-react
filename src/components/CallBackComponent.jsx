import React, { useCallback, useState } from 'react'
import { Add } from './Add'
import { Substract } from './Substract'

export const CallBackComponent = () => {

  const [count, setCount] = useState(0)
  const increment = useCallback((val) => {
    setCount(conta => conta + val)
  }, []) 
  const decrement = useCallback((val) =>{
    setCount(conta => conta - val)
  }, [])

  return (
    <>
      <h1>Contador: {count}</h1>
      <Add add={increment}></Add>
      <Substract substract={decrement}></Substract>
    </>
  )
}
