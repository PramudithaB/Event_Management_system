import { useEffect, useState } from "react";
import { format } from "date-fns";
import useAjendacontext from "../hooks/useAjendacontext";
import { useParams } from "react-router-dom";
import ProfileCard from "../components/events/ProfileCard1";
import AjendaDetail from "../components/events/AjendaDetail1";

const EventInfo = () => {
  const [events, setEvents] = useState(null);
  const { ajenda, dispatch } = useAjendacontext();
  const [contributors, setContributors] = useState([]);
  const { eventId } = useParams();
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch(
        `http://localhost:5555/api/events/${eventId}`
      );

      const data = await response.json();

      // console.log(data);
      if (response.ok) {
        setEvents(data);
      }
    };

    fetchEvents();
  }, [setEvents, eventId]);

  useEffect(() => {
    const fetchajenda = async () => {
      const response = await fetch(
        `http://localhost:5555/api/ajendas/${eventId}`
      );

      const data = await response.json();
      //console.log(data);
      if (response.ok) {
        //setAjendas(data);
        dispatch({ type: "GET_AJENDAS", payload: data });
      }
    };
    fetchajenda();
  }, [dispatch, eventId]);
  console.log(ajenda);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(
        `http://localhost:5555/api/contributors/${eventId}`
      );

      const data = await response.json();

      if (response.ok) {
        setContributors(data);
      }
    };
    fetchProfile();
  }, [eventId]);

  console.log(contributors);

  //console.log(eventId);

  return (
    <>
      {events && (
        <div className="flex flex-wrap [@media_screen_and(max-width:700px)]:flex-col">
          {ajenda != null && ajenda.length < 1 ? (
            <div className="mx-auto h-screen flex items-center justify-center px-8">
              <div
                className={
                  contributors.length != 0
                    ? `grid grid-cols-1 gap-1 mt-96`
                    : `flex-[65%]  p-[30px]`
                }
              >
                <h1 className="mb-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
                  Event Details
                </h1>
                <div className="flex flex-col w-full bg-white rounded shadow-lg ">
                  <div
                    className="w-full h-64 bg-top bg-cover rounded-t"
                    style={{
                      backgroundImage: `url(../public/images/${events.photo})`,
                    }}
                  ></div>
                  <div className="flex flex-col w-full md:flex-row">
                    <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                      <div className="md:text-3xl">
                        {format(new Date(events.startDate), "MMM")}
                      </div>
                      <div className="md:text-6xl">
                        {format(new Date(events.startDate), "dd")}
                      </div>
                      <div className="md:text-xl">
                        {format(
                          new Date(`1970-01-01T` + `${events.startTime}:00`),
                          "p"
                        )}
                      </div>
                    </div>
                    <div className="p-4 font-normal text-gray-800 md:w-3/4">
                      <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                        {events.eventTitle}
                      </h1>
                      <p className="leading-normal">{events.description}</p>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2  mt-2">
                        {`#${events.eventType}`}
                      </span>
                      <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2  mt-2">
                        {`📍 ${events.location}`}
                      </span>
                      <div className="flex flex-row items-center mt-4 text-gray-700">
                        <div className="w-1/2">Mega - Events</div>
                        <div className="w-1/2 flex justify-end">
                          <img
                            src="https://collegefootballplayoff.com/images/section_logo.png"
                            alt=""
                            className="w-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {contributors.length != 0 ? (
                  <h1 className="mb-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800 mt-7">
                    Contributors
                  </h1>
                ) : null}

                <div className="grid grid-cols-4 gap-4 px-4 pt-4 ">
                  {contributors &&
                    contributors.map((contributor) => (
                      <ProfileCard
                        key={contributor._id}
                        contributor={contributor}
                      />
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-[65%]  p-[30px]">
              <h1 className="mb-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
                Event Details
              </h1>
              <div className="flex flex-col w-full bg-white rounded shadow-lg ">
                <div
                  className="w-full h-64 bg-top bg-cover rounded-t"
                  style={{
                    backgroundImage: `url(../public/images/${events.photo})`,
                  }}
                ></div>
                <div className="flex flex-col w-full md:flex-row">
                  <div className="flex flex-row justify-around p-4 font-bold leading-none text-gray-800 uppercase bg-gray-400 rounded md:flex-col md:items-center md:justify-center md:w-1/4">
                    <div className="md:text-3xl">
                      {format(new Date(events.startDate), "MMM")}
                    </div>
                    <div className="md:text-6xl">
                      {format(new Date(events.startDate), "dd")}
                    </div>
                    <div className="md:text-xl">
                      {format(
                        new Date(`1970-01-01T` + `${events.startTime}:00`),
                        "p"
                      )}
                    </div>
                  </div>
                  <div className="p-4 font-normal text-gray-800 md:w-3/4">
                    <h1 className="mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800">
                      {events.eventTitle}
                    </h1>
                    <p className="leading-normal">{events.description}</p>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2  mt-2">
                      {`#${events.eventType}`}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2  mt-2">
                      {`📍 ${events.location}`}
                    </span>
                    <div className="flex flex-row items-center mt-4 text-gray-700">
                      <div className="w-1/2">Mega - Events</div>
                      <div className="w-1/2 flex justify-end">
                        <img
                          src="https://collegefootballplayoff.com/images/section_logo.png"
                          alt=""
                          className="w-8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {contributors.length != 0 ? (
                <h1 className="mb-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800 mt-7">
                  Contributors
                </h1>
              ) : null}

              <div className="grid grid-cols-4 gap-4 px-4 pt-4 ">
                {contributors &&
                  contributors.map((contributor) => (
                    <ProfileCard
                      key={contributor._id}
                      contributor={contributor}
                    />
                  ))}
              </div>
            </div>
          )}

          {ajenda != null && ajenda.length < 1 ? null : (
            <div className="flex-[35%] p-[20px]">
              <h1 className="mb-4 mt-4 text-2xl font-semi bold leading-none tracking-tight text-gray-800">
                Event Sessions
              </h1>
              {ajenda &&
                ajenda.map((ajend) => (
                  <AjendaDetail key={ajend._id} ajend={ajend} />
                ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default EventInfo;
