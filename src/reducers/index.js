import { combineReducers } from 'redux'
import todos from './todos'
import users from './users'


const rootReducer = combineReducers({
    users,
    todos
})

export default rootReducer