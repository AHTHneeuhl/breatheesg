import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BusinessGroupsPage } from "./pages/BusinessGroups";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { BusinessUnitsPage } from "./pages/BusinessUnits";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/business-groups" element={<BusinessGroupsPage />} />
        <Route path="/business-units" element={<BusinessUnitsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
