import "./App.scss";
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
import AdminDashboard from "./Pages/AdminDashboard/AdminDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Course from "./Pages/DashBoard/MyCourses/Course/Course";
import MyCourses from "./Pages/DashBoard/MyCourses/MyCourses";
import AdminCourse from "./Pages/AdminDashboard/AdminPages/AdminCourse/AdminCourse";
import Announcements from "./Pages/AdminDashboard/AdminPages/AdminAnnouncements/Announcements";
import AdminInstructors from "./Pages/AdminDashboard/AdminPages/AdminInstructors/AdminInstructors";
import AdminGradebook from "./Pages/AdminDashboard/AdminPages/AdminGradebook/AdminGradebook";
import AdminFinance from "./Pages/AdminDashboard/AdminPages/AdminFinance/AdminFinance";
import AdminSupport from "./Pages/AdminDashboard/AdminPages/AdminSupport/AdminSupport";
import AdminReport from "./Pages/AdminDashboard/AdminPages/AdminReports/AdminReport";
import AdminSettings from "./Pages/AdminDashboard/AdminPages/AdminSettings/AdminSettings";

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
        <Route path="/home/dashboard/mycourses" element={<MyCourses />} />
        <Route path="/home/dashboard/mycourses/course" element={<Course />} />

        {/* Admin-Pages */}

        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/admin/" element={<AdminDashboard />} />
        <Route path="/admin/admin-courses" element={<AdminCourse />} />
        <Route path="/admin/announcements" element={<Announcements />} />
        <Route path="/admin/admin-instructors" element={<AdminInstructors />} />
        <Route path="/admin/admin-instructors" element={<AdminInstructors />} />
        <Route path="/admin/admin-gradebook" element={<AdminGradebook />} />
        <Route path="/admin/admin-finance" element={<AdminFinance />} />
        <Route path="/admin/admin-support" element={<AdminSupport />} />
        <Route path="/admin/admin-report" element={<AdminReport />} />
        <Route path="/admin/admin-settings" element={<AdminSettings />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
