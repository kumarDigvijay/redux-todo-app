import { createStore } from "redux";
import TodoReducer from "../reducers/TodoReducer";

const Store = createStore(TodoReducer)
export default Store;