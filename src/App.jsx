// App.js
import React from "react";
// import { useNavigate } from "react-router";
import { router } from "./main";
import "./App.css";

function App() {
  // const navigate = useNavigate();
  function handlelogin(){
    router.navigate("/Login");
  }
  function handleregister(){
    router.navigate("/Signup")
  }
  return (
    <>
      <div className="super">
        <nav className="navbar">
          <h2 className="navbar__title">Let's Authenticate Together</h2>
          <div className="navbar__buttons">
            <button className="btn--login" onClick={handlelogin}>Login</button>
            <button className="btn--register" onClick={handleregister}>Register</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
