import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';


const router = createBrowserRouter([
  {
    path: "/SIH/",
    element: <App></App>,
    children: [
      {
        path: "/SIH/",
        element: <Home></Home>
      },
      {
        path: "/SIH/about",
        element: <About></About>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
