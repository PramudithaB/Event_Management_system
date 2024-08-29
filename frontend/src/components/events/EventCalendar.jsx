import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import propTypes from "prop-types";

const localizer = momentLocalizer(moment);

const EventCalendar = ({ events }) => {
  let eventArray = [];

  events.map((i) => {
    eventArray.push({
      start: moment(`${i.startDate}T${i.startTime}:00`).toDate(),
      end: moment(`${i.startDate}T${i.startTime}:00`).toDate(),
      title: i.eventTitle,
    });

    console.log(eventArray);
  });

  return (
    <>
      <Calendar
        localizer={localizer}
        events={eventArray}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 400, marginTop: "100px",backgroundColor: "white" }}
      />
    </>
  );
};

EventCalendar.propTypes = {
  events: propTypes.object,
};

export default EventCalendar;
