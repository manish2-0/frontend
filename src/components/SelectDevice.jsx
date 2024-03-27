// SelectDevice.js
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import "animate.css";
import axios from "axios";
import api from "./api.js";
// import mobileData from "../../../backend/controllers/mobileData_controller"
const SelectDevice = ({ onClick }) => {
  const [showiPhoneModal, setShowiPhoneModal] = useState(false);
  const [showiPadModal, setShowiPadModal] = useState(false);
  const [showAppleWatchModal, setShowAppleWatchModal] = useState(false);
  const [data, setData] = useState([]);
  async function handleClick(val) {
    try {
      await api.get(`/get-all-devices/${val}`).then((response) => {
        setData(response?.data?.data);
        openiPhoneModal();
      });
    } catch (err) {}
  }
  const openiPhoneModal = () => setShowiPhoneModal(true);
  const closeiPhoneModal = () => setShowiPhoneModal(false);

  const openiPadModal = () => setShowiPadModal(true);
  const closeiPadModal = () => setShowiPadModal(false);

  const openAppleWatchModal = () => setShowAppleWatchModal(true);
  const closeAppleWatchModal = () => setShowAppleWatchModal(false);

  const iPhoneImage = [
    "/product/phone_1.jpg",
    "/product/phone_1.jpg",
    "/product/phone_1.jpg",
    "/product/phone_1.jpg",
    "/product/phone_1.jpg",
    "/product/phone_1.jpg",
  ];
  const iPadImage = [
    "/product/ipad_1.jpg",
    "/product/ipad_1.jpg",
    "/product/ipad_1.jpg",
    "/product/ipad_1.jpg",
    "/product/ipad_1.jpg",
    "/product/ipad_1.jpg",
  ];
  const appleWatchImage = [
    "/product/iwatch_1.jpg",
    "/product/iwatch_1.jpg",
    "/product/iwatch_1.jpg",
    "/product/iwatch_1.jpg",
    "/product/iwatch_1.jpg",
    "/product/iwatch_1.jpg",
  ];

  const iPadTitles = [
    "iPad Pro (12.9-inch, 5th generation)",
    "iPad Air (4th generation)",
    "iPad (9th generation)",
    "iPad Pro (12.9-inch, 5th generation)",
    "iPad Air (4th generation)",
    "iPad (9th generation)",
  ];
  const iPhoneTitles = [
    "iPhone 14 Pro Max",
    "iPhone 13 Pro Max",
    "iPhone 11 Pro Max",
    "iPhone 14 Pro Max",
    "iPhone 13 Pro Max",
    "iPhone 11 Pro Max",
  ];
  const appleWatchTitles = [
    "Apple Watch Series 7",
    "Apple Watch SE",
    "Apple Watch Series 6",
    "Apple Watch Series 7",
    "Apple Watch SE",
    "Apple Watch Series 6",
  ];

  const iPhoneSizes = [
    "Variant: 128GB, 256GB, 512GB",
    "Variant: 64GB, 128GB, 256GB",
    "Variant: 64GB, 128GB, 256GB",
    "Variant: 128GB, 256GB, 512GB",
    "Variant: 64GB, 128GB, 256GB",
    "Variant: 64GB, 128GB, 256GB",
  ];
  const iPadSizes = [
    "Variant: 128GB, 256GB, 512GB, 1TB",
    "Variant: 64GB, 256GB",
    "Variant: 64GB, 256GB",
    "Variant: 128GB, 256GB, 512GB, 1TB",
    "Variant: 64GB, 256GB",
    "Variant: 64GB, 256GB",
  ];
  const appleWatchSizes = [
    "Variant: Aluminum, Stainless Steel, Titanium Size: 41mm, 45mm",
    "Variant: Aluminum Size: 40mm, 44mm",
    "Variant: Aluminum, Stainless Steel, Titanium Size: 40mm, 44mm",
    "Variant: Aluminum, Stainless Steel, Titanium Size: 41mm, 45mm",
    "Variant: Aluminum Size: 40mm, 44mm",
    "Variant: Aluminum, Stainless Steel, Titanium Size: 40mm, 44mm",
  ];

  return (
    <div className="my-10" onClick={onClick}>
      <div className="container mx-auto">
        <div
          className="text-blue-800 font-bold lg:text-[40px] md:text-[25px] text-[23px]
          text-center mb-10"
        >
          SELECT A PRODUCT
        </div>
        <div className="grid grid-cols-3 text-center font-bold text-2xl ">
          <div onClick={() => handleClick("mobile")} className="cursor-pointer">
            iPhone
            <img src="/product/phone_1.jpg" alt="iPhone" className="" />
          </div>
          <div onClick={() => handleClick("laptop")} className="cursor-pointer">
            Laptop
            <img src="/product/ipad_1.jpg" alt="Laptop" className="" />
          </div>
          <div onClick={() => handleClick("watch")} className="cursor-pointer">
            Watch
            <img src="/product/iwatch_1.jpg" alt="Watch" />
          </div>

          <Modal
            product="PRODUCTS"
            showModal={showiPhoneModal}
            closeModal={closeiPhoneModal}
            placeholder="Search an iPhone ..."
            images={iPhoneImage}
            // titles={iPhoneTitles}
            titles={data}
            sizes={iPhoneSizes}
            // sizes={data}
          />

          {/* <Modal
            product="iPad"
            showModal={showiPadModal}
            closeModal={closeiPadModal}
            placeholder="Search an iPad ..."
            images={iPadImage}
            titles={iPadTitles}
            sizes={iPadSizes}
          />

          <Modal
            product="Apple Watch"
            showModal={showAppleWatchModal}
            closeModal={closeAppleWatchModal}
            placeholder="Search an Apple Watch ..."
            images={appleWatchImage}
            titles={appleWatchTitles}
            sizes={appleWatchSizes}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SelectDevice;
