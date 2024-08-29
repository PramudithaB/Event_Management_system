import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import "../styles/signup.css"

function SignUp() {

    const history = useNavigate();
    const [user, setUser] = useState({
        name: "",
        gmail: "",
        address: "",
        password:"",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setUser((prevUser) => ({...prevUser,[name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(user.password !== user.confirmPassword){
            alert("Passwords don't match!");
            return;
        }

        sendRequest().then(() => {
            alert("Register Success");
            history("/log");
        }).catch((err) => {
            alert(err.message);
        });
    };

    const sendRequest = async () => {
        await axios
            .post("http://localhost:5555/register",{
            name:String(user.name),
            gmail:String(user.gmail),
            address:String(user.address),
            age:Number(user.age),
            gender:String(user.gender),
            contact:Number(user.contact),
            password:String(user.password),
            confirmPassword:String(user.confirmPassword),
        })
        .then((res) => res.data);
    }

  return (

<div className="bg">
      
      <div className="center">
        <h1>User Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="text" value={user.name} onChange={handleInputChange} name="name" required />
            <span></span>
            <label>Name</label>
          </div>
          <div className="txt_field">
            <input type="email" value={user.gmail} onChange={handleInputChange} name="gmail" required />
            <span></span>
            <label>Gmail</label>
          </div>
          <div className="txt_field">
            <input type="text" value={user.address} onChange={handleInputChange} name="address" required />
            <span></span>
            <label>Address</label>
          </div>
          <div className="txt_field">
            <input type="text" value={user.age} onChange={handleInputChange} name="age" required />
            <span></span>
            <label>Age</label>
          </div>
          <div className="radio_field">
            <input type="radio" id="male" value="male" checked={user.gender === "male"} onChange={handleInputChange} name="gender" required />
            <label htmlFor="male">Male</label>
          </div>
          <div className="radio_field">
            <input type="radio" id="female" value="female" checked={user.gender === "female"} onChange={handleInputChange} name="gender" required />
            <label htmlFor="female">Female</label>
          </div>

          <div className="txt_field">
            <input type="tel" value={user.contact} onChange={handleInputChange} name="contact" required />
            <span></span>
            <label>Contact No</label>
          </div>
          <div className="txt_field">
            <input type="password" value={user.password} onChange={handleInputChange} name="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              value={user.confirmPassword}
              onChange={handleInputChange}
              name="confirmPassword"
              required
            />
            <span></span>
            <label>Confirm Password</label>
          </div>
          <button className="reg_btn">Sign in</button>
          <div className="signup_link">
            Already have an account? <Link to="/log">Log In</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp;

   