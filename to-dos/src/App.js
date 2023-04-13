import './style.css'
import { useState, useEffect } from 'react';
import { ToDoForm } from './ToDoForm'
import { ToDoList } from './ToDoList';

function App() {
  const [toDos, setToDos] = useState(()=>{
    const localVal = localStorage.getItem("ITEMS")
    if(localVal === null) return []

    return JSON.parse(localVal)
  });

  
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(toDos))
  }, [toDos])
 

  function addToDo(name) {
    setToDos((currentToDo) => {
      return [...currentToDo, {
        id: crypto.randomUUID(),
        name,
        done: false
      }
      ]
    })
  }

  function toggleTodo(id, done) {
    setToDos(currentTodo => {
      return currentTodo.map(todo => {
        if (todo.id === id) return { ...todo, done }
        return todo;
      })
    })
  }

  function deleteTodo(id) {
    setToDos(currentTodo => {
      return currentTodo.filter(todo => id !== todo.id)
    })
  }

  return (
    <>
      <ToDoForm onSubmit={addToDo} />
      <h1 className="header">To-Do List</h1>
      <ToDoList toDos={toDos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
    </>
  );
}

export default App;
