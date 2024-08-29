import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAjendacontext from "../../hooks/useAjendacontext";

const UpdateAjenda = () => {
  const { id } = useParams();
  const { ajenda, dispatch } = useAjendacontext();

  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeRange, setTimeRange] = useState("");

  useEffect(() => {
    const fetchdata = () => {
      //const response = await fetch(`http://localhost:4000/api/ajendas/${id}`);
      //const data = await response.json();
      //if (...ajenda._id == id) {
      ajenda.map((i) => {
        if (i._id === id) {
          setDate(i.date);
          setTitle(i.title);
          setStartTime(i.startTime);
          setEndTime(i.endTime);
          setTimeRange(i.timeRange);
        }
      });

      //}
    };
    fetchdata();
  }, [ajenda, id]);

  const handleUpdateAjenda = async (e) => {
    e.preventDefault();

    const subData = { title, date, startTime, endTime, timeRange };

    const response = await fetch(`http://localhost:5555/api/ajendas/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      console.log("ajenda updated");
      dispatch({ type: "UPDATE_AJENDA", payload: subData });
      console.log(ajenda);
    }
  };
  return (
    <>
      <div>UpdateAjenda</div>
      <div className="agenda-form">
        <form className="update" onSubmit={handleUpdateAjenda}>
          <label>Date :</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <label>From :</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <label>To :</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <label>Agenda :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Time Range</label>
          <input
            type="number"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          />

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

//   RiviDi@5325

export default UpdateAjenda;
