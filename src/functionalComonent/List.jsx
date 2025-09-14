import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editTodo } from '../redux/actions/todoAction'

export default function List() {
    let todos = useSelector((state) => state.todos)
    // console.log(todos);
    let dispatch = useDispatch()
    return (
        <ul className='list-group col-10 mt-1'>
            {
                todos.length > 0 ? todos.map((todo, index) => (
                    <li className='list-group-item d-flex justify-content-between' key={index}>
                        <div>
                            {todo}
                        </div>
                        <div>
                            <button className='btn btn-warning mx-2' onClick={() => dispatch(editTodo(index, todo))}>Edit</button>
                            <button className='btn btn-danger' onClick={() => dispatch(deleteTodo(todo))}>Delete</button>
                        </div>
                    </li>
                )) : <li className='text-danger form-control bg-dark'>no todo please todo</li>
            }
        </ul>
    )
}
