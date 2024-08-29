//import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import BackButton from "../components/transport/BackButton";
import Spinner from "../components/Spinner";

import backgroundImage from '../assets/TransportAssets/blur2.jpg'

function ShowTransport() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/transport/${id}`)
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
      <h1 className="text-3xl my-4">Show Bus</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Bus Code</span>
            <span>{book.b_Code}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Destination</span>
            <span>{book.destination}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Departure Time</span>
            <span>{book.d_time}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Arrival Time</span>
            <span>{book.a_time}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Available Seat</span>
            <span>{book.a_seat}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Price</span>
            <span>{book.price}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Create Time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-500">Update Time</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>

         
          
         <Link to={`/bookseat/${book._id}`}>
         <button className="btn btn-active" >BOOK THE BUS</button>
         </Link>
          
          

          
        </div>

        

        
      )}
      
    </div>
    </div>
  );
}

export default ShowTransport;
