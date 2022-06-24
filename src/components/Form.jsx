import React from 'react';
import { PlusIcon } from '@heroicons/react/outline';

export default function Form({
  setTodoItem,
  todos,
  setTodos,
  todoItem,
  setStatus,
}) {
  const todoItemHandler = (e) => {
    setTodoItem(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: todoItem, id: Math.random() * 1000, completed: false },
    ]);
    setTodoItem('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <form>
        <h1 className="text-3xl font-bold text-black ">All Tasks</h1>
        <div className="">
          <div className="flex items-center justify-center relative">
            <input
              type="text"
              placeholder="Add a new task"
              className="my-8 bg-[#f3f3f3] rounded-lg w-[500px] h-12 placeholder:font-normal placeholder:font-[#B5B5B5] "
              onChange={todoItemHandler}
              value={todoItem}
            />
            <button onClick={submitTodoHandler} className="absolute right-28 ">
              <PlusIcon className="w-10 h-10" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
