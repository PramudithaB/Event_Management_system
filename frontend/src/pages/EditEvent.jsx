import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const EditEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [eventType, setEventType] = useState("");
  const [file, setFile] = useState({});

  const [emptyFields, setEmptyFields] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(`http://localhost:5555/api/events/${id}`);

      const data = await response.json();

      if (!response.ok) {
        console.log("data not fetched");
      }

      if (response.ok) {
        setEventTitle(data.eventTitle);
        setStartDate(data.startDate);
        setStartTime(data.startTime);
        setLocation(data.location);
        setDescription(data.description);
        setEventType(data.eventType);
        setFile({ originalname: data.photo });
      }
    };

    fetchdata();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    /*
    const submitData = {
      eventTitle,
      startDate,
      startTime,
      location,
      description,
      eventType,
    };*/

    const editData = new FormData();

    editData.append("eventTitle", eventTitle);
    editData.append("startDate", startDate);
    editData.append("startTime", startTime);
    editData.append("location", location);
    editData.append("description", description);
    editData.append("eventType", eventType);
    editData.append("file", file);

    axios
      .put(`http://localhost:5555/api/events/${id}`, editData)
      .then(() => {
        setEventTitle("");
        setStartDate("");
        setStartTime("");
        setLocation("");
        setDescription("");
        setEventType("");
        setFile({});

        setError(null);
        setEmptyFields([]);

        console.log("event updated");
        enqueueSnackbar("event updated", { variant: "success" });
        navigate("/events");
      })
      .catch((res) => {
        console.log(res);
        setError(res.response.data.error);
        setEmptyFields(res.response.data.emptyFields);
        enqueueSnackbar("Error", { variant: "error" });
      });
    /*
    const response = await fetch(`http://localhost:4000/api/events/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      setEventTitle("");
      setStartDate("");
      setStartTime("");
      setLocation("");
      setDescription("");
      setEventType("");

      console.log("ajenda updated");
      navigate("/admin/events");
    }*/
  };

  return (
    <>
      <div className="mt-9 flex flex-col items-center justify-center">
        <form className="w-full max-w-lg" onSubmit={handleUpdate}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Start Date
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  emptyFields && emptyFields.includes("startdate")
                    ? `border-red-600`
                    : `border-gray-200`
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="Date"
                placeholder="Jane"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Start Time
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  emptyFields && emptyFields.includes("starttime")
                    ? `border-red-600`
                    : `border-gray-200`
                } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="Time"
                placeholder="Doe"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Event Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  emptyFields && emptyFields.includes("title")
                    ? `border-red-600`
                    : `border-gray-200`
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Description
              </label>
              <textarea
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  emptyFields && emptyFields.includes("description")
                    ? `border-red-600`
                    : `border-gray-200`
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Poster
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  error && error.includes("Can")
                    ? `border-red-600`
                    : `border-gray-200`
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="File"
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Location
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                  emptyFields && emptyFields.includes("location")
                    ? `border-red-600`
                    : `border-gray-200`
                } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="text"
                placeholder="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Event Type
              </label>
              <div className="relative">
                <select
                  className={`block appearance-none w-full bg-gray-200 border ${
                    emptyFields && emptyFields.includes("eventtype")
                      ? `border-red-600`
                      : `border-gray-200`
                  } text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                  id="grid-state"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                >
                  <option>Conference</option>
                  <option>Virtual Event</option>
                  <option>Meeting</option>
                  <option>Product Launch</option>
                  <option>Party</option>
                  <option>Seminars</option>
                  <option>workshop</option>
                  <option>festival</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Demo
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                type="text"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <button className="btn mt-5">Update</button>
              {error && (
                <div className="text-red-600 text-xs italic">{error}</div>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditEvent;
