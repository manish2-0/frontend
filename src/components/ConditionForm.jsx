// import React, { useState, useEffect } from "react";
// import api from "./api";
// export function ConditionForm({}) {
//   const [data1, setData1] = useState([]);
//   async function getCurrentValue() {
//     try {
//       const payload = {
//         current_value: 200,
//         step: "condition",
//         step_id: "pmeFxKvjY5fQB1OKlr82",
//         device_id: "MCaNDFVVD9TC1F4deAZv",
//         device_type: "mobile",
//       };

//       const response = await api.post(`/get-current-value`, payload);
//       setData1(response?.data);
//     } catch (error) {
//       console.error("Error fetching current value:", error);
//     }
//   }
//   useEffect(() => {
//     getCurrentValue();
//   }, []);
//   return (
//     <div className="px-2 md:px-0">
//       <fieldset>
//         <legend className="text-sm font-semibold leading-6 text-gray-900">
//           Device Condition
//           {data1.step}
//         </legend>
//         <p className="mt-1 text-sm leading-6 text-gray-600">
//           What is the condition of the phone?
//         </p>
//         <div className="mt-6 space-y-6">
//           <div className="flex items-center gap-x-3">
//             <input
//               id="brandnew"
//               name="push-tick"
//               type="radio"
//               required
//               autoFocus
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="brandnew"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Brand New
//               <p className="text-xs text-gray-400">
//                 Phone still in factory original packaging. Must come with the
//                 box and all accessories sealed/untouched.
//               </p>
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="flawless"
//               name="push-tick"
//               type="radio"
//               required
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="flawless"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Flawless
//               <p className="text-xs text-gray-400">
//                 Has absolutely no scratches, scuffs or other marks. Looks brand
//                 new.
//               </p>
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="good"
//               name="push-tick"
//               type="radio"
//               required
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="good"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Good
//               <p className="text-xs text-gray-400">
//                 Shows light to moderate signs of wear. Contains few light
//                 scratches and/or dents.
//               </p>
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="fair"
//               name="push-tick"
//               type="radio"
//               required
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="fair"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Fair
//               <p className="text-xs text-gray-400">
//                 Shows moderate to excessive signs of wear. Contains excessive
//                 scratching, major dents, and/or mild housing damage such as a
//                 slightly bent frame.
//               </p>
//             </label>
//           </div>
//           <div className="flex items-center gap-x-3">
//             <input
//               id="broken"
//               name="push-tick"
//               type="radio"
//               required
//               className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
//             />
//             <label
//               htmlFor="broken"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Broken
//               <p className="text-xs text-gray-400">
//                 Cracks (regardless of size) or broken parts on either screen or
//                 body of the item.
//               </p>
//             </label>
//           </div>
//         </div>
//       </fieldset>
//       <div className="mt-3 text-sm">
//         <span>The current value of the phone:</span>

//         <span>{data1.current_value}</span>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import api from "./api";

export function ConditionForm({ mainState, setMainState }) {
  const [conditions1, setConditions] = useState([]);
  const [selectedCondition, setSelectedCondition] = useState([]);
  // const [currentValue, setCurrentValue] = useState("");
  const [conditionpriceData, setPriceData] = useState("");
  async function getCurrentValue() {
    try {
      const payload = {
        current_value: 500,
        step: "condition",
        step_id: selectedCondition,
        device_id: "MCaNDFVVD9TC1F4deAZv",
        device_type: "mobile",
      };

      const response = await api.post(`/get-current-value`, payload);
      // setCurrentValue(response?.data?.current_value);
      setPriceData(response.data.data);
      setMainState({
        ...mainState,
        // conditionId: conditionId,
        amount_z: response.data.data.updated_price,
        selected_condition: selectedCondition,
        // condition1: condition1
      });
    } catch (error) {
      console.error("Error fetching current value:", error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setMainState({ ...mainState, loader: true });
        const response = await api.get(
          `/get-device/mobile/MCaNDFVVD9TC1F4deAZv`
        );
        setConditions(response.data.data.conditions);
      } catch (error) {
        console.error("Error fetching conditions:", error);
      } finally {
        setMainState({ ...mainState, loader: false });
      }
    }
    fetchData();
    console.log(mainState, "second test");
  }, []);

  useEffect(() => {
    if (selectedCondition) {
      getCurrentValue(selectedCondition);
    }
  }, [selectedCondition]);

  const handleConditionChange = (conditionId, condition1) => {
    console.log(conditionpriceData, "eededeeded")
    setMainState({
      ...mainState,
      conditionId: conditionId,
      amount: conditionpriceData.updated_price,
      condition1: condition1
    });
    setSelectedCondition(conditionId);
  };

  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Device Condition
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          What is the condition of the phone?
        </p>
        <div className="mt-6 space-y-6">
          {conditions1.map((condition1) => (
            <div
              key={condition1.condition_id}
              className="flex items-center gap-x-3"
            >
              <input
                id={condition1.condition_id}
                name="condition"
                type="radio"
                required
                autoFocus
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={() => handleConditionChange(condition1.condition_id, condition1, condition1.condition_id)}
              />
              <label
                htmlFor={condition1.condition_id}
                className="block text-left text-sm font-medium leading-6 text-gray-900"
              >
                {condition1.condition_title}
                <p className="text-xs text-gray-400">
                  {condition1.condition_description}
                </p>
              </label>
            </div>
          ))}
        </div>
      </fieldset>
      <div className="mt-3 text-sm">
        <span>The current value of the phone:</span>

        <span> $ {conditionpriceData && conditionpriceData.updated_price}</span>
      </div>
    </div>
  );
}
