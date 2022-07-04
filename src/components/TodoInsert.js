import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import styled from "styled-components";
const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    }
    const onSubmit = (e) => {
        // form 형식의 속성으로인한 새로고침을 막아준다
        e.preventDefault();
        // onInsertTodo() 함수에 현재 value를 넣는다.
        onInsertTodo(value);
        // setValue로 value를 다시 빈 문자열로 초기화시켜준다.
        setValue("");
        // 창
        onInsertToggle();
    }
    return (
        <TodoInsertEl>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input placeholder="please type" value={value} onChange={onChange}/>
                <button type="submit">
                    <MdAddCircle/>
                </button>
            </form>
        </TodoInsertEl>
    );
};

export default TodoInsert;

const TodoInsertEl = styled.div`
    & .background {
        position: fixed;
        z-index: 980;
        top: 0;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        display:flex;
        justify-content: center;
        align-items: center;
        background: #000;
        opacity: .7;
    }
    & form {
        margin-left: 10%;
        position: fixed;
        top: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 990;
        width: 300px;
        height: 150px;
        border-radius: 5px;
        box-shadow: 1px 2px 5px 1px #f67280;
        background: #fff;
        & input {
            background: none;
            outline: none;
            border: none;
            border-bottom: 1px solid #f67280;
            padding: .5rem;
            font-size: 1.125rem;
            line-height: 1.5;
        }
        & button {
            padding-top: 20px;
            background: none;
            outline: none;
            border: none;
            color: #f67280;
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1.5rem;
            display: flex;
            align-items: center;
            cursor: pointer;
            transition: .1s background ease-in;
        }
    }
`