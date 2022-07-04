import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import styled from 'styled-components';
import './App.css';
import Template from "./components/Template";
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';

// 함수 안에 위치하면 렌더링 될 때마다 값이 초기화 되기 때문에 밖에 선언해줌
let nextId =4;

function App() {
  const [insertToggle, setInsertToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "할일 1",
      checked: true
    },
    {
      id:2,
      text: "할일 2",
      checked: true
    },
    {
      id:3,
      text: "할일 3",
      checked: false
    }
  ])
  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  }
  const onInsertTodo = (text) => {
    if(text ==="") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      }
      // push 를 사용 하지 않은 이유
      // push 는 기존 배열이 변경되지만 concat은 기존 배열을 두고 새로운 배열을 리턴해줌
      // 상태 불변성을 지켜준다.
      setTodos(todos => todos.concat(todo));
      nextId++
    }
  }
  // 할일 체크박스
  const onCheckToggle = (id) => {
    // 클릭한 id와 일치하는 객체를 찾는다
    // Todos state 를 변경하기 위한 setTodos()
    setTodos(
      // todos 변수는 새로운 함수를 리턴해야함
      // 클릭한 객체의 id와 일치하는 todos 내 객체를 찾아낸다.
      todos => todos.map(
        // todo를 받는다.
        todo => 
        // todo.is 와 인자로 받은 id가 일치한다면
        // {...}스프레드 연산자를 이용하여 todo가 갖고 있는 객체 속성을 모두 가져와 checked 값을 반대로 바꾼다.
        // 만약 같지 않다면 todo를 반환
        (todo.id === id ? {...todo, checked: !todo.checked} : todo)
        )
      )
  }
  return (
    <Template todoLength={todos.length}>
      <TodoList todos={todos} onCheckToggle={onCheckToggle}/>
        <Button className="add-todo-button" onClick={onInsertToggle}>
          <MdAddCircle />
        </Button>
        {insertToggle && <TodoInsert 
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}/>
        }
    </Template>
  );
}

export default App;









// styled-components 
const Button = styled.div`

  // 할 일 생성 버튼
  &.add-todo-button {
    position: fixed;
    right: -5px;
    bottom: 0;
    z-index: 100;
    width: 100px;
    height: 100px;
    cursor: pointer;
    font-size: 5rem;
    color: #f67280;
  }
`
