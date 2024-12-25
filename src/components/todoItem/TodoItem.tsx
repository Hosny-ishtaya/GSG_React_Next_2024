import React from 'react'
import './TodoItem.css'
import deleteicon from "../../Asets/delete-icon.png"
import { Itask} from '../../type'
interface Itasks extends Itask{

 removeTask:(id:string) => void
}
const TodoItem = (props :Itasks) => {
  return (
    <div className="todo-item">
        <input type="checkbox" checked={props.isCompleted}></input>
        <p>{props.tasktext}</p>
        <img src={deleteicon} alt="" onClick={props.removeTask(props.id)}></img>
    </div>
  )
}

export default TodoItem