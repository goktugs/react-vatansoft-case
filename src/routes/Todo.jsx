import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import TodoList from '../components/TodoList';

export default function Todo() {
  const [todoItem, setTodoItem] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case 'Completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'Uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocalStore = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocalStore);
    }
  };

  return (
    <div className="bg-[#EA5959] w-full h-screen flex items-center justify-center">
      <div className="w-[980px] h-[702px] bg-white rounded-lg shadow-2xl flex  ">
        <div className=" grow-[1] ">
          <ul className="text-[#525252] mt-36 ml-12 ">
            <li className="hover:text-[#EA5959] font-normal text-2xl hover:cursor-pointer mb-6  ">
              All
            </li>
            <li className="hover:text-[#EA5959] font-normal text-2xl hover:cursor-pointer  mb-6 ">
              Completed
            </li>
            <li className="hover:text-[#EA5959] font-normal text-2xl hover:cursor-pointer  mb-6">
              Uncompleted
            </li>
          </ul>
        </div>
        <div className=" grow-[9] border-l border-solid border-[#D8D8D8] ">
          <div className="mt-8 ml-14">
            <Form
              todos={todos}
              setTodos={setTodos}
              setTodoItem={setTodoItem}
              todoItem={todoItem}
            />
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setStatus={setStatus}
              filteredTodos={filteredTodos}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
