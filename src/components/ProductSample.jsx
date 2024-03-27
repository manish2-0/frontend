import React from "react";

const ProductSample = () => {
  const categories = [
    {
      id: 1,
      name: "Mobiles",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=400&hei=260&fmt=png-alpha&.v=1692971740071",
    },
    {
      id: 2,
      name: "Mac",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666",
    },
    {
      id: 3,
      name: "iPad",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437",
    },
    {
      id: 4,
      name: "Apple Watch",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=400&hei=260&fmt=png-alpha&.v=1693703814407",
    },
    {
      id: 5,
      name: "Air Pods",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885",
    },
  ];
  return (
    <div className=" bg-gradient-to-r  from-gray-200 to-gray-500  p-10">
      <div className="container mx-auto mt-5">
        <div className="block md:hidden text-gray-700 text-2xl font-bold">
          Store. The best way to sell the products you love.
        </div>
        <div className="hidden md:block text-gray-700 text-5xl font-bold">
          Store. The best way to sell the <br /> products you love.
        </div>
        <div className="mt-6">
          <div className="grid grid-cols-3 lg:grid-cols-5 items-center gap-4 md:gap-3 animate__animated animate__backInLeft">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="text-lg text-black font-bold">
                  {category.name}
                </div>
                <div>
                  <img
                    src={category.imageUrl}
                    alt="imagessss"
                    className=" p-4 hover:p-7 hover:duration-700 duration-700"
                    width={200}
                    height={130}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSample;
