import React from 'react'

export const Add = React.memo(({add}) => {
  return (
    <button className='btn btn-primary' onClick={() => add(1)}>+</button>
  )
})
