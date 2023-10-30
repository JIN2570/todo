import React from 'react';
import TodoForm from "./TodoForm.css";

const TodoItem = ({item, onDel, onMod}) => {
  const { id, text, isChk } = item
  return (
    <li className={isChk ? 'on' : ''}>
      <span onClick={() => onMod(id)}>&#10003;</span>
      <em>{text}</em>
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;