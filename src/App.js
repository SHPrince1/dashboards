import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import Reports from "./pages/reports";
// css files

// imported components
import SideBar from "./components/sidebar";

function App() {
  return (
    <>
      <div>
        <Router>
          <SideBar />
         
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/reports" element={<Reports />} />
              
          
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
