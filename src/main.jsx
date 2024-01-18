import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from "./App"
import '../styles/app.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from "./routes/root";
import ErrorPage from "./error-page";
// import Contact from "./routes/contact";
import { LogIn } from './components/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/LogIn",
    element: <LogIn />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
