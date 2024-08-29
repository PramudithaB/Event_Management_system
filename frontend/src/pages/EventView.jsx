import { useEffect, useState } from "react";
import EventDetails from "../components/events/EventDetails";
import useEventcontext from "../hooks/useEventcontext";
import EventCalendar from "../components/events/EventCalendar";
import Footer from "../components/footer";

const EventView = () => {
  //const [events, setEvents] = useState(null);
  const { events, dispatch1 } = useEventcontext();
  const [query, setQuery] = useState("");
  const keys = [
    "description",
    "eventTitle",
    "eventType",
    "location",
    "startDate",
    "startTime",
  ];

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:5555/api/events/");

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        //setEvents(data);
        dispatch1({ type: "GET_EVENTS", payload1: data });
      }
    };

    fetchEvents();
  }, [dispatch1]);
  console.log(events);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
      <div className="pt-2 relative mx-auto text-gray-600 ml-4">
        <input
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6">
        {events &&
          search(events).map((evnt) => (
            <EventDetails key={evnt._id} evnt={evnt} />
          ))}
      </div>
      {events && <EventCalendar events={events} />}
      <Footer/>
    </>
  );
};

export default EventView;
