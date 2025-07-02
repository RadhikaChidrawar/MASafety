import { Routes, Route } from "react-router-dom";
import AdminHeader from "./AdminComponents/AdminHeader";
import AdminSidebar from "./AdminComponents/AdminSidebar";

// Account Admin Pages
import AccountDashboard from "./Admin/Account/Dashboard";
import Profile from "./Admin/Account/Profile";
import Reports from "./Admin/Account/Reports";
import Users from "./Admin/Account/Users";

// Order Admin Pages
import OrderDashboard from "./Admin/Order/Dashboard";
import AddProduct from "./Admin/Order/AddProduct";
import Customers from "./Admin/Order/Customers";
import Orders from "./Admin/Order/Orders";
import ProductList from "./Admin/Order/ProductList";
import Inventory from "./Admin/Order/Inventory";

const AdminRoutes = ({ role, setRole }) => {
  const currentRole = role || localStorage.getItem("userRole") || "accountAdmin";

  return (
    <div className="flex">
      <AdminSidebar role={role} />
      <div className="flex-1">
        <AdminHeader
          role={role}
          user={{ name: "John Doe", image: "/default-avatar.png" }}
          onLogout={() => {
            localStorage.removeItem("userRole");
            window.location.href = "/";
          }}
        />

        <Routes>
          {currentRole === "accountAdmin" ? (
            <>
              <Route path="account" element={<AccountDashboard />} />
              <Route path="account/profile" element={<Profile />} />
              <Route path="account/reports" element={<Reports />} />
              <Route path="account/users" element={<Users />} />
            </>
          ) : currentRole === "orderAdmin" ? (
            <>
              <Route path="order" element={<OrderDashboard />} />
              <Route path="order/add-product" element={<AddProduct />} />
              <Route path="order/customers" element={<Customers />} />
              <Route path="order/orders" element={<Orders />} />
              <Route path="order/product-list" element={<ProductList />} />
              <Route path="order/inventory" element={<Inventory />} />
            </>
          ) : null}
        </Routes>
      </div>
    </div>
  );
};

export default AdminRoutes;
