import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import {
  CursorArrowRaysIcon,
  EnvelopeOpenIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import Chart from "react-apexcharts";
import ChartComponent from "../components/ChartComponent.jsx";

const AdminDashboard = () => {
  const stats = [
    {
      id: 1,
      name: "Forms Filled",
      stat: "71,897",
      icon: UsersIcon,
      change: "122",
      changeType: "increase",
    },
    {
      id: 2,
      name: "Device Sales",
      stat: "58.16%",
      icon: DevicePhoneMobileIcon,
      change: "5.4%",
      changeType: "increase",
    },
    {
      id: 3,
      name: "Total Appointments",
      stat: "24.57%",
      icon: CursorArrowRaysIcon,
      change: "3.2%",
      changeType: "decrease",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Sidebar />

      <main className="md:pl-72 md:container mx-auto md:mt-32">
        <div>
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Last 30 days
          </h3>

          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
              >
                <dt>
                  <div className="absolute rounded-md bg-indigo-500 p-3">
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="ml-16 truncate text-sm font-medium text-gray-500">
                    {item.name}
                  </p>
                </dt>
                <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                  <p className="text-2xl font-semibold text-gray-900">
                    {item.stat}
                  </p>
                  <p
                    className={classNames(
                      item.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600",
                      "ml-2 flex items-baseline text-sm font-semibold"
                    )}
                  >
                    {item.changeType === "increase" ? (
                      <ArrowUpIcon
                        className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowDownIcon
                        className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                        aria-hidden="true"
                      />
                    )}

                    <span className="sr-only">
                      {" "}
                      {item.changeType === "increase"
                        ? "Increased"
                        : "Decreased"}{" "}
                      by{" "}
                    </span>
                    {item.change}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
          <div className="my-3 justify-between gap-4 sm:flex">
            <div>
              <h5 className="text-xl font-semibold text-black dark:text-white">
                Visitors Analytics
              </h5>
            </div>
            <div className="relative z-20 inline-block">
              <select
                name=""
                id=""
                className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
              >
                <option value="" className="dark:bg-boxdark">
                  Monthly
                </option>
                <option value="dark:bg-boxdark">Yearly</option>
              </select>
              <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                <ChevronDownIcon className="w-4" />
              </span>
            </div>
          </div>
          <div className="mb-2">
            <ChartComponent />
            {/* <div
            id="apexchart"
            className="apexcharts-canvas apexchart apexcharts-theme-light relative user"
            style={{ width: "380px", height: "295.367px" }}
          ></div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
