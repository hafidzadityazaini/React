import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  NavLink,
  useParams,
} from "react-router-dom";

// Halaman Utama
function HomePage() {
  return <h1 className="text-center text-2xl font-bold">Halaman Utama</h1>;
}

// Halaman Profil Dinamis
function ProfilePage() {
  const { userId } = useParams(); // Mengambil parameter userId dari URL
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold">Profil Pengguna</h1>
      <p className="text-lg">
        ID Pengguna: <span className="font-mono text-blue-500">{userId}</span>
      </p>
    </div>
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
            to="/profile/123"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold underline"
                : "text-white font-medium"
            }
          >
            Profile (123)
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/abc"
            className={({ isActive }) =>
              isActive
                ? "text-blue-400 font-bold underline"
                : "text-white font-medium"
            }
          >
            Profile (abc)
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
      { path: "/profile/:userId", element: <ProfilePage /> },
    ],
  },
]);

export default function Bozzo() {
  return <RouterProvider router={router} />;
}