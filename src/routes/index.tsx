import { Routes, Route, Navigate } from "react-router-dom";

import { SigIn } from "../pages/Sigin";
import { SiginUp } from "../pages/SiginUp";
import { Home } from "../pages/Home";

//@ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated =
    localStorage.getItem("@Authentication:token") !== null;
  console.log("isAuth: ", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

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
      <Route path="/" element={<SigIn />} />
      <Route path="/signup" element={<SiginUp />} />
    </Routes>
  );
}
