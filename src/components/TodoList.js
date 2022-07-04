import React from 'react';
import TodoItem from './TodoItem';
import styled from "styled-components";

const TodoList = ({todos, onCheckToggle }) => {
    return (
    <TodoListEl> 
        {todos.map(todo => ( 
            <TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>
        ))}
    </TodoListEl>
    );
};






// styled-components 
const TodoListEl = styled.div`
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;
    `

export default TodoList;