import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Notestate from "./Context/Notestate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbarcomponent from "./Components/navbar";
import Loder from "./Components/Loder";
function App() {
  return (
    <Notestate>
      <Router>
        <Navbarcomponent/>
        <div className="p-10">
          <Routes>
          {localStorage.getItem("token") && <Route path="frontend/" element={<Home />} />}
          {!localStorage.getItem("token") && <Route path="frontend/" element={<Login />} />}
            <Route path="frontend/About" element={<About />} />
            <Route path="frontend/home" element={<Home />} />
            <Route path="frontend/login" element={<Login/>} />
            <Route path="frontend/signup" element={<Signup/>} />
            <Route path="frontend/loader" element={<Loder/>}/>
            
          </Routes>
        </div>
      </Router>
    </Notestate>
  );
}

export default App;
