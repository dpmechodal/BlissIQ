import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltotop from "./Scrolltotop";
import EmailLogin from "./Components/LoginPage/EmailLogin";
import Login from "./Components/LoginPage/Login";
import ForgotPassword from "./Components/LoginPage/ForgotPassword";
import CheckMail from "./Components/LoginPage/CheckMail";
import NewPassword from "./Components/LoginPage/NewPassword";
import SignUp from "./Components/SignUpPage/SignUp";
import AddProfile from "./Components/SignUpPage/AddProfile";
import Avatar from "./Components/SignUpPage/Avatar";
import EditProfile from "./Components/SignUpPage/EditProfile";
import VerifyEmail from "./Components/SignUpPage/VerifyEmail";
import Home from "./Components/DashboardPages/Home";
import StudentProfile from "./Components/StudentProfilePages/StudentProfile";
import StudentCourse from "./Components/StudentProfilePages/StudentCourse";
import StudentAttended from "./Components/StudentProfilePages/StudentAttended";

function App() {
  return (
    <div className="App">
      <Router>
        <Scrolltotop />
        <Routes>
          <Route path="/" element={<EmailLogin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/CheckMail" element={<CheckMail />} />
          <Route path="/NewPassword" element={<NewPassword />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/AddProfile" element={<AddProfile />} />
          <Route path="/Avatar" element={<Avatar />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/VerifyEmail" element={<VerifyEmail />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/StudentProfile" element={<StudentProfile/>} />
          <Route path="/StudentAttended" element={<StudentAttended />} />
          <Route path="/StudentCourse" element={<StudentCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
