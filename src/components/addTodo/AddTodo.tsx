import React from "react";
import {useState} from 'react'
import "./AddTodo.css"
import { Itask } from "../../type";
interface Iprops{
    onSubmit:(task:Itask)=>void;

}
const AddTodo = (props:Iprops) => {
    
    const [task,setTask] = useState <Itask>({id:"",tasktext:"",isCompleted:false,urgent:false});
    const handleChange=(field:string,value:any)=>{
      setTask({...task,[field]:value});
    }
    const handleSubmit=()=>{
       const newTask = {...task,id:Date.now.toString()}
         props.onSubmit(newTask);
      }

  return (
    
    <div className="add-todo">
      <input id="tasktext" type="text" onChange={(e)=>handleChange('tasktext',e.target.value)}></input>
      <div className="urgent-container">
      <span>Urgent</span>
      <input id="urgent" type="checkbox"   onChange={(e)=>handleChange('urgent', e.target.checked)}></input>
      </div>
      <button onClick={handleSubmit}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
