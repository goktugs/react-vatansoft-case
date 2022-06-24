import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './routes/Login';
import Todo from './routes/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="Todo" element={<Todo />} />
    </Routes>
  </BrowserRouter>
);
