import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
    let input;
    return(
        <div className="dialog">
            <div>
                <h3>Task</h3>
                <input type="text" ref={node => input = node} placeholder="想说点什么" />
            </div>
            <div>
                <input type="button" value="Save Task" onClick={() => {
                    console.log("value is 11111:",input.value)
                    if (!input.value.trim()) {
                        return
                    }
                    console.log("value is :",input.value)
                    dispatch(addTodo(input.value))
                    input.value = ''
                }} />
            </div>
        </div>
    )

}

export default connect()(AddTodo)
