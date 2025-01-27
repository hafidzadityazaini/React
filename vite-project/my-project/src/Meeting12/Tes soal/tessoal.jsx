import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import SecondPlace from "./tesssoal2";
export function CobaRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h2>Halaman Utama</h2>
          <Link to="/second">Halaman kedua</Link>
        </>
      ),
    },
    {
      path: "/second",
      element: <SecondPlace />,
    },
  ]);
  return <RouterProvider router={router} />;
}
export default CobaRouter;