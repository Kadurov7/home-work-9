import React, { useState } from 'react'
import styled from 'styled-components';
import { ACTION } from '../todo-list/TodoList';



const TodoItem = ({todo, dispatch, editHandler}) => {

  return (
     <Container>
        {todo.complete ? (
            <CompleteDiv>{todo.name}</CompleteDiv>) : (<UncompletedDiv>{todo.name}</UncompletedDiv>)}
        <div>
            <CompleteButton onClick={()=>{dispatch({ type: ACTION.ISCOMPLETE_TODO, payload: { id: todo.id }}) }}>完了</CompleteButton>
            <EditButton onClick={()=>{editHandler(todo.name, todo.id)}}>編集</EditButton>
            <DeleteButton onClick={()=>{dispatch({ type: ACTION.ISDELETE_TODO, payload: {id: todo.id}})}}>消去</DeleteButton>
        </div>
     </Container>
  )
}

export default TodoItem;


const CompleteDiv = styled.div`
  font-size: 30px;
  text-decoration: line-through;
  color: #0db407;

`;
const UncompletedDiv = styled.div`
  font-size: 30px;
  color: white;
  box-shadow: 7px 8px 7px black;
  border-radius: 8px;

`;
const Container = styled.div`
  box-shadow: 5px 5px 12px #0a0dda;
  background: rgb(63,94,251);
  background: radial-gradient(circle, rgba(63,94,251,1) 2%, rgba(41,204,242,1) 30%, rgba(3,17,89,1) 82%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:2rem;
  border: 1px solid #041b8b;
  padding: 25px;
  width: 515px;
  border-radius:12px;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  margin-right: 20px;
  border: none;
  background-color: #29b406;
  &&:hover{
  background-color: #22e93c;
  }
  &&:active{
  box-shadow: 0 5px #0f751d;
  transform: translateY(4px);
  }
  
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  border: none;
  color: white;
  background-color: #210681ed;
  &&:hover{
  background-color: #303a94;
  }
  &&:active{
  box-shadow: 0 5px #0f1c94;
  transform: translateY(4px);
  }
  
`;
const CompleteButton = styled.button`
  padding: 10px 20px;
  width: 90px;
  color: white;
  background-color: #06375f;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  margin-right: 20px;
  &&:hover{
  background-color: #042541;
  }
  &&:active{
  box-shadow: 0 5px #020da8;
  transform: translateY(4px);
  }
`;