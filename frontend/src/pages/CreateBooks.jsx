import { useState } from "react";
import BackButton from "../components/home/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

function CreateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [file, setFile] = useState(null);

  const handleSaveBook = () => {
    if (!/^[A-Za-z\s]+$/.test(title)) {
      enqueueSnackbar('Please enter letters only for Event Name', { variant: 'error' });
      return;
    }

    
    if (!/^[A-Za-z\s]+$/.test(author)) {
      enqueueSnackbar('Please enter words only for Name', { variant: 'error' });
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("publishYear", publishYear);
    formData.append("file", file);

    setLoading(true);
    axios
      .post("http://localhost:5555/books", formData)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created Successfully", { variant: "success" });
        navigate("/books");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("An error occurred. Please try again later.", { variant: "error" });
        console.error("Error creating book:", error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Album</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Event Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Share your Experience</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Event Date</label>
          <input
            type="date"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Image</label>
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
  );
}

export default CreateBook;
