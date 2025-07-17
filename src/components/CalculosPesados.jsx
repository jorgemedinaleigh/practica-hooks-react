import React, { useMemo, useState } from 'react'

export const CalculosPesados = () => {
  
  const [numberList, setNumberList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  const [show, setShow] = useState(true)

  const getCalculo = (numberList) => useMemo(() => {
    return numberList.reduce((a, b) => a * b)
  }, [numberList])
  const addNumber = () => {
    setNumberList([...numberList, numberList[numberList.length - 1] + 1])
  }
  
  return (
    <>
      <h1>Cálculo: {getCalculo(numberList)}</h1>
      <p>{numberList}</p>
      <button className='btn btn-primary' onClick={() => setShow(!show)}>{show ? 'SHOW' : 'HIDE'}</button>
      <button className='btn btn-success' onClick={() => addNumber()}>Add Number</button>
    </>
  )
}
