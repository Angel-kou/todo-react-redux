import { combineReducers } from 'redux'
import todo from './todo'
import users from './users'


const rootReducer = combineReducers({
    users,
    todo
})

export default rootReducer