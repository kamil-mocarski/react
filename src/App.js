import React, { useState, useEffect } from 'react';
import './App.scss';
import HelloWorld, { DEFAULT_CLASS, TEST_CLASS } from './components/HelloWorld/HelloWorld';
import ToDoList from './components/ToDoList/ToDoList.jsx';
import jsonPlaceholderTodos from './api/jsonPlaceholder';
import TestForm from './components/TestForm/TestForm';
import TestFormClass from './components/TestFormClass/TestFormClass';
import Header from './components/Header/Header';


const App = () => {
  let [activeClass, setActiveClass] = useState(DEFAULT_CLASS);
  let [todos, setTodos] = useState(undefined);

  useEffect(() => {
    jsonPlaceholderTodos().then((response) => setTodos(response));
  }, []);

  const switchClass = () => setActiveClass(
    activeClass === DEFAULT_CLASS ? TEST_CLASS : DEFAULT_CLASS
  );


const [userData, setUserData] = useState({});
const name = userData.firstName;
const lastName = userData.lastName;

const onFormSubmit = (data) => {
  console.log(data);
  setUserData(data);
};


  return (
  <>
    <Header/>
    <button onClick={switchClass}>
      Switch class
      </button>  
  
    <HelloWorld additionalClass={activeClass} name= {name} lastName = {lastName}/>
    {activeClass === DEFAULT_CLASS
    ? (
    <TestFormClass firstName={name} lastName={lastName} onFormSubmit = {onFormSubmit}/>
    ) :null}
    <TestForm firstName={name} lastName={lastName} onFormSubmit = {onFormSubmit}/>
    <ToDoList listItems={todos} name = {activeClass}/>
    
    
    
  
   
  </>
  )
};

export default App;
