import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/Contactus';
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import NavBar from "./pages/NavBar";
import SinUp from './pages/SignUp';

export default function Routess() {
  return (
 <> 
 <Router>
 <NavBar/>
            <Routes>
            <Route path="/" element={<LandingPage/>} /> 
                <Route path="/register" element={<SinUp/>} /> 
                <Route path="/login" element={<Login />} /> 
                <Route path="/about" element={<AboutUs />} /> 
                <Route path="/contact" element={<ContactUs />} /> 
            </Routes>
        </Router>
</>
  )
}