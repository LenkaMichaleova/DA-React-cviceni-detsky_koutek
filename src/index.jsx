import './global.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact';
// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const App = () => (
  <div className='navigace'>
    <h1>Nadpis</h1>
    <nav>
      <Link to="/HomePage">Domů</Link>
      <span> | </span>
      <Link to="/About">O nás</Link>
      <span> | </span>
      <Link to="/Contact">Kontakt</Link>
    </nav>
    <Outlet />
  </div>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
    ]
  },

]);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
