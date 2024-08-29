import { useState, useEffect } from "react";
import BackButton from "../components/feedback/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import StarRatings from "react-star-ratings";

import backgroundImage from '../assets/FeedbackAsserts/blur.jpg'

function EditFeedback() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Service, setService] = useState("");
  const [Expected, setExpected] = useState("");
  const [Feedback, setFeedback] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [rate, setRate] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/feedback/${id}`)
      .then((response) => {
        setName(response.data.Name);
        setEmail(response.data.Email);
        setService(response.data.Service);
        setExpected(response.data.Expected);
        setFeedback(response.data.Feedback);
        setRate(response.data.rate);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert(`An error happend. Please Check console`);
        console.log(error);
      });
  }, []);

  const handleEditBook = () => {
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
      .put(`http://localhost:5555/feedback/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Feedback Edited Successfully", { variant: "success" });
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
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: 'cover', // Adjust background image size
        backgroundPosition: 'center', // Adjust background image position
        minHeight: '100vh', // Ensure the background covers the entire screen
      }}
    >

    
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Feedback</h1>
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
          <label className="text-xl mr-4 text-gray-500">Are you satisfied with our services ?</label>
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
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
    </div>
  );
}

export default EditFeedback;
