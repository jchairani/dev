import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '../../client/src/pages/MainPage/mainPage'
import Login from '../../client/src/pages/login/login'
import AdminLanding from './pages/adminLanding/adminLanding';
import AdminPost from './components/adminPost/AdminPost';
import { AlertProvider } from 'react-alert-with-buttons';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AlertProvider>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="login" element={<Login />} /> */}
          <Route path="/login" element={<AdminLanding />} />
          <Route path="/adminPost" element={<AdminPost />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </AlertProvider>
);



