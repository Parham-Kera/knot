import "./fonts/Kryshna.otf";
import "./App.css";
import Header from "./assets/componets/Header.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Tutorial from "./pages/Tutorials";

function App() {
  return (
    <div className="main">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Tutorials" element={<Tutorial />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
