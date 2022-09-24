import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first : "Bruce",
    last : "Wayne"
  }

  const nameList = [
    {
      first : "Bruce",
      last : "Wayne"
    },
    {
      first : "Bruce",
      last : "Wayne"
    },
    {
      first : "Bruce",
      last : "Wayne"
    } 
  ];

  const handleButtonClick = (event:React.MouseEvent<HTMLButtonElement>, id: number) =>{
    console.log(event.type, id);
  };

  return (
    <div className="App">
      <Greet me="DMR" messageCount={10} isLoggedIn={false}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>
      <Status status='loading'/>
      <Heading>
        I am learining TS
      </Heading>
      <Oscar>
        <Heading>
          I am learining TS. I am a good learner.
        </Heading>
      </Oscar>
      <Greet me="DMR" isLoggedIn={false}/>
      <Button handleButtonClick={handleButtonClick}/>
      <Input value='12' handleChange={event => console.log(event.target.value)}/>
      <Container styles={{height : "200px", width : "200px", backgroundColor: "black", display: "flex", margin: "0 auto"}}/>
    </div>
  );
}

export default App;
