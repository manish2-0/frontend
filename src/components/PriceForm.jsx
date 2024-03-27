// import React, { useState, useEffect } from "react";
// import AppointmentModal from "./AppointmentModal";
// import api from "./api";

// export function PriceForm() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPrice, setSelectedCondition] = useState([]);
//   const [priceData, setPriceData] = useState("");

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   async function getCurrentValue() {
//     try {
//       const response = await api.post(`/get-current-value`);

//       setPriceData(response.data);
//     } catch (error) {
//       console.error("Error fetching current value:", error);
//     }
//   }

//   useEffect(() => {
//     if (selectedPrice) {
//       getCurrentValue(selectedPrice);
//     }
//   }, [selectedPrice]);

//   return (
//     <div className="px-2 md:px-0">
//       <fieldset>
//         <legend className="text-sm font-semibold leading-6 text-gray-900">
//           Phone Price
//         </legend>
//         <p className="mt-1 text-sm leading-6 text-gray-600"></p>
//         <div className="mt-6 space-y-6">
//           <div className="flex justify-center items-center font-medium gap-x-5 text-gray-500 text-center">
//             <div className="font-bold">Your device is valued at :</div>
//           </div>

//           <div className="text-center text-3xl font-extrabold">
//             <span> $ {priceData && priceData.updated_price}</span>
//           </div>

//           <button
//             onClick={openModal}
//             className="bg-indigo-700 text-white p-2 rounded-md"
//           >
//             Create an appointment
//           </button>
//           {isModalOpen && <AppointmentModal onClose={closeModal} />}
//         </div>
//       </fieldset>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import AppointmentModal from "./AppointmentModal";
import api from "./api";

export function PriceForm({ mainState, setMainState }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedPrice, setUpdatedPrice] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  async function getCurrentValue() {
    try {
      const response = await api.post(`/get-current-value`);
      setUpdatedPrice(response);
    } catch (error) {
      console.error("Error fetching current value:", error);
    }
  }

  useEffect(() => {
    getCurrentValue();
  }, []);

  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Phone Price
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600"></p>
        <div className="mt-6 space-y-6">
          <div className="flex justify-center items-center font-medium gap-x-5 text-gray-500 text-center">
            <div className="font-bold">Your device is valued at :</div>
          </div>

          <div className="text-center text-3xl font-extrabold">
            <span>${updatedPrice && updatedPrice.updated_price}</span>
          </div>

          <button
            onClick={openModal}
            className="bg-indigo-700 text-white p-2 rounded-md"
          >
            Create an appointment
          </button>
          {isModalOpen && <AppointmentModal onClose={closeModal} />}
        </div>
      </fieldset>
    </div>
  );
}
