import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Dialog from './dialog'
import { addTodo } from '../actions/index'

export const App = ({ addTodo, todos }) => {
    console.log(todos, '==========')

    return (
    <div className="header">
        <h1>todos</h1>
        <Dialog
            onSave={(text) => {
                if (text.length !== 0) {
                    addTodo(text)
                }
            }}
            placeholder="What needs to be done?"
        />

    </div>
)}

App.propTypes = {
    addTodo: PropTypes.func.isRequired
}



const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, { addTodo })(App)