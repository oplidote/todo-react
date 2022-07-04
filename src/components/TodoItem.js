import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md'
import styled from 'styled-components';

const TodoItem = ({ todo, onCheckToggle }) => {

    const { id, text, checked } = todo;

    return <TodoItemEl className="TodoItem">
            <div className={`content ${checked ? 'checked' : ''}`}>
                {checked ? (
                    <MdCheckBox onClick={() => {
                        onCheckToggle(id);
                    }}
                    />
                ) : (
                    <MdCheckBoxOutlineBlank onClick={() => {
                        onCheckToggle(id);
                    }}/>
                )}
                <div className="text">{text}</div>
            </div>
        </TodoItemEl>
}

// styled-components 
const TodoItemEl = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    box-shadow: 1px 2px 5px 0px #f62280;
    padding: 1rem;
    display: flex;
    aligh-items: center;
    & + & {
        margin-top: 15px;
    }
    & .content {
        cursor: pointer;
        flex: 1;
        display: flex;
        align-items: center;
        & svg {
            font-size: 1.5rem;
            color: #f67280;
        }
        & .text {
            margin-left: .5rem;
            flex:1;
        }
        &.checked .text {
            color: #999;
            text-decoration: line-through;
        }
    }
`
export default TodoItem;
