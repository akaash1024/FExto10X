import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "../component/AppLayout/AppLayout";

import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { Login } from "../pages/User-Auth/Login";
import { Logout } from "../pages/User-Auth/Logout";
import { Register } from "../pages/User-Auth/Register";
import { AuthProvider } from "../AuthContextStore";
import { ToastContainer } from "react-toastify";

const route = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/logout", element: <Logout /> },
    ],
  },
]);

const App = () => {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={route} />;
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          bodyClassName="toastBody"
        />
      </AuthProvider>
    </>
  );
};

export default App;
