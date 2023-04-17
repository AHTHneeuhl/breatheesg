import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { BusinessGroupsPage } from "./pages/BusinessGroups";
import { LoginPage } from "./pages/Login";
import { BusinessUnitsPage } from "./pages/BusinessUnits";
import { Navbar } from "./components/common";
import { ProtectedRoute } from "./controllers";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace={true} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/business-groups"
          element={<ProtectedRoute element={<BusinessGroupsPage />} />}
        />
        <Route
          path="/business-units"
          element={<ProtectedRoute element={<BusinessUnitsPage />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
