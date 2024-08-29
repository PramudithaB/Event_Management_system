import { useState, useEffect } from "react";
import BackButton from "../components/transport/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

function EditTransport() {
  const [b_Code, setB_COde] = useState("");
  const [destination, setDestination] = useState("");
  const [d_time, setD_time] = useState("");
  const [a_time, setA_time] = useState("");
  const [a_seat, setA_seat] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    axios
      .get(`http://localhost:5555/transport/${id}`)
      .then((response) => {
        setB_COde(response.data.b_Code);
        setDestination(response.data.destination);
        setD_time(response.data.d_time);
        setA_time(response.data.a_time);
        setA_seat(response.data.a_seat);
        setPrice(response.data.price);
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
      b_Code,
      destination,
      d_time,
      a_time,
      a_seat,
      price,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/transport/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Edited Successfully", { variant: "success" });
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
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
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
            type="text"
            value={d_time}
            onChange={(e) => setD_time(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Arrival Time</label>
          <input
            type="text"
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
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
}

export default EditTransport;
