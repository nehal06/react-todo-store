import {useState} from "react"
function TodoItem({updateStatus,todo}){
  let {id,item,status} = todo;
  const [itemStatus, setItemStatus] = useState(status);
  function updateStatusChb(event){
    setItemStatus(event.target.checked);
    updateStatus(event.target.getAttribute("data-id"),event.target.checked)
  }

  return (
    <div> 
      <input id={'todoItem_'+id}  type="checkbox" data-id={id} checked={itemStatus} onChange={updateStatusChb}/>
      <label htmlFor={'todoItem_'+id}>{item}</label> 
    </div>
  )
}
export default TodoItem;