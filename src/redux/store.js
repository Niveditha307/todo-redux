import {createStore} from "redux"
import { addTodoReducer } from "./todoReducer"

const store = createStore(addTodoReducer)
export default store