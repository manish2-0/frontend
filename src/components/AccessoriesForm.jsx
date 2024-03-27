import React from "react";
export function AccessoriesForm() {
  
  return (
    <div className="px-2 md:px-0">
        <fieldset>
          <legend className="text-sm font-semibold leading-6 text-gray-900">
            Phone's Accessories
          </legend>
          <p className="mt-1 text-sm leading-6 text-gray-600">
          What accessories will be included?
          </p>
          <div className="mt-6 space-y-6">
            <div className="flex items-center gap-x-3">
              <input
                id="ogbox"
                name="push-notifications"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="ogbox"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Original Box
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="ogheadset"
                name="push-notifications"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="ogheadset"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                New Original Headsets
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="power"
                name="push-notifications"
                type="checkbox"
                
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="power"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Powercable + Adapter
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="none"
                name="push-notifications"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor="none"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                None of the Above
              </label>
            </div>
          </div>
        </fieldset>
 
    </div>
  );
}
