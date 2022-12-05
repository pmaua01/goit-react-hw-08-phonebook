import React from 'react';
// import shortid from 'shortid';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';
// import Login from './Pages/Login';
// import Register from './Pages/Register';
// import Home from './Pages/Home';

// import PhonebookPage from './Pages/PhonebookPage';

import { refreshUser } from 'redax/auth/authOperations';
import { selectisRefreshing } from 'redax/auth/authSelectors';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';

// import { useState, useEffect } from 'react';

const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));
const Register = lazy(() => import('./Pages/Register'));
const PhonebookPage = lazy(() => import('./Pages/PhonebookPage'));
export const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={Login} />
          }
        />
        {/* <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" componenet={<Login />} />
          }
        /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={Register} />
          }
        />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route
          path="/phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={PhonebookPage} />
          }
        />
        {/* <Route path="/phonebook" element={<PhonebookPage />} /> */}
      </Route>
    </Routes>
  );
};
