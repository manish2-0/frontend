import React, { useState } from "react";
import { MapPinIcon } from "@heroicons/react/20/solid";

const Location = () => {
  const [selectedCinema, setSelectedCinema] = useState(0);

  const cinemaDetailsList = [
    {
      name: "Fun Republic",
      address: "3rd Floor, Neptune Magnet Mall Lal Bahadur Shastri Bhandup,",
      stateAndPin: "Maharashtra 400078",
    },
    {
      name: "Rassaz",
      address: "3rd Floor, Neptune Magnet Mall Lal Bahadur Shastri Bhandup,",
      stateAndPin: "Maharashtra 400078",
    },
    {
      name: "Armaan Mobile Sop",
      address: "3rd Floor, Neptune Magnet Mall Lal Bahadur Shastri Bhandup,",
      stateAndPin: "Maharashtra 400078",
    },
    {
      name: "Kingdom Mobile",
      address: "3rd Floor, Neptune Magnet Mall Lal Bahadur Shastri Bhandup,",
      stateAndPin: "Maharashtra 400078",
    },
  ];

  const handleLocationClick = (index) => {
    setSelectedCinema(index);
  };
  return (
    <div className="map">
      <div id="locations">
        <div className="bg-white text-indigo-800  text-3xl font-bold text-center pt-10 md:pt-20">
          Our Store Locations
        </div>
        <div className="container mx-auto px-3 bg-">
          <div className="flex flex-col md:flex-row md:justify-center md:py-10">
            <div className="md:basis-1/4 overflow-y-auto custom-scrollbar h-[33rem] bg-white">
              <div className="border border-gray-200 p-5 z-10 ">
                <div className={`custom-scrollbar`}>
                  {cinemaDetailsList.map((cinemaDetails, index) => (
                    <div
                      className={`mb-3 ${
                        selectedCinema === index ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      <div
                        key={index}
                        className={`flex items-center gap-x-5 text-indigo-800 font-bold lg:text-xl`}
                      >
                        <MapPinIcon className="w-5 h-5 text-indigo-800 hidden lg:block" />
                        {cinemaDetails.name}
                      </div>
                      <div className="font-normal text-sm lg:text-base text-indigo-800 lg:pl-10">
                        {cinemaDetails.address}
                        <div className="font-normal text-sm lg:text-base text-indigo-800">
                          {cinemaDetails.stateAndPin}
                        </div>
                        <button                                                                                                                                 
                          className={`bg-indigo-900 text-white p-2 lg:text-base font-bold my-2 rounded-md `}
                          onClick={() => handleLocationClick(index)}
                        >
                          Get Directions
                        </button>
                      </div>
                    </div>
                  ))}{" "}
                </div>+
              </div>
            </div>
            <div className="md:basis-3/4">
              <div className="border-4 border-gray-200">
                <iframe
                  title="Locations"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                  width="100%"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
