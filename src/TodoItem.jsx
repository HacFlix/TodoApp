import { useState } from "react"
import "./app.css"
import {AiFillDelete} from "react-icons/ai"


const TodoItem = ({text,id,deleteTodo}) => {
    const [addClass, setAddClass] = useState("")
    const checked = () =>{
        if (addClass) {
            setAddClass("")
        }else{
            setAddClass("strike")
        }
    }
  return (
    <div className="todo-item">
          <h3 onClick={checked} className={addClass}>{text}</h3>
          <button onClick={() =>deleteTodo(id)} className="delete">
            <AiFillDelete/>
          </button>
        </div>
  )
}
export default TodoItem