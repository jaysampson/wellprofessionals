import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./Pages/AuthPages/SignUp/Register";
import Login from "./Pages/AuthPages/Login/Login";
import UpdatePassword from "./Pages/AuthPages/Reset-ForgetPasswords/ResetPasword/UpdatePassword";
import ForgotPassword from "./Pages/AuthPages/Reset-ForgetPasswords/ForgetPassword/ForgotPassword";
import LandingPage from "./Pages/LandingPage/landingpage";
import Home from "./Pages/Home/HomePage";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Overview from "./Pages/Overview/Overview";
import ProfDashboard from "./Pages/ProfDashboard/ProfDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Course from "./Pages/DashBoard/MyCourses/Course/Course";

function App() {
  return (
    <>
      <Routes>
        {/* AuthPages */}

        <Route path="/auth-register" element={<Register />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-reset" element={<UpdatePassword />} />
        <Route path="/auth-update" element={<ForgotPassword />} />

        {/* Pages */}

        <Route index element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overview" element={<Overview />} />

        {/* Student-Dashboard */}

        <Route path="/home/dashboard" element={<Dashboard />} />
        <Route path="/home/overview" element={<Overview />} />
        <Route path="/home/dashboard/mycourses/course" element={<Course />} />

        {/* Professionals-Dashboard */}

        <Route path="/prof-dashboard/*" component={<ProfDashboard />} />
        <Route path="/prof-dashboard/" component={<ProfDashboard />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
