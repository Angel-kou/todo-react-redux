import React from 'react'
import AddTodo from '../containers/AddTodo'
import ShowTodoList from '../containers/ShowTodoList'

const App = () => (
  <div>
      <ShowTodoList />
      <AddTodo />
  </div>
)

export default App