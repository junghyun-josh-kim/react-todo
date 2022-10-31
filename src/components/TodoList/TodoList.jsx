import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: '0', text: 'TEXT', status: 'active' },
    { id: '1', text: 'TEXT TEXT', status: 'active' },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  return (
    <section>
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

export default TodoList;
