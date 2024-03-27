import React, { useEffect, useState } from "react";
import Carousel from "../components/carousel.js";
import MultiForm from "../components/MultiForm.tsx";
import Sell from "../components/sell.jsx";
import Select from "../components/SelectDevice.jsx";
import Faqs from "../components/faqs.jsx";
import Reviews from "../components/reviews.jsx";
import Location from "../components/location.jsx";
import Loader from "../components/Loader";
import SelectDevice from "../components/SelectDevice.jsx";
import Footer from "../components/footer.jsx";
import { IoLogoWhatsapp } from "react-icons/io";
import ProductSample from "../components/ProductSample.jsx";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const User = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectClicked, setSelectClicked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!selectClicked) {
        setShowPopup(true);
        document.body.style.overflow = "auto";
      }
    }, 30000);

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "visible";
    };
  }, [selectClicked]);

  const handleSelectClick = () => {
    setSelectClicked(true);
    setShowPopup(false); // Disable popup when Select is clicked
    document.body.style.overflow = "visible"; // Re-enable scrolling on the body
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    document.body.style.overflow = "visible";
  };

  let slides = [
    "https://www.telstra.com.au/content/dam/tcom/library/cam-campaign/CAM-DCAEG57359-apple-iPhone15Pro-preorder-campaignEdgeDesktop-1920x500.png",
    "https://cms-images.mmst.eu/mxc6gd3algv5/1lcVq5YjKIMlWQaJefkapR/171d8eedcc5562f57811658a0a89658d/specialPage-header-desktop-1920x500-iphone-switcher.jpg?q=88&w=1920",
    "https://beta.sevenwonder.ae/upload/subcategory/Macbook-Oxwt-1.jpg",
    "https://core.co.za/cdn/shop/files/desktop_product_Image_Core_site_d2a8fa3c-63eb-4ee1-bcda-273c9dc78a0c_2000x.png?v=1649319873",
    "https://horizoncomputers.co.in/admin-assets/uploads/banner.1@3x.jpg",
  ];

  const phoneNumber = "919082218978"; // Replace with your WhatsApp number
  const message = "Hello! Hey would like to see your iPhone products"; // Replace with your predefined message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="project">
          <Carousel slides={slides} />
          <MultiForm />
          <Select onClick={handleSelectClick} />
          <Sell />
          {/* <Forms /> */}
          <Faqs />
          <Reviews />
          <Location />
          <Footer />
          <Link to={whatsappLink} target="_blank" rel="noopener noreferrer">
            <div className="fixed bottom-5 right-5">
              <IoLogoWhatsapp className="text-green-500 bg-white text-5xl cursor-pointer" />
            </div>
          </Link>
          {showPopup && (
            <div className="popup-modal">
              <div className="modal-content ">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity " />

                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[24rem] md:w-[40rem] lg:w-auto  md:p-8 border border-gray-300 shadow-md z-50 ">
                  <SelectDevice />
                  <button
                    className="absolute top-4 right-4 p-2 text-gray-500"
                    onClick={handleClosePopup}
                  >
                    <XMarkIcon className="w-8" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default User;
