import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contactus";
import EditProduct from "./pages/EditProduct";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import ProductForm from "./pages/ProductForm";
import Profile from "./pages/Profile";
import SinUp from "./pages/SignUp";
import UserHomePage from "./pages/UserHomePage";
export default function Routess() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<SinUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/userHome" element={<UserHomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upload" element={<ProductForm />} />
          <Route path="/edit" element={<EditProduct />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
