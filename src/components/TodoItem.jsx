import React from "react";
import styled from "styled-components";
import App from "../App.css";

const todoitem = styled.div`
  width:300px;
  height:50px;
  border: 1px solid lightblue;
`; 


function TodoItem(props) {
  return (
    <div className="todo-item">
      {props.item}
    </div>
  ); 
}

export default TodoItem;