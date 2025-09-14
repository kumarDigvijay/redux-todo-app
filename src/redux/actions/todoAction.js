import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constant.js/todoConstant";

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

export const deleteTodo = (payload) => ({
    type: DELETE_TODO,
    payload
})

export const editTodo = (index, data) => ({
    type: EDIT_TODO,
    payload: {
        index,
        data
    }

})
export const updateTodo = (index, data) => ({
    type: UPDATE_TODO,
    payload: {
        index,
        data
    }
})