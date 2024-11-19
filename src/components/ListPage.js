import React from 'react'

function ListPage({todo}) {
  return (
    <div>
       
        <h3>{todo.id}</h3>
        <h3>{todo.item}</h3>

    </div>
  )
}

export default ListPage