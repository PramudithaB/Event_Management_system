import { useEffect, useRef, useState } from "react";
import useAjendacontext from "../../hooks/useAjendacontext";
import { useParams } from "react-router-dom";
import useEventcontext from "../../hooks/useEventcontext";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const Sessionform = () => {
  const { eventId } = useParams();

  const { ajenda, _id, dispatch } = useAjendacontext();
  const { dispatch1 } = useEventcontext();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeRange, setTimeRange] = useState("");
  const [isDisable, setIsDisable] = useState(false);

  const [name, setName] = useState("");
  const [contribution, setContribution] = useState("");
  const [file, setFile] = useState([]);

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const [conError, setConError] = useState(null);
  const [conEmptyFields, setConEmptyFields] = useState([]);

  const inputfile = useRef(null);

  useEffect(() => {
    if (_id) {
      ajenda.map((i) => {
        if (i._id == _id) {
          setDate(i.date);
          setTitle(i.title);
          setStartTime(i.startTime);
          setEndTime(i.endTime);
          setTimeRange(i.timeRange);
          setIsDisable(true);
        }
      });
    }
  }, [_id, ajenda]);
  console.log(eventId);

  useEffect(() => {
    const timeRangeCalculate = () => {
      const stDate = new Date(`${date}T` + `${startTime}:00`);
      const edDate = new Date(`${date}T` + `${endTime}:00`);
      let range = Math.abs(edDate.getTime() - stDate.getTime()) / 60000;
      return range;
    };
    setTimeRange(timeRangeCalculate());
  }, [startTime, endTime, date]);

  const handleUpdate = async () => {
    const subData = { title, date, startTime, endTime, timeRange, _id };

    const response = await fetch(`http://localhost:5555/api/ajendas/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(subData),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);

      console.log(data.error);
    }

    if (response.ok) {
      console.log("ajenda updated");
      console.log(data);
      console.log(subData);

      setDate("");
      setTitle("");
      setStartTime("");
      setEndTime("");
      setTimeRange("");
      setIsDisable(false);

      setError(null);
      setEmptyFields([]);

      dispatch({ type: "UPDATE_AJENDA", payload: subData });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const subData = { title, date, startTime, endTime, timeRange, eventId };

    const response = await fetch("http://localhost:5555/api/ajendas/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subData),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);

      console.log(data.error);
      enqueueSnackbar("Error", { variant: "error" });
    }

    if (response.ok) {
      setDate("");
      setTitle("");
      setStartTime("");
      setEndTime("");
      setTimeRange("");

      setError(null);
      setEmptyFields([]);

      dispatch({ type: "CREATE_AJENDA", payload: data });

      console.log("new ajenda added");
      enqueueSnackbar("added", { variant: "success" });
    }
  };

  const handleContributesubmit = (e) => {
    e.preventDefault();

    const contributeData = new FormData();
    contributeData.append("name", name);
    contributeData.append("contribution", contribution);
    contributeData.append("file", file);
    contributeData.append("eventId", eventId);

    axios
      .post("http://localhost:5555/api/contributors", contributeData)

      .then((res) => {
        setName("");
        setContribution("");
        setConError(null);
        setConEmptyFields([]);
        if (inputfile.current) {
          inputfile.current.value = "";
          inputfile.current.type = "text";
          inputfile.current.type = "file";
        }

        dispatch1({ type: "CREATE_CONTRIBUTERS", payload: res.data });

        console.log("new contributer added");
        enqueueSnackbar("added", { variant: "success" });
      })
      .catch((res) => {
        console.log(res);
        setConError(res.response.data.error);
        setConEmptyFields(res.response.data.emptyFields);
        enqueueSnackbar("Error", { variant: "error" });
      });
  };
  console.log(conError);
  return (
    <>
      <div className="agenda-form">
        <h1 className="mb-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
          Sessions Panel
        </h1>
        <form className="create" onSubmit={handleSubmit}>
          <label className="block">Date :</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] ${
              emptyFields && emptyFields.includes("startdate")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            } rounded-[4px] box-border`}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label className="block">From :</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] ${
              emptyFields && emptyFields.includes("starttime")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            } rounded-[4px] box-border`}
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <label className="block">To :</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] ${
              emptyFields && emptyFields.includes("endtime")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            } rounded-[4px] box-border`}
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <label className="block">Agenda :</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] ${
              emptyFields && emptyFields.includes("title")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            } rounded-[4px] box-border`}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="block">Time Range</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] ${
              emptyFields && emptyFields.includes("timerange")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            } rounded-[4px] box-border`}
            type="text"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          />

          <button
            className="bg-[blueviolet] border-[0] text-[#fff] p-[10px] rounded-[4px] cursor-pointer"
            disabled={isDisable}
          >
            Submit
          </button>
        </form>
        <button
          className="bg-[rgb(32,_199,_46)] border-[0] text-[#fff] p-[10px]  rounded-[4px] cursor-pointer mt-[10px] "
          onClick={handleUpdate}
          disabled={!isDisable}
        >
          update
        </button>
        {error && <div className="text-red-600 text-xs italic">{error}</div>}
      </div>
      <br />
      <h1 className="mb-4  text-2xl font-semi bold leading-none tracking-tight text-gray-800">
        Contributers Panel
      </h1>
      <div>
        <form onSubmit={handleContributesubmit}>
          <label className="block">Profile Image</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid]  ${
              conError && conError.includes("Can")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            } rounded-[4px] box-border`}
            type="file"
            ref={inputfile}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label className="block">Name</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] ${
              conEmptyFields && conEmptyFields.includes("name")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            }  rounded-[4px] box-border`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="block">Contribution</label>
          <input
            className={`block p-[10px] mt-[10px] mb-[20px] w-full border-[1px] border-[solid] ${
              conEmptyFields && conEmptyFields.includes("contribution")
                ? `border-[#f73737]`
                : `border-[#ddd]`
            } rounded-[4px] box-border`}
            type="text"
            value={contribution}
            onChange={(e) => setContribution(e.target.value)}
          />
          <button className="bg-[#2b37e2] border-[0] text-[#fff] p-[10px] rounded-[4px] cursor-pointer">
            Submit
          </button>
          {conError && (
            <div className="text-red-600 text-xs italic">{conError}</div>
          )}
        </form>
      </div>
    </>
  );
};

export default Sessionform;
