import { useState } from "react";
import BackButton from "../components/Ticket/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import backgroundImage from "../assets/TicketAssets/back2.jpg";

const CreateTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [eventType, setEventType] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [requestType, setRequretype] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMassage] = useState("");
  const [file, setFile] = useState({});

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    // Name validation
    if (!/^[A-Za-z]+$/.test(name)) {
      enqueueSnackbar("Please enter letters only for Name", {
        variant: "error",
      });
      return;
    }
    // Email validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      enqueueSnackbar("Please enter a valid email address", {
        variant: "error",
      });
      return;
    }
    // Registration number validation
    if (!/^[a-zA-Z0-9]+$/.test(registrationNumber)) {
      enqueueSnackbar(
        "Please enter alphanumeric characters only for Registration Number",
        { variant: "error" }
      );
      return;
    }

    // Phone number validation
    if (!/^\d{10}$/.test(contactNumber)) {
      enqueueSnackbar("Please enter a 10-digit phone number", {
        variant: "error",
      });
      return;
    }


    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("registrationNumber", registrationNumber);
    data.append("eventType", eventType);
    data.append("contactNumber", contactNumber);
    data.append("requestType", requestType);
    data.append("subject", subject);
    data.append("message", message);
    data.append("file", file);

    setLoading(true);
    axios
      .post("http://localhost:5555/ticket", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Ticket Created successfully", { variant: "success" });
        navigate("/ticket");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div
      className="p-4"
      style={{
        backgroundImage: ` url(${backgroundImage})`, // Set background image
        backgroundSize: "cover", // Adjust background image size
        backgroundPosition: "center", // Adjust background image position
        minHeight: "100vh", // Ensure the background covers the entire screen
      }}
    >
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl text-blue-800 my-4">Create Ticket</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Reg_No</label>
            <input
              type="string"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Event_Type</label>
            <input
              type="text"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Contact_No</label>
            <input
              type="string"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Req_type</label>
            <input
              type="text"
              value={requestType}
              onChange={(e) => setRequretype(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">Message</label>
            <input
              type="text"
              value={message}
              onChange={(e) => setMassage(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-blue-800">File</label>
            <input
              type="File"
              onChange={(e) => setFile(e.target.files[0])}
              className="border-2 border-gray-500 px-4 py-2  w-full "
            />
          </div>
          <button
            className="p-2 bg-sky-300 text-blue-900 m-8"
            onClick={handleSaveBook}
          >
            Save
          </button>
        </div>
      </div>

      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            MEGA Events Ltd.
            <br />
            Providing reliable event since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default CreateTicket;
