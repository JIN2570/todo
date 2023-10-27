import { createGlobalStyle } from 'styled-components';
import './App.css'
import { useState } from 'react';
import TodoList from './components/TodoList';




function App() {
  const [] = useState([
    {
      id: Date.now(),
      title: 'todotest',
      contents: '리액트기초',
    },
    {
      id: Date.now() + 1,
      title: 'todotest2',
      contents: '리액트기초1',
    },
  ]);
  
  const [ doneTodo, setDoneTodo ] = useState([]);
  const [ title, setTitle ] = useState('');
  const [ contents, setContents ] = useState('');
  const addTodoHandler = () => {
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
    };
    if (title === '' && contents === '') alert('내용을 추가하세요!');
    else setDoneTodo([...TodoList, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setDoneTodo(todo.filter((t) => t.id !== id));
  };

  const deleteDoneTodoHandler = (id) => {
    setDoneTodo(doneTodo.filter((dt) => dt.id !== id));
  };

  const doneTodoHandler = (dt) => {
    const newDoneTodo = {
      id: dt.id,
      title: dt.title,
      contents: dt.contents,
    };
    setDoneTodo([...doneTodo, newDoneTodo]);
    setTodo(todo.filter((t) => t.id !== dt.id));
  };

  const doneCancelHandler = (t) => {
    const newTodo = {
      
    }
  } 
  return (

  );
}

export default App;
