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
import Nav from "./Componant/Nav/Nav";
import Statistics from "./Componant/Statistics/Statistics";

function App() {
  const routerpath = createBrowserRouter([
    { path: "/", element: <Main /> },
    { path: "/home", element: <Home /> },
    { path: "/statistics", element: <Statistics /> },
    { path: "/blog", element: <Blog /> },
  ]);
  return (
    <div>
      {/* <Routes> */}

      <RouterProvider router={routerpath}></RouterProvider>
      {/* <Route path="/" element={<Main />} />
      </Routes> */}
    </div>
  );
}

export default App;
