import React, { useState } from 'react'
import './Inputform.css'
import userData from '../../src/user.json'
function Inputform() {
    function firstNameChange(event){
        setFirstName(event.target.value);
    }
    function lastNameChange(event){
        setLastName(event.target.value);
    }
    function emailChange(event){
        setEmail(event.target.value);
    }
    const user = userData;
    function handleLogin(){
        let userInfo = user.filter((data)=>{
            return data.email === Email
        })
        if(userInfo.length>0){
            console.log("LogIn Successfull");
            console.log(userInfo);
        }else{
            console.log("Go to signup");
        }
    }
    const [FirstName , setFirstName]  = useState('');
    const [LastName , setLastName] = useState('');
    const [Email , setEmail] = useState('');
  return (
    <>
      <h1>Enter User for Login</h1>
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
        <button onClick={handleLogin}>LogIn</button>
        <button>SignUP</button>
      </div>
    </>
  );
}

export default Inputform