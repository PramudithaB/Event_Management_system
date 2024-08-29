import propTypes from "prop-types";
import { Link } from "react-router-dom";
import useEventcontext from "../../hooks/useEventcontext";
import { PDFDownloadLink } from "@react-pdf/renderer";
import EventPdf from "./EventPdf";

const EventTable = ({ addEvent }) => {
  const { dispatch1 } = useEventcontext();

  const Deletehandler = async () => {
    const response = await fetch(
      `http://localhost:5555/api/events/${addEvent._id}`,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
    }

    if (response.ok) {
      dispatch1({ type: "DELETE_EVENTS", payload1: data });
      console.log("delete success");
    }
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="py-4 px-6">{addEvent.eventTitle}</td>
      <td className="py-4 px-6">{addEvent.startDate}</td>
      <td className="py-4 px-6">{addEvent.startTime}</td>
      <td className="py-4 px-6">{addEvent.description}</td>
      <td className="py-4 px-6">{addEvent.photo}</td>
      <td className="py-4 px-6">{addEvent.eventType}</td>
      <td className="py-4 px-6">{addEvent.location}</td>

      <td className="py-4 px-6">
        <Link to={`/editevent/${addEvent._id}`}>
          <button className="btn btn-outline btn-error">Edit</button>
        </Link>
      </td>

      <td className="py-4 px-6">
        <button className="btn btn-outline btn-error" onClick={Deletehandler}>
          Delete
        </button>
      </td>
      <td className="py-4 px-6">
        <PDFDownloadLink
          document={<EventPdf event={addEvent} />}
          fileName={`${addEvent.eventTitle}`}
        >
          {({ loading }) =>
            loading ? (
              <button className="btn btn-outline btn-error">loading..</button>
            ) : (
              <button className="btn btn-outline btn-error">Download</button>
            )
          }
        </PDFDownloadLink>
      </td>
      <td className="py-4 px-6">
        <Link to={`/addajenda/${addEvent._id}`}>
          <button className="btn btn-outline btn-error">sessions</button>
        </Link>
      </td>
    </tr>
  );
};

EventTable.propTypes = {
  addEvent: propTypes.object,
};

export default EventTable;
