import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/feedback/BackButton";
import Spinner from "../components/Spinner";

import backgroundImage from '../assets/FeedbackAsserts/blur.jpg'

function ShowFeedback() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/feedback/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

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
      <h1 className="text-3xl my-4">Show Feedback</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Name</span>
            <span>{book.Name}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Email</span>
            <span>{book.Email}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Service</span>
            <span>{book.Service}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Expected</span>
            <span>{book.Expected}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Feedback</span>
            <span>{book.Feedback}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Rating</span>
            <span>{book.rate}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default ShowFeedback;
