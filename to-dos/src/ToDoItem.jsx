export function ToDoItem({id, name, done, deleteTodo, toggleTodo}){
  return(
    <li>
            <label>
              <input type="checkbox" checked={done}
                onChange={e => toggleTodo(id, e.target.checked)} />
              {name}
            </label>
            <button className="btn btn-danger"
              onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  )
}

