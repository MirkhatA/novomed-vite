import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import CompaniesPage from "../pages/CompaniesPage";
import ItemsPage from "../pages/ItemsPage";
import ContactsPage from "../pages/ContactsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/companies" element={<CompaniesPage />} />
      <Route path="/items" element={<ItemsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default AppRoutes;
