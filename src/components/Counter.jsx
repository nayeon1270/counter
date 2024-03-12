import React, { useState } from 'react';
import styled from 'styled-components';

const Button=styled.button`
    background: #555;
    border-radius: 3px;
    border: 2px solid #ccc;
    color: #fefefe;
    margin: 0.5rem;
    padding:10px 20px;
    font-size: 30px;
`
const Container=styled.div`
    width: 500px;
    height: 300px;
    margin: 50px auto;
    padding: 30px 60px;
    border: 5px solid #ddd;
`

const Counter = () => {
    const [count, setCount]=useState(0);

    const   increase= () => {
        setCount(count+1)
    }
    const   decrease= () => {
        setCount(count-1)
    }
    return (
        <Container>
            <h1>{count}</h1>
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
        </Container>
    );
};

export default Counter;