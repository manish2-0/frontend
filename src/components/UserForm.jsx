import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import api from "./api";
import { PriceForm } from "./PriceForm";
export function UserForm({ mainState, setMainState }) {
  const [submitted, setSubmitted] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (event) => {
      setMainState({ ...mainState, loader: true });
      try {
        let a = formik.values;
        let merged = { ...a, ...mainState };
        const response = await api.post("/submit-form", merged);
        console.log("Form submitted successfully", response.data);
        setSubmitted(true);
      } catch (error) {
        console.error("Error submitting form", error.message);
      }
      finally {
        setMainState({ ...mainState, loader: false });
      }
    },
  });

  useEffect(() => {
    console.log(mainState, "states at urself");
  }, []);

  // Render PriceForm if submitted state is true
  if (submitted) {
    return <PriceForm />;
  }

  // const handleSubmit = async (event) => {
  //   try {
  //     const response = await axios.post("/submit-form", formik.values);
  //     console.log("Form submitted successfully:", response.data);
  //     event.preventDefault();
  //   } catch (error) {
  //     console.error("Error submitting form:", error.message);
  //     event.preventDefault();
  //   }
  // };

  return (
    <div className="px-2 md:px-0">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          User Form Details
        </legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Write about yourself
        </p>
        <form onSubmit={formik.handleSubmit} className="mt-6 space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter a name"
              required
              autoFocus
              className={`${formik.errors.name && formik.touched.name
                ? "border-red-500"
                : ""
                } placeholder:text-sm placeholder:font-normal w-full py-1.5 border-gray-100 text-black text-sm font-normal outline-none ring-1 focus:ring-indigo-600 border rounded px-2`}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter an email address"
              required
              className={`${formik.errors.email && formik.touched.email
                ? "border-red-500"
                : ""
                } placeholder:text-sm placeholder:font-normal w-full py-1.5 border-gray-100 text-black text-sm font-normal outline-none ring-1 focus:ring-indigo-600 border rounded px-2`}
            />
            {formik.errors.email && formik.touched.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900 text-left"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              inputMode="numeric"
              maxLength={10}
              placeholder="Enter a phone number"
              required
              className={`${formik.errors.phone && formik.touched.phone
                ? "border-red-500"
                : ""
                } placeholder:text-sm placeholder:font-normal w-full bg-white border-gray-100 text-black text-sm font-normal outline-none py-1.5 ring-1 focus:ring-indigo-600 border rounded px-2`}
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
            )}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={formik.handleSubmit}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm  font-medium rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300"
            >
              Submit
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
}
