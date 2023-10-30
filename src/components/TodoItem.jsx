import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ todoItem, todoList, setTodoList }) => {
  const [edited, setEdited] = useState(false);
  const [newText, setNewTest] = useState(todoItem.text);

  const editInputRef = useRef(null);

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  const onChangeCheckbox = () => {
    const nextTodoList = todoList.map(item => ({
      ...item,
      checked: item.id === todoItem.id ? !item.checked : item.checked,
    }));

    setTodoList(nextTodoList);
  };

  const onClickEditButton = () => {
    setEdited(true);
  };
  
  const onChangeEditInput = (e) => {
    setNewTest(e.target.value);
  };

  const onClickSubmitButton = (e) => {
    // console.log(onClickSubmitButton);
    if (e.key === 'Enter') {
      const nextTodoList = todoList.map(item => ({
        ...item,
        text: item.id === todoItem.id ? newText : item.text, 
      }));
      setTodoList(nextTodoList);

      setEdited(false);
    }
  };

  const onClickDeleteButton = () => {
    if (window.confirm('정말로 지우실건가요?')) {
      const nextTodoList = todoList.map((item) => ({
        ...item,
        deleted: item.id === todoItem.id ? true : item.deleted,
      }));

      setTodoList(nextTodoList);
    }
  };

  return (
    <li className="todoapp__item">
      <input
        type="checkbox"
        className="todoapp__item-checkbox"
        checked={todoItem.checked}
        onChange={onChangeCheckbox}
      />
      {
        edited ? (
          <input
            type="text"
            className="todoapp__item-edit-input"
            value={newText}
            ref={editInputRef}
            onChange={onChangeEditInput}
            onKeyPress={onClickSubmitButton}
          />
        ) : (
          <span
            className={`todoapp__item-ctx ${
              todoItem.checked ? 'todoapp__item-ctx-checked' : ''
            }`}
          >
            {todoItem.text}
          </span>
        )
      }
      {
        !todoItem.checked ? (
          edited ? (
            <button
              type="button"
              className="todoapp__item-edit-btn"
              onClick={onClickSubmitButton}
            >
              ✔
            </button>
          ) : (
            <button
              type="button"
              className="todoapp__item-edit-btn"
              onClick={onClickEditButton}
            >
              ✏
            </button>
          )
        ) : null
      }

      <button
        type="button"
        className="todoapp__item-delete-btn"
        onClick={onClickDeleteButton}
      >
        🗑
      </button>
    </li>
  );
};


export default ToDoItem;
