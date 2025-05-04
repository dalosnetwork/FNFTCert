import "./design/app.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { ModalProvider, useModal } from "./context/modalContext.jsx";
import ModalManager from "./components/modalManager.jsx";
import Login from "./pages/login.jsx";
import App from "./pages/App.jsx";

const ModalRoot = () => {
  const { modalType, modalProps, hideModal } = useModal();
  return <ModalManager modalType={modalType} modalProps={modalProps} onClose={hideModal} />;
};

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <ModalProvider>
        <RouterProvider router={router} />
        <ModalRoot />
      </ModalProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
