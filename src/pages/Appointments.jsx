import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Appointments = () => {
  const [value, onChange] = useState(new Date());
  const events = [
    { date: new Date(2024, 2, 1), title: "Event 1" },
    { date: new Date(2024, 2, 15), title: "Event 2" },
    // Add more events as needed
  ];

  // Function to check if a date has events
  const hasEvents = (date) => {
    return events.some(
      (event) => event.date.toDateString() === date.toDateString()
    );
  };

  // Custom tile content renderer
  const tileContent = ({ date, view }) => {
    if (view === "month" && hasEvents(date)) {
      return (
        <div style={{ textAlign: "center", color: "red" }}>
          {events
            .filter(
              (event) => event.date.toDateString() === date.toDateString()
            )
            .map((event) => (
              <div key={event.date.toISOString()}>{event.title}</div>
            ))}
        </div>
      );
    }
    return null;
  };

  const people = [
    {
      name: "Jane Cooper",
      title: "MacBook Pro 2",
      date: "14/May/2024",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jane Cooper",
      title: "iPhone 15 Pro",
      date: "12/April/2024",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jane Cooper",
      title: "Apple Watch",
      date: "12/November/2024",
      email: "janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <div>
      <Sidebar />
      <main className="pl-10 lg:pl-80 px-4 mt-10">
        <div className="font-semibold text-4xl">
          Appointments with the customers
        </div>
        {/* <Calendar
          onChange={onChange}
          value={value}
          view="day"
          showNavigation={true}
          tileContent={tileContent}
        />{" "} */}
        <div className="md:mt-32">
          <ul
            date="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {people.map((person) => (
              <li
                key={person.email}
                className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow border-gray-400 border"
              >
                <div className="flex w-full items-center justify-between space-x-6 p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900">
                        {person.name}
                      </h3>
                      <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                        {person.date}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {person.title}
                    </p>
                  </div>
                  <img
                    className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                    src={person.imageUrl}
                    alt=""
                  />
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200">
                    <div className="flex w-0 flex-1">
                      <a
                        href={`mailto:${person.email}`}
                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <EnvelopeIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Email
                      </a>
                    </div>
                    <div className="-ml-px flex w-0 flex-1">
                      <a
                        href={`tel:${person.telephone}`}
                        className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                      >
                        <PhoneIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        Call
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
