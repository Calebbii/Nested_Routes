import React from 'react'
import { Link } from 'react-router-dom'

function ListPage({todo}) {
  return (
    <div>

      <Link to={`/todos/${todo.id}`}>
        <h3>{todo.id}</h3>
        <h3>{todo.item}</h3>
      </Link>
      

    </div>
  )
}

export default ListPage