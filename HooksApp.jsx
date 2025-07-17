import { CounterComponent } from "./src/components/CounterComponent"
import { FormComponent } from "./src/components/FormComponent"
import { UsuariosComponent } from "./src/components/UsuariosComponent"
import { CalculosPesados } from "./src/components/CalculosPesados"

export const HooksApp = () => {
  return (
    <>
      <h2>Hooks App</h2>
      <hr />
      <CounterComponent />
      <hr />
      <FormComponent/>
      <hr />
      <UsuariosComponent/>
      <hr />
      <CalculosPesados/>
    </>
  )
}
