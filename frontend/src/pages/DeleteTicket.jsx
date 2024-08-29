import { useState } from "react";
import BackButton from "../components/Ticket/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

import backgroundImage from "../assets/TicketAssets/back2.jpg";

const DeleteTicket = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/ticket/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Ticket Deleted successfully", { variant: "success" });
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
        <h1 className="text-3xl my-4 text-blue-800">Delete Book</h1>
        {loading ? <Spinner /> : ""}
        <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
          <h3 className="text-2xl text-blue-800">
            Are You Sure You want to delete this book?
          </h3>

          <button
            className="p-4 bg-red-600 text-white m-8 w-full"
            onClick={handleDeleteBook}
          >
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTicket;
