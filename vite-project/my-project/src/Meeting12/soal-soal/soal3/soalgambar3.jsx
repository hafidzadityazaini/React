import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
} from "react-router-dom";

// Halaman Utama
function HomePage() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Halaman Utama</h1>;
      <img src="doaibu.jpg" className="mx-auto" />
    </>
  );
}

// Halaman About
function AboutPage() {
  return (
    <>
      <h1 className="text-center text-2xl font-bold">Halaman About</h1>;
      <img src="nasi.jpg" className="mx-auto" />
      <p className="text-center font-semibold">Nasi padang bikin mulut na meletup sodap rasa die penuh kenikmatan</p>
    </>
  );
}

// Komponen Navigasi
function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex gap-4 justify-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold underline"
                : "text-white font-medium"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold underline"
                : "text-white font-medium"
            }
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// Layout Utama
function MainLayout() {
  return (
    <div>
      <Navigation />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}

// Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
    ],
  },
]);

export default function Hytam() {
  return <RouterProvider router={router} />;
}