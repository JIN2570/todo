import React from 'react';



function TodoList({todos, handleSubmit, handleClickTodo, deleteTodo}) {
  const handleClick = (e, id) => {
    if (todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo
  }
  return (
    <div className='List'>
      <TodoForm handleSubmit={handleSubmit} />
      <ul className='todo-list'>
        {todos.map(todo => 
        <SingleTodo
          todo={todo}
          handleClick={handleClick}
          deleteTodo={deleteTodo}
          key={todo.id}
          />
          )};
      </ul>
    </div>
    
  );
}

export default TodoList;