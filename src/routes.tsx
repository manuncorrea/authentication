import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Sigin } from "./pages/Sigin";
import { SiginUp } from "./pages/SiginUp";

export function AppRoutes() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <Sigin />} />
        <Route path="/signup" element={<SiginUp/>} />
      </Routes>
    </Router>
  )
}