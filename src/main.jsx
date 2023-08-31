import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";

// import AuthProvider from "./Provider/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./Route/Route";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>
     <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  // </AuthProvider>
);
