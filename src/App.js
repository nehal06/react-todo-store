import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"; 
import './App.css'
import {useState,useEffect} from "react"
function App() {
  let [addTodo, setAddTodo] = useState(JSON.parse(localStorage.getItem("todos")) || [])

  function addTodoFunc(item){
    setAddTodo(addTodo =>[
      ...addTodo,
      {
        id:addTodo.length+1,
        item,
        status:false
      }
    ])
  }
  function updateTodoStatus(id,status){
    console.log(id)
    let updatedStatusObj = addTodo.map(todo => {
      if(todo.id == id){       
        todo = {...todo,status}
      }
      return todo;
    });   
    setAddTodo([...updatedStatusObj]);
  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(addTodo));
  }, [addTodo]);
  return (
    <div className="App center">
     <h1>Wish List</h1> 
     <TodoForm addTodoFunc={addTodoFunc}/>
     {addTodo && addTodo.map(todo => <TodoItem key={todo.id} updateStatus={updateTodoStatus} todo={todo}/>)}     
    </div>
  );
}

export default App;
