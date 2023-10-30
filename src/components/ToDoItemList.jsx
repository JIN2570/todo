import React from 'react';
import PropTypes from 'prop-types';
import ToDoItem from './ToDoItem';


const ToDoItemList = ({ title, todoList, setTodoList, checkedList }) => (

  <div className="todoapp__list">
    <p className="todoapp__list-tit">{title}</p>

    <ul className="todoapp__list-ul">
      {todoList &&
        todoList.map(todoItem => {
          if (todoItem.deleted) return null;

          if (checkedList !== todoItem.checked) return null;

          return (
            <ToDoItem
              key={todoItem.id}
              todoItem={todoItem}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          );
        })}
    </ul>
  </div>
);



export default ToDoItemList;
