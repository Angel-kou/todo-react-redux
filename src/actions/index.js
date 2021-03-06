let nextTodoId = 0

export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const changeEditStatus = id => ({
    type: 'CHANGE_EDIT_STATUS',
    id
})

export const changeInputValue = (id , text)=> ({
    type: 'CHANGE_INPUT_VALUE',
    id,
    text
})

export const searchTodo = ( text)=> ({
    type: 'SEARCH_TO_DO',
    text
})


