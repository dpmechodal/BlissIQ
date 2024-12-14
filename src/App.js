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
import Course from "./Components/DashboardPages/Course";
import MyClasses from "./Components/DashboardPages/MyClasses";
import LiveCall from "./Components/LiveClasses/LiveCall";
import PremiumClasses from "./Components/DashboardPages/PremiumClassesDetails";
import StudentProfile from "./Components/StudentProfilePages/StudentProfile";
import StudentCourse from "./Components/StudentProfilePages/StudentCourse";
import StudentAttended from "./Components/StudentProfilePages/StudentAttended";
import Notification from "./Components/HelpAndSupportPages/Notification";
import HelpAanSupport from "./Components/HelpAndSupportPages/HelpAanSupport";
import LessonComplete from "./Components/HelpAndSupportPages/LessonComplete";
// import QuestionTrue from "./Components/Course&TestPages/QuestionTrue";
import LiveSessions from "./Components/StudentProfilePages/LiveSessions";
import Chat from "./Components/Chat";
import Dictionary from "./Components/Dictionary";
import Question from "./Components/Course&TestPages/Question";
import QuestionTwo from "./Components/Course&TestPages/QuestionTwo";
import QuestionThree from "./Components/Course&TestPages/Questionthree";
import QuestionSeven from "./Components/Course&TestPages/QuestionSeven";
import QuestionEight from "./Components/Course&TestPages/QuestionEight";
import TestComplete from "./Components/Course&TestPages/TestComplete";
import QuestionSixteen from "./Components/Course&TestPages/QuestionSixteen";
import QuestionSenventeen from "./Components/Course&TestPages/QuestionSenventeen";
import QuestionEighteen from "./Components/Course&TestPages/QuestionEighteen";
import QuestionNineteen from "./Components/Course&TestPages/QuestionNineteen";
import QuestionTwenty from "./Components/Course&TestPages/QuestionTwenty";
import QuestionTwentyOne from "./Components/Course&TestPages/QuestionTwentyOne";
import QuestionTwentyTwo from "./Components/Course&TestPages/QuestionTwentyTwo";
import QuestionTwentyThree from "./Components/Course&TestPages/QuestionTwentyThree";
import QuestionTwentyFour from "./Components/Course&TestPages/QuestionTwentyFour";
import QuestionTwentyFive from "./Components/Course&TestPages/QuestionTwentyFive";
import QuestionTwentySix from "./Components/Course&TestPages/QuestionTwentySix";
import QuestionTwentySeven from "./Components/Course&TestPages/QuestionTwentySeven";
import QuestionTwentyEight from "./Components/Course&TestPages/QuestionTwentyEight";
import QuestionTwentyNine from "./Components/Course&TestPages/QuestionTwentyNine";
import QuestionFourteen from "./Components/Course&TestPages/QuestionFourteen";
import QuestionFive from "./Components/Course&TestPages/QuestionFive";
import QuestionFour from "./Components/Course&TestPages/QuestionFour";
import QuestionSix from "./Components/Course&TestPages/QuestionSix";
import QuestionNine from "./Components/Course&TestPages/QuestionNine";
import QuestionTeen from "./Components/Course&TestPages/QuestionTeen";
import QuestionEleven from "./Components/Course&TestPages/QuestionEleven";
import QuestionTwelve from "./Components/Course&TestPages/QuestionTwelve";
import QuestionThirteen from "./Components/Course&TestPages/QuestionThirteen";

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
          <Route path="/Course" element={<Course />} />
          <Route path="/MyClasses" element={<MyClasses />} />
          <Route path="/LiveCall" element={<LiveCall />} />
          <Route path="/PremiumClasses" element={<PremiumClasses />} />
          <Route path="/StudentProfile" element={<StudentProfile/>} />
          <Route path="/StudentAttended" element={<StudentAttended />} />
          <Route path="/StudentCourse" element={<StudentCourse />} />
          <Route path="/Notification" element={<Notification />} />
          <Route path="/HelpAanSupport" element={<HelpAanSupport />} />
          <Route path="/LessonComplete" element={<LessonComplete />} />
          {/* <Route path="/QuestionTrue" element={<QuestionTrue />} /> */}
          <Route path="/LiveSessions" element={<LiveSessions/>} />
          <Route path="/Chat" element={<Chat/>} />
          <Route path="/Dictionary" element={<Dictionary/>} />
          <Route path="/Question" element={<Question />} />
          <Route path="/QuestionTwo" element={<QuestionTwo />} />
          <Route path="/QuestionThree" element={<QuestionThree />} />
          <Route path="/QuestionSeven" element={<QuestionSeven />} />
          <Route path="/QuestionEight" element={<QuestionEight />} />
          <Route path="/TestComplete" element={<TestComplete />} />
          <Route path="/QuestionSixteen" element={<QuestionSixteen />} />
          <Route path="/QuestionSenventeen" element={<QuestionSenventeen />} />
          <Route path="/QuestionEighteen" element={<QuestionEighteen />} />
          <Route path="/QuestionNineteen" element={<QuestionNineteen />} />
          <Route path="/QuestionTwenty" element={<QuestionTwenty />} />
          <Route path="/QuestionTwentyOne" element={<QuestionTwentyOne />} />
          <Route path="/QuestionTwentyTwo" element={<QuestionTwentyTwo />} />
          <Route path="/QuestionTwentyThree" element={<QuestionTwentyThree />} />
          <Route path="/QuestionTwentyFour" element={<QuestionTwentyFour />} />
          <Route path="/QuestionTwentyFive" element={<QuestionTwentyFive />} />
          <Route path="/QuestionTwentySix" element={<QuestionTwentySix />} />
          <Route path="/QuestionTwentySeven" element={<QuestionTwentySeven />} />
          <Route path="/QuestionTwentyEight" element={<QuestionTwentyEight />} />
          <Route path="/QuestionTwentyNine" element={<QuestionTwentyNine />} />
          <Route path="/QuestionFourteen" element={<QuestionFourteen />} />
          <Route path="/QuestionFive" element={<QuestionFive />} />
          <Route path="/QuestionFour" element={<QuestionFour />} />
          <Route path="/QuestionSix" element={<QuestionSix />} />
          <Route path="/QuestionNine" element={<QuestionNine />} />
          <Route path="/QuestionTeen" element={<QuestionTeen />} />
          <Route path="/QuestionEleven" element={<QuestionEleven />} />
          <Route path="/QuestionTwelve" element={<QuestionTwelve />} />
          <Route path="/QuestionThirteen" element={<QuestionThirteen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
