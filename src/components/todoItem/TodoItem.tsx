import React from 'react'
import './TodoItem.css'
import deleteicon from "../../Asets/delete-icon.png"
import { Itask} from '../../type'
interface Itasks extends Itask{

 removeTask:(id:string) => void,
 editComplete:(id:string,value:boolean) => void
}
const TodoItem = (props :Itasks) => {

    const remTask=()=>{      
        props.removeTask(props.id);
    }
    const handleComplete=(id:string,value:boolean)=>{
        props.editComplete(id,value)
    }

  return (
    <div className="todo-item">
        <input type="checkbox" checked={props.isCompleted}onChange={e => handleComplete(props.id,e.target.checked)} ></input>
        <p style={{ color: props.urgent ? "red" : "black",
             textDecoration: props.isCompleted ? "line-through" : "none",
         }}>{props.tasktext}</p>
        <img src={deleteicon} alt="" onClick={remTask}></img>
    </div>
  )
}

export default TodoItem