import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';

import './index.css'; 

// Layouts and Pages
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import PostsPage from './pages/PostsPage';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: 'posts',
        element: <PostsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> 
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);