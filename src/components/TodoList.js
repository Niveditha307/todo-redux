import {addTodos} from "../redux/action"
import {useState} from "react" 
import { connect } from "react-redux"


const mapStateToProps = (state) => {
    return{
        todos : state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo : (obj) => dispatch(addTodos(obj))
    }
}


let k = 1

const TodoList = (props) =>{
  
    const [todo,setTodo] = useState(" ")

    const add = () => {
        if(todo !== ""){
            props.addTodo({
                item : todo,
                id : k,
                status : false

            })
            k++
            setTodo("")
        }
    }

    const handleChange = event => {
        setTodo(event.target.value)
    }
  
        return(
            <div>
                <h1>Todo List</h1>
                <input type = "text"
                onChange = {(event) => handleChange(event)}
                value = {todo} />
                <button type = "button" 
                onClick = {() => add()}>Add</button>
              
            </div>
        )
    
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList)