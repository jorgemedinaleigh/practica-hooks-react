import { useEffect, useRef } from "react"
import { useForm } from "../hooks/useForm"
export const FormComponent = () => {

  const initialForm = {
    userName: '',
    email: '',
    password: ''
  }

  const {formState, onInputChange} = useForm(initialForm)
  const {userName, email, password} = formState

  const onSubmit = () => {
    event.preventDefault()
    console.log(formState)
  }

  const focusRef = useRef()

  useEffect(() => {
    focusRef.current.focus()
  })

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input type="email" className="form-control" name="email" placeholder="Enter email" 
          value={email} onChange={onInputChange} ref={focusRef}>
        </input>
      </div>
      <div className="form-group">
        <label htmlFor="userName">User Name</label>
        <input type="text" className="form-control" name="userName" placeholder="Enter user name" 
          value={userName} onChange={onInputChange}>
        </input>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" name="password" placeholder="Password" 
          value={password} onChange={onInputChange}>
        </input>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
