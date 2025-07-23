// src/routes.tsx
import {createBrowserRouter} from "react-router-dom";
import {Signup} from "./components/auth/Signup";
import {Login} from "./components/auth/Login";
import {Dashboard} from "./components/dashboard/Dashboard";
import {ContactIndex} from "./components/contact/ContactIndex";
import {AppLayout} from "./components/AppLayout.tsx";
import {PublicRoute} from "./components/PublicRoute.tsx";
import {ProtectedRoute} from "./components/ProtectedRoute.tsx";

export const router = createBrowserRouter([
    { path: '/login', element: <PublicRoute><Login /></PublicRoute> },
    { path: '/signup', element: <PublicRoute><Signup /></PublicRoute> },
    {
        path: '/',
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'contacts', element: <ContactIndex /> },
            // additional protected routes...
        ],
    },
]);