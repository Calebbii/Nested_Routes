import React from 'react'
import todos from '../assets/data'
import ListPage from '../components/ListPage'


function TodoItems() {
  return (
    <div>
        <h2>This is the todo items page</h2>
        {
            todos.map((todo, index) => (
                <ListPage key={index} todo={todo} />
            ))
        }
    </div>
  )
}

export default TodoItems