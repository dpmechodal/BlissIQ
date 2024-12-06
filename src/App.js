import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Scrolltotop from './Scrolltotop';
import CreateAccount from './Components/CreateAccount';


function App() {
  return (
    <div className="App"> 
      <Router>
      <Scrolltotop/>
        <Routes>
          <Route path='/' element={<CreateAccount/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
