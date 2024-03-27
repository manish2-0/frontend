import React from "react";

const reviews = () => {
  return (
    <div className="my-5" id="reviews">
      <div className="container mx-auto px-3">
        <div className="text-indigo-800 text-3xl font-bold text-center pt-10 md:pt-20">
          Reviews
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 py-10">
          <div>
            <div className="flex justify-center rounded-md border shadow-xl p-5">
              <div>
                <div className="flex justify-center">
                  <img
                    src="https://source.unsplash.com/A6JxK37IlPo"
                    className="rounded-full w-16 h-16  border border-black"
                    alt=""
                  />
                </div>

                <div className="flex gap-x-1 py-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#5D5DFF"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <div className="font-bold">4.5</div>
                </div>
                <div className="text-xs text-gray-600 font-semibold text-center">
                  Gaurav Singh
                </div>
                <div className="text-sm md:text-base text-center text-gray-600 ">
                  Awesome website and funnel for your business
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex   justify-center rounded-md  border  shadow-xl    p-5">
              <div>
                <div className="flex justify-center">
                  <img
                    src="https://source.unsplash.com/A6JxK37IlPo"
                    alt=""
                    className="rounded-full w-16 h-16  border border-black"
                  />
                </div>

                <div className="flex gap-x-1 py-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#5D5DFF"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <div className="font-bold">4.5</div>
                </div>
                <div className="text-xs text-gray-600 font-semibold text-center">
                  Gaurav Singh
                </div>
                <div className="text-sm md:text-base text-center text-gray-600 ">
                  Awesome website and funnel for your business
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex   justify-center rounded-md  border  shadow-xl    p-5">
              <div>
                <div className="flex justify-center">
                  <img
                    src="https://source.unsplash.com/A6JxK37IlPo"
                    alt=""
                    className="rounded-full w-16 h-16  border border-black"
                  />
                </div>

                <div className="flex gap-x-1 py-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#5D5DFF"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                    />
                  </svg>
                  <div className="font-bold">4.5</div>
                </div>
                <div className="text-xs text-gray-600 font-semibold text-center">
                  Gaurav Singh
                </div>
                <div className="text-sm md:text-base text-center text-gray-600 ">
                  Awesome website and funnel for your business
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default reviews;
