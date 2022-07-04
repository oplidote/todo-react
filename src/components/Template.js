import React from 'react';


// children를 이용하여 Template 사이의 값을 받아올 수 있다.
// children 이 고정값임.
const Template = ({children}) => {
    return (<div>
        <div>오늘의 할 일 (0)</div>
        <div>{children}</div>
    </div>)
}

export default Template;