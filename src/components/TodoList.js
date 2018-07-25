import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

const TodoList = ({ todos, toggleTodo ,dispatch}) => (
    <ul>
        {todos.map(todo => (
            <ListItem
                item={todo}
                key={todo.id}
                onclick={() => {
                    dispatch(toggleTodo(todo.id))
                }}
            />
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        content: PropTypes.string.isRequired,
        readOnly: PropTypes.string.isRequired,
    }).isRequired).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList
