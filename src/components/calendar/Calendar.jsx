import { useState } from "react";
import { Fragment } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import dummyData from "../../../data.js";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.scss";

const localizer = momentLocalizer(moment);

const { projects, tasks } = dummyData;

const projectEvents = projects.map((project) => ({
  title: project.projectName,
  start: new Date(project.startDate),
  end: new Date(project.dueDate),
}));

const tasksEvents = tasks.map((task) => ({
  title: task.name,
  start: new Date(task.startDate),
  end: new Date(task.dueDate),
}));

const allEvents = [...projectEvents, ...tasksEvents];

const MyCalendar = () => {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());

  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  const EventComponent = ({ event }) => {
    return <div className="height600">{event.title}</div>;
  };

  return (
    <Fragment>
      <div className="calendar-container">
        <Calendar
          localizer={localizer}
          events={allEvents}
          popup
          startAccessor="start"
          endAccessor="end"
          date={date}
          view={view}
          onNavigate={handleNavigate}
          onView={handleViewChange}
          style={{ height: 500 }}
          components={{
            events: EventComponent,
          }}
        />
      </div>
    </Fragment>
  );
};

export default MyCalendar;
