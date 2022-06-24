import React, { useState } from 'react';
import { PencilAltIcon, TrashIcon } from '@heroicons/react/outline';

export default function TodoItem({ text, todos, todo, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="mb-4">
      <li className="flex items-center justify-around">
        <div className="flex flex-row items-center justify-center">
          <div className="mr-10 flex items-center justify-center">
            <input
              id=""
              type="checkbox"
              value=""
              className="w-7 h-7 bg-[#EA5959]"
              onChange={completeHandler}
            />
          </div>
          <div className="w-72">
            <p className="text-[#5a5a5a] font-normal text-base">{todo.text}</p>
          </div>
          <div className="w-28 h-6 bg-[#EA5959] text-center rounded-lg items-center mr-10 ">
            <select className="text-white font-normal text-xs bg-[#EA5959] rounded-lg ">
              <option value="all">all</option>
              <option value="completed">completed</option>
              <option value="uncompleted">uncompleted</option>
            </select>
          </div>
          <div className="flex flex-row justify-center items-center gap-x-4 ">
            <PencilAltIcon className="w-6 h-6 hover:cursor-pointer" />
            <TrashIcon
              onClick={deleteHandler}
              className="w-6 h-6 hover:cursor-pointer"
            />
          </div>
        </div>
      </li>
    </div>
  );
}
