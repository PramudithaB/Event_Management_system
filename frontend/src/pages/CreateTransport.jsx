import { useState } from "react";
import BackButton from "../components/transport/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

import backgroundImage from '../assets/TransportAssets/blur.jpg'

function CreateTransport() {
  const [b_Code, setB_COde] = useState("");
  const [destination, setDestination] = useState("");
  const [d_time, setD_time] = useState("");
  const [a_time, setA_time] = useState("");
  const [a_seat, setA_seat] = useState("");
  const [price, setPrice] = useState("");
  const [file,setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {

    // Attendance validation
    if (!/^\d+$/.test(a_seat) || parseInt(a_seat) < 1 || parseInt(a_seat) > 58) {
      enqueueSnackbar('Please enter a number between 1 and 58 for seats', { variant: 'error' });
      return;
    }
// Basic Salary validation
if (!/^\d+$/.test(price)) {
  enqueueSnackbar('Please enter a valid number for price', { variant: 'error' });
  return;
}
    //bus cod validation

    /*const handleBusCodeChange = (e) => {
      const b_Code = e.target.value;
      // Check if bus code length is less than or equal to 4 and contains at most 2 capital letters
      if (/^[A-Z]{0,2}\d{0,4}$/.test(b_Code)) {
        setB_COde(b_Code);
      }
    };*/
/*
    // Bus code validation
if (!/^\d{1,4}$/.test(b_Code)) {
  enqueueSnackbar('Please enter a bus code with a maximum of four digits', { variant: 'error' });
  return;
}

// Capital English validation
if (!/^[A-Z]{0,2}$/.test(b_Code)) {
  enqueueSnackbar('Please enter maximum two capital English letters', { variant: 'error' });
  return;
}

*/
    
      // Check if bus code length is less than or equal to 4 and contains at most 2 capital letters
      /*if (/^[A-Z]{0,2}\d{0,4}$/.test(input) ) {
        setB_COde(b_Code);
        enqueueSnackbar('Please enter a number between 1 and 58 for seats', { variant: 'error' });
        return;
      }*/
    /*
    const data = {
      b_Code,
      destination,
      d_time,
      a_time,
      a_seat,
      price,

    };*/

    const data = new FormData();

    data.append("b_Code",b_Code)
    data.append("destination",destination)
    data.append("d_time",d_time)
    data.append("a_time",a_time)
    data.append("a_seat",a_seat)
    data.append("price",price)
    data.append("file",file)

    setLoading(true);
    axios
      .post("http://localhost:5555/transport", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/transport");
      })
      .catch((error) => {
        setLoading(false);
        //alert("An Error happend Please check the console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });

      
  };

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
      <h1 className="text-3xl my-4">Create Bus</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Bus Code</label>
          <input
            type="text"
            value={b_Code}
            onChange={(e) => setB_COde(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Destination</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Departure Time</label>
          <input
            type="time"
            value={d_time}
            onChange={(e) => setD_time(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Arrival Time</label>
          <input
            type="time"
            value={a_time}
            onChange={(e) => setA_time(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Available Seats</label>
          <input
            type="text"
            value={a_seat}
            onChange={(e) => setA_seat(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Bus image</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
    </div>
  );
}

export default CreateTransport;
