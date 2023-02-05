//import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About }  from './MyComponents/About';
import React, { useState, useEffect } from 'react';

//import { TodoItem } from './MyComponents/TodoItem';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#2C3333';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.getItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this task", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
   <Router>
      <Header title="My Todos List" mode={mode} toggleMode={toggleMode} searchBar={true}/>
      <Switch>
          <Route exact path="/" render={()=>{ 
            return(
              <>
               <AddTodo addTodo={addTodo} mode={mode} toggleMode={toggleMode} />
               <Todos todos={todos} toggleMode={toggleMode} onDelete={onDelete} mode={mode} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      <Footer />
      </Router>
      </>
  );
}

export default App;
