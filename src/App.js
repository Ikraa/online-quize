import {
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./App.css";
import Blog from "./Componant/Blog/Blog";
import Home from "./Componant/Home/Home";
import Main from "./Componant/Main/Main";
import DynamicRoute from "./Componant/Shared/DynamicRoute";
import Statistics from "./Componant/Statistics/Statistics";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import Topics from "./Componant/Topics/Topics";
import NotFound from "./Componant/NotFound/NotFound";

function App() {
  const routerpath = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/home", element: <Home /> },
    // { path: "/topics", element: <Topics/>},
    { path: "/home/quize/:id", element: <DynamicRoute /> },
    { path: "/statistics", element: <Statistics /> },
    { path: "/blog", element: <Blog /> },
    { path: "*", element: <NotFound /> },
  ]);
  return (
    <div>
      {/* <Routes> */}

      <RouterProvider router={routerpath}></RouterProvider>
      {/* <Route path="/" element={<Main />} />
      </Routes> */}
      <ToastContainer />
    </div>
  );
}

export default App;
