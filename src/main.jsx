import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate
} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AuthService from './services/AuthService';

const ProtectedRoute = ({ element }) => {
  return AuthService.isAuthenticated() ? element : <Navigate to="/login" />;
};

const routes = createRoutesFromElements(
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<ProtectedRoute element={<Home />} />} />
  </>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
