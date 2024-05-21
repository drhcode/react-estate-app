// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import Layout from "./components/layout/layout.jsx";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Profile from "./pages/profile/Profile";
import Projects from "./pages/projects/Projects";

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Login />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/login", element: <Login /> },
        {
          path: "/dashboard",
          element: <ProtectedRoute element={<Dashboard />} />,
        },
        {
          path: "/projects",
          element: <ProtectedRoute element={<Projects />} />,
        },
        { path: "/profile", element: <ProtectedRoute element={<Profile />} /> },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
