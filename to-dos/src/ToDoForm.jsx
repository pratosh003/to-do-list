import { useState } from 'react';

export function ToDoForm(props) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault(item);
    if (item === "")
      return

    props.onSubmit(item)

    setItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={item}
          type="text" id="item"
          onChange={e => setItem(e.target.value)} />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}