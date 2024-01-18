import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from "./App"
import '../styles/app.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Root from "./routes/root";
// import ErrorPage from "./error-page";
// import Contact from "./routes/contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "contacts/:contactId",
//     element: <Contact />,
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
