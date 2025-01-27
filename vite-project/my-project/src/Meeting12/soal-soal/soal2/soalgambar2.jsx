import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Halamankedua from "./soaltes2";

function ErrorPages() {
  return <h1>Halaman ini tidak ditemukan</h1>;
}
export function NotFoundPage() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>Ini halaman utama</h1>
          <Link to="/second">Halaman kedua</Link>
        </>
      ),
      errorElement: <ErrorPages />,
    },
 {
      path: "/second",
      element: <Halamankedua />,
    },
  
  ]);

  return <RouterProvider router={router} />;
}