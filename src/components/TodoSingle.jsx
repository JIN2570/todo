import React from 'react';

function TodoSingle({todo, handleClick, deleteTodo}) {
  return (
    <li className='SingleTodo'
    onClick={e => {if (e.target.localName !== 'path')
    handleClick(e, todo.id)}}>
      <div>
        {todo.completed ? <BsCheckCircle /> : <BsCircle />}
      </div>
      <button className='deleteBtn' onClick={() => deleteTodo(todo.id)}>
        {todo.completed ? <BsXCircleFill /> : ''}
      </button>
    </li>

  );
}

function completed(boolean) {
  if (boolean === true) {
    return {textDecoration: 'line-through', color: #d3d3d3}
  } else {
    return {textDecoration: ''}
  }
}

export default TodoSingle;