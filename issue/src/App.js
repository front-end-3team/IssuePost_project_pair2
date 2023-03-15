import Home from "pages/Home";
import Test from "pages/test";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
