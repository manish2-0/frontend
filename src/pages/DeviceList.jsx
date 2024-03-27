import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
const iPhoneData = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    inStock: true,

    imageUrl:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071",
  },
  {
    id: 2,
    name: "iPhone 14 Pro Max",
    inStock: false,

    imageUrl:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071",
  },
  {
    id: 3,
    name: "iPhone 13 Pro Max",
    inStock: true,
    imageUrl:
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071",
  },
];
const DeviceList = () => {
  const [stockStatus, setStockStatus] = useState(true);
  const [selectedSize, setSelectedSize] = useState("xs");
  const [selectedModel, setSelectedModel] = useState(null);

  const handleModelChange = (id) => {
    setSelectedModel(id);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const getPriceVarient = (size) => {
    switch (size) {
      case "xs":
        return 70.0;
      case "s":
        return 100.0;
      case "m":
        return 140.0;
      case "l":
        return 200.0;
      case "xl":
        return 290.0;
      default:
        return 40.0;
    }
  };
  const handleStockToggle = (index) => {
    const updatediPhoneData = [...iPhoneData];
    updatediPhoneData[index].inStock = !updatediPhoneData[index].inStock;
    setStockStatus(updatediPhoneData);
  };

  const currentPrice = getPriceVarient(selectedSize);

  return (
    <div>
      <Sidebar />
      <main className="pl-10 lg:pl-80 px-4 mt-10">
        <div className="text-4xl font-medium">Products List</div>
        <div className="grid  lg:grid-cols-2 gap-4 lg:gap-10 mt-10 md:mt-32">
          {iPhoneData.map((iphone, index) => (
            <div>
              <div className="flex " key={iphone.id}>
                <div className="flex-none w-52 relative">
                  <img
                    src={iphone.imageUrl}
                    alt=""
                    className="absolute w-full h-full object-contain rounded-lg"
                    loading="lazy"
                  />
                </div>
                <form className="flex-wrap">
                  <div className="flex flex-wrap items-baseline">
                    <h1 className="iphone w-full flex-none text-2xl leading-none text-slate-900">
                      {iphone.name}
                    </h1>
                    <div className="price flex-auto text-lg font-medium text-slate-500">
                      ${currentPrice.toFixed(2)}
                    </div>
                    <div
                      className={`text-xs leading-6 font-medium uppercase cursor-pointer ${
                        iphone.inStock ? "text-green-500" : "text-red-500"
                      }`}
                      onClick={() => handleStockToggle(index)}
                    >
                      {iphone.inStock ? "In stock" : "Out of stock"}
                    </div>
                  </div>
                  <div className="flex items-baseline mt-3 pb-6 border-b border-slate-200">
                    <div className="space-x-5 flex text-sm font-medium ">
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                          value="xs"
                          checked={selectedSize === "xs"}
                          onChange={() => handleSizeChange("xs")}
                        />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                          16GB
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                          value="s"
                          checked={selectedSize === "s"}
                          onChange={() => handleSizeChange("s")}
                        />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                          32GB
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                          value="m"
                          checked={selectedSize === "m"}
                          onChange={() => handleSizeChange("m")}
                        />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                          64GB
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                          value="l"
                          checked={selectedSize === "l"}
                          onChange={() => handleSizeChange("l")}
                        />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                          128GB
                        </div>
                      </label>
                      <label>
                        <input
                          className="sr-only peer"
                          name="size"
                          type="radio"
                          value="xl"
                          checked={selectedSize === "xl"}
                          onChange={() => handleSizeChange("xl")}
                        />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-slate-500 peer-checked:bg-slate-100 peer-checked:text-slate-900">
                          256GB
                        </div>
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DeviceList;
