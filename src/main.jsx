import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Inputform from './Components/Inputform/Inputform.jsx';
import Signupform from './Components/Signupform/Signupform.jsx'
export const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Inputform/>,
  },
  {
    path: "/Signup",
    element: <Signupform/>,
  },
  {
    path: "/",
    element: <App/>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
