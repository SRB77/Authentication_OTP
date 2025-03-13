import React, { useState, useEffect } from "react";
import "./Signupform.css";
import userData from "../../../src/user.json";
function Signupform() {
  const [user, setUser] = useState(userData);
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");

  function firstNameChange(event) {
    setFirstName(event.target.value);
  }
  function lastNameChange(event) {
    setLastName(event.target.value);
  }
  function emailChange(event) {
    setEmail(event.target.value);
  }
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  function handleSignup() {
    let userInfo = user.filter((data) => {
      return data.email === Email;
    });
    if (userInfo.length > 0) {
      alert("User Already Exist");
      console.log(userInfo);
    } else {
      setUser({
        firstname: FirstName,
        lastname: LastName,
        email: Email,
      });
      alert(`data added .`);
      setFirstName("");
      setLastName("");
      setEmail("");
    }
  }
  return (
    <>
      <h1>Enter User for Signup</h1>
      <br />
      <div className="container">
        <label>FirstName</label>
        <input
          type="text"
          name="firstname"
          placeholder="Enter your FirstName"
          value={FirstName}
          onChange={firstNameChange}
        />
        <label>LastName</label>
        <input
          type="text"
          name="lastname"
          placeholder="Enter your FirstName"
          value={LastName}
          onChange={lastNameChange}
        />
        <br />
        <label>Email</label>
        <input
          type="Email"
          name="Email"
          placeholder="Enter your Email"
          value={Email}
          onChange={emailChange}
        />
        <br />
        <button onClick={handleSignup}>SignUP</button>
      </div>
    </>
  );
}

export default Signupform;
