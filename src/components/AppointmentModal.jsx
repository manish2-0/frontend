import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
const AppointmentModal = ({ onClose }) => {
  const events = [
    {
      title: "Mobile",
      start: "2024-03-24T10:00:00",
      end: "2024-03-24T13:00:00",
    },
    {
      title: "Event 2",
      start: "2024-03-26",
      end: "2024-03-28",
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white md:p-8 rounded-lg  w-[300px]  h-[600px] md:w-[600px] lg:w-[600px] lg:h-[600px]">
        <h2 className="text-lg font-semibold mb-4">Create Appointment</h2>
        <div className="mb-4">
          <div className="App">
            {/* <InlineWidget url="https://calendly.com/gaurav878singh" /> */}
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={"dayGridMonth"}
              slotDuration="00:30:00"
              headerToolbar={{
                start: "today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay",
              }}
              height="50vh"
              eventColor="black"
              textColor="white"
              themeSystem="bootstrap"
              slotLabelFormat={{
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
              }}
              slotLabelClassNames="text-sm text-gray-600"
              dayHeaderClassNames="text-sm text-gray-800 font-semibold"
              dayCellClassNames="bg-gray-100"
              eventContent={renderEventContent}
              events={events}
              customButtons={{
                today: {
                  text: "Today",
                },
                title: {
                  style: "text-sm",
                },
              }}
            />
          </div>
        </div>
        <div className="flex justify-end">
          {/* <button
            onClick={handleAppointmentCreate}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create
          </button> */}
          <button
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;

const renderEventContent = (eventInfo) => {
  return (
    <div>
      {/* <b>{eventInfo.timeText}</b> */}
      <i>{eventInfo.event.title}</i>
    </div>
  );
};
