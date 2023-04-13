import { ToDoItem } from './ToDoItem';

export function ToDoList({ toDos, deleteTodo, toggleTodo }) {
  return (
    <ul className="list">
      {toDos.length === 0 && "No To-Dos"}
      {toDos.map((todo) => {
        return (
          <ToDoItem id={todo.id} name={todo.name} done={todo.done}
            key={todo.id} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
        )
      })}
    </ul>
  )
}