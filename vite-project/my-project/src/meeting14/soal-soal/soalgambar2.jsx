import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AxiosStore from "./soalgambar22";
import { ProductDetail } from "./soalgambar22";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AxiosStore />,
  },
  {
    path: "/:id",
    element: <ProductDetail />,
  },
]);

function Axioshop() {
  return <RouterProvider router={router} />;
}

export default Axioshop;