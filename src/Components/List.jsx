import React, { useState } from 'react'
const List = () => {
    const [task,settask]=useState(["Breakfast","Shower","Long Walk","Study","Programming"])
    const [newtask,setnewtask]=useState("")

    function handleChange(event) {
        setnewtask(event.target.value)
    }
    function addTask() {
        if(newtask.trim() !=="")
      settask(t => [...t,newtask]);
         setnewtask("");
    }
    function deleteTask(index){
        const updateTask =task.filter((element,i) => i !== index);
        settask(updateTask);

    }
    function moveTaskUp(index) {
        if(index > 0){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index-1]] = 
            [updatedTask[index-1],updatedTask[index]];
            settask(updatedTask);
        }
    }
    function moveTaskDown(index) {
        if(index < task.length-1){
            const updatedTask=[...task];
            [updatedTask[index],updatedTask[index+1]] = 
            [updatedTask[index+1],updatedTask[index]];
            settask(updatedTask);
        } 
    }
  return (
    <>
    <div>
        
        <div className='to-do-list'>
        <h1>TODO List</h1>
            <input type='text' 
            placeholder='Enter your task'
            value={newtask}
            onChange={handleChange}
            />
            <button className='add-task' onClick={addTask}>Add Task</button>
            <ol>
                {task.map((task,index)=>
                
                  <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='del-btn' onClick={()=>deleteTask(index)}>Delete</button>
                    <button className='move-btn' onClick={()=>moveTaskUp(index)}>👆</button>
                    <button className='move-btn' onClick={()=>moveTaskDown(index)}>👇</button>
                  </li>
                )}
            </ol>
        </div>
    </div>
    </>
  )
}

export default List
