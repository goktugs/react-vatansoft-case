import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, setTodos, filteredTodos }) {
  return (
    <div>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
}
