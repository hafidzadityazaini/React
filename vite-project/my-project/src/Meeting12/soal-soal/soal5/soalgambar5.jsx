import React from "react";
import { createBrowserRouter, RouterProvider, NavLink, Outlet } from "react-router-dom";

// Halaman Dashboard Utama
function DashboardPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Halaman Dashboard</h1>
            <nav className="bg-gray-100 p-4 rounded-lg">
                <ul className="flex gap-4">
                    <li>
                        <NavLink
                            to="/dashboard"
                            end
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-500 font-bold underline"
                                    : "text-gray-700"
                            }
                        >
                            Dashboard Utama
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/dashboard/settings"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-500 font-bold underline"
                                    : "text-gray-700"
                            }
                        >
                            Settings
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="mt-6">
                <Outlet />
            </div>
        </div>
    );
}

// Halaman Settings
function SettingsPage() {
    return <h2 className="text-xl font-medium text-center">Halaman Settings</h2>;
}

// Halaman Utama
function HomePage() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold">Halaman Utama</h1>
            <p className="text-lg mt-2">Navigasikan ke /dashboard untuk mencoba rute bersarang.</p>
        </div>
    );
}

// Router
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
        children: [
            { path: "/dashboard", element: <h2 className="text-xl font-medium text-center">Halaman Dashboard Utama</h2> },
            { path: "/dashboard/settings", element: <SettingsPage /> },
        ],
    },
]);

export default function Banger() {
    return <RouterProvider router={router} />;
}