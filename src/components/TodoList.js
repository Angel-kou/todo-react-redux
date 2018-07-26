import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

// const TodoList = ({ todos, toggleTodo }) => (
//     <ul>
//         {todos.map(todo => (
//             <ListItem
//                 item={todo}
//                 key={todo.id}
//                 onclick={() => {
//                     toggleTodo(todo.id)
//                 }}
//             />
//         ))}
//     </ul>
// )

class TodoList extends React.PureComponent {
    render() {
        console.log("this.props kmj", this.props);
        // const {todos, toggleTodo} = this.props;
        const todos = this.props.todos;
        // const toggle = this.props.toggle
        return (<ul>
            {todos.map(todo => (
                <ListItem
                    item={todo}
                    key={todo.id}
                    onclick={()=>{this.props.toggle(todo.id)}}
                    ondblclick = {()=>{this.props.editChange(todo.id)}}
                    changeItenValue = {()=>{this.props.valueChange(todo.id)}}
                />
            ))}
        </ul>)
    }
}

// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         content: PropTypes.string.isRequired,
//         readOnly: PropTypes.string.isRequired,
//     }).isRequired).isRequired,
//     toggleTodo: PropTypes.func.isRequired
// }

export default TodoList
