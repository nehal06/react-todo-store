import React, { useState } from 'react';

function TodoForm({addTodoFunc}){

  let [item,setItem] = useState("");
  function onClickAdd(item){
    addTodoFunc(item);
    setItem("");
  }
  return(
    <div>
      <label htmlFor="addInput">Add Todo</label>
      <input id="addInput" type="text" value={item} onChange={(event)=>setItem(event.target.value)}/>
      <button type="button" onClick={()=>onClickAdd(item)}>Add</button>
    </div>
  )
}
export default TodoForm;