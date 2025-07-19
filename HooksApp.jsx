import { CounterComponent } from "./src/components/CounterComponent"
import { FormComponent } from "./src/components/FormComponent"
import { UsuariosComponent } from "./src/components/UsuariosComponent"
import { CalculosPesados } from "./src/components/CalculosPesados"
import { CallBackComponent } from "./src/components/CallBackComponent"
import { ReducerComponent } from "./src/components/ReducerComponent"

export const HooksApp = () => {
  return (
    <>
      <h2>Hooks App</h2>
      <hr />
      <ReducerComponent/>
      {/*<CounterComponent />
      <hr />
      <FormComponent/>
      <hr />
      <UsuariosComponent/>
      <hr />
      <CalculosPesados/>
      <hr />
      <CallBackComponent/> */}
    </>
  )
}
