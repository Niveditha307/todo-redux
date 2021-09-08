import { AddTodo } from "./type";
import { DeleteTodo } from "./type";

const initialState = {
    todos : []
}

export const addTodoReducer = (state = initialState,action) => {
    switch(action.type){
        case AddTodo : 
            return{
                ...state,
                todos : [...state.todos,(action.payload)]
            }
        case DeleteTodo :
            state.todos[action.payload-1].status = true
            return{
                    ...state,
                    todos : [...state.todos]
            }
         default :
            return state

    }
}