import React, { useRef, useState } from 'react';
import TodoForm from "./TodoForm.css";

const TodoForm = ({onAdd}) => {
  const [text, setText] = useState('');
  const textRef = useRef(null);

  const changeInput = (e) => {
    const {value} = e.target
    setText(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    onAdd(text)
    setText('')
    textRef.current.focus();
  }

  return (
    <form className='TodoForm' onSubmit={onSubmit}>
      <input type='text' value={text} onChange={changeInput}
      placeholder='할일을 입력하세요' ref={textRef} />
      <button>등록</button>
    </form>

  );
}

export default TodoForm;