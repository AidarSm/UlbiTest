import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Users from './users/Users';
import UsersDetailsPage from './pages/UsersDetailsPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UsersDetailsPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
