import React, { useEffect, useState } from "react";
import api from "./api.js";

export function CarrierForm({ mainState, setMainState }) {
  const [carriers, setCarriers] = useState([]);
  const [selectedCarrier, setSelectedCarrier] = useState();
  // const [currentValue, setCurrentValue] = useState("");
  const [carrierpriceData, setPriceData] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/get-all-carriers`);
        setCarriers(response.data.data);
      } catch (error) {
        console.error("Error fetching carriers:", error);
      } finally {
        setMainState({ ...mainState, loader: false });
      }
    }
    fetchData();
    // console.log(mainState, "first check")
  }, []);

  useEffect(() => {
    async function getCurrentValue(carrierId, carrierName) {
      setMainState({ ...mainState, loader: true });
      try {
        const payload = {
          current_value: 500,
          step: "carrier",
          step_id: carrierId,
          device_id: "MCaNDFVVD9TC1F4deAZv",
          device_type: "mobile",
        };
        const response = await api.post(`/get-current-value`, payload);
        // setCurrentValue(response.data.current_value);
        setPriceData(response.data.data);
        // setMainState({ updated_price: response.data.data.updated_price });
        setMainState({
          ...mainState,
          loader: false,
          updated_price: response.data.data.updated_price,
          carrier_id: carrierId,
          carrier_name: carrierName,
        });
      } catch (error) {
        console.error("Error fetching current value:", error);
      }
    }
    if (selectedCarrier) {
      getCurrentValue(
        selectedCarrier?.carrier_id,
        selectedCarrier?.carrier_name
      );
    }
  }, [selectedCarrier]);

  const handleCarrierChange = (carrier) => {
    // setMainState({ ...mainState, carrierId: carrierId });
    console.log(carrierpriceData, ">>>>>");
    setSelectedCarrier(carrier);
  };

  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          Phone's Carrier
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Please select the phone's carrier.
        </p>
        <div className="mt-6 space-y-6">
          {carriers.map((carrier) => (
            <div key={carrier.carrier_id} className="flex items-center gap-x-3">
              <input
                id={carrier.carrier_id}
                name="carrier"
                type="radio"
                required
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                onChange={() => handleCarrierChange(carrier)}
              />
              <label
                htmlFor={carrier.carrier_id}
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {carrier.carrier_name}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-3 text-sm">
          <span>The current value of the phone:</span>

          <span> $ {carrierpriceData && carrierpriceData.updated_price}</span>
        </div>
        {/* <div className="mt-3 text-sm">
          <span>Previous Price:</span>
          <span>{carrierpriceData && carrierpriceData.previous_price}</span>
        </div>
        <div className="mt-3 text-sm">
          <span>Amount Deducted:</span>
          <span>{carrierpriceData && carrierpriceData.amount_deducted}</span>
        </div> */}
      </fieldset>
    </div>
  );
}
