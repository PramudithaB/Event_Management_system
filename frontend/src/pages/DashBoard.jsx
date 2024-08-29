import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
//import "../styles/DashBoard.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
import {useLocation} from 'react-router-dom';

import backgroundImage from '../assets/UserAssets/dashboard.jpg'

function DashBoard() {
  const location = useLocation();
  console.log(location.state.userId);
  const data = {userId:location.state.userId}
  return (
    <div>
      <div
      className='p-4'
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
    >
        <span
          className="text"
          style={{

            fontSize: "40px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          User DashBoard
        </span>

        <div
          className="rectangle-container1"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div
            className="rectangle"
            style={{
              backgroundColor: "#a2a29f",
              padding: "10px 40px",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              height: "250px",
              width: "260px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="fas fa-user"
              style={{ fontSize: "50px", color: "aliceblue" }}
            ></i>
            <span
              className="text1"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "40px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              User Profile
            </span>
            <br />
            <button
              className="button"
              style={{
                display: "inline-block",
                padding: "15px 25px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "none",
                outline: "none",
                color: "black",
                backgroundColor: "white",
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 9px #999",
                marginTop: "5px",
              }}
            > 
            <Link to="/profile" state={data} className="button">
             Click
             </Link>
            </button>
          </div>
          <div
            className="rectangle"
            style={{
              backgroundColor: "#a2a29f",
              padding: "10px 40px",
              borderRadius: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              height: "250px",
              width: "260px",
              margin: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <i
              className="far fa-calendar-alt"
              style={{ fontSize: "50px", color: "aliceblue" }}
            ></i>
            <span
              className="text1"
              style={{
                textAlign: "center",
                marginTop: "20px",
                fontSize: "40px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Only for Admin
            </span>
            <br />

            <button
              className="button"
              style={{
                display: "inline-block",
                padding: "15px 25px",
                fontSize: "20px",
                fontWeight: "bold",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "none",
                outline: "none",
                color: "black",
                backgroundColor: "white",
                border: "none",
                borderRadius: "15px",
                boxShadow: "0 9px #999",
                marginTop: "5px",
              }}
            >
                Click
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
