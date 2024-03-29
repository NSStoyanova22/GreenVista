import React from 'react' 
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";

import { LogIn } from './pages/LogIn';
import Home from "./pages/Home"
import ErrorPage from "./error-page";
import { Register } from './pages/Register';
import { Forum } from './pages/Forum.jsx';
import { YourProfile } from './pages/YourProfile';

import '../styles/app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter> 
        <Routes>
          <Route path={"/"} element={<Home />} errorElement={<ErrorPage />} />
          <Route path={"/login"} element={<LogIn />} errorElement={<ErrorPage />}/>
          <Route path={"/register"} element={<Register />} errorElement={<ErrorPage />}/>
          <Route path={"/forum"} element={<Forum />} errorElement={<ErrorPage />}/>
          <Route path={"/yourprofile"} element={<YourProfile />} errorElement={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
)
