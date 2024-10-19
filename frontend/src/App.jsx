import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import Login from "./routes/Login.jsx"
import ErrorPage from "./routes/ErrorPage.jsx";
import Logado from "./routes/Logado.jsx";
import PrivateRoute from "./Components/privateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    // Rota protegida para "logado"
    path: "/logado",
    element: (
      <PrivateRoute>
        <Logado />
      </PrivateRoute> 
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
