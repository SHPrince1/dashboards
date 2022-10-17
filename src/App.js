import logo from "./logo.svg";
import "./App.css";
// css files

// imported components
import SideBar from "./components/sidebar";

function App() {
  return (
    <>
      <div className="main">
        <SideBar />
         
        <div className="container">
          <h1>HELLO WORLD</h1>
          <p>
            How do I create a side navigation bar in React JS? In React, this is
            how you import your css files.
          </p>
          <p>
            So locate App. css in src directory, delete everything and add the
            styles above to a class of sidenav except width and padding-top. We
            would use inline styling for this.
          </p>

          <button>EXPLORE</button>
        </div>
      </div>
    </>
  );
}

export default App;
