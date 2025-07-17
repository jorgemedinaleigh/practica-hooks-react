import React from 'react'

export const Substract = React.memo(({substract}) => {
  return (
    <button className='btn btn-danger' onClick={() => substract(1)}>-</button>
  )
})
