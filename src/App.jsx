import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminRoutes from "./AdminRoutes";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Buynow from "./Pages/Buynow";
import CheckoutPage from "./Pages/CheckOutPage";
import Contact from "./Pages/Contact";
import FilterData from "./Pages/FilterData";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Shop from "./Pages/Shop";
import Signin from "./Pages/Signin";
import QuerySection from "./Components/QuerySection";
import ProductDeatil from './Components/ProductDeatil'

function App() {
  const currentRole = localStorage.getItem("userRole") || "accountAdmin";
  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/buynow" element={<Buynow />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/filter-data" element={<FilterData />} />
        <Route path="/query" element={<QuerySection />} />
        <Route path="/product/:id" element={<ProductDeatil />} />
      

        <Route
          path="/admin"
          element={
            currentRole === "accountAdmin" ? (
              <Navigate to="/admin/account" />
            ) : (
              <Navigate to="/admin/order" />
            )
          }
        />

        {/* Admin dashboard routes */}
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
