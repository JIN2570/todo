import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import ToDoItemList from '../components/ToDoItemList';

const Home = () => {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="homepage__container">
      <div className='To-do-hd'>📖To-Do-List</div>
      <InputBox todoList={todoList} setTodoList={setTodoList} />


      <ToDoItemList 
        title={'해야할 일'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={false}
      />


      <ToDoItemList
        title={'완료한 항목'}
        todoList={todoList}
        setTodoList={setTodoList}
        checkedList={true}
      />
    </div>
  );
};

export default Home;
