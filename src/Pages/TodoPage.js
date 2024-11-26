import React from 'react'
import { useParams} from 'react-router-dom'

function TodoPage({todos =[]}) {
    const { id } = useParams();
    // coverting id to a number
    const todoId = Number(id);

    // console.log(todos)
    // Find the todo item by id

    const todo = todos.find(todo => todo.id === todoId);

  return (
    <div>
        <h1>This is a specific todo page</h1>
        {todo ? (
            <div>
                <h2>{todo.id}</h2>
                <h4>{todo.item}</h4>
            </div>
        ) : (
            <p>Todo Not Found</p>
        )}
    </div>
  )
}

export default TodoPage