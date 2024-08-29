import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { format } from "date-fns";
const EventDetails = ({ evnt }) => {
  return (
    <>
      <Link to={`/eventsview/${evnt._id}`}>
        <div className="ml-5 mr-5 mt-8 max-w-sm rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-auto h-auto"
            src={`./public/images/${evnt.photo}`}
            alt="Card image"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{evnt.eventTitle}</div>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {format(new Date(evnt.startDate), "PP")}
            </span>
            <p className="text-gray-700 text-base">{evnt.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {format(new Date(`1970-01-01T` + `${evnt.startTime}:00`), "p")}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`#${evnt.eventType}`}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {`${evnt.location}`}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

EventDetails.propTypes = {
  evnt: propTypes.object,
};

export default EventDetails;
