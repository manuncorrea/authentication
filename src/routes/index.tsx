import { Routes, Route, Navigate } from "react-router-dom";

import { Sigin } from "../pages/Sigin";
import { SiginUp } from "../pages/SiginUp";
import { Home } from "../pages/Home";

//@ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('@Authentication:token') !== null;
  console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

//@ts-ignore
const PublicRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem('@Authentication:token') === null;
  console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute redirectTo="/">
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/"
        element={
          <PublicRoute redirectTo="/home">
            <Sigin />
          </PublicRoute>
        }
      />
      <Route path="/signup" element={<SiginUp />} />
    </Routes>
  )
}