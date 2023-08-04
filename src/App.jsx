
import './App.css'


import {AiOutlinePlus} from "react-icons/ai"
import TodoItem from './TodoItem'
import { useState } from 'react'
function App() {

  const [todoItem, setTodoItem] = useState('')
  const [todoList, setTodoList] = useState([])

  const handleChange = (e) =>{
    setTodoItem(e.target.value)
  }

  const addItem = () =>{
    if(!todoItem){
      alert("Please enter something")
      return
    }
    setTodoList([...todoList,todoItem])
    setTodoItem("")
  }
  const deleteTodo = (id) =>{
    setTodoList(olditems =>{
      return olditems.filter((elem,indx) =>{
      return indx !== id;
    })
    })
  }
  return (
     <div className="todo-container">
      <div className="add-input-todo">
        <input type="text" placeholder='Enter Todo...'
          value={todoItem}
          onChange={handleChange}
        />
        <button onClick={addItem} className='add-btn'><AiOutlinePlus/></button>
      </div>
      <div className="todo-items-container">
        {todoList.map((todo,indx) =>{
          return <TodoItem text={todo} key={indx} id={indx} deleteTodo={deleteTodo}/>
        })}
      </div>
     </div>
  )
}

export default App
