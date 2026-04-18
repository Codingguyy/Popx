import { createBrowserRouter, Outlet } from "react-router-dom";
import Landing_page from './src/pages/landing_page.jsx'
import Login from './src/pages/login'
import Create_account from './src/pages/create_account'
import Profile from './src/pages/profile.jsx'
import Layout from "./src/pages/layout.jsx";
import './src/index.css'
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing_page/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/create_account",
        element: <Create_account/>
      },
      {
        path: "/profile",
        element: <Profile/>
      }
    ],
  },
]);

export default router;