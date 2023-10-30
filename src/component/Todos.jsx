import React, { useState, useRef } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoForm from "./TodoForm.css";



const Todos = () => {
  const [] = setDatal = useState([
    {
      id: 1,
      text: '저녁먹기',
      isChk: false
    },
    {
      id: 2,
      text: '술먹기',
      isChk: false
    }
  ]);
  const no = useRef(data.length + 1)

  const onDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  };

  const onAdd = (text) => {
    setData([
      ...data,
      {
        id: no.current++,
        text: text,
        isChk: false
      }
    ])
  };

  const onMod = (id) => {
    setData(data.map(item => item.id === id ? {...item, isChk: !item.isChK } : item))
  }

  return (
    <div className='Todos'>
      <h1>TodoList</h1>
      <TodoForm onAdd={onAdd} />
      <TodoList data={data} onDelete={onDelete} onMod={onMod} />
    </div>
  );
};

export default Todos;