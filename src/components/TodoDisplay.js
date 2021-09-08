import { connect } from "react-redux"
import { deleteTodos } from "../redux/action"
import { useState } from "react"

import "./todo.css"

const mapStateToProps = (state) => {
    return {
        todos : state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deleteTodo : (obj) => dispatch(deleteTodos(obj))
    }
}


const TodoDisplay = props => {
   
    const [visible,setVisible] = useState([])
    const {todos} = props
   

    const show = () => {  
        setVisible(todos)
    }

    const showActive = () => {
       const result = todos.filter(eachTodo => 
           eachTodo.status === false
       )
       setVisible(result)
    }
   
    return(
        <div>
            <div>
             <button onClick = {() => show()}>show All</button>
           <button onClick = {() => showActive()}> show Active</button>
           </div>
           {visible.map(eachTodo => (
              
               <p className = "todo-container">{eachTodo.item}
               <button onClick = {() => props.deleteTodo(eachTodo.id)}>Delete</button></p>
           ))}
          
        </div>
    )

}

export default connect(mapStateToProps,mapDispatchToProps)(TodoDisplay)