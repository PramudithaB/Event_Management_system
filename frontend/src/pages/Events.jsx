import { useEffect, useState } from "react";
import EventTable from "../components/events/EventTable";
import SideNavbar from "../components/SideNavbar";
import { Link } from "react-router-dom";
import useEventcontext from "../hooks/useEventcontext";
import Footer from "../components/footer";
const Events = () => {
  //const [addEvents, setAddEvents] = useState(null);
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
    const fetchData = async () => {
      const response = await fetch("http://localhost:5555/api/events/");

      const data = await response.json();

      console.log(data);
      if (response.ok) {
        //setAddEvents(data);
        dispatch1({ type: "GET_EVENTS", payload1: data });
      }
    };
    fetchData();
  }, [dispatch1]);

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <>
      <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
        <SideNavbar />
        <div className="flex-[85%] p-[20px]">
          <div className="flex flex-wrap ">
            <label className="input input-bordered flex items-center gap-2 w-72">
              <input
                type="search"
                className="grow"
                placeholder="Search.."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <Link to={"/addevent"}>
              <button className="btn btn-neutral ml-10">Add Event</button>
            </Link>
          </div>

          <div className="flex items-center justify-center min-h-[250px] mt-8">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Event Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Start Date
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Start Time
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Description
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Poster
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Location
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Event Type
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Edit
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Delete
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Report
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Sessions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {events &&
                    search(events).map((addEvent) => (
                      <EventTable key={addEvent._id} addEvent={addEvent} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Events;
