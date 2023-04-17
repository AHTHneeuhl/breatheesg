import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BusinessGroupsPage } from "./pages/BusinessGroups";
import { LoginPage } from "./pages/Login";
import BusinessGroupProvider from "./context/BusinessGroupProvider";
import { RegisterPage } from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/business-groups"
          element={
            <BusinessGroupProvider>
              <BusinessGroupsPage />
            </BusinessGroupProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
