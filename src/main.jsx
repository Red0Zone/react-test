import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import HomePage from  './HomePage.jsx'
import LoginPage from './LoginPage.jsx'
import ProfilePage from './Profile.jsx'

const router = createBrowserRouter([
  {
    path  : "/:color?/:name?",
    element: <HomePage />,
  },
  {
    path  : "/home/:color?/:name?",
    element: <HomePage />,
  },
  {
    path  : "/login",
    element: <LoginPage />,
  }
  ,
  {
    path  : "/profile/:name",
    element: <ProfilePage />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
