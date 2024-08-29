import { useState } from "react";
import BackButton from "../components/feedback/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import StarRatings from "react-star-ratings";

import backgroundImage from '../assets/FeedbackAsserts/blur.jpg'


function CreateFeedback() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Service, setService] = useState("");
  const [Expected, setExpected] = useState("");
  const [Feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [rate, setRate] = useState();

  const handleSaveBook = () => {
    // Name validation
    if (!/^[A-Za-z]+$/.test(Name)) {
      enqueueSnackbar("Please enter letters only for Name", {
        variant: "error",
      });
      return;
    }
    // Email validation
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(Email)) {
      enqueueSnackbar("Please enter a valid email address", {
        variant: "error",
      });
      return;
    }
    const data = {
      Name,
      Email,
      Service,
      Expected,
      Feedback,
      rate,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/feedback", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/feedback");
      })
      .catch((error) => {
        setLoading(false);
        //alert("An Error happend Please check the console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  function changeRating(re) {
    console.log(re);
    setRate(re);
  }

  return (

    <div
      className='p-4'
      style={{
        backgroundImage:` url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
    >

    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4">Create Feedback</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Name</label>
          <input
            type="text"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Are you satisfied with our service ?</label>
          <input
            type="text"
            value={Service}
            onChange={(e) => setService(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Is there anything you didn't get that you expected ?</label>
          <input
            type="text"
            value={Expected}
            onChange={(e) => setExpected(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Feedback</label>
          <input
            type="text"
            value={Feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <StarRatings
          rating={rate}
          starRatedColor="blue"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
        />
        <h1>{rate}</h1>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
      </div>
    </div>
  );
}

export default CreateFeedback;
