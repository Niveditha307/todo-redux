import { AddTodo } from "./type";
import { DeleteTodo } from "./type";

export const addTodos = (obj) => {
    return{
        type : AddTodo,
        payload : obj

    }
}

export const deleteTodos = (obj) => {
    return{
        type : DeleteTodo,
        payload : obj
    }
}