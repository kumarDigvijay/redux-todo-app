import { ADD_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO } from "../constant.js/todoConstant";

// const initialState = {
// todos: ['breakfast', 'lunch', 'dinner'],
//     edit: false,
//     editData: {
//         index: '',
//         data: ''
//     }
// }

const savedTodos = JSON.parse(localStorage.getItem("todos")) || ['breakfast', 'lunch', 'dinner'];

const initialState = {
    todos: savedTodos,
    edit: false,
    editData: {
        index: '',
        data: ''
    }
};

const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADD_TODO:
        //     return {
        //         ...state,
        //         todos: [...state.todos, action.payload]
        //     }

        // case DELETE_TODO:
        //     return {
        //         ...state,
        //         todos: [...state.todos.filter(item => item !== action.payload)]
        //     }
        // case EDIT_TODO:
        //     return {
        //         ...state,
        //         editData: {
        //             index: action.payload.index,
        //             data: action.payload.data
        //         },
        //         edit: true
        //     }
        // case UPDATE_TODO:
        //     return {
        //         ...state,
        //         todos: [...state.todos.map((value, index) => {
        //             if (index === action.payload.index) {
        //                 return action.payload.data
        //             }
        //             return value
        //         })],
        //         editData: {
        //             index: '',
        //             data: ''
        //         },
        //         edit: false
        //     }

        case ADD_TODO:
            const newTodosAdd = [...state.todos, action.payload];
            localStorage.setItem("todos", JSON.stringify(newTodosAdd));
            return {
                ...state,
                todos: newTodosAdd
            };
        case EDIT_TODO:
            return {
                ...state,
                editData: {
                    index: action.payload.index,
                    data: action.payload.data
                },
                edit: true
            }

        case DELETE_TODO:
            const newTodosDelete = state.todos.filter(item => item !== action.payload);
            localStorage.setItem("todos", JSON.stringify(newTodosDelete));
            return {
                ...state,
                todos: newTodosDelete
            };

        case UPDATE_TODO:
            const newTodosUpdate = state.todos.map((value, index) =>
                index === action.payload.index ? action.payload.data : value
            );
            localStorage.setItem("todos", JSON.stringify(newTodosUpdate));
            return {
                ...state,
                todos: newTodosUpdate,
                editData: { index: '', data: '' },
                edit: false
            };
        default:
            return state
    }
}
export default TodoReducer;



