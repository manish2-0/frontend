import { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Navbar from "./navbar.jsx";
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <div className="">
      <Navbar />

      <div className="overflow-hidden relative pt-16 md:pt-0 " id="home">
        <div
          className={`flex transition ease-out duration-40 animate-none`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s, index) => (
            <img key={index} src={s} alt={`slide-${index}`} />
          ))}
        </div>

        <div className="hidden md:flex absolute top-0 h-full w-full justify-between items-center  text-white px-4 md:px-10  md:text-3xl pt-10 animate-none">
          <button onClick={previousSlide}>
            <IoIosArrowBack className="shadow-xl text-white rounded-full h-16" />
          </button>
          <button onClick={nextSlide}>
            <IoIosArrowForward className="shadow-xl text-white rounded-full h-16" />
          </button>
        </div>

        <div className="absolute bottom-0 py-2 md:py-4 flex justify-center gap-3 w-full">
          {slides.map((_, i) => (
            <div
              onClick={() => setCurrent(i)}
              key={"circle" + i}
              className={`rounded-md h-2 w-3 md:w-10 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
