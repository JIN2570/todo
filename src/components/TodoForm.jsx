import React from 'react';

function TodoForm({handleSumit}) {
  const addNewTodo = (e, newTodo) => {
    e.preventDefault()
    handleSumit(newTodo)
    e.target[0].value =''
  }
  return (
    <form className='TodoForm' onSubmit={(e) => addNewTodo(e, e.target[0].value)}>
      <input type="text" />
      <button type='submit'>추가</button>
    </form >
  );
}

export default TodoForm;