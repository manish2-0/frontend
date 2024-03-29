// import React, { useEffect, useState } from "react";
// import api from "./api";
// export function StorageForm() {
//   const [data, setData] = useState([]);
//   async function getCurrentValue() {
//     try {
//       const payload = {
//         current_value: 200,
//         step: "storage",
//         step_id: "pmeFxKvjY5fQB1OKlr82",
//         device_id: "MCaNDFVVD9TC1F4deAZv",
//         device_type: "mobile",
//       };

//       const response = await api.post(`/get-current-value`, payload);
//       setData(response?.data.data);
//     } catch (error) {
//       console.error("Error fetching current value:", error);
//     }
//   }
//   useEffect(() => {
//     getCurrentValue();
//   }, []);
//   return (
//     <div className="px-2 md:px-0">
//       {data ? (
//         <fieldset>
//           <legend className="text-sm font-semibold leading-6 text-gray-900">
//             Device Storage
//             {data.step}
//           </legend>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             What is the phone's storage capacity?
//           </p>
//           <div className="mt-6 space-y-6">
//             <div className="flex items-center gap-x-3">
//               <input
//                 id="push-everything"
//                 name="push-notifications"
//                 type="radio"
//                 required
//                 autoFocus
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="push-everything"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 256GB
//               </label>
//             </div>
//             <div className="flex items-center gap-x-3">
//               <input
//                 id="push-email"
//                 name="push-notifications"
//                 type="radio"
//                 required
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="push-email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 512GB
//               </label>
//             </div>
//             <div className="flex items-center gap-x-3">
//               <input
//                 id="push-nothing"
//                 name="push-notifications"
//                 type="radio"
//                 required
//                 className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//               />
//               <label
//                 htmlFor="push-nothing"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 1TB
//               </label>
//             </div>
//           </div>
//           <div className="mt-3 text-sm">
//             <span>The current value of the phone:</span>

//             <span>{data.current_value}</span>
//           </div>
//         </fieldset>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import api from "./api";

export function StorageForm({ mainState, setMainState }) {
  const [storageOptions, setStorageOptions] = useState([]);
  const [selectedStorage, setSelectedStorage] = useState([]);
  // const [currentValue, setCurrentValue] = useState(null);
  const [storagepriceData, setstoragepriceData] = useState("");

  const [val, setval] = useState(mainState.data3_getval.updated_price);

  async function getCurrentValue() {
    try {
      setMainState({ ...mainState, loader: true });
      const payload = {
        current_value: mainState.data3_getval.updated_price,
        step: "storages",
        step_id: selectedStorage,
        device_id: mainState.data1.sendobjj.device_id,
        device_type: mainState.data1.sendobjj.device_type
      };

      const response = await api.post(`/get-current-value`, payload);
      // setCurrentValue(response?.data?.current_value);
      if (response.data.status) {
        setMainState({ ...mainState, loader: false, data4: { ...mainState.data4, amount_from_storage: response.data.data } });
        setval(response.data.data.updated_price)
        setstoragepriceData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching current value:", error);
    }
    finally {
      // setMainState({ ...mainState, loader: false, data4: { ...mainState.data4, amount: response.data.data } });
    }
  }

  useEffect(() => {
    async function fetchData() {
      setMainState({ ...mainState, loader: true });
      try {
        const response = await api.get(
          `/get-device/mobile/${mainState.data1.sendobjj.device_id}`
        );
        setStorageOptions(response.data.data.storages);
      } catch (error) {
        console.error("Error fetching storage options:", error);
      }
      finally {
        setMainState({ ...mainState, loader: false });
      }
    }
    fetchData();
    console.log(mainState, "at storage");
  }, []);

  useEffect(() => {
    if (selectedStorage) {
      getCurrentValue(selectedStorage);
    }
  }, [selectedStorage]);

  const handleStorageChange = (storageId, storage1) => {
    setMainState({
      ...mainState,
      data4: {
        storageId: storageId,
        // amount: storagepriceData,
        storage: storage1
      }
    });
    setSelectedStorage(storageId);
  };

  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Device Storage
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          What is the phone's storage capacity?
        </p>
        <div className="mt-6 space-y-6">
          {storageOptions.map((storage1) => (
            <div
              key={storage1.storage_id}
              className="flex items-center gap-x-3"
            >
              <input
                id={storage1.storage_id}
                name="storage"
                type="radio"
                required
                autoFocus
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={() => handleStorageChange(storage1.storage_id, storage1)}
              />
              <label
                htmlFor={storage1.storage_id}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {storage1.storage_value}
                {storage1.storage_unit}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-3 text-sm">
          <span>The current value of the phone:</span>
          <span> ${val}</span>
        </div>
      </fieldset>
    </div>
  );
}
