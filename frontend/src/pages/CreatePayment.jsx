import React, { useState } from "react";
import BackButton from "../components/paymenthome/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function CreatePayment() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [file, setFile] = useState({});

  const handleSaveBook = () => {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(author)) {
      enqueueSnackbar("Please enter a valid email address", { variant: "error" });
      return;
    }

    // Validate publish year
    const publishYearNumber = parseInt(publishYear);
    if (isNaN(publishYearNumber) || publishYearNumber <= 0) {
      enqueueSnackbar("Please enter a valid orderid", { variant: "error" });
      return;
    }

    // Check if file is selected
    if (!file) {
      enqueueSnackbar("Please select a file", { variant: "error" });
      return;
    }

    // If all validations pass, proceed with form submission
    const data = new FormData();
    data.append("title", title);
    data.append("author", author);
    data.append("publishYear", publishYear);
    data.append("file", file);

    setLoading(true);
    axios
      .post("http://localhost:5555/payment", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/payment");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />

      <h1 className="text-3xl my-4">Create Payment</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Your Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Email</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Order Id</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Sliip</label>
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
      <br />
      <br />
      <br />

      <h1 className="text-3xl my-4">Bank Details</h1>

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <h1 className="text-2xl my-4">Sampath bank</h1>
        <h1 className="text-xl ">Account Number-############</h1>
        <h1 className="text-xl ">Account No:-############</h1>
        <h1 className="text-xl ">Branch-############</h1>

        <h1 className="text-2xl my-4">HNB bank</h1>
        <h1 className="text-xl ">Account Number-############</h1>
        <h1 className="text-xl ">Account No:-############</h1>
        <h1 className="text-xl ">Branch-############</h1>
      </div>
    </div>
  );
}

export default CreatePayment;
