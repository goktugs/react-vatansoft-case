import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [users, setUsers] = useState();
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:3004/accounts')
        .then((res) => res.json())
        .then((data) => setUsers(data));
    };
    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#EA5959] w-full h-screen flex items-center justify-center flex-col font-poppins font-bold">
      <h1 className="text-white text-4xl mb-12 text-center">
        VatanSoft <br /> Todo App{' '}
      </h1>
      <form className="flex flex-col items-center justify-center">
        <div className="mb-20 flex w-96 justify-between">
          <label className="text-white">Username</label>
          <input
            className="w-40 rounded-2xl placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:pl-3 pl-3 bg-transparent border-4 "
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-20 flex w-96 justify-between">
          <label className="text-white">Password</label>
          <input
            className="w-40 rounded-2xl placeholder:italic placeholder:text-slate-400 placeholder:text-sm placeholder:pl-3 pl-3 bg-transparent border-4 "
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-60 ">
          <Link
            to="/todo"
            className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 font-poppins w-full inline-block font-regular "
            onClick={handleLogin}
          >
            Login
          </Link>
        </div>
      </form>
      {users != null ? console.log(users[0]) : null}
    </div>
  );
}
