import Geming from "./components/geming.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Geming />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;