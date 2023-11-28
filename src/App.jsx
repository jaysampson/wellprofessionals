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
// import MyCourses from "./Pages/DashBoard/MyCourses/MyCourses";
import AdminCourse from "./Pages/AdminDashboard/AdminPages/AdminCourse/AdminCourse";
import Announcements from "./Pages/AdminDashboard/AdminPages/AdminAnnouncements/Announcements";
import AdminInstructors from "./Pages/AdminDashboard/AdminPages/AdminInstructors/AdminInstructors";
import AdminGradebook from "./Pages/AdminDashboard/AdminPages/AdminGradebook/AdminGradebook";
import AdminFinance from "./Pages/AdminDashboard/AdminPages/AdminFinance/AdminFinance";
import AdminSupport from "./Pages/AdminDashboard/AdminPages/AdminSupport/AdminSupport";
import AdminReport from "./Pages/AdminDashboard/AdminPages/AdminReports/AdminReport";
import AdminSettings from "./Pages/AdminDashboard/AdminPages/AdminSettings/AdminSettings";
import SearchPage from "./Pages/SearchPage/SearchPage";
import SettingLayout from "./Pages/Settings/SettingLayout/SettingLayout";
import Profile from "./Pages/Settings/SetttingPages/Profile/Profile";
import "./font.scss";
import Cart from "./Pages/Cart/Cart";
import { useSelector } from "react-redux";
import AdminCreate from "./Pages/AdminDashboard/AdminPages/AdminCreate/AdminCreate";
import AdminCreate2 from "./Pages/AdminDashboard/AdminPages/AdminCreate/AdminCreate2/AdminCreate2";
import "./font.scss";
import Categories from "./Pages/Categories/Categories";
import TC from "./Pages/T&C/T&C";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import { AuthRedirect } from "./AuthRedirect";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* AuthPages */}

        <Route path="/auth-register" element={<Register />} />
        <Route path="/auth-login" element={<Login />} />
        <Route path="/auth-reset" element={<UpdatePassword />} />
        <Route path="/auth-update" element={<ForgotPassword />} />

        {/* Pages */}

        <Route index element={user ? <Home /> : <LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/overview/:courseId" element={<Overview />} />
        <Route path="/search/:searchQuery" element={<SearchPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/terms-conditions" element={<TC />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/category/:categoryName" element={<Categories />} />

        {/* Student-Dashboard */}

        <Route
          path="/dashboard"
          element={
            <AuthRedirect userRoute>
              <Dashboard />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/mycourses/course"
          element={
            <AuthRedirect userRoute>
              <Course />
            </AuthRedirect>
          }
        />
        <Route
          path="/dashboard/mycourses/:courseId"
          element={
            <AuthRedirect userRoute>
              <Course />
            </AuthRedirect>
          }
        />

        {/* Admin-Pages */}

        {/* <Route path="/admin/*" element={<AdminDashboard />} /> */}
        <Route
          path="/admin/"
          element={
            <AuthRedirect adminRoute>
              <AdminDashboard />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/create"
          element={
            <AuthRedirect adminRoute>
              <AdminCreate />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/create/lessons"
          element={
            <AuthRedirect adminRoute>
              <AdminCreate2 />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/admin-courses"
          element={
            <AuthRedirect adminRoute>
              <AdminCourse />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/announcements"
          element={
            <AuthRedirect adminRoute>
              <Announcements />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/admin-instructors"
          element={
            <AuthRedirect adminRoute>
              <AdminInstructors />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/admin-gradebook"
          element={
            <AuthRedirect adminRoute>
              <AdminGradebook />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/admin-finance"
          element={
            <AuthRedirect adminRoute>
              <AdminFinance />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/admin-support"
          element={
            <AuthRedirect adminRoute>
              <AdminSupport />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/admin-report"
          element={
            <AuthRedirect adminRoute>
              <AdminReport />
            </AuthRedirect>
          }
        />
        <Route
          path="/admin/admin-settings"
          element={
            <AuthRedirect adminRoute>
              <AdminSettings />
            </AuthRedirect>
          }
        />

        {/* {Setting Pages} */}

        <Route path="/settings/*" element={<SettingLayout />} />
        <Route path="/settings/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
