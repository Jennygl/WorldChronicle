import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container>
       <MyLine></MyLine>
      <h5>World Chronicle</h5>
      <p>En resa i tiden</p>
      </Container>

    </>
  )
}

export default App


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    background-color: lightgreen;
    width: 100vw;
    height: 98vh;
`;
const MyLine = styled.hr`
    justify-content: center;
    align-content: center;
    background-color: green;
    color: blue;
    width: 98vw;
    /* align-items: center; */
    padding: 10px;
`;
const Button = styled.button`
    background-color: blue;
    color: white;
    padding: 10px;
`;

// Use it like any other React component
// <Button>Click me</Button>
