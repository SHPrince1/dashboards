import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
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
            <Route path="/" />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
