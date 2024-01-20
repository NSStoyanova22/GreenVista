import React from 'react' 
import ReactDOM from 'react-dom/client'
import  App  from "./App"
import ChatBot from "../src/components/ChatBot.jsx"
import '../styles/app.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from "./routes/root";
import ErrorPage from "./error-page";
// import Contact from "./routes/contact";
import { LogIn } from './components/LogIn';
import { Register } from './components/Register';
import { Forum } from './components/Forum.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/Forum",
    element: <Forum />,
  }
  


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ChatBot  />
  </React.StrictMode>,
)
