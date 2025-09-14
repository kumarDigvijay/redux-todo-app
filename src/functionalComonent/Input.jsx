import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../redux/actions/todoAction'

export default function Input() {
    const [todo, setTodo] = useState('')
    const [error, setError] = useState(false)
    let dispatch = useDispatch()

    let { editData, edit } = useSelector(state => state)
    // console.log(editData, edit);        

    const submit = (event) => {
        event.preventDefault()

        if (todo.length > 0) {
            if (edit) dispatch(updateTodo(editData.index, todo))
            else dispatch(addTodo(todo))
            // setTodo('')
        } else {
            setError(true)
        }
        setTodo('')
    }
    useEffect(() => {
        setTodo(editData.data)
    }, [editData.data, edit])
    return (
        <form className='row g-3' onSubmit={submit}>
            <div className="col-10">
                <input type="text" name="" value={todo} id="todoo" className='form-control' placeholder='enter todo' onChange={(event) => {
                    setTodo(event.target.value)
                    setError(false)
                }} />
                {
                    error && <p className='text-danger mt-1'>please enter todo</p>
                }
            </div>
            <div className="col-2">
                <button className='btn btn-primary'>
                    {
                        edit ? "UPDATE" : 'ADD'
                    }
                </button>
            </div>
        </form>
    )
}
