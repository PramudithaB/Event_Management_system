import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../styles/login.css";

function LogIn() {
    const [gmail, setGmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5555/login', { gmail, password }) 
            .then(result => {
                console.log(result.data);
                // Check if login is successful
                if (result.statusText === "OK") {
                    alert("Login Successful");
                    console.log(result.data._id);
                    // Navigate to home page
                    if (result.data.gmail.includes("admin")) {
                        navigate('/users')
                    }else{
                        navigate('/dashboard',{state:{userId : result.data._id}});
                    }
                    

                } else {
                    alert("Incorrect credentials. Please try again.");
                }
            })
            .catch(err => {
                console.log(err);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div className="bg">
          
            <div className="center">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="txt_field">
                        <input type='gmail' name='gmail' onChange={(e) => setGmail(e.target.value)} required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <div className="txt_field">
                        <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} required />
                        <span></span>
                        <label>Password</label>
                    </div>
                    <button type="submit" className='log_btn'>Login</button>
                    <div className='signup_link'>
                        Don't have Account <Link to="/regi">Sign Up</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogIn;