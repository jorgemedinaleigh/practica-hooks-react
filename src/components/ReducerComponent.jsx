import { useReducer } from "react"
import { useForm } from "../hooks/useForm"

const initialState = []

const taskReducer = (state = initialState, action = {}) => {
  switch(action.type){
    case '[Tasks] Add Task':
      return [...state, action.payload]
    case '[Tasks] Mark Task as Done':
      return state.map( task => {
        if(task.id === action.payload){
          return{...task, done: !task.done}
        }
        return task
      })
    case '[Tasks] Delete Task':
      return state.filter(task => task.id !== action.payload)
    case '[Tasks] Delete All':
      return []
    default:
      return state
  }
}

export const ReducerComponent = () => {

  const [state, dispatch] = useReducer(taskReducer, initialState)
  const {task, formState, onInputChange} = useForm({task: ''})

  const addTask = (event) => {
    event.preventDefault()
    if(formState.task === '') return

    const task = {
      id: new Date().getTime(),
      task: formState.task,
      done: false
    }
    const action = {
      type: '[Tasks] Add Task',
      payload: task
    }

    dispatch(action)
  }

  const markDone = (id) => {
    const action = {
      type: '[Tasks] Mark Task as Done',
      payload: id
    }

    dispatch(action)
  }

  const deleteTask = (id) => {
    const action = {
      type: '[Tasks] Delete Task',
      payload: id
    }
    dispatch(action)
  }

  const deleteAll = () => {
    const action = {
      type: '[Tasks] Delete All',
      payload: ''
    }
    dispatch(action)
  }

  return (
    <>
      <form onSubmit={addTask}>
        <h2>Task List</h2>
        <div className="form-group">
          <input type="text" className="form-control" name="task" placeholder="Add a new task"
            value={task} onChange={onInputChange}/>
        </div>
        <button type="submit" className="btn btn-success">Add Task</button>
        <button type="button" className="btn btn-danger" onClick={deleteAll}>Delete All</button>
      </form>
      <ul className="list-group">
        {state.map (item => {
          return(
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              <span>{item.task}</span>
              <div>
                <input type="checkbox" value={item.done}
                  onChange={() => markDone(item.id)}/>
                <button className="btn" onClick={() => deleteTask(item.id)}>🗑️</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
