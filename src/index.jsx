import './global.css';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './pages/CenterDetail';
// import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const App = () => (
  <div className='navigace'>
    <h1>Nějaký název</h1>
    <nav>
      <Link to="/HomePage">Domů</Link>
      <span> | </span>
      <Link to="/CentersPage">Pobočky</Link>
      <span> | </span>
      <Link to="/About">O nás</Link>
      <span> | </span>
      <Link to="/Contact">Kontakt</Link>
    </nav>
    <Outlet />
  </div>
)

const ErrorPage = () => {
  return (
    <main>
      <h2>404: Tady nic není</h2>
      <p>Asi jste se spletli</p>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
      {
        path: "/CentersPage",
        element: <CentersPage />,
        children: [
          {
            path: "/CentersPage/:centerId",
            element: <CenterDetail />,
          },
        ]
      },
    ]
  },

]);

createRoot(document.getElementById("app")).render(
  <RouterProvider router={router} />
);
