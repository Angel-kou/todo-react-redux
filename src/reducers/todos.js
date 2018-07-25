const initialState = [
    {
        id: 0,
        content: 'Use Redux',
        completed: false,
        readOnly: true
    }
]

const todos = (state = [], action) =>{
    console.log(action)
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    content: action.text,
                    completed: false,
                    readOnly: true
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case 'CHANGE_EDIT_STATUS':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, readOnly: !todo.readOnly}
                    : todo
            )
        case 'CHANGE_INPUT_VALUE':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, content: action.text}
                    : todo
            )
        default:
            return state

    }
}

export default todos
