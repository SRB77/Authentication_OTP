// App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="super">
        <nav className="navbar">
          <h2 className="navbar__title">Let's Authenticate Together</h2>
          <div className="navbar__buttons">
            <button className="btn btn--login">Login</button>
            <button className="btn btn--register">Register</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
