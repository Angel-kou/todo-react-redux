import { connect } from 'react-redux'
import {changeEditStatus, changeInputValue, toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = state => ({
    todos: state.todo
})

const mapDispatchToProps = dispatch => ({
    toggle: id => dispatch(toggleTodo(id)),
    editChange : id => dispatch(changeEditStatus(id)),
    valueChange : (id,text) => dispatch(changeInputValue(id,text)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
