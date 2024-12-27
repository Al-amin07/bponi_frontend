import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router";
import AuthProvider from "./provider/AuthProvider.jsx";
import Main from "./layout/Main.jsx";
import Restaurent from "./components/restaurent/Restaurent.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Restaurent />,
      },
      {
        path: "/restaurent/:resId",
        element: <App />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={route} />
    </AuthProvider>
  </QueryClientProvider>
);
