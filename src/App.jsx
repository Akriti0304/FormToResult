// import './App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={<UserInput/>}/>
            <Route path="/profile-Output" element={<UserOutput/>}/>
        </Routes>
    </Router>
  )
}

export default App;