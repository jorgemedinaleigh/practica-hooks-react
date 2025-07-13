import { useCounter } from "../hooks/useCounter"

export const CounterComponent = () => {

  const {counter, add, subtract, reset} = useCounter(0)
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={ () => add(1)}>+1</button>
      <button className="btn btn-secondary" onClick={ () => reset()}>reset</button>
      <button className="btn btn-danger" onClick={ () => subtract(1)}>-1</button>
    </>
  )
}
