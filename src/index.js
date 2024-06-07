import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Frontpage from "./pages/Frontpage.js";
import Secondpage from "./pages/Secondpage.js";

export default function App() {
  const [toggled, toggledstate] = useState(true);
  const toggle = () => {
    toggledstate(!toggled);
  };
  useEffect(() => {
    document.body.className = toggled ? "toggled" : "untoggle";
  }, [toggled]);
  return (
    <>
      <Navbar toggled={toggled} toggle={toggle} />
      <Frontpage toggled={toggled} />
      <Secondpage toggled={toggled} />
    </>
  );
}
function Navbar({ toggled, toggle }) {
  return (
    <div className={`navbar1 ${toggled ? "" : "navbar1-toggle"}`}>
      <span className={`logotop ${toggled ? "toggled" : "untoggle"}`}>
        <img
          src={toggled ? "./logo.png" : "./logotoggle.png"}
          className="logoimg"
          alt="logo"
        />
        <p className={`pname ${toggled ? "" : "pname-toggled"}`}>
          ANISH KUMAR SINHA
        </p>
      </span>
      <ul className={`navbartop ${toggled ? "" : "untoggle"}`}>
        <li>
          <a href="a">Home</a>
        </li>
        <li>
          <a href="a">About</a>
        </li>
        <li>
          <a href="a">Resume</a>
        </li>
        <li>
          <a href="a">Skills</a>
        </li>
        <li>
          <a href="a">Projects</a>
        </li>
        <li>
          <a href="a">Contact</a>
        </li>
      </ul>
      <img
        src={toggled ? "./toggle.png" : "./toggleoff.png"}
        onClick={toggle}
        className="toggle"
        alt="toggle"
      />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
