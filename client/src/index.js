import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../../client/src/pages/MainPage/mainPage'
import Login from '../../client/src/pages/login/Login'
import AdminLanding from './pages/adminLanding/adminLanding';
import AdminPost from './components/adminPost/AdminPost';
import AdminEdit from './components/adminPost/AdminEdit';
import { AlertProvider } from 'react-alert-with-buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="login" element={<Login />} />
          <Route path="/adminMain" element={<AdminLanding />} />
          <Route path="/adminPost" element={<AdminPost />} />
          <Route path='/adminEdit' element={<AdminEdit />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </AlertProvider>
);



