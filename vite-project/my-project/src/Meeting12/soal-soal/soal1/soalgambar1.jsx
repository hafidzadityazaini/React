import { createBrowserRouter, RouterProvider } from "react-router-dom";

export function HomePage() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h1>Ini adalaha halaman utama</h1>,
    },
    {
      path: "/about",
      element: (
        <h1>
          About Page <br />
          do you think i have forgotten <br />
          do you think i have forgotten <br />
          do you think i have forgotten About you?
        </h1>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}