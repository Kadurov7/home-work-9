import React, { useEffect, useReducer, useState } from 'react'
import styled from "styled-components"
import TodoItem from '../todo-item/TodoItem';


export const ACTION = {
    ISTODO_ADD:"add-todo",
    ISCOMPLETE_TODO:"complete-todo",
    ISDELETE_TODO:"delete-todo"
};


 const reduser = (todos, action) =>{
   switch (action.type) {
     case ACTION.ISTODO_ADD:
         return [...todos, newTodo(action.payload.name)]
      case ACTION.ISCOMPLETE_TODO:
         return todos.map((todo)=>{
             if(todo.id === action.payload.id) {
                 return {...todo, complete: !todo.complete };
             }
             return todo;
         })
         case ACTION.ISDELETE_TODO:
             return todos.filter((todo)=> todo.id !== action.payload.id);        
             default:
                 return todos;
   }
 }
 
const newTodo = (name) =>{
  return {
    id: Math.random() + new Date().getMilliseconds().toString(),
    name: name,
    complete: false
  }
}


const TodoList = () => {
   
  const [isLocal, setIsLocal] = useState(false)

  useEffect(()=>{
   const result = localStorage.getItem("SOS");
   setIsLocal(Boolean(result))
  },[])
    // //////////////////////////////
    const [todos, dispatch] = useReducer(reduser,[
        {
            id: Math.random() + new Date().getMilliseconds().toString(),
            name: "Amazon",
            complete:false,
        },
    ]);

    const [title, setTitle] = useState("")
    const enebled = title.length > 0
   
    const submitHandler = (event)=>{
    event.preventDefault();
    dispatch({ type: ACTION.ISTODO_ADD, payload: { name: title} });
    todos.filter((item)=> item.id === todos.id);
    setTitle("")
     setIsLocal(false)
     localStorage.setItem("SOS", JSON.stringify(true))
    }
    
   

     const editHandler = (name, id)=>{
        setTitle(name)
        dispatch({ type: ACTION.ISDELETE_TODO, payload: { id: id} })
        
     };

  return (
    <>
    <Form>
        <Input 
          type="text"
          value={title}
          placeholder='テキストを入力.....'
          onChange={(e)=> setTitle(e.target.value)}/>

        <Button onClick={submitHandler} disabled={!enebled}>追加</Button>
        </Form>
        {todos.map((todo)=> {
            return (
                <div key={todo.id}>
                    <TodoItem
                    todo={todo}
                    dispatch={dispatch}
                    editHandler={editHandler}
                    />
                </div>
            )
        })}

    </>
  )
}

export default TodoList;



const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 3rem;
  background: rgb(31,58,154);
  background: linear-gradient(90deg, rgba(31,58,154,1) 0%, rgba(4,16,83,0.8743872549019608) 0%, rgba(18,54,161,0.8435749299719888) 0%, rgba(9,29,142,0.8827906162464986) 21%, rgba(10,145,198,0.7679446778711485) 34%, rgba(2,13,159,0.773546918767507) 47%, rgba(52,76,194,0.8183648459383753) 71%, rgba(16,17,207,0.8715861344537815) 82%, rgba(8,38,180,0.711922268907563) 94%);
  width: 510px; 
  font-size: 20px;
  padding: 20px 30px;
  border-radius: 12px;
`
const Input = styled.input`
    width: 400px;
    height: 40px;
    border-radius: 9px;
    
`
const Button = styled.button`
    border-radius: 9px;
    color: white;
    width: 70px;
    height: 45px;
    border: none;
    font-size: 26px;
    background-color: blue;
    margin-left: 2rem;
    &&:hover{
        background-color: #05043f;
    }
`