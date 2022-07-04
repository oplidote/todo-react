import React from 'react';
import styled from "styled-components";

// children를 이용하여 Template 사이의 값을 받아올 수 있다.
// children 이 고정값임.
const Template = ({ children, todoLength }) => {
    return (
    <TemplateEl className="Template">
        <div className="title">오늘의 할 일 ({ todoLength })</div>
        <div>{children}</div>
    </TemplateEl>)
}




// styled-components 
const TemplateEl = styled.div`
    padding-top: 20px;
    max-height: 100vh;
    & .title {
        width: 90vw;
        margin-left: auto;
        margin-right: auto;
    
        padding-bottom: 20px;
        font-size:1.5rem;
        font-weight: bold;
        color: #6c567b;
    }
`;


export default Template;