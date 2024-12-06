import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltotop from './Scrolltotop';
import EmailLogin from './Components/EmailLogin';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import CheckMail from './Components/CheckMail';
import NewPassword from './Components/NewPassword';


function App() {
  return (
    <div className="App"> 
      <Router>
      <Scrolltotop/>
        <Routes>
          <Route path='/' element={<EmailLogin/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/CheckMail' element={<CheckMail/>}/>
          <Route path='/NewPassword' element={<NewPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
